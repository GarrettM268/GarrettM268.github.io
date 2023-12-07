<template>
	<div class="header" id="nav">
		<ul>
			<li>
				<router-link class="nav-link" id="About" :to="{name: 'About'}">About Me</router-link>
			</li>
			<li>
				<router-link class="nav-link" id="Home" :to="{name: 'Home'}">Home</router-link>
			</li>
		</ul>
    </div>
	<header class="header" >
		<div>
			<h1>Hi,</h1>
			<h3>I'm Garrett Mullings.</h3>
		</div>
	</header>

</template>

<style scoped>
	#nav {
		float: right;
	}

</style>