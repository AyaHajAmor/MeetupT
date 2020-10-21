<template>
  <div id="main" class="wrapper style1">
					<div class="container">
                        <header class="major">
							<h2>Sign in</h2>
                            <h4><b>Welcome Back!</b> To keep connected with us please login with your personal info</h4>
						</header>
                        <div class="col-12 col-12-xsmall" v-if="error">
                            <app-alert @dismissed="onDismissed" :text="error.message" ></app-alert>
                        </div>
						<!-- Form -->
							<section>
								<form @submit.prevent="onSignin">
									<div class="row gtr-uniform gtr-50">
										
										<div class="col-12 col-12-xsmall">
											<input 
                                            type="email" 
                                            name="email" 
                                            id="email"
                                            v-model="email" 
                                            value="" 
                                            required
                                            placeholder="Email .." />
										</div>
                                        <div class="col-12 col-12-xsmall">
											<input 
                                            type="password" 
                                            name="password" 
                                            id="" 
                                            v-model="password"
                                            required
                                            placeholder="Password .." />
										</div>
										<div class="col-12">
											<ul class="actions">
												<li><input type="submit" value="SIGN IN" class="primary" /></li>
												<li><router-link to="/signup"><input type="reset" value="SIGN UP" /></router-link></li>
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
        password:''
    }
},
computed:{
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
    onSignin(){
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
}
}
</script>

<style>

</style>