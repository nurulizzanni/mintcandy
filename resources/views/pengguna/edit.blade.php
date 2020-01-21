@extends('layouts.master')

@section('content')
<div class="main">
        <div class ="main-content">
            <div class ="row">
                <div class="col-md-12">
                <div class="panel">
				<div class="panel-heading">
					<h3 class="panel-title">Edit User Info</h3>
				</div>
				<div class="panel-body">
                <form action="/pengguna/{{$pengguna->id}}/update" method="POST" enctype="multipart/form-data">
                            {{csrf_field()}}
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input name="first_name" type="text" class="form-control" id="exampleInputText1"
                                 aria-describedby="emailHelp" placeholder="First Name" value="{{$pengguna->first_name}}">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Last Name</label>
                                <input name="last_name" type="text" class="form-control" id="exampleInputText2" 
                                aria-describedby="emailHelp" placeholder="Last Name" value="{{$pengguna->last_name}}">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Gender</label>
                                <select name="gender" class="form-control" id="exampleFormControlSelect1">
                                <option value='M' @if ($pengguna->gender == 'M') selected @endif>Male</option>
                                <option value='F' @if ($pengguna->gender == 'F') selected @endif>Female</option> 
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Short Description</label>
                                <textarea name="short_des" class="form-control" id="exampleFormControlTextarea1"
                                 rows="3">{{$pengguna->short_des}}</textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Avatar</label>
                                <input type="file" name="avatar" class="form-control" ></input>
                                
                            </div>
                        
                            <button type="submit" class="btn btn-warning">Update</button>
   
                            
                </form>
				</div>
			</div>


                </div>
            </div>
        </div>
</div>
@stop


@section('content1')
        <h3>Edit User Info</h3>
            @if(session('success'))
            <div class="alert alert-success" role="alert">
                {{session('success')}}
            </div>
            @endif
            <div class="row">
                <div class="col-lg-12">
                
                
                <form action="/pengguna/{{$pengguna->id}}/update" method="POST">
                            {{csrf_field()}}
                            <div class="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input name="first_name" type="text" class="form-control" id="exampleInputText1"
                                 aria-describedby="emailHelp" placeholder="First Name" value="{{$pengguna->first_name}}">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Last Name</label>
                                <input name="last_name" type="text" class="form-control" id="exampleInputText2" 
                                aria-describedby="emailHelp" placeholder="Last Name" value="{{$pengguna->last_name}}">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Gender</label>
                                <select name="gender" class="form-control" id="exampleFormControlSelect1">
                                <option value='M' @if ($pengguna->gender == 'M') selected @endif>Male</option>
                                <option value='F' @if ($pengguna->gender == 'F') selected @endif>Female</option> 
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Short Description</label>
                                <textarea name="short_des" class="form-control" id="exampleFormControlTextarea1"
                                 rows="3">{{$pengguna->short_des}}</textarea>
                            </div>
                        
                        
                            <button type="submit" class="btn btn-warning">Update</button>
   
                            
                </form>
                </div>    
            </div>
        </div>
@endsection
               
            

                