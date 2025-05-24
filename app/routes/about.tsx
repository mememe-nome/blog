import { createRoute } from "honox/factory";

export default createRoute((c) => {
	return c.render(
		<div className="flex flex-col items-center justify-center min-h-[60vh]">
			<h1 className="text-4xl mb-4">It's me!</h1>
		</div>,
	);
});
