<?php

namespace App\Repositories\PackageManagment;

use Illuminate\Support\ServiceProvider;

class PackageManagmentServiceProvide extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

    }


    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('App\Repositories\PackageManagment\PackageManagmentInterface', 'App\Repositories\PackageManagment\PackageManagmentRepository');
    }

}

