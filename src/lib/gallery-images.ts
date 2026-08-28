export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "/gallery/gallery-01.jpg", alt: "Assembly venue photo 1", category: "patio", featured: true },
  { id: 2, src: "/gallery/gallery-02.jpg", alt: "Assembly venue photo 2", category: "events", featured: true },
  { id: 3, src: "/gallery/gallery-03.jpg", alt: "Assembly venue photo 3", category: "interior", featured: true },
  { id: 4, src: "/gallery/gallery-04.jpg", alt: "Assembly venue photo 4", category: "patio", featured: true },
  { id: 5, src: "/gallery/gallery-05.jpg", alt: "Assembly venue photo 5", category: "events", featured: true },
  { id: 6, src: "/gallery/gallery-06.jpg", alt: "Assembly venue photo 6", category: "interior", featured: true },
  { id: 7, src: "/gallery/gallery-07.jpg", alt: "Assembly venue photo 7", category: "patio", featured: true },
  { id: 8, src: "/gallery/gallery-08.jpg", alt: "Assembly venue photo 8", category: "events", featured: true },
  { id: 9, src: "/gallery/gallery-09.jpg", alt: "Assembly venue photo 9", category: "interior", featured: false },
  { id: 10, src: "/gallery/gallery-10.jpg", alt: "Assembly venue photo 10", category: "patio", featured: false },
  { id: 11, src: "/gallery/gallery-11.jpg", alt: "Assembly venue photo 11", category: "events", featured: false },
  { id: 12, src: "/gallery/gallery-12.jpg", alt: "Assembly venue photo 12", category: "interior", featured: false },
  { id: 13, src: "/gallery/gallery-13.jpg", alt: "Assembly venue photo 13", category: "patio", featured: false },
  { id: 14, src: "/gallery/gallery-14.jpg", alt: "Assembly venue photo 14", category: "events", featured: false },
  { id: 15, src: "/gallery/gallery-15.jpg", alt: "Assembly venue photo 15", category: "interior", featured: false },
  { id: 16, src: "/gallery/gallery-16.jpg", alt: "Assembly venue photo 16", category: "patio", featured: false },
  { id: 17, src: "/gallery/gallery-17.jpg", alt: "Assembly venue photo 17", category: "events", featured: false },
  { id: 18, src: "/gallery/gallery-18.jpg", alt: "Assembly venue photo 18", category: "interior", featured: false },
];