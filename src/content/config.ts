import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    order: z.number(), // display order
    website: z.string().url(),
    github: z.string().url().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
};
