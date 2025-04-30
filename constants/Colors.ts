/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
	light: {
		// tint
		tint: tintColorLight,
		tintPink: "#ff2758",
		tintCyan: "#2af0ea",

		// other
		text: "#000",
		background: "#fff",
		icon: "#687076",
		tabIconDefault: "#687076",
		tabIconSelected: tintColorLight,
		input: "#f3f4f6",
	},
	dark: {
		// tint
		tint: tintColorDark,
		tintPink: "#ff2758",
		tintCyan: "#2af0ea",

		// other
		text: "#fff",
		background: "#000",
		icon: "#9BA1A6",
		tabIconDefault: "#9BA1A6",
		tabIconSelected: tintColorDark,
		input: "#f3f4f6",
	},
};
