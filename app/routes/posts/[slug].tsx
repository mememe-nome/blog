import { createRoute } from "honox/factory";
import { getPost } from "../../utils/posts";

export default createRoute(async (c) => {
	const slug = c.req.param("slug");
	const post = getPost(slug);

	return c.render(<div>{post.Component()}</div>);
});
