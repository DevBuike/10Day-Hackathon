import Image from 'next/image';

const StepCard = ({stepImage, step, stepTitle, content}) => {
  return (
    <div className="flex flex-col items-center p-6 max-w-90 mx-auto">
      <div className="relative h-[100px] max-w-45">
        <span className='absolute z-2 text-4xl font-bold top-2 -right-7  text-gray-200 py-2 px-3'>{step}</span>
        <Image src='/assets/images/how-bg.png' alt='' width='150' height='150' className="" />
        <Image src={stepImage} alt={stepImage} width='140' height='140' className="absolute top-1" />
      </div>
      <div className='p-4 mt-5 text-center'>
        <h4 className="text-md font-semibold my-3">{stepTitle}</h4>
        <p className='my-3 text-xs text-gray-400'>{content}</p>
      </div>
    </div>
  );
}

export default StepCard;