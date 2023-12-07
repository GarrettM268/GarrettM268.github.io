<template>
	<div class="content-container" @click="console.log(aboutItem.id)">
		<div class="text-container">
			<p>{{ aboutItem.text }}</p>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const props = defineProps(['aboutItem'])

</script>

<style scoped>
	.content-container {
		height: 300px;
		width: 300px;
		padding: 10px;
		background-color: seagreen;
		border-radius: 10px;
	}
	.content-container:hover {
		height: 305px;
		width: 305px;
  		padding: 10px;
  		box-shadow: 5px 10px 18px rgba(136, 130, 130, 0.659);
	}
	.text-container {
		padding: 10px;
		
	}
	p {
		height: auto;
		margin: 0px;
	}
</style>