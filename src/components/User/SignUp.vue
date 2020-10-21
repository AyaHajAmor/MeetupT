<template>
  <div id="main" class="wrapper style1">
					<div class="container">
                        <header class="major">
							<h2>Sign Up</h2>
                            <h4><b>Welcome Back!</b> To keep connected with us please login with your personal info</h4>
						</header>
                        <div class="col-12 col-12-xsmall" v-if="error">
                            <app-alert @dismissed="onDismissed" :text="error.message" ></app-alert>
                        </div>
						<!-- Form -->
							<section>
								<form @submit.prevent="onSignup">
									<div class="row gtr-uniform gtr-50">
										
										<div class="col-12 col-12-xsmall">
											<input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            value="" 
                                            v-model="email"
                                            required
                                            placeholder="Email .." />
										</div>
                                        <div class="col-12 col-12-xsmall">
											<input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            v-model="password"
                                            required
                                            placeholder="Password .." />
										</div>
                                        <div class="col-12 col-12-xsmall">
											<input 
                                            type="password" 
                                            name="confirmPassword" 
                                            id="confirmPassword" 
                                            v-model="confirmPassword"
                                            required
                                            placeholder="Confirm Password .."
                                            :rules="[comparePasswords]" />
										</div>
										<div class="col-12">
											<ul class="actions">
												<li><input type="submit" value="SIGN UP" class="primary" /></li>
												<li><router-link to="/signin"><input type="reset" value="SIGN IN" /></router-link></li>
											</ul>
										</div>
									</div>
								</form>
							</section>
					</div>
				</div>
</template>

<script>
export default {
data(){
    return {
        email :'',
        password:'',
        confirmPassword:''
    }
},
    
    
computed:{
    comparePasswords(){
        return this.password == this.confirmPassword ? 'Password do not match ' :''
    },
    user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
},
watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
methods :{
    onSignup(){
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
}
}
</script>

<style>

</style>