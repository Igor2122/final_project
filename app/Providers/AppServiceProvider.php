<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \App\Area::creating(function($area){
            $prefix = $area->parent ? $area->parent->name . ' ' : ''; // from the trait we can access the parent and prefix so each slug will be unique
            $area->slug = str_slug($prefix . $area->name);
        });
        
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
