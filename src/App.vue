<script setup>
import HeaderBar from './components/HeaderBar.vue';
import '@/assets/styles.less';


</script>

<template>
	<div class="page max-h-screen">
		<router-view/>
	</div>
</template>

<style scoped>
	#contact {
		float: right;
		padding: 3%;
	}
</style>
