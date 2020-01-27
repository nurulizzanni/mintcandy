@extends('layouts.frontend')

@section('content')
<section class="banner-area relative" id="home">
				<div class="overlay overlay-bg"></div>	
				<div class="container">
					<div class="row fullscreen d-flex align-items-center justify-content-between" style="height: 574px;">
						<div class="banner-content col-lg-9 col-md-12">
							<h1 class="text-uppercase">
								Register		
							</h1>
							<p class="text-white link-nav"><a href="index.html">Home</a> <spanclass="lnr lnr-arrow-right"></span>
							<a href="about.html">Register</a>	
							</p>
							
						</div>										
					</div>
				</div>					
			</section>

            <section class="search-course-area relative" style="background:unset;">

				<div class="container">
					<div class="row justify-content-between align-items-center">
						<div class="col-lg-6 col-md-6 search-course-left">
							<h1 >
								Get reduced fee <br>
								during this Summer!
							</h1>
							<p>
								inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
							</p>
							
						</div>
						<div class="col-lg-4 col-md-6 search-course-right section-gap">
							<form class="form-wrap" action="#">
								<h4  pb-20 text-center mb-30">Search for Available Course</h4>		
								<input type="text" class="form-control" name="name" placeholder="Your Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Name'">
								<input type="phone" class="form-control" name="phone" placeholder="Your Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Phone Number'">
								<input type="email" class="form-control" name="email" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address'">
								<div class="form-select" id="service-select">
									<select style="display: none;">
										<option datd-display="">Choose Course</option>
										<option value="1">Course One</option>
										<option value="2">Course Two</option>
										<option value="3">Course Three</option>
										<option value="4">Course Four</option>
									</select><div class="nice-select" tabindex="0"><span class="current">Choose Course</span><ul class="list"><li data-value="Choose Course" class="option selected">Choose Course</li><li data-value="1" class="option">Course One</li><li data-value="2" class="option">Course Two</li><li data-value="3" class="option">Course Three</li><li data-value="4" class="option">Course Four</li></ul></div>
								</div>									
								<button class="primary-btn text-uppercase">Submit</button>
							</form>
						</div>
					</div>
				</div>	
			</section>

@stop