import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main className='pl-[10px] pr-[10px] lg:pl-[30px] lg:pr-[30px]'>
        <Hero />
      </main>
    </>
  );
}
