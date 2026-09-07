import { defineType, defineField } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Tagline',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Supply Chain Tech', value: 'Supply Chain Tech' },
          { title: 'Data Science & ML', value: 'Data Science & ML' },
          { title: 'Web Applications', value: 'Web Applications' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Screenshot / Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Repository URL',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Deployment URL',
      type: 'url',
    }),
    defineField({
      name: 'tags',
      title: 'Technologies & Skills Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'detailedCaseStudy',
      title: 'Deep-Dive Narrative Case Study (Markdown / Text)',
      type: 'text',
      rows: 10,
    }),
  ],
})
