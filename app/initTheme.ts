import themes from "./constants/themes";

const initTheme = () => {
	const isDark = localStorage.getItem("data-theme") === "dark";
	const isSystemDark = window.matchMedia(
		"(prefers-color-scheme: dark)",
	).matches;

	console.log("Current theme:", isDark);
	console.log("System dark mode:", isSystemDark);

	if (isDark || (isDark == null && isSystemDark)) {
		document.documentElement.setAttribute(
			"data-theme",
			themes.get("dark")?.displayName || "dark",
		);
	} else {
		document.documentElement.setAttribute(
			"data-theme",
			themes.get("light")?.displayName || "light",
		);
	}
};

initTheme();
