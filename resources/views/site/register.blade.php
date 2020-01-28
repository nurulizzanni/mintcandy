@extends('layouts.frontend')

@section('content')
<section class="banner-area relative" id="home" style="background: url('{{config('stress.banner')}}');">
				<div class="overlay overlay-bg"></div>	
				<div class="container">
					<div class="row fullscreen d-flex align-items-center justify-content-between" style="height: 574px;">
						<div class="about-content col-lg-12 center">
							<h1 class="text-white">
								Register		
							</h1>
							<p class="text-white link-nav"><a href="/">Home</a> <span class="lnr lnr-arrow-right"></span>
							<a href="/register">Register</a>	
							</p>
							
						</div>										
					</div>
				</div>					
			</section>

            <section class="search-course-area relative" style="background:unset;">

				<div class="container">
					<div class="row justify-content-between align-items-center">
						<div class="col-lg-3 col-md-6 search-course-left">
							<h1 >
								Positive Thoughts, <br>
								Positive Life.
							</h1>
							
							
						</div>
						<div class="col-lg-9 col-md-6 search-course-right section-gap">
                        {!! Form::open(['url' => '/postregister','class'=>'form-wrap']) !!}
							
						<h4 class="pb-20 text-center mb-30">Register Here</h4>		

                        {!! Form::text('first_name','',['class' => 'form-control','placeholder'=>' Fist Name']) !!}
                        {!! Form::text('last_name','',['class' => 'form-control','placeholder'=>' Last Name']) !!}
                        {!! Form::email('email','',['class' => 'form-control','placeholder'=>' Email']) !!}	
                        {!! Form::password('password',['class' => 'form-control','placeholder'=>' Password']) !!}		
                        <div class="form-select" id="service-select">
                            {!! Form::select('gender',['' => 'Choose Gender','M'=>'Male', 'F'=>'Female'],'M'); !!}
                        </div>
                        <input type="submit" class="primary-btn text-uppercase" value="Submit" style="text-align:center;">      
                        {!! Form::close() !!}
						
						</div>
					</div>
				</div>	
			</section>

@stop