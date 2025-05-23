import { createRoute } from "honox/factory";
import { getPost } from "../../utils/posts";
import Toc from "../../components/$Toc";
import PostContent from "../../components/PostContent";

export default createRoute(async (c) => {
	const slug = c.req.param("slug");
	const post = getPost(slug);

	return c.render(
		<div className="flex justify-between">
			<div className="w-2/3 pr-4">
				{/* 左側のコンテンツ */}
				<PostContent
					title={post.frontmatter.title}
					createdAt={post.frontmatter.createdAt}
					updatedAt={post.frontmatter.updatedAt}
				>
					{post.Component()}
				</PostContent>
			</div>
			<div className="w-1/3 pl-4">
				<div className="sticky top-8">
					<Toc />
				</div>
			</div>
		</div>,
	);
});
