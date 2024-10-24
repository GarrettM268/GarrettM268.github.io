<template>
	<ThemePicker/>
	<div class="page max-h-screen">
		<router-view/>
	</div>
</template>


<script setup>
import { watch } from 'vue';
import HeaderBar from './components/HeaderBar.vue';
import '@/assets/styles.less';
import { useThemeStore } from './Stores/ThemeStore';
import ThemePicker from './components/ThemePicker.vue';


</script>


<style scoped>
	#contact {
		float: right;
		padding: 3%;
	}
</style>
