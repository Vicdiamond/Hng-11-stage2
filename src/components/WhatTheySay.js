function WhatTheySay () {
  return (
    <>
      <div className='p-7 min-[1120px]:px-[100px] mb-7 min-[750px]:flex flex-row-reverse min-[750px]:items-center min-[750px]:justify-center min-[750px]:gap-[50px] min-[950px]:gap-[100px] min-[1120px]:gap-[130px]'>
        <div className='w-full '>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/WhatTheySay-img-mobile.png`}
            alt='aboutus-icon'
            className='min-[400px]:hidden '
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/What-they-say-desktop.png`}
            alt='aboutus-icon'
            className='min-[400px]:block hidden'
          />
        </div>
        <div className='mt-5 w-full '>
          <h3 className='text-[#FF3E3E] mb-3 text-sm font-semibold max-w-[400px]  min-[750px]:text-[18px]'>
            WHAT THEY SAY
          </h3>
          <h3 className='font-bold leading-5 text-[#191716] mb-3 text-base max-w-[400px] min-[750px]:text-[18px] min-[1160px]:text-[24px] '>
            What they say about us
          </h3>
          <p className='text-[#616161]  w-full mb-3 text-sm  min-[750px]:max-w-[530px] min-[750px]:text-[16px] min-[1160px]:text-[18px]'>
            “Master Chef is the best. Besides the many and delicious meals, the
            service is also very good, especially in the very fast delivery. I
            highly recommend Master Chef to you”.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Review.png`}
            alt='aboutus-icon'
            className='min-[750px]:block hidden mt-[40px]'
          />
        </div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ordering-mobile.png`}
          alt='ordering-icon'
          className='min-[400px]:hidden'
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Oredering-desktop.png`}
          alt='ordering-icon'
          className='min-[400px]:block hidden'
        />
      </div>
    </>
  )
}

export default WhatTheySay
