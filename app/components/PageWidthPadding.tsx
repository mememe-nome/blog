import type { Child } from "hono/jsx";

export default function PageWidthPadding({ children }: { children: Child }) {
	return <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">{children}</div>;
}
