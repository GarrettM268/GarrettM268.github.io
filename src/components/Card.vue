<template>
	<div 
		class="card rounded-xl p-4 flex flex-col items-center text-wrap"
		:style="cardSize"	
	>
		<div class="flex flex-col gap-2">
			<slot name="dates" id="dates"></slot>
			<slot name="title" id="title"></slot>
			<slot name="content" id="content"></slot>
			<div class="flex gap-2 p-2 flex-wrap">
				<div
					v-for="tag in tags"
					class="tag px-2 py-1 rounded-3xl"
				>
					{{ tag }}
				</div>	
			</div>
		</div>
	</div>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
	size: {
		type: String,
		default: 'medium',
		validator: (value) => {
			return ['large', 'medium', 'small', 'full-width'].includes(value);
		},
	},
	tags: {
		type: Array,
		default: () => [],
	},
});

const cardSize = computed(() => {
	if (props.size === 'large') {
        return {
          width: '500px',
          height: '500'
        };
      } else if (props.size === 'medium') {
        return {
          width: '350px',
          height: '350px'
        };
      } else if (props.size === 'small') {
        return {
          width: '25px',
          height: '25px'
        };
      } else if (props.size === 'full-width') {
		return {
		  width: '95%',
		  minHeight: '425px',
		};
	}
});
</script>

<style scoped>
	.card:hover {
		background-color: var(--highlight-color);
	}
</style>