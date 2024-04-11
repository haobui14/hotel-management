import Gallery from '@/components/Gallery/Gallery';
import HeroSection from '@/components/HeroSection/HeroSection';
import NewsLetter from '@/components/NewsLetter/NewsLetter';
import PageSearch from '@/components/PageSearch/PageSearch';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PageSearch />
      {/* Featured Room */}
      <Gallery />
      <NewsLetter />
    </>
  );
}
