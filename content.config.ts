import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod/v4";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
});
