function OurServices () {
  return (
    <div className='p-7'>
      <h3 className='text-[#D13303] text-[14px] font-semibold'>OUR SERVICES</h3>
      <h1 className='mt-2 text-[#241500] text-[21px] font-semibold'>
        We Serve you the Freshness you Deserve Always
      </h1>
      <p className='text-[#585654] font-normal text-base mt-4'>
        Whether you're craving a sweet indulgence for yourself or searching for
        the perfect gift to delight a loved one, Master Chef have you covered.
      </p>
      <p className='mt-4 text-[#585654] font-normal text-base'>
        We bring our flavor and freshness to anywhere your comfort demands. you
        can step into our virtual world to order at will or Step into our
        physical restaurant and discover a world of artisanal treats crafted
        with love and passion to satisfy you
      </p>
      <div className='mt-7 flex items-center justify-between'>
        <button className='p-3 bg-[#D13303] rounded-[10px] font-semibold text-base text-white'>
          Check Menu List
        </button>
        <button className='flex text-[#d13303] bg-[#FFF2ED] text-[14px] font-[570] p-3 items-center gap-2 rounded-lg'>
          Place an Order
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/arrow-right.png`}
            alt='arrouwright-icon'
            className='w-[18px]'
          />
        </button>
      </div>

      <div className='mt-10'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/OurServices-icon.png`}
          alt='OurServices-icon'
          className=''
        />
      </div>
    </div>
  )
}

export default OurServices
