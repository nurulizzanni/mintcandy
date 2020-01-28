<div id="sidebar-nav" class="sidebar">
			<div class="sidebar-scroll">
				<nav>
				
					<ul class="nav">
						<li><a href="/dashboard" class="active"><i class="lnr lnr-home"></i> <span>Dashboard</span></a></li>
						@if(auth()->user()->role =='admin')
						<li><a href="/pengguna" class=""><i class="lnr lnr-user"></i> <span>User Data</span></a></li>
						@endif
						<li><a href="/start" class=""><i class="lnr lnr-file-empty"></i> <span>DASS</span></a></li>
						<li><a href="/inspiration" class=""><i class="lnr lnr-dice"></i> <span>INSPIRATION</span></a></li>

					</ul>
				</nav>
			</div>
		</div>