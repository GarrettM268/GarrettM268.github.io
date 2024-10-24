<template>
	<div
		class="theme-picker flex items-center" 
	>
		<div
			class="arrow-tab p-4 flex justify-center-items-center relative"
			@pointerup="showMenu = !showMenu"
			:class="{ 'arrow-tab-open': showMenu }"
		>
			<div class="arrow"></div>
		</div>
		<Transition>
			<div class="flex items-center" v-if="showMenu">
				<div
					class="theme-menu font-size-small"
				>
					<ul>
						<li
							v-for="theme in themeStore.themes"
							class="flex gap-2"
						>
							<input
								type="radio"
								:id="theme"
								:name="theme"
								:checked="themeStore.activeTheme === theme"
								@change="themeStore.applyTheme(theme)"
							>
							<label :for="theme">{{ theme }}</label>
						</li>
					</ul>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup>
	import { useThemeStore } from '../Stores/ThemeStore';
	import { ref } from 'vue';

	const themeStore = useThemeStore();

	const showMenu = ref(false);
</script>

<style scoped>
	.theme-picker {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.arrow-tab {
		background-color: var(--color-gray-80);
		max-height: min-content;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		transition: transform 0.3s linear;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.arrow-tab-open {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		transform: translateX(-120px) translateY(-50%);
	}
	.arrow {
		display: block;
		width: 0;
		height: 0;
		border-left: 15px solid transparent;
		border-right: 15px solid transparent;
		border-top: 15px solid var(--color-accent);
		transform: rotate(90deg);
		transition: transform 0.3s ease;
	}
	.theme-menu {
		z-index: 1000;
		background-color: var(--color-gray-80);
		padding: 10px;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.v-enter-active {
		transition: all 0.3s linear;
	}

	.v-leave-active {
		transition: all 0.3s linear;
	}

	.v-enter-from,
	.v-leave-to {
		transform: translateX(120px);
	}
</style>