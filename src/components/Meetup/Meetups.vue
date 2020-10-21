<template>
  <div id="main" class="wrapper style1">
					<div class="container">
						<header class="major">
							<h2>All Meetups</h2>
						</header>
						<!-- Table -->
							<section>
								
								<div class="table-wrapper">
									<table>
										
										<tbody >
											
											<tr v-for="meetup in meetups"
												:key="meetup.id"
											>
												<td  >
													<img :src="meetup.imageUrl" 
													alt="" 
													border="3" 
													height="100"
													width="120" /> <br>Date :{{meetup.date | date}}</td>
												<td ><b style="color:#e44c65">{{meetup.title}}</b> <br> in {{meetup.location }}</td>
												
												<td>
												<ul class="actions">
													
													<li><v-btn :to="'/meetups/' + meetup.id">
													View Meetup
													</v-btn></li>
												</ul>
												</td>
											</tr>
											
										</tbody>
									</table>
								</div>
							</section>
					</div>
				</div>

</template>

<script>
export default {
	computed: {
		meetups (){
			return this.$store.getters.loadedMeetups
		}
	}
}
</script>

<style>

</style>