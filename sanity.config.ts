import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";

const config = defineConfig({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: "2023-7-30",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [],
  },
});

export default config;
