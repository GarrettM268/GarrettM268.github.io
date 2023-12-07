import { ref } from 'vue' 
import { defineStore } from 'pinia'

export const useAboutContentStore = defineStore('about',() => {
	/** states */
	const aboutItems = ref([
		{
			text: 'I\'m a student and web developer studying computer science at Montana State University, in Bozeman, Montana',
			id: 1
		}
	])
	/** getters (computed) */

	/** actions (methods) */


	/**return everything needed */
	return { aboutItems }
})