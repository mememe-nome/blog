import type { JSX } from "hono/jsx/jsx-runtime";
import Info from "./Info";
import Code from "./Code";

export function useMDXComponents() {
	return {
		h1: (props: JSX.IntrinsicElements["h1"]) => (
			<h1 className="text-4xl font-bold py-2 border-b my-4" {...props}>
				{props.children}
			</h1>
		),
		h2: (props: JSX.IntrinsicElements["h2"]) => (
			<h2 className="text-2xl font-semibold py-2 border-b mt-4 mb-2" {...props}>
				{props.children}
			</h2>
		),
		h3: (props: JSX.IntrinsicElements["h3"]) => (
			<h3 className="font-semibold py-2 border-b" {...props}>
				{props.children}
			</h3>
		),
		h4: (props: JSX.IntrinsicElements["h4"]) => (
			<h4 className="font-semibold -mb-4" {...props}>
				{props.children}
			</h4>
		),
		ol: (props: JSX.IntrinsicElements["ol"]) => (
			<ol class="list-decimal list-inside mb-2">{props.children}</ol>
		),
		ul: (props: JSX.IntrinsicElements["ul"]) => (
			<ul class="list-disc list-inside mb-2">{props.children}</ul>
		),
		hr: (props: JSX.IntrinsicElements["hr"]) => <></>,

		p: (props: JSX.IntrinsicElements["p"]) => (
			<p className="mb-2" {...props}>
				{props.children}
			</p>
		),

		a: (props: JSX.IntrinsicElements["a"]) => (
			<a className="text-blue-500 hover:underline" {...props}>
				{props.children}
			</a>
		),

		blockquote: (props: JSX.IntrinsicElements["blockquote"]) => (
			<blockquote
				className="text-slate-11 border-l-4 border-slate-6 pl-4 py-2"
				{...props}
			>
				{props.children}
			</blockquote>
		),

		code: (props: JSX.IntrinsicElements["code"]) => (
			<code className="font-mono bg-base-200 p-[1px] rounded-sm" {...props}>
				{props.children}
			</code>
		),

		pre: (props: JSX.IntrinsicElements["pre"]) => {
			return <>{props.children.props?.children}</>;
		},

		Info: Info,

		Code: Code,
	};
}
