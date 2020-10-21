<template>
  <div id="app">
    <header id="header" >
				<h1 id="logo"><a><router-link to="/">Meetup Tunisian</router-link></a></h1>
				<nav id="nav">
					<ul>
					<li v-for="item in menuItems" :key="item.title" >
							<a><router-link :to='item.link'>{{ item.title }}</router-link></a>
					
					</li>
						
						<li><a class="button primary"><router-link to="/">Logout</router-link></a></li>
					</ul>
				</nav>
			</header>
    <router-view/>
  </div>
</template>
<script>

export default {
	computed: {
      menuItems () {
        let menuItems = [
          {title: 'Sign up', link: '/signup'},
          {title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
              {title: 'Home', link: '/'},
              {title: 'View Meetups', link: '/meetups'},
              { title: 'Organize Meetup', link: '/meetup/new'},
              {title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
	}
}
</script>