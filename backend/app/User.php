<?php

namespace App;

use App\Constants;
use Composer\Package\Package;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Str;
use Illuminate\Support\Facades\Hash;
use  App\Admin;
use  App\General;
use  App\Staff;
class User extends Authenticatable
{
  

    use Notifiable, HasApiTokens, SoftDeletes, HasRoles;

    protected $guard_name = 'api';
    protected $appends = ['name','roles_names', 'profile'];

    protected $fillable = [
        'email',
        'phone_number',
        'alternate_phone_number',
        'password',
        'base_role',
        'last_updated_by'
    ];

    /**p
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'deleted_at', 'created_at', 'updated_at', 'pivot'
    ];

    protected $casts = ['is_super_admin' => 'boolean'];
   
    function setStatus($status){
        $this->status = $status;
        $this->save();
    }

    function canLogin(): bool {
        return $this->status == 'Active';
    }

    function canRegisterRole($role_type): bool {
        switch ($role_type){
            case 'Admin' :
                return $this->can(Constants::PERMISSIONS['REGISTER_ADMIN']);
            case 'Staff' :
                return $this->can(Constants::PERMISSIONS['REGISTER_STAFF']);
            case 'User' :
                return $this->can(Constants::PERMISSIONS['REGISTER_GENERAL']);
            default:
                return false;
        }
    }

    public function isOfType(string $string): bool
    {
        return $this->base_role == $string;
    }

    public function isSuperAdmin(): bool
    {
        return $this->hasRole(Constants::ROLES['SUPER_ADMIN']);
    }

    public function generals(){
        return $this->hasOne('App\General');
    }

    public function staff(){
        return $this->hasOne('App\Staff');
    }

    public function admin(){
        return $this->hasOne('App\Admin');
    }

    public function updater(){
        return $this->belongsTo('App\User', 'last_updated_by', 'id');
    }

    public function profile(){
        switch ($this->base_role){
            case "Admin":
                return $this->admin?$this->admin:new Admin();
            case "Staff":
                return $this->staff?$this->staff:new Staff();
            case "General":
                return $this->generals?$this->generals:new General();
            default:
                return null;
        }
    }

    public function getProfileAttribute()
    {
        return $this->profile();
    }
    public function getRolesNamesAttribute()
    {
        return $this->roles->pluck('name');
    }

    public function getAllPermissionsAttribute(){
        return $this->getAllPermissions()->map->only(['id', 'name']);
    }

    public function getNameAttribute(){

        if($this->profile() == null){
            return $this->email;
        }
        return Str::title($this->profile()->first_name." ". $this->profile()->last_name);
        
    }
}
