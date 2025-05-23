import type { Child } from "hono/jsx";

export default function PageWidthPadding({ children }: { children: Child }) {
	return <div className="px-10">{children}</div>;
}
