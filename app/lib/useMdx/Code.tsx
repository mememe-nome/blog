import type { Child } from "hono/jsx";

export default function Code({
	children,
	filepath,
}: { children: Child; filepath?: string }) {
	return (
		<div className="rounded-md overflow-hidden my-4">
			{/* タブヘッダー部分 */}
			{filepath && (
				<div className="bg-accent text-accent-content text-sm px-4 py-2">
					{filepath}
				</div>
			)}
			{/* コードブロック部分 */}
			<pre className="overflow-x-auto bg-secondary p-4">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				<code>{(children as any).children ?? children}</code>
			</pre>
		</div>
	);
}
