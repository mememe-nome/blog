import type { JSX } from "hono/jsx/jsx-runtime";

type Frontmatter = {
	title: string;
	createdAt: string;
	updatedAt: string;
};

type File = {
	slug: string;
	frontmatter: Frontmatter;
	default: () => JSX.Element;
};

export type Post = {
	slug: string;
	frontmatter: Frontmatter;
	Component: () => JSX.Element;
};

const postFiles = import.meta.glob<File>("/app/posts/**/*.md", { eager: true });

export const getPosts = (): { posts: Post[] } => {
	const posts = Object.entries(postFiles)
		.map(([path, file]) => {
			const match = path.match(/([^/]+)\.md$/);
			if (!match) throw new Error(`Invalid path, ${path}`);

			return {
				slug: match[1],
				frontmatter: file.frontmatter,
				Component: file.default,
			};
		})
		.sort((a, b) => {
			return (
				new Date(b.frontmatter.createdAt).getTime() -
				new Date(a.frontmatter.createdAt).getTime()
			);
		});

	return { posts };
};

export const getPost = (slug: string): Post => {
	const posts = getPosts();
	const post = posts.posts.find((post) => post.slug === slug);

	if (!post) {
		throw new Error(`File not found: ${slug}`);
	}

	return post;
};
