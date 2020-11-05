<?php

namespace App\Http\Controllers;

use App\SpatieRole;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;     
use Illuminate\Http\Response;
use App\User;
 use DB;
/*
Status Codes: https://gist.github.com/jeffochoa/a162fc4381d69a2d862dafa61cda0798
$all_users_with_all_their_roles = User::with('roles')->get();
$all_users_with_all_direct_permissions = User::with('permissions')->get();
$all_roles_in_database = Role::all()->pluck('name');
$users_without_any_roles = User::doesntHave('roles')->get();
*/
class SpatieRoleController extends Controller
{
    public function __construct()
    {
        /*$this->middleware('auth');
        $this->middleware('permission:edit articles')->only('testmiddleware');
        $this->middleware('role:admin|writer')->only('testmiddleware');*/

    }

    /**
     * Display a listing of roles with his permisionns.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //only for authenticated users
        //$user->can('manage roles');

        $all_roles_in_database = Role::select("id","name",  
        DB::raw("DATE_FORMAT(updated_at, '%d-%b-%Y') as last_update"))->where('name', '!=' , 'Super Admin')
        ->withCount('users')->withCount('permissions')->get();

        
       return response()->json($all_roles_in_database,200);
        
    }

       /**
     * Display a listing of permisions with asocciated roles.
     * Tis is only for view, permision will not be modifiables
     * @return \Illuminate\Http\Response
     */
    public function permissions()
    {
        //

        
        $all_permissions_in_database = Permission::select("id","name")->with([
            'roles' => function ($q) {
                $q->select('id', 'name')->where('name', '!=' , 'Super Admin');
            },
        ])->get();
       return response()->json($all_permissions_in_database,200);
        
    }

    /**
     * Show the form for creating a new resource. GET
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage. POST
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->validate($request, [
            'name'     => 'required',
            'description'     => 'required',
            "permissions.*"  => "required|distinct|min:1",
        ]);
        
        // Start transaction
        DB::beginTransaction();
        try {
            $role = Role::create([
                'name'     => $request->input('name'),
                'description'      => $request->input('description'),
            ]);
           

            DB::commit();
            $permissionsObj = $request->input('permissions');
            foreach ($permissionsObj as $key => $permission) {
                $permissions[] = $permission["name"];
            }
            
            $role->syncPermissions( $permissions);
            return response()->json($role,200);
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

    /**
     * Display the specified Role with his permissons and active sstatus.
     *
     * @param  \App\SpatieRole  $spatieRole
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if($id==1){
            return response()->json("Esta Intentando Acceder a información privada",403);  
        }
        //
            $role = Role::select("id","name","description","updated_at")->where("id",  $id)->with([
            'permissions' => function ($q) {
                $q->select('name');
            },
        ])->get();

        /* b get all system permissions
        $sys_perms = Permission::select("id", "name")->get();
        
        //Find is system permissión is inside role permisson an set active true or false
        $role_perms =  $role[0]->permissions->toArray();
        foreach ($sys_perms as $key => $sys_perm) {
            $found = array_search($sys_perm->id, array_column($role_perms, 'id')); 
            if($found!== false){
                $sys_perms[$key]->active = true;
            }else{
                $sys_perms[$key]->active= false;
            }

        }
       unset( $role[0]->permissions );
       $role[0]->permissions = $sys_perms;
       */
       return response()->json($role[0]  ,200);  
        
    }

    /**
     * Show the form for editing the specified resource. GET
     *
     * @param  \App\SpatieRole  $spatieRole
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

        $all_roles_in_database = Role::select("id","name", "updated_at")->where("id",  $id)->with([
            'permissions' => function ($q) {
                $q->select('id', 'name');
            },
        ])->get();
       return response()->json($all_roles_in_database,200);
    }

    /**
     * Update the specified resource in storage. POST
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SpatieRole  $spatieRole
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SpatieRole $spatieRole)
    {
        //
                
        $this->validate($request, [
            'id'     => 'required',
            'name'     => 'required',
            'description'     => 'required',
            "permissions.*"  => "required|distinct|min:1",
        ]);
        // Start transaction
        DB::beginTransaction();
        try {
            $role = Role::find( $request->input('id'));
            $role->name = $request->input('name');
            $role->description = $request->input('description');
            $role->save();
            DB::commit();
            \Artisan::call('cache:clear');
            //Detach previous permisions and asign new ones
            $permissionsObj = $request->input('permissions');
            $permissions= [];
            foreach ($permissionsObj as $key => $permission) {
                $permissions[] = $permission["name"];
            }
            $role->syncPermissions( $permissions);

            return response()->json($role,200);
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SpatieRole  $spatieRole
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //Limit delete of role if no one have it.
        $role = Role::find($id);
        $user_has_role = User::where("base_role", $role->name)->get();
        
        if( count($user_has_role) ){
            return response()->json("Al menos un usario tiene este rol",403);
        }else{
            if($role->delete()){
                return response()->json("OK",200);
            } else {
                return response()->json("No se pudo eliminar",500);
            }
        }
        
        

       
    }
}
