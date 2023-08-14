export function ExclusiveDeal() {
  return (
    <div className='bg-black pt-8 pb-24 px-6 sm:px-8'>
      <div className='flex flex-col lg:flex-row gap-8 justify-between lg:items-center border border-white/10 rounded-md py-24 px-12 max-w-[1550px] mx-auto'>
        <div className='grid gap-4 lg:gap-8'>
          <div className='grid gap-2 lg:gap-4'>
            <h2 className='text-yellow-300 text-lg md:text-xl tracking-wider font-medium'>
              Exclusive Deal
            </h2>
            <h1 className='text-white text-2xl md:text-3xl font-bold max-w-3xl'>
              25% Off Professional Guitar Setups! Limited Availability!
            </h1>
          </div>
          <p className='text-sm md:text-base text-white/50 max-w-xl'>
            Unlock 25% off by bringing two guitars for professional setups.
            Supercharge your sound today and make the most of this limited-time
            offer.
          </p>
        </div>
        <button className='w-full min-w-[180px] lg:w-max sm:text-lg text-black font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 bg-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
          Get the Deal
        </button>
      </div>
    </div>
  );
}
