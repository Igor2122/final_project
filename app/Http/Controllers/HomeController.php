<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Area; // we are pulling our are from our nested set

class HomeController extends Controller
{
    
    public function index()
    {
        // we need to pass out areas
        $areas = Area::get()->toTree(); // we are getting a collection will ability to loop through all the children
        return view('home', compact('areas')); 
    }
}
