import { defineField, defineType } from 'sanity';

export const pricingPage = defineType({
  name: 'pricingPage',
  title: 'Pricing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'notes',
      title: 'Good to Know Notes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'addonsHeading',
      title: 'Add-Ons Section Heading',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Pricing Page' }),
  },
});
