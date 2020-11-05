<?php
namespace App\Http\Controllers\Auth;

use Psr\Http\Message\ServerRequestInterface;
use \Laravel\Passport\Http\Controllers\AccessTokenController;
use Laravel\Passport\Exceptions\OAuthServerException;
use App\User;
/**
 * @group Authentication, that extends passport
 *
 * APIs for managing user
 */

class CustomAccessTokenController extends AccessTokenController
{

    public function auth(ServerRequestInterface $request)
    {

        //this method helps To check if user is active
            $tokenResponse = parent::issueToken($request);
            $token = $tokenResponse->getContent();

            // $tokenInfo will contain the usual Laravel Passort token response.
            $tokenInfo = json_decode($token, true);

            // Then we just add the user to the response before returning it.
            $username = $request->getParsedBody()['username'];
            $user =User::where([
                'email' => $username,
                'status'   => 'Active',
                ])->first();
                
            if(!$user) {
                return response()->json("Cuenta no Activa, Favor revisar su email", 403);
          
            }else{

                $tokenInfo = collect($tokenInfo);
               // $tokenInfo->put('user', $user);
    
                return $tokenInfo;
            }
    }
}