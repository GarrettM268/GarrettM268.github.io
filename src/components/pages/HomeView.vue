<template>
	<div class="header-container">
		<HeaderBar/>
	</div>
	<div class="card-container">
		<RouterLink :to="{ name: 'Todo' }" tag="div">
			<div class="app-card">
				<p>A to-do app built with Vue3 </p>
			</div>
		</RouterLink>
		<a href="https://new.express.adobe.com/webpage/UqguRAH60miwF">
			<div class="app-card">
				<p>A UX Design course semester project</p>
			</div>
		</a>
	</div>
</template>

<script setup>
	import HeaderBar from '../HeaderBar.vue';
</script>

<style scoped>
	.app-card {
		width: 25rem;
		height: 25rem;
		background-color: rgb(56, 99, 56);
		border-radius:  1.5rem;
		color: white;
		text-align: center;
	}
	p {
		padding-top: 45%;
	}
	a:visited {
  		color: white !important; /* Ensures visited links also appear white */
	}
	.app-card:hover {
		width: 26rem;
		height: 26rem;
	}
	.card-container {
		position: relative;
		top: 11vh;
		margin: 5%;
		display: grid;
		row-gap: 5rem;
		column-gap: 5rem;
		grid-template-columns: 25rem 25rem;
		grid-template-rows: 25rem;
		justify-content: center;
	}
	h1 {
		padding-left: 2%;
		margin-top:0px;
		font-weight: 1200;
	}
	h3 {
		padding-left: 3%;
		font-weight: 1000;
	}
</style>