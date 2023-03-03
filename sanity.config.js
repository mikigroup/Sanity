import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  title: "stastnesrdce",
  projectId: "gdle0r99",
  dataset: "production",
  plugins: [deskTool({
    structure: deskStructure
  }),
  visionTool()
],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
  },
});
