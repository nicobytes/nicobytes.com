import { defineCollection, z } from 'astro:content';

export const BlogCategories = new Map([
	["featured", "Featured"],
	["recent", "Recently Added"],
	["official", "Official"],
	["blog", "Blog"],
	["landing-page", "Landing Page"],
	["portfolio", "Portfolio"],
	["ecommerce", "E-commerce"],
	["docs", "Docs"],
	["minimal", "Minimal"],
	["other", "Other"],
] as const)

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).default(['others']),
    tags: z.array(z.string()).default(['others']),
	lang: z.string().default('en'),
	draft: z.boolean().default(false),
	langLink: z.string().optional(),
	repoLink: z.string().optional(),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
	description: z.string().min(1),
	image: z.string(),
	url: z.string().url().optional(),
	pubDate: z.coerce.date(),
	type: z.string().default('private'),
	draft: z.boolean().default(false),
  }),
});

export const collections = { blog, portfolio };
