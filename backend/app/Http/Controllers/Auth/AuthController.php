<?php

namespace App\Http\Controllers\Auth;
use Mail;
use App\Http\Controllers\Controller;
use App\Admin;
use App\User;
use Auth;
use Hash;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use App\Http\Validators\RequestValidators;
use Illuminate\Validation\ValidationException;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\QueryBuilder\QueryBuilder;
use Validator;
use DB;
use App\Constants;
use Laravel\Passport\Client;
use Str;

use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use File;
use Response;
use App\PasswordReset;

// TODO: open ports in servers
use Illuminate\Support\Facades\Http;

/**
 * @group Authentication, that extends passport
 *
 * APIs for managing user
 */
class AuthController extends Controller
{


    /**
     * Display auth User.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
   

        $user_roles = $user->roles;
        $roles = [];
        $acl = collect();
        foreach ($user_roles as $key => $role) {
            $permObj = collect();
            foreach ($role->permissions as $key => $permission) {
                $permObj->put($permission->name , "all");
            }
            $acl->put($role->name , $permObj);
            $roles[] = $role->name;
        }
 
        $user->roles_names = $roles;
        $user->acl = $acl;
        
        if($user){
            return response()->json($user, 200);
        }

        return response()->json('No esta autenticado.', 403);
    }
      /**
     * Get Auth User Files
     *
     * @param Instance Request instance
     *
     * @return JSON user details and auth credentials
     */
    public function usersAuthFilesGuard($path, $email, $file)
    { //Files from app/uploads/plataforma/(path)
        /**
         *Make sure the @param $file has a dot
        * Then check if the user is authenticated. If true serve else
        */
        if (strpos($file, '.') !== false) {
            $user = Auth::user();
            if ( $user) {
                /** Serve the file for the Auth User*/
                return $this->returnFile($path, $email, $file);
            } else {
                /**Logic to check if the request is from file owner**/
                return $this->returnFile($path, $email, $file);
            }
        } else {
            return response()->json('Error', 500);

        }
    }
    public function returnFile($path, $email, $file)
    {
        //This method will look for the file and get it from drive

        $path = storage_path($path.'/'.$email.'/'. $file);
        try {
            $file = File::get($path);
            $type = File::mimeType($path);
            $response = Response::make($file, 200);
            $response->header("Content-Type", $type);
            return $response;
        } catch (FileNotFoundException $exception) {
            abort(404);
        }
    }
    public function register(Request $request)
    {
       
       $this->validate($request, [
            'email'      => 'required|email|unique:users',
            'password'   => 'required|min:8|confirmed',
           // 'terms'   => 'required',
        ]);
        
        DB::beginTransaction();
        try {
            $verificationCode = Str::random(40);

          
            $user = new User();
            $user->email = trim(strtolower($request->email));
            $user->base_role = Constants::ROLES['GENERAL'];
            $user->password = bcrypt($request->password);
            $user->email_verification_code = $verificationCode;
            $user->save();
            DB::commit();
            
            //asignar un rol por defecto para el nuevo usuario
            $user->assignRole(Constants::ROLES['GENERAL']);
            /* TODO: if we want user to log int afer register imediatly
            //Check Client App authorization
            //TODO: create endpoint for apps to create client id            
            $client = Client::where('password_client', 1)->first();        
            $request->request->add([
                'grant_type'    => 'password',
                'client_id'     => $client->id,
                'client_secret' => $client->secret,
                'username'      => $user['email'],
                'password'      => $user['password'],
                'scope'         => '',
            ]);
            $token = Request::create(
                'oauth/token',
                'POST'
            );
             // Fire off the internal request. 
            $token = Request::create(
                'oauth/token',
                'POST'
            );
            return \Route::dispatch($token);
          //  $response = Route::dispatch( $token);
            */
        
            $data = array(
                'verificationCode'=>$verificationCode,
                'password'=> $request->password,
                'email'=>$user->email
            );

            //Enviar a endpoint 

            // TODO: open server ports to avoid this.
            // http://orienta-t.lcrojano.com/api/emails/register
            $response = Http::post('http://orienta-t.lcrojano.com/api/emails/register', [
                'verificationCode'=>$verificationCode,
                'password'=> $request->password,
                'email'=>$user->email,
                'user' => $user
            ]);
            $user->response=$response;

/*
            Mail::send('emails.userverification', $data, function ($m) use ($user) {
                $m->from('obsriomagdalena@uninorte.edu.co', 'Observatorio del Río Magdalena ');
                $m->to($user->email)->subject('Confirmación de Registro en Plataforma OBS');
            });
*/
            
            return response()->json($user, 200);
        }catch (\Exception $e) {
            DB::rollback();
            throw $e;
            return response()->json($e->getErrors(),500);
        } catch (\Throwable $e) {
            DB::rollback();
            throw $e;
            return response()->json($e->getErrors(),500);
        }
    }
        
    //TODO: add logout from all devices api, with password/OTP confirmation
    //Logout
    

    public function logout(Request $request)
    {
        DB::table('oauth_access_tokens')
        ->where('user_id', $request->user()->id)
        ->update([
            'revoked' => true
        ]);
        
        return response()->json('Success logout '.$request->user()->id, 200);
    }


    public function verifyUserEmail($verificationCode)
    {
        $user = User::whereEmailVerificationCode($verificationCode)->first();

        if (!$user) {
            return redirect(env('APP_URL').'/#/auth/userverification/failed');
        }

        $user->email_verified_at = Carbon::now();
        $user->status = 'Active';
        $user->save();

        return redirect(env('APP_URL').'/#/auth/userverification/success');
    }

    public function sendResetLinkEmail(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email',
        ]);

        //invalidate old tokens
        PasswordReset::whereEmail($request->email)->delete();

        $email = $request->email;
        $reset = PasswordReset::create([
            'email' => $email,
            'token' =>  Str::random(10),
        ]);

        $token = $reset->token;

        // TODO: open server ports to avoid this.
        $response = Http::post('http://orienta-t.lcrojano.com/api/emails/reset', [
            'email' =>  $email,
            'token' => $token,
        ]);
        $res["json  "] =       $response->json();
        $res["response"]=$response->ok();        
/*  
        Mail::send('emails.reset_link', compact('email', 'token'), function ($mail) use ($email) {
            $mail->to($email)
            ->from('noreply@example.com')
            ->subject('Password reset link');
        });*/

        return response()->json($res,200);
    }
    public function reset(Request $request)
    {
        $this->validate($request, [
            'reset_password_token'    => "required|exists:password_resets,token",
            'password' => 'required|min:6|required_with:confirmPassword',
            'confirmPassword' => 'min:6|same:password'
        ]);

        //get user from reset_password_token
        $email = PasswordReset::whereToken($request->reset_password_token)->firstOrFail()->email;  
        $user = User::whereEmail($email)->firstOrFail();
        $user->password = bcrypt($request->password);
        $user->save();

        //delete pending resets
        PasswordReset::whereEmail( $email)->delete();

        return response()->json("COntraseñas Actualizadas Correctamente", 200);
    }
    
}
