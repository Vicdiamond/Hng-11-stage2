function AboutUs () {
  return (
    <div className='p-7'>
      <div>
        <div>
          <h3 className='text-[#D13303] text-[14px] font-semibold'>About Us</h3>
          <h1 className='mt-1 text-[#241500] text-[21px] font-semibold'>
            With Master Chef, Every Taste is a Celebration of Happiness
          </h1>
          <p className='text-[#585654] font-normal text-base mt-4'>
            From fluffy pastries to delicious meals, we pride ourselves on using
            only the finest ingredients to create mouthwatering masterpieces
            that will tantalize your taste buds.
          </p>
          <p className='mt-4 text-[#585654] font-normal text-base'>
            But don't just take our word for it and experience the magic for
            yourself! Browse our irresistible selection, place your order, and
            let the aroma of our fresh delicious meals fill you with warmth and
            joy.
          </p>
          <div className='mt-7 flex items-center justify-between'>
            <button className='p-3 bg-[#D13303] rounded-[10px] font-semibold text-base text-white'>
              More About us
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
        </div>

        <div className='mt-10'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/AboutUs-img.png`}
            alt='Aboutus-icon'
            className=''
          />
        </div>
      </div>

      <div>
        <div className=' mt-14'>
          <h1 className='font-bold text-[18px] text-[#241500]'>
            Best Offers
            <strong className='text-[#D13303]'> Crispy Sandwiches</strong>
          </h1>
          <p className='text-[#585654] text-[14px] mt-2'>
            Enjoy the large size of sandwiches. Complete perfect slice of
            sandwiches.
          </p>
          <button className='bg-[#D13303] text-white w-full p-3 flex items-center justify-center text-sm font-semibold gap-3 mt-7 rounded-lg'>
            Proceed to Order
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/right-angle-icon.png`}
              alt='right-angle-icon'
              className='w-[10px]'
            />
          </button>
        </div>

        <div className='mt-7'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Sandwich.png`}
            alt='Sandwich'
            className=''
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
