import { defineField, defineType } from 'sanity';

export const pricingPackage = defineType({
  name: 'pricingPackage',
  title: 'Pricing Package',
  type: 'document',
  fields: [
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      options: {
        list: [
          { title: 'Venue Package', value: 'package' },
          { title: 'Add-On', value: 'addon' },
        ],
        layout: 'radio',
      },
      initialValue: 'package',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug / ID', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'price', title: 'Price Label', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'priceNote', title: 'Price Note', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'highlighted',
      title: 'Highlighted (Most Popular)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'price', kind: 'kind' },
    prepare: ({ title, subtitle, kind }) => ({
      title,
      subtitle: `${kind === 'addon' ? 'Add-on · ' : ''}${subtitle || ''}`,
    }),
  },
});
