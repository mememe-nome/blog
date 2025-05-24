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

export default defineConfig({
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
			remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
		}),
		ssg({
			entry: "./app/server.ts",
		}),
	],
});
