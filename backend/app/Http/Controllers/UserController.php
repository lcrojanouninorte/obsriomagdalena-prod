<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Constants;
use Auth;
use DB;
use Str;
use App\General;
use App\Admin;
use App\Staff;
use Mail;
use Spatie\Permission\Models\Role;
class UserController extends Controller
{
    
    public function __construct()
    {
        /*$this->middleware('auth');
        $this->middleware('permission:edit articles')->only('testmiddleware');
        $this->middleware('role:admin|writer')->only('testmiddleware');*/

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return User::paginate(15);

    }
    
        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    public function store(Request $request)
    {
        $auth_user = Auth::user();
        if(isset($request->id)){
            $this->validate($request, [
                'email'      => 'required|email',
                'roles'   => 'required',
                'base_role'   => 'required',
                'profile'   => 'required',
   
            ]);
            $user = User::where("id", $request->id)->first();
        }else{
            $this->validate($request, [
                'email'      => 'required|email|unique:users',
                'password'   => 'required|min:8|confirmed',
                'roles'   => 'required',
                'base_role'   => 'required',
                'profile'   => 'required',
                
                ]);
            $user = new User();
            $user->password = bcrypt($request->password);
        }
       

            DB::beginTransaction();
         try {
             $verificationCode = Str::random(40);
             //TODO: verify if user can edit this especific type of user
            
             $user->email = trim(strtolower($request->email));
             $user->base_role = $request->base_role;
            
             $user->email_verification_code = $verificationCode;
             $user->status = 'Active';
             $user->last_updated_by = $auth_user->id;
             $user->save();
           
             //User Profile / Avatar
             $type = 'App\\'.$user->base_role;
  
           //TODO: if user change profile type, delete from the last
            //TODO. if user change base_role    
           
            $profile = $user->profile;
            $profile->user_id = $user->id;
            $profile->first_name =  $request->profile["first_name"];
            $profile->last_name = $request->profile["last_name"];

            

             if ($files = $request->file('file')) {
                $file = $request->file;
                Storage::disk('plataforma')->put('/website/'.$user->email.'/'. $file, $data);
                $profile->avatar = env('APP_URL').'/website/'.$user->email.'/'. $file;                       
            }else{
                $profile->avatar =$request->profile['avatar'];
             }

             $profile->save();
             $user->profile = $profile;
         

            
             DB::commit();
            
             //Asign user Roles
             if(!$user->isSuperAdmin()){
                    //add base role, to roles
                $roles = $request->roles;
                if(!array_search($user->base_role,$roles)){
                    $roles[] = $user->base_role;
                } 
                 $user->syncRoles($roles);
             }
             
             //Send Email
             if($request->profile["configs"]["send_mail"]==true){
                 //TODO: create options array
                 $data = array(
                     'verificationCode'=>$user->email_verification_code,
                     'password'=> $user->password,
                     'email'=>$user->email
                 );
     
                 Mail::send('emails.userverification', $data, function ($m) use ($user) {
                     $m->from('obsriomagdalena@uninorte.edu.co', 'Observatorio del Río Magdalena ');
                     $m->to($user->email)->subject('Confirmación de Registro en Plataforma OBS');
                 });
             }

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
         DB::rollback();
    }

 
 

    public function show_my_roles()
    {
//        $user = auth()->user();
//        or
        $user = \App\User::find(1);
        $roles = $user->getRoleNames();

        return var_export($roles, true);


    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //   
        $user = User::where("id",  $id)->first();
        return response()->json($user  ,200);  
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Show users by role with counts
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getUsersByRoles()
    {
        //TODO: limit view by permission
        /*
        $roles = Role::all();
        $users = User::with('roles')->get();
        $admins = $users->reject(function ($user, $key) {
            return ($user->hasRole('General') || $user->hasRole('Staff'));
        });
        
        $staff = $users->reject(function ($user, $key) {
            return ($user->hasRole('Admin') || $user->hasRole('General'));
        });
        $general = $users->reject(function ($user, $key) {
            return ($user->hasRole('Admin') || $user->hasRole('Staff'));
        });
        $others = $users->reject(function ($user, $key) {
            return ($user->hasRole('Admin') || $user->hasRole('Staff') || $user->hasRole('General'));
        });*/

        $roles = Role::with('users')->where('name', '!=' , 'Super Admin')
        ->get()->pluck("users","name");

    
        return response()->json($roles,200);
        /*$response = [
            'Admin' => $admins,
            'Staff' => $staff,
            'General' => $general,
            'Others' => $others,
        ]*/
    
    }


}
