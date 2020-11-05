<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Laravel\Passport\ApiTokenCookieFactory;

class RefreshTokenController extends ApiTokenCookieFactory
{
    //

    public function refresh(Request $request)
    {
         return (new Response('Refreshed.'))->withCookie($this->cookieFactory->make(
            $request->user()->getAuthIdentifier(), $request->session()->token()
        ));
    }
}
