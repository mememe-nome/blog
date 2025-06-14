import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageWidthPadding from "../components/PageWidthPadding";

export default jsxRenderer(({ children }) => {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.webp" />
				<Link href="/app/style.css" rel="stylesheet" />
				<Script src="/app/client.ts" async />
				<Script src="/app/initTheme.ts" />
			</head>
			<body className="flex flex-col min-h-screen">
				<div className="flex-grow">
					<Header />
					<PageWidthPadding>{children}</PageWidthPadding>
				</div>
				<Footer />
			</body>
		</html>
	);
});
