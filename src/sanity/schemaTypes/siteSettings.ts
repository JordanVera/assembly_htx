import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Company Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'shortName', title: 'Short Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone (display)', type: 'string' }),
    defineField({ name: 'phoneHref', title: 'Phone (tel: href)', type: 'string', description: 'e.g. +18325810516' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Street Address', type: 'string' }),
    defineField({ name: 'city', title: 'City / ZIP', type: 'string' }),
    defineField({ name: 'serviceArea', title: 'Service Area', type: 'string' }),
    defineField({ name: 'maxGuests', title: 'Max Guests', type: 'number' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'instagramHandle', title: 'Instagram Handle', type: 'string' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'website', title: 'Website URL', type: 'url' }),
    defineField({ name: 'googleUrl', title: 'Google Maps URL', type: 'url' }),
    defineField({ name: 'googleReviewsUrl', title: 'Google Reviews URL', type: 'url' }),
    defineField({ name: 'googleRating', title: 'Google Rating', type: 'number' }),
    defineField({ name: 'reviewCount', title: 'Review Count', type: 'number' }),
    defineField({ name: 'seoTitle', title: 'Default SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Default SEO Description', type: 'text', rows: 3 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'tagline' },
  },
});
