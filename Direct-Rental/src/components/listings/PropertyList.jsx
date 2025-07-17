import PropertyCard from '@/components/listings/PropertyCard';


const PropertyList = () => {
  return(
    <section className='bg-white w-[90%] max-w-[980px] mx-auto mt-20 pb-20'>
      <div className='w-[80%] max-w-[620px] text-center mx-auto'>
        <h2 className="text-3xl font-bold mb-2">Latest House Listings</h2>
        <p className='text-gray-400 font-xs'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <PropertyCard propertyType='Apartment' propertyImage='/assets/images/4-bedroom-apartment.jpg' propertyName='3 Bedroom Apartment' propertyLocation='Lekki Phase 1, Lagos' propertyPrice='850,000' duration='year' noOfBed='05' noOfBath='03' dimension='1300 sqft' />
        <PropertyCard propertyType='Duplex'  propertyImage='/assets/images/2-bedroom-cottage.jpg' propertyName='2 Bedroom Cottage' propertyLocation='Victoria Island, Lagos' propertyPrice='1,200,000' duration='year' noOfBed='05' noOfBath='03' dimension='1300 sqft' />
        <PropertyCard propertyType='Studio' propertyImage='/assets/images/modern-studio.jpg' propertyName='Modern Studio' propertyLocation='Wuse 2, Abuja' propertyPrice='450,000' duration='year' noOfBed='05' noOfBath='03' dimension='1300 sqft' />
      </div>
    </section> 
  );
}

export default PropertyList;