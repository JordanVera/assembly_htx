import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'welcome', title: 'Welcome' },
    { name: 'cta', title: 'CTA Strip' },
  ],
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      group: 'hero',
      description: 'Leave blank to use “Houston, Texas · Up to X Guests”',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadlineAccent',
      title: 'Hero Headline Accent (italic)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubhead',
      title: 'Hero Subhead',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroSlides',
      title: 'Hero Slides',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
          ],
          preview: {
            select: { title: 'alt', media: 'image' },
          },
        },
      ],
    }),
    defineField({
      name: 'welcomeEyebrow',
      title: 'Welcome Eyebrow',
      type: 'string',
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeHeadline',
      title: 'Welcome Headline',
      type: 'string',
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeHeadlineAccent',
      title: 'Welcome Headline Accent (italic)',
      type: 'string',
      group: 'welcome',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
      group: 'welcome',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 4,
      group: 'welcome',
    }),
    defineField({
      name: 'evolution',
      title: 'Closing Paragraph',
      type: 'text',
      rows: 3,
      group: 'welcome',
    }),
    defineField({
      name: 'highlights',
      title: 'Venue Highlights',
      type: 'array',
      group: 'welcome',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
    defineField({
      name: 'ctaEyebrow',
      title: 'CTA Eyebrow',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaHeadlineAccent',
      title: 'CTA Headline Accent (italic)',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaBody',
      title: 'CTA Body',
      type: 'text',
      rows: 3,
      group: 'cta',
    }),
    defineField({
      name: 'ctaBackground',
      title: 'CTA Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'cta',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
});
