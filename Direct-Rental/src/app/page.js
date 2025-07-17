import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import PropertySearch from '@/components/layout/PropertySearch';
import PropertyList from '@/components/listings/PropertyList';
import HowItWorks from '@/components/layout/HowItWorks';
import Explore from '@/components/layout/Explore';
import VirtualVideo from '@/components/layout/VirtualVideo';
import Stats from '@/components/layout/Stats';
import CityList from '@/components/cities/CityList';
import Testimonial from '@/components/testimonial/Testimonial';
import Cta from '@/components/cta/Cta';
import Faq from '@/components/faq/Faq';
import Newsletter from '@/components/layout/Newsletter';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='pl-[10px] pr-[10px] lg:pl-[30px] lg:pr-[30px]'>
        <Hero />
        <PropertySearch />
        <PropertyList />
        <HowItWorks />
        <Explore />
        <VirtualVideo />
        <Stats />
        <CityList />
        <Testimonial />
        <Cta />
        <Faq />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
