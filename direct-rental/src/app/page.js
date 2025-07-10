import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import PropertySearch from '@/components/layout/PropertySearch';
import PropertyList from '@/components/listings/PropertyList';

export default function Home() {
  return (
    <>
      <Header />
      <main className='pl-[10px] pr-[10px] lg:pl-[30px] lg:pr-[30px]'>
        <Hero />
        <PropertySearch />
        <PropertyList />
      </main>
    </>
  );
}
