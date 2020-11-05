<?php

namespace App\Auth\Model;

use App\User;
use App\Admin;
use App\Staff;
use App\General;
use Laravel\Passport\Bridge\AccessToken as PassportAccessToken;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Key;
use Lcobucci\JWT\Signer\Rsa\Sha256;
use League\OAuth2\Server\CryptKey;
use DB;
use Auth;
class AccessToken extends PassportAccessToken
{

    private $privateKey;

    public function convertToJWT(CryptKey $privateKey)
    {
        $builder = new Builder();
        $id = $this->getUserIdentifier();
        $user = User::with('roles')->where('id', $id)->first();
        //Get user roles
        $user_roles =$user->roles;
        $acl = collect();
        //if user is super admin, set admin role
      
       /* $roles = $user->roles_names;
        if(!array_search($user->base_role,$roles->toArray())){
            $roles[] = $user->base_role;
        }*/
        //set base_role if not in array
        foreach ($user_roles as $key => $role) {
            $permObj = collect();
            foreach ($role->permissions as $key => $permission) {
                $permObj->put($permission->name , "all");
            }
            $acl->put($role->name , $permObj);
        }

        //Get user profile base rol
        $profile = $user->profile();

        $builder->permittedFor($this->getClient()->getIdentifier())
            ->setSubject($this->getUserIdentifier())
            ->identifiedBy($this->getIdentifier(), true)
            ->issuedAt(time())
            ->canOnlyBeUsedAfter(time())
            ->expiresAt($this->getExpiryDateTime()->getTimestamp())
            ->relatedTo($id )
            ->withClaim('scopes', [])
            ->withClaim('id', $user->id)
            ->withClaim('name', $user->name)
            ->withClaim('email', $user->email)
            ->withClaim('picture', (isset($profile->avatar) && $profile->avatar ? $profile->avatar : ''))
            ->withClaim('roles',    $user->roles_names)
            ->withClaim('acl', $acl);
            
        return $builder
            ->getToken(new Sha256(), new Key($privateKey->getKeyPath(), $privateKey->getPassPhrase()));
    }

    public function setPrivateKey(CryptKey $privateKey)
    {
        $this->privateKey = $privateKey;
    }

    public function __toString()
    {
        return (string) $this->convertToJWT($this->privateKey);
    }

}