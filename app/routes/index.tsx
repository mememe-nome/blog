import { createRoute } from "honox/factory";
import { getPosts } from "../utils/posts";
import type { Post } from "../utils/posts";

function groupPostsByYear(): { yyyy: number; posts: Post[] }[] {
	const posts = getPosts();
	const grouped: Record<number, Post[]> = {};

	for (const post of posts) {
		const yyyy = Number(post.slug.slice(0, 4));
		if (!grouped[yyyy]) grouped[yyyy] = [];
		grouped[yyyy].push(post);
	}

	return Object.entries(grouped)
		.map(([yyyy, posts]) => ({
			yyyy: Number(yyyy),
			posts,
		}))
		.sort((a, b) => a.yyyy - b.yyyy); // 年の昇順
}

export default createRoute((c) => {
	const grouped = groupPostsByYear();

	return c.render(
		<div>
			{grouped.map(({ yyyy, posts }) => (
				<section key={yyyy} className="mb-8">
					<h2 className="text-2xl font-bold">{yyyy}</h2>
					{posts.map((post) => (
						<a
							href={`/posts/${post.slug}`}
							key={post.slug}
							className="card shadow-sm shadow-base-300"
						>
							<div className="card-body">
								<div className="card-title">{post.frontmatter.title}</div>
								<p className="text-sm">
									作成日: {post.frontmatter.createdAt} / 最終更新日:{" "}
									{post.frontmatter.updatedAt}
								</p>
							</div>
						</a>
					))}
				</section>
			))}
		</div>,
	);
});
