import { defineField, defineType } from 'sanity';

export const rentalPolicy = defineType({
  name: 'rentalPolicy',
  title: 'Rental Policy',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({
      name: 'pdfUrl',
      title: 'PDF URL',
      type: 'url',
      description: 'External PDF link, or upload below',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sections',
      title: 'Policy Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Section Title', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Rental Policy' }),
  },
});
