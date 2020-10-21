<template>
  <div id="main" class="wrapper style1">
					<div class="container">
						<header class="major">
							<h2>{{meetup.title}}</h2>
						</header>
						<div class="row gtr-150">
							<div class="col-12 col-12-medium">

								<!-- Content -->
									<section id="content">
										<a href="#" class="image fit"><img :src="meetup.imageUrl" alt="" /></a>
										<h3>Meetup in : <span style="color:#e44c65">{{meetup.location}}</span></h3>
										<b><h5>{{meetup.date | date}}</h5></b>
										<p>Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna. Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique.</p>
										<ul class="actions" style="float: right;">
											<li><a href="#" class="button">Register</a></li>
										</ul>
									</section>

							</div>
						</div>
					</div>
				</div>
				

</template>
<script>
export default {
	props: ['id'],
	computed: {
		meetup (){
			return this.$store.getters.loadedMeetup(this.id)
		}
	}
}
</script>
