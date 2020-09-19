<template>
  <div id="app">
    <header id="header">
				<h1 id="logo"><a href="index.html">Meetup</a></h1>
				<nav id="nav">
					<ul>
						<li><a><router-link to="/">Home</router-link></a></li>
						<li>
							<a><router-link to="/meetups">All Meetups</router-link></a>
						</li>
						<li><a><router-link to="/meetup/new">Organise Meetup</router-link></a></li>
						<li><a href="#"><router-link to="/profile">Your Profile</router-link></a></li>
						<li><a class="button primary"><router-link to="/">Logout</router-link></a></li>
					</ul>
				</nav>
			</header>
    <router-view/>
  </div>
</template>
