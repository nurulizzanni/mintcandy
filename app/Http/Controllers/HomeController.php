<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        //return \App\Http\Resources\UserResource::collection(\App\User::all());
        return view('home');
    }

    public function getFriends()
    {
        return \App\Http\Resources\UserResource::collection(\App\User::where('id','!=', auth()->user()->id)->get());
    }
       
}
