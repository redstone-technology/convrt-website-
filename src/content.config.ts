import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Blog posts live in src/content/blog/en and src/content/blog/ar. A post and
// its translation share the same file name, so they link to each other.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { blog }
