import { createRoute } from "honox/factory";
import { getPost, getPostSlugs } from "../../utils/posts";
import Toc from "../../components/$Toc";
import PostContent from "../../components/PostContent";
import { ssgParams } from "hono/ssg";

export default createRoute(
	ssgParams(() => {
		const slugs = getPostSlugs();
		return slugs;
	}),

	async (c) => {
		const slug = c.req.param("slug");
		const post = getPost(slug);

		return c.render(
			<div>
				{/* モバイル: 目次を上部に表示（折りたたみ） */}
				<div className="block lg:hidden mb-6">
					<Toc isMobile={true} />
				</div>

				{/* メインレイアウト */}
				<div className="flex flex-col lg:flex-row lg:justify-between gap-6">
					<div className="lg:w-2/3 lg:pr-4">
						{/* メインコンテンツ */}
						<PostContent
							title={post.frontmatter.title}
							createdAt={post.frontmatter.createdAt}
							updatedAt={post.frontmatter.updatedAt}
						>
							{post.Component()}
						</PostContent>
					</div>
					<div className="hidden lg:block lg:w-1/3 lg:pl-4">
						<div className="lg:sticky lg:top-8">
							<Toc isMobile={false} />
						</div>
					</div>
				</div>
			</div>,
		);
	},
);
