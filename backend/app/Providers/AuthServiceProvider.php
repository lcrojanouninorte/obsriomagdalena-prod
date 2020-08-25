<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;
use App\Constants;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */ 
    protected $policies = [
         'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        
        $this->registerPolicies();

        //For Passport
       
        
        Passport::routes();
 
    
        Passport::tokensExpireIn(now()->addMinutes(1000));

        Passport::refreshTokensExpireIn(now()->addDays(7));
    
        Passport::personalAccessTokensExpireIn(now()->addMonths(1));

        //
        // This works in the app by using gate-related functions like auth()->user->can() and @can()
        Gate::before(function ($user, $ability) {
            return $user->hasRole(Constants::ROLES['SUPER_ADMIN']) ? true : null;
        });
    }
}
