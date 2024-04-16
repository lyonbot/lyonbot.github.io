import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://lyonbot.github.io/",
	base: "/",
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
		remarkPlugins: [
			remarkMath,
		],
		rehypePlugins: [
			rehypeMathjax,
			rehypeAstroRelativeMarkdownLinks,
		],
	},
	integrations: [
		mdx({}),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		sitemap(),
		prefetch(),
	],
	compressHTML: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
