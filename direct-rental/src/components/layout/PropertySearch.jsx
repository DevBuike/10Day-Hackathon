import Button from '@/components/layout/Button'

const PropertySearch = () => {
  return (
    <section className='bg-white rounded w-[90%] max-w-[980px] shadow-lg pt-10 px-6 lg:px-12 pb-4 mx-auto mt-[-60px]'>
      <form action="#">
        <div className='flex gap-2 flex-wrap lg:no-wrap lg:flex-row  justify-between items-center'>
          <input type="text" placeholder="Enter City or Neigbhourhood" className='text-gray-500 border border-gray-400 p-2 rounded' />
          <select name="amount-range" id="amount" className='rounded p-3 border border-gray-400 text-black-400 w-55'>
            <option value="amount-range">Amount Range</option>
            <option value="10000">10,000 - 149,000</option>
            <option value="150000">150,000 - 349,000</option>
            <option value="350000">350,000 - 799,000</option>
            <option value="800000">800000 - 1,500,000</option>
          </select>
          <select name="property-type" id="property-type" className='rounded p-3 border border-gray-400 text-black-400 w-55'>
            <option value="property type">Property Type</option>
            <option value="self-contain">Self Contain</option>
            <option value="1-bed-flat">1 Bedroom Flat</option>
            <option value="2-bed-flat">2 Bedroom Flat</option>
            <option value="duplex">Duplex</option>
          </select>
          <Button label='Search Property' type='submit' className=' bg-blue-500 text-white px-5' />
        </div>
        <p className='mt-3 text-gray-400 text-sm'>Popular searches: <span className='text-blue-500'>Lagos Island Victoria Island Lekki Ikeja Ajah </span></p>
      </form>
    </section>
  )
}

export default PropertySearch;