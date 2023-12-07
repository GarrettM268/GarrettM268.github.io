<template>
	<div class="header-container">
		<HeaderBar/>
	</div>
	<div class="content-container">
		<div class="text-bar">
			<p>I am a web developer and outdoors enthusiast studying compuer science at Montana State University.</p>
		</div>
	</div>
</template>

<script setup>
	import HeaderBar from '../HeaderBar.vue';
	import { useAboutContentStore } from '../../Stores/useAboutContentStore';
	
	const store = useAboutContentStore();
</script>

<style scoped>
	.content-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-top: 5vh;
		justify-content: end;
	}
	
	.text-bar {
		height: 40vh;
		text-align: center;
		background-color: darkslategray
	}
</style>