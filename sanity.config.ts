import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { jobType } from './sanity/schemas/job'

export default defineConfig({
  name: 'gigmarines',
  title: 'gigmarines',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: [jobType],
  },
})
