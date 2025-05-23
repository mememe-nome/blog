import { promises } from "node:fs";
import { $ } from "bun";
import prompts from "prompts";

const result = await prompts(
	[
		{
			type: "text",
			name: "entryTitle",
			message: "記事のタイトルを入力してください:",
		},
		{
			type: "text",
			name: "entryPath",
			message: "記事のuriを入力してください:",
		},
	],
	{
		onCancel: () => {
			process.exit(0);
		},
	},
);

const entryTitle = result.entryTitle as string;
const entryPath = result.entryPath as string;

// yyyyMMddの形式で今日の日付を取得
const date = new Date();
const yyyy = new Date(date.getTime() + 9 * 60 * 60 * 1000).getFullYear(); // JST
const yyyyMMdd = date
	.toLocaleDateString("ja-JP", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	})
	.replaceAll("/", ""); // 例: 20990101
const frontmatterDate = date
	.toLocaleDateString("ja-JP", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	})
	.replaceAll("/", "-"); // 例: 2099-01-01

// ディレクトリ作成（./app/posts/2025）
const { exitCode } = await $`ls ./app/posts/${yyyy}`.nothrow().quiet();
if (exitCode !== 0) {
	await $`mkdir -p ./app/posts/${yyyy}`;
}

// ファイル名を組み立て
const filePath = `./app/posts/${yyyy}/${yyyyMMdd}-${entryPath}.mdx`;

// ファイルを生成
await $`touch ${filePath}`;

const frontMatter = `---
title: ${entryTitle}
createdAt: ${frontmatterDate}
updatedAt: ${frontmatterDate}
---
`;

await promises.writeFile(filePath, frontMatter);

await $`echo ${filePath} is created.`;
await $`code ${filePath}`;
