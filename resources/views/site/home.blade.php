@extends('layouts.frontend')

@section('content')


			<!-- start banner Area -->
			<section class="banner-area relative" id="home" style="background: url('{{config('stress.banner')}}');">
				<div class="overlay overlay-bg"></div>	
				<div class="container">
					<div class="row fullscreen d-flex align-items-center justify-content-between">
						<div class="banner-content col-lg-9 col-md-12">
							<h1 class="text-uppercase">
								Dear Stress, Let's Break Up!			
							</h1>
							<p class="pt-10 pb-10">
								Calculate your stress level and find some help...
							</p>
							<a href="/login" class="primary-btn text-uppercase">Get Started</a>
						</div>										
					</div>
				</div>					
			</section>
			<!-- End banner Area -->	

			<!-- Start cta-two Area -->
			<section class="cta-two-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 cta-left">
							<h1>Surround Yourself With Supportive People</h1>
						</div>
						<div class="col-lg-4 cta-right">
							<a class="primary-btn wh" href="/register">Register Now</a>
						</div>
					</div>
				</div>	
			</section>
			<!-- End cta-two Area -->


@stop