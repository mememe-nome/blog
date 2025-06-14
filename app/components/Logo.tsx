export default function Logo() {
	return (
		<a href="/" className="text-4xl">
			<ruby>
				<div className="flex items-center">
					<img
						src="/logomoji.png"
						alt="Mememe logomoji"
						className="h-1em w-auto align-middle"
						style={{ height: "1em", width: "auto" }}
					/>
					log
				</div>
				<rt className="text-base">めめろぐ</rt>
			</ruby>
		</a>
	);
}
