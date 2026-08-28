import { defineField, defineType } from 'sanity';

export const review = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Reviewer Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'event', title: 'Event / Source Label', type: 'string' }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (r) => r.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({ name: 'text', title: 'Review Text', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'event' },
  },
});
