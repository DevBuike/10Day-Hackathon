import TestmonialCard from "./TestimonialCard";
import GuestCard from "./GuestCard";

const Testimonial = () => {
  return(
    <section className='bg-[#F9F9F9] w-full mt-10 pb-10 pt-20 '>
      <div className='w-[80%] max-w-[620px] text-center mx-auto'>
        <h2 className="text-3xl font-bold mb-5">What Our Users Say About Us</h2>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-[90%] md:max-w-[1100px] mx-auto ">
        <TestmonialCard title='Best! I Got My Dream House I Wanted Through Fela' comment='Lorem ipsum dolor sit amet adip elitions repellat tetur delni vel quam aliq earum explibo dolor eme fugiat enim illumon amet sit.'>
          <GuestCard guestImage='assets/images/david.png' guestName='Ikechukwu Okafor' profession='Enterprenuer'  />
        </TestmonialCard>
        <TestmonialCard title='Awesome! Really Got What I Wanted Through Fela' comment='Lorem ipsum dolor sit amet adip elitions repellat tetur delni vel quam aliq earum explibo dolor eme fugiat enim illumon amet sit.' />
        <TestmonialCard title="Good Job! I'll Recommend Your Service To My Friends" comment='Lorem ipsum dolor sit amet adip elitions repellat tetur delni vel quam aliq earum explibo dolor eme fugiat enim illumon amet sit.' />
      </div>
    </section>
  );
}

export default Testimonial;