import type { Metadata } from 'next';
import Image from 'next/image';
import { COMPANY, VIDEOS, EMBEDS } from '@/lib/data';

export const metadata: Metadata = {
  title: `Videos & Tours | ${COMPANY.name}`,
  description: `Watch venue videos and virtual tours for ${COMPANY.name} in Houston.`,
};

function youtubeEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}`;
}

export default function VideosPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image src="/hero.jpg" alt="Videos" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#0D4F3D] text-[10px] tracking-[0.4em] uppercase mb-4">See the Space</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Videos & Tours</h1>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
        {EMBEDS.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl mb-8 text-center">Virtual Tour</h2>
            <div className="grid gap-10">
              {EMBEDS.map((embed) => (
                <div key={embed.id} className="space-y-4">
                  <h3 className="text-center text-sm tracking-[0.2em] uppercase text-foreground/50">{embed.title}</h3>
                  <div className="relative w-full overflow-hidden rounded-sm border border-border" style={{ minHeight: '480px' }}>
                    <iframe src={embed.url} title={embed.title} className="absolute inset-0 w-full h-full min-h-[480px] border-0" allowFullScreen />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {VIDEOS.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl mb-8 text-center">Venue Videos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {VIDEOS.map((video) => (
                <div key={video.id} className="space-y-3">
                  <h3 className="text-sm tracking-[0.15em] uppercase text-foreground/50">{video.title}</h3>
                  {video.type === 'youtube' && video.youtubeId ? (
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-border">
                      <iframe src={youtubeEmbed(video.youtubeId)} title={video.title} className="absolute inset-0 w-full h-full border-0" allowFullScreen />
                    </div>
                  ) : video.type === 'mp4' && video.src ? (
                    <video controls className="w-full rounded-sm border border-border" poster={video.poster || undefined}>
                      <source src={video.src} type="video/mp4" />
                    </video>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        )}
        {VIDEOS.length === 0 && EMBEDS.length === 0 && (
          <p className="text-center text-foreground/50">Video tours coming soon. <a href="/contact" className="text-[#0D4F3D] hover:underline">Contact us</a> to schedule an in-person tour.</p>
        )}
      </section>
    </>
  );
}
