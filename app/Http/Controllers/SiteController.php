<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function home()
    {
        return view('site.home');
    }

    public function about()
    {
        return view ('site.about');
    }
    public function register()
    {
        return view ('site.register');
    }
    public function postregister(Request $request)
    {
        //insert ke table user
        $user = new \App\User;
        $user->role= 'pengguna';
        $user->name= $request->first_name;
        $user->email = $request ->email;
        $user->password = bcrypt($request->password);
        $user->remember_token=\Illuminate\Support\Str::random(60);
        $user->save();
        

         //insert ke table pengguna
         $request->request->add(['user_id'=> $user->id]);
         $pengguna=\App\Pengguna::create($request->all());
         return redirect('/')->with('success', 'Data is submitted');
    }
}
