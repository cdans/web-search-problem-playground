import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const { subscribe, set, update } = writable(false);

	// Initialize theme from localStorage or system preference
	if (browser) {
		const isThemeStored = 'theme' in localStorage;
		const isStoredThemeDark = localStorage.theme === 'dark';
		const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (isStoredThemeDark || (!isThemeStored && isDarkModePreferred)) {
			document.documentElement.classList.add('dark');
			set(true);
		}
	}

	return {
		subscribe,
		toggle: () => {
			update((darkMode) => {
				const newDarkMode = !darkMode;
				localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');

				newDarkMode
					? document.documentElement.classList.add('dark')
					: document.documentElement.classList.remove('dark');

				return newDarkMode;
			});
		}
	};
}

export const darkMode = createThemeStore();
