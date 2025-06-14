import GitHub from "./icons/services/GitHub";
import Qiita from "./icons/services/Qiita";
import Twitter from "./icons/services/Twitter";
import X from "./icons/services/X";
import Zenn from "./icons/services/Zenn";
import PageWidthPadding from "./PageWidthPadding";

export default function Footer() {
	return (
		<footer className="bg-base-200 items-center py-4">
			<PageWidthPadding>
				<div className="footer sm:footer-horizontal">
					<aside className="grid-flow-col items-center gap-2">
						<img
							src="/favicon.webp"
							alt="Mememe icon"
							className="w-16 h-16 rounded-full"
						/>
						<p>
							Copyright © {new Date().getFullYear()} Mememe - All right reserved
							<br />
							<a href="/about">About</a>
						</p>
					</aside>
					<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
						<a href="https://x.com/" className="relative group">
							<span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
								<Twitter />
							</span>
							<span className="flex items-center justify-center group-hover:opacity-0 transition-opacity">
								<X />
							</span>
						</a>
						<a href="https://github.com/">
							<GitHub />
						</a>
						<a href="https://zenn.dev/">
							<Zenn />
						</a>
						<a href="https://qiita.com/">
							<Qiita />
						</a>
					</nav>
				</div>
			</PageWidthPadding>
		</footer>
	);
}
