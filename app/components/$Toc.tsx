import { useEffect } from "hono/jsx";
import tocbot from "tocbot";

export default function Toc() {
	useEffect(() => {
		if (!import.meta.env.DEV && import.meta.env.MODE !== "client") return;

		tocbot.init({
			tocSelector: ".toc",
			contentSelector: ".post-content",
			headingSelector: "h2, h3",
			scrollSmoothOffset: -10,
		});
		return () => tocbot.destroy();
	}, []);

	return (
		<div className="card shadow-sm shadow-base-300">
			<div className="card-body">
				<h2 className="card-title text-sm lg:text-base">目次</h2>
				<div class="toc text-sm" />
			</div>
		</div>
	);
}
