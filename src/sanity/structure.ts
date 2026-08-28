import { StructureBuilder } from 'sanity/structure';

const SINGLETONS = [
  { id: 'siteSettings', title: 'Site Settings' },
  { id: 'homePage', title: 'Home Page' },
  { id: 'aboutPage', title: 'About Page' },
  { id: 'contactPage', title: 'Contact Page' },
  { id: 'pricingPage', title: 'Pricing Page' },
  { id: 'rentalPolicy', title: 'Rental Policy' },
] as const;

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      ...SINGLETONS.map((item) =>
        S.listItem()
          .title(item.title)
          .id(item.id)
          .child(S.document().schemaType(item.id).documentId(item.id).title(item.title)),
      ),
      S.divider(),
      S.documentTypeListItem('galleryImage').title('Gallery Images'),
      S.documentTypeListItem('pricingPackage').title('Pricing Packages'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.documentTypeListItem('review').title('Reviews'),
    ]);
