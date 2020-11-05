<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Constants as Cst;
class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('base_role', Cst::BASE_ROLE)->nullable(false);
            $table->string('email')->unique();
            $table->string('email_verification_code');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->enum('status', Cst::USER_STATUS)->nullable(false)->default('Inactive');
            $table->string('phone_number',13)->nullable();
            $table->string('alternate_phone_number', 13)->nullable();
            $table->rememberToken();
            $table->unsignedBigInteger('last_updated_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('last_updated_by')
            ->references('id')
            ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
