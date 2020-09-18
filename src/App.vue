<template>
  <div id="app">
    <header id="header">
				<h1 id="logo"><a href="index.html">Meetup</a></h1>
				<nav id="nav">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li>
							<a href="meetups.html">Meetups</a>
						</li>
						<li><a href="newMeetup.html">New Meetup</a></li>
						<li><a href="#">Your Profile</a></li>
						<li><a href="#" class="button primary">Logout</a></li>
					</ul>
				</nav>
			</header>
    <router-view/>
  </div>
</template>
