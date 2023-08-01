import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import  schema from "./schemas/schema";
import deskStructure from "./deskStructure";
import { visionTool } from "@sanity/vision";
// import { myStructure } from "./deskStructure"; 

export default defineConfig({
  title: "stastnesrdce",
  projectId: "gdle0r99",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schema,
  },
});
