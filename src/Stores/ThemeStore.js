import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useThemeStore = defineStore('themes', () =>{
	//the list of all valid themes - the css for each theme can be found in variables.less.
	const themes = ['midnight', 'BnW', 'light'];

	//midnight is the default theme, change this to change teh theme displayed in the UI.
	const activeTheme = ref('midnight');

	const applyTheme = (theme) => {
		//ensure the theme is a valid theme
		if (themes.includes(theme)) {
			//clear the current class applied to the body
			document.body.classList.remove(`theme-${activeTheme.value}`);
			//track the new current theme
			activeTheme.value = theme;
			//apply the new theme class to the body
			document.body.classList.add(`theme-${theme}`);
		} else {
			console.error('Invalid theme', theme);
		}
	}
	
	return {
		themes,
		activeTheme,

		applyTheme,
	}
})