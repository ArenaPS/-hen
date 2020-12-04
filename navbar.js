document.getElementById("navbar1").innerHTML = `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<img src="https://arenaps.github.io/icon.png" width="50" height="50">
			&nbsp;&nbsp;&nbsp;
			<a class="navbar-brand" href="#">Arena PlayStation</a>
			<button onclick="function1()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse text-center" id="navbarColor01">
			  <ul class="navbar-nav mr-auto">
				<li class="nav-item">
				  <a href="https://arenaps.github.io/index.html" class="nav-link" id= "btn-inicio">Inicio</a>
				</li>
			  </ul>
			</div>
			<a href="https://www.youtube.com/channel/UCyqcfxrWTyDuyo2DKjwJLXg"><img width="50" src="https://arenaps.github.io/images/Youtube.png"></a>
			<a href="https://discord.com/invite/bSskVpXNuR"><img width="50" src="https://arenaps.github.io/images/Discord.webp"></a>
			
 </nav>

`;
	function function1(){ document.getElementById("navbarColor01").classList.toggle('show');}