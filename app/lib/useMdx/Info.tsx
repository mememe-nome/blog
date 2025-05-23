import type { Child } from "hono/jsx";
import InfoIcon from "./icons/InfoIcon";

export default function Info({ children }: { children: Child }) {
	return (
		<div className="bg-info text-info-content rounded-md mb-2 p-2">
			<InfoIcon />
			{children}
		</div>
	);
}
