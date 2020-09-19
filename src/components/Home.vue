<template>
<div>
  <section id="banner">
	<div class="content">
		<div class="row gtr-uniform gtr-30">
				<div class="col-6 col-12-xsmall" router to="/meetup/new">
					<input type="submit" value="Organise meetup" class="fit primary" />
				</div>
				<router-link to="/meetups">
					<div class="col-6 col-12-xsmall"  >
						<input type="submit" value="view all Meetups" class="fit primary" />
					</div>
				<router-link> 
		</div>
		<router-view/>
		<v-carousel>
			
			<v-carousel-item
				v-for="meetup in meetups"
				:src="meetup.imageUrl"
				:key="meetup.id"
				reverse-transition="fade-transition"
				transition="fade-transition">
		</v-carousel-item>
		
        </v-carousel>
	</div>
				</section>
			<!-- Five -->
				<section id="five" class="wrapper style2 special fade">
					<div class="container">
						<header>
							<h2>Magna faucibus lorem diam</h2>
							<p>Ante metus praesent faucibus ante integer id accumsan eleifend</p>
						</header>
						<form method="post" action="#" class="cta">
							<div class="row gtr-uniform gtr-50">
								<div class="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Your Email Address" /></div>
								<div class="col-4 col-12-xsmall"><input type="submit" value="Get Started" class="fit primary" /></div>
							</div>
						</form>
					</div>
				</section>
        <!-- Footer -->
				<footer id="footer">
					<ul class="icons">
						<li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
						<li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
						<li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
						<li><a href="#" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</footer>

</div>
</template>

<script>
  export default {
    name: 'Home',
	
data(){
		return{
			meetups: [
				{imageUrl : 'https://i0.wp.com/www.webdo.tn/wp-content/uploads/2018/11/Tunisie_Sousse-1.jpg?fit=3500%2C2064' , title:'Sousse' , id:'1'},
				{imageUrl : 'https://www.okvoyage.com/wp-content/uploads/2019/12/monastir.jpg' , title:'Monastir' , id:'2'},
				{imageUrl : 'https://i.ytimg.com/vi/GwFTPhm-9xQ/maxresdefault.jpg' , title:'Sfax' , id:'3'},
			]
		}
	}
  }
</script>
