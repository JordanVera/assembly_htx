import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'introTitle', title: 'Intro Title', type: 'string' }),
    defineField({ name: 'introBody', title: 'Intro Body', type: 'text', rows: 3 }),
    defineField({ name: 'hours', title: 'Hours', type: 'string' }),
    defineField({ name: 'formTitle', title: 'Form Title', type: 'string' }),
    defineField({ name: 'formSubtitle', title: 'Form Subtitle', type: 'text', rows: 2 }),
  ],
  preview: {
    prepare: () => ({ title: 'Contact Page' }),
  },
});
