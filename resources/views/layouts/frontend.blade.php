<!DOCTYPE html>
	<html lang="zxx" class="no-js">
	<head>
		<!-- Mobile Specific Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- Favicon-->
		<link rel="shortcut icon" href="{{secure_asset('/frontend')}}/img/fav.png">
		<!-- Author Meta -->
		<meta name="author" content="colorlib">
		<!-- Meta Description -->
		<meta name="description" content="">
		<!-- Meta Keyword -->
		<meta name="keywords" content="">
		<!-- meta character set -->
		<meta charset="UTF-8">
		<!-- Site Title -->
		<title>{{config('stress.title')}}</title>

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"> 
			<!--
			CSS
			============================================= -->
			<link rel="stylesheet" href="{{asset('/frontend')}}/css/linearicons.css">
			<link rel="stylesheet" href="{{secure_asset('/frontend')}}/css/font-awesome.min.css">
			<link rel="stylesheet" href="{{secure_asset('/frontend')}}/css/bootstrap.css">
			<link rel="stylesheet" href="{{secure_asset('/frontend')}}/css/magnific-popup.css">
			<link rel="stylesheet" href="{{secure_asset('/frontend')}}/css/nice-select.css">							
			<link rel="stylesheet" href="{{secure_asset('/frontend')}}/css/animate.min.css">
			<link rel="stylesheet" href="{{secure_asset('/frontend')}}/css/owl.carousel.css">			
			<link rel="stylesheet" href="{{secure_asset('/frontend')}}/css/jquery-ui.css">			
			<link rel="stylesheet" href="{{secure_asset('/frontend')}}/css/main.css">
		</head>
		<body>	
		  <header id="header" id="home">
	  		<div class="header-top">
	  			<div class="container">
			  		<div class="row">
			  			
			  			
			  		</div>			  					
	  			</div>
			</div>
		    <div class="container main-menu">
		    	<div class="row align-items-center justify-content-between d-flex">
			      <div id="logo">
			        <a href="index.html"><img src="{{secure_asset('/frontend')}}/img/mintlogo.png" alt="" title="" /></a>
			      </div>
			      <nav id="nav-menu-container">
			        <ul class="nav-menu">
			          <li><a href="/">Home</a></li>
			       				          					          		          
			          <li><a href="/register">Register</a></li>
			        </ul>
			      </nav><!-- #nav-menu-container -->		    		
		    	</div>
		    </div>
		  </header><!-- #header -->

          @yield('content')

			<script src="{{secure_asset('/frontend')}}/js/vendor/jquery-2.2.4.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
			<script src="{{secure_asset('/frontend')}}/js/vendor/bootstrap.min.js"></script>			
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
  			<script src="{{secure_asset('/frontend')}}/js/easing.min.js"></script>			
			<script src="{{secure_asset('/frontend')}}/js/hoverIntent.js"></script>
			<script src="{{secure_asset('/frontend')}}/js/superfish.min.js"></script>	
			<script src="{{secure_asset('/frontend')}}/js/jquery.ajaxchimp.min.js"></script>
			<script src="{{secure_asset('/frontend')}}/js/jquery.magnific-popup.min.js"></script>	
    		<script src="{{secure_asset('/frontend')}}/js/jquery.tabs.min.js"></script>						
			<script src="{{secure_asset('/frontend')}}/js/jquery.nice-select.min.js"></script>	
			<script src="{{secure_asset('/frontend')}}/js/owl.carousel.min.js"></script>									
			<script src="{{secure_asset('/frontend')}}/js/mail-script.js"></script>	
			<script src="{{secure_asset('/frontend')}}/js/main.js"></script>	
		</body>
	</html>