<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PenggunaController extends Controller
{
    public function index(){
        
        $data_pengguna= \App\Pengguna::all();
        return view('pengguna.index',['data_pengguna'=>$data_pengguna]);
    }
    public function create(Request $request){
        
       
        $this->validate($request,[
            'first_name'=> 'required | min:2',
            'last_name' => 'required',
            'email' => 'required | email | unique:users',
            'gender' => 'required',
            
        ]);
        //insert ke table user
        $user = new \App\User;
        $user->role= 'pengguna';
        $user->name= $request->first_name;
        $user->email = $request ->email;
        $user->password = bcrypt('rahsia');
        $user->remember_token=\Illuminate\Support\Str::random(60);
        $user->save();
        

         //insert ke table pengguna
         $request->request->add(['user_id'=> $user->id]);
         $pengguna=\App\Pengguna::create($request->all());
         return redirect('/pengguna')->with('success', 'Data is submitted');
    } 
    
    public function edit($id){
        
        $pengguna = \App\Pengguna::find($id);
        return view('pengguna.edit',['pengguna' => $pengguna]);
    }

    public function update(Request $request, $id){
        
        //dd($request->all());
        $pengguna = \App\Pengguna::find($id);
        $pengguna->update($request->all());
        if($request->hasFile('avatar')){
            $request->file('avatar')->move('images/',$request->file('avatar')->getClientOriginalName());
            $pengguna->avatar = $request->file('avatar')->getClientOriginalName();
            $pengguna->save();
        }
        return redirect('/pengguna')->with('success', 'Data is updated');
    }

    public function delete($id){
        
        $pengguna = \App\Pengguna::find($id);
        $pengguna->delete();
        return redirect('/pengguna')->with('berhasil', 'Data is deleted');
    }

    public function profile($id){
        
        $pengguna = \App\Pengguna::find($id);
        $test1 = \App\Test::all();
        //dd(test1)

        //data chart
        $categories =[];
        $data=[];

        foreach($test1 as $ts)
        {
            if($pengguna->test()->wherePivot('test_id',$ts->id)->first())
            {
                $categories[] = $ts->name;
                $data[] = $pengguna->test()->wherePivot('test_id',$ts->id)->first()->pivot->nilai;
            }
            
        }

        //dd(json_encode($categories));
        return view('pengguna.profile',['pengguna' => $pengguna , 'test1'=> $test1 , 'categories' =>$categories, 'data' =>$data]);
    }

    public function addnilai(Request $request,$id){
        
        $pengguna = \App\Pengguna::find($id);
        if($pengguna->test()->where('test_id',$request->test)->exists()){
            return redirect('pengguna/'.$id.'/profile')->with('error', 'Dah ada');
        }
        $pengguna->test()->attach($request->test, ['nilai' => $request->nilai]);
        return redirect('pengguna/'.$id.'/profile')->with('success', 'Data is success');
    }

    public function deletenilai($id, $idtest)
    {
        $pengguna = \App\Pengguna::find($id);
        $pengguna->test()->detach($idtest);
        return redirect()->back()->with('success','Data berjaya dihapus');
    }

    public function start()
    {
        $pengguna= \App\Pengguna::all();
        //dd($pengguna);     
        return view('dass.start',['pengguna'=>$pengguna]);

    }
    public function game()
    {
        $pengguna= \App\Pengguna::all();
        //dd($pengguna);
        //$path = './questions.json';
       // $content = json_decode(file_get_contents($path), true);

        return view ('dass.game',['pengguna'=>$pengguna]);
    }
    public function score()
    {
        $pengguna= \App\Pengguna::all();
        //dd($pengguna);
        //$path = './questions.json';
       // $content = json_decode(file_get_contents($path), true);

        return view ('dass.score',['pengguna'=>$pengguna]);
    }

    public function inspiration()
    {
        return view ('pengguna.inspiration');
    }
   
    
}
 