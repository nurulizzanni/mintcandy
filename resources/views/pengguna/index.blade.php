@extends('layouts.master')
@section('content')
    <div class="main">
        <div class ="main-content">
        <div class ="container-fluid">
            <div class ="row">
                <div class="col-md-12">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">User Data</h3>
                        <div class="right">
                           
                            <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal"><i class=" lnr lnr-plus-circle"></i></button>
                        </div>
                    </div>
                    <div class="panel-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Short Description</th>
                            <th>Choose</th>

                        </tr>
                        </thead>
                        <tbody>
                        @foreach($data_pengguna as $pengguna)
                        <tr>
                            <td><a href="/pengguna/{{$pengguna->id}}/profile">{{$pengguna->first_name}}</a></td>
                            <td><a href="#">{{$pengguna->last_name}}</a></td>
                            <td>{{$pengguna->gender}}</td>
                            <td>{{$pengguna->short_des}}</td>
                            <td><a href="/pengguna/{{$pengguna->id}}/edit" class="btn btn-warning btn-sm">Edit</a>
                            <a href="#" class="btn btn-danger btn-sm delete" pengguna-id="{{$pengguna->id}}">Delete</a></td>
                        </tr>
                        @endforeach
                        </tbody>
                    </table>
                    </div>
                </div>  
                </div>
            </div>
        </div>
        </div>
    </div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Insert New Data</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
        <form action="/pengguna/create" method="POST">
            {{csrf_field()}}
            <div class="form-group {{$errors->has('first_name') ? 'has-error' : ''}}">
                <label for="exampleInputEmail1">First Name</label>
                <input name="first_name" type="text" class="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="First Name" value="{{old('first_name')}}">
                @if($errors->has('first_name'))
                    <span class="help-block">{{$errors->first('first_name')}} </span>
                @endif
            
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Last Name</label>
                <input name="last_name" type="text" class="form-control" id="exampleInputText2" aria-describedby="emailHelp" placeholder="Last Name" value="{{old('last_name')}}">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1 {{$errors->has('email') ? 'has-error' : ''}}" >Email</label>
                <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value="{{old('email')}}">
                @if($errors->has('email'))
                    <span class="help-block">{{$errors->first('email')}} </span>
                 @endif
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1 {{$errors->has('gender') ? 'has-error' : ''}}">Gender</label>
                <select name="gender" class="form-control" id="exampleFormControlSelect1">
                <option value='M' {{(old('gender') == 'M') ? 'selected' : ''}}>Male</option>
                <option value='F' {{(old('gender') == 'F') ? 'selected' : ''}}>Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Short Description</label>
                <textarea name="short_des" class="form-control" id="exampleFormControlTextarea1" rows="3">{{old('shor_des')}}</textarea>
            </div>
            </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>   
            
        </form>
        
        </div>
    </div>
    </div>

</div>

  

@stop

@section('footer')
   <script>
    $('.delete').click(function(){
        var pengguna_id = $(this).attr('pengguna-id');
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this id "+ pengguna_id + " !!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                console.log(willDelete);
                
                window.location ="/pengguna/"+pengguna_id+"/delete";

            }
            }); 
     });
   </script>
@stop
                