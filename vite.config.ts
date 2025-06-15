import build from "@hono/vite-build/cloudflare-workers";
import adapter from "@hono/vite-dev-server/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import ssg from "@hono/vite-ssg";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			honox({
				devServer: { adapter },
				client: { input: ["./app/style.css", "./app/initTheme.ts"] },
			}),
			tailwindcss(),
			build(),
			mdx({
				jsxImportSource: "hono/jsx",
				providerImportSource: "/app/lib/useMdx",
				remarkPlugins: [
					remarkBreaks,
					remarkFrontmatter,
					remarkMdxFrontmatter,
					remarkGfm,
				],
				rehypePlugins: [
					[rehypePrettyCode, { theme: "catppuccin-frappe" }],
					rehypeSlug,
				],
			}),
			ssg({
				entry: "./app/server.ts",
			}),
		],
	};
});
