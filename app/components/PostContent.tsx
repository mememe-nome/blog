import type { Child } from "hono/jsx";

export default function PostContent({
	children,
	title,
	createdAt,
	updatedAt,
}: { children: Child; title: string; createdAt: string; updatedAt: string }) {
	return (
		<div className="card">
			<div className="card-body">
				<div className=" pb-2 border-b mb-4">
					<h1 className="card-title text-4xl font-bold">
						{title ? title : "Post Header"}
					</h1>
					<p className="text-sm mt-2">
						作成日: {createdAt} / 最終更新日: {updatedAt}
					</p>
				</div>
				<div className="post-content">{children}</div>
			</div>
		</div>
	);
}
