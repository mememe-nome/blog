import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import themes from "../constants/themes";
import { useState, useEffect } from "hono/jsx";

export default function ThemeButton() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsDark(
				document.documentElement.getAttribute("data-theme") ===
					themes.get("dark")?.displayName,
			);
		}
	}, []);

	const toggleTheme = () => {
		const nextIsDark =
			document.documentElement.getAttribute("data-theme") ===
			themes.get("dark")?.displayName;

		if (nextIsDark) {
			localStorage.setItem("data-theme", "light");
			document.documentElement.setAttribute(
				"data-theme",
				themes.get("light")?.displayName || "light",
			);
			setIsDark(false);
		} else {
			localStorage.setItem("data-theme", "dark");
			document.documentElement.setAttribute(
				"data-theme",
				themes.get("dark")?.displayName || "dark",
			);
			setIsDark(true);
		}
	};

	return (
		<label className="swap swap-rotate">
			<input type="checkbox" onClick={toggleTheme} checked={isDark} />
			<Sun className="swap-off h-12 w-12" />
			<Moon className="swap-on h-12 w-12" />
		</label>
	);
}
