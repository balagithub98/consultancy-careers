import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { jobType } from './sanity/schemas/job'

export default defineConfig({
  name: 'consultancy-careers',
  title: 'Consultancy Careers',
  projectId: '9usx959t',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: [jobType],
  },
})
