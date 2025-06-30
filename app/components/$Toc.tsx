import { useEffect } from "hono/jsx";
import tocbot from "tocbot";

interface TocProps {
	isMobile?: boolean;
}

export default function Toc({ isMobile = false }: TocProps) {
	useEffect(() => {
		if (!import.meta.env.DEV && import.meta.env.MODE !== "client") return;

		// モバイル/デスクトップに応じて適切なセレクターを使用
		const tocSelector = isMobile ? ".toc-mobile" : ".toc-desktop";

		tocbot.init({
			tocSelector,
			contentSelector: ".post-content",
			headingSelector: "h2, h3",
			scrollSmoothOffset: -10,
		});
		return () => tocbot.destroy();
	}, [isMobile]);

	return (
		<div className="card shadow-sm shadow-base-300">
			<div className="card-body p-3">
				<ul className="menu p-0 w-full">
					<li>
						{isMobile ? (
							<details>
								<summary className="cursor-pointer">目次</summary>
								<ul>
									<div className="toc-mobile text-sm" />
								</ul>
							</details>
						) : (
							<>
								<span>
									目次
								</span>
								<ul>
									<div className="toc-desktop text-sm" />
								</ul>
							</>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
}
