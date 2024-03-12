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
    authors: z.array(z.string()).default(['nicobytes']),
	lang: z.string().default('en'),
	draft: z.boolean().default(true),
  }),
});

export const PortfolioCategories = new Map([
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

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
		description: z.string().min(1),
		fullDescription: z.string().optional(),
		image: z.string(),
		images: z.array(z.string()).default([]),
    categories: z.array(z.enum(Array.from(PortfolioCategories.keys()) as [string, ...string[]])),
		repoUrl: z.string().url().optional(),
		demoUrl: z.string().url().optional(),
    publishDate: z.date({ coerce: true }).optional(),
  }),
});

export const collections = { blog, portfolio };
