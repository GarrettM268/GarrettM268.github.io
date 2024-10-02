<template>
	<div class="content-container">
		<div class="text-bar">
			<p>
				Hello, 
				<br><br>
				I'm Garrett Mullings, and I'm an aspiring front end developer. Originally raised in Ellensburg Washington, I am now in my final year of formally studying computer science at
				Montana State University, In bozeman Montana. I have the goal of making a career out of creating simple, effective, and accessible solutions that utilize the capabilities of
				modern technologies to the fullest extent.
				<br><br>
				Outside of web development, I enjoy all things that have to do with the outdoors. I believe nature can be the best source of inspiration for new ideas, whether youre an artist, 
				developer, or engineer. Additionally, these days it seems there isnt any outdoor pursuit that does not extensively utilize technology and web-based apps to enhance the pursuit.
			</p>
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
		background-color: darkslategray;
		padding-left: 20px;
	}

	/* p {
		text-align: center;
	} */
</style>