<template>
  <div id="main" class="wrapper style1">
					<div class="container">
                        <header class="major">
							<h2>Create a new Meetup</h2>
						</header>
						<!-- Form -->
							<section>
								<form @submit.prevent="onCreateMeetup">
									<div class="row gtr-uniform gtr-50">
										<div class="col-12 col-12-xsmall">
											<input type="text" 
											name="title" 
											id="title" 
											placeholder="Name" 
											label="Title" 
											v-model="title"
											required />
										</div>
										<div class="col-12 col-12-xsmall">
											<input type="text" 
											name="location" 
											id="location" 
											placeholder="Location" 
											label="Location"
											v-model="location" 
											required/>
										</div>
										<div class="col-12 col-12-xsmall">
											<input type="text" 
											name="imageUrl" 
											id="image Url" 
											placeholder="Image Url" 
											label="image-url"
											v-model="imageUrl" 
											required/>
										</div>
										<div class="col-12 col-12-xsmall">
											<img :src="imageUrl" height="300" >
										</div>
										<div class="col-12">
											<textarea 
											style="border:solid 1px rgba(255, 255, 255, 0.3)" 
											name="description" id="description" 
											placeholder="Description .." 
											rows="6" 
											v-model="description"
											required >
											</textarea>
										</div>
										<div class="col-8 col-12-xsmall">
											<input type="text" 
											name="date" 
											id="date" 
											placeholder="Choose a Date   :     dd-mm-yyyy" 
											label="Date"
											required/>
										</div>
										<div class="col-4 col-12-xsmall"> Today is : <br>{{submittableDate | date}}</div>
										<div class="col-12 col-12-xsmall">
											
											<input type="submit" value="Send Message" class="primary" :disabled="!formIsvalid" />
											
											
										</div>
									</div>
								</form>
							</section>
					</div>
				</div>

</template>

<script>

export default {
	
 name :'CreateMeetup' ,
 data(){
	return {
			title: '',
			location: '',
			imageUrl: '',
			description: '',
			date:new Date()
	}
 },
 computed: {
	formIsvalid(){
		return this.title !==''&& 
		this.location !=='' && 
		this.imageUrl !=='' && 
		this.description !=='' &&
		this.date !==''
	},
	submittableDate (){
		const date = new Date(this.date)
		console.log(date)
		return date
	}
 },
 methods:{
	onCreateMeetup(){
		if( !this.formIsvalid){
			return
		}
		const meet ={
				title : this.title,
				location: this.location,
				imageUrl : this.imageUrl,
				description: this.description,
				date: this.submittableDate
		}
		this.$store.dispatch('createMeetup',meet)
		this.$router.push('/meetups')
	}
	
 }
}
</script>

<style>

</style>