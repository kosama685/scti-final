<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobAppliedCandidatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_applied_candidates', function (Blueprint $table) {
            $table->id();
            $table->integer('job_id')->foreign()->references("id")->on("job_logs")->onDelete("cascade");
            $table->integer('user_id')->foreign()->references("id")->on("users")->onDelete("cascade");
            $table->string('status')->default('Applied');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_applied_candidates');
    }
}
