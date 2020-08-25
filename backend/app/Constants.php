<?php

namespace App;

class Constants
{

    //For App Logic Migration

    public const ROLES = [
        'SUPER_ADMIN' => "Super Admin",
        'ADMIN' => "Admin",
        'STAFF' => "Staff",
        'GENERAL' => "General",
    ];

    public const PERMISSIONS = [
        //register perms
        'REGISTER_GENERAL' => 'Register Standard User',
        'REGISTER_ADMIN' => 'Register Admin',
        'REGISTER_STAFF' => 'Register Staff',

        //CRUD Perms
        'VIEW_ALL_USERS' => 'View All Users',
        'VIEW_SPECIFIC_USER' => 'View Specific User',
        'EDIT_ALL_USERS' => 'Edit All Users',
        'DELETE_ALL_USERS' => 'Delete All Users',

        'VIEW_ALL_GENERAL' => 'View All GENERAL',
        'VIEW_SPECIFIC_GENERAL' => 'View Specific GENERAL',
        'EDIT_ALL_GENERAL' => 'Edit All GENERAL',
        'DELETE_ALL_GENERAL' => 'Delete All GENERAL',

        'VIEW_ALL_STAFF' => 'View All Staff',
        'VIEW_SPECIFIC_STAFF' => 'View Specific Staff',
        'EDIT_ALL_STAFF' => 'Edit All Staff',
        'DELETE_ALL_STAFF' => 'Delete All Staff',

        'VIEW_ALL_ADMINS' => 'View All Admins',
        'VIEW_SPECIFIC_ADMIN' => 'View Specific Admin',
        'EDIT_ALL_ADMINS' => 'Edit All Admins',
        'DELETE_ALL_ADMINS' => 'Delete All Admins',

        'VIEW_ALL_ROLES' => 'View All Roles',
        'VIEW_SPECIFIC_ROLE' => 'View Specific Role',
        'EDIT_ALL_ROLES' => 'Edit All Roles',
        'DELETE_ALL_ROLES' => 'Edit All Roles',

        'VIEW_ALL_PERMISSIONS' => 'View All Permissions',


    ];

    //For Database Migration
    public const GENDER = ['Male', 'Female', 'Other'];

    public const USER_STATUS = ["Active", "Inactive", "Final Account"];

    public const BASE_ROLE = ["Admin", "Staff", "General"];
}
