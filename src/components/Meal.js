function Meal ({ percentageOff, image, mealName }) {
  return (
    <div className=' relative max-w-[345px] rounded-2xl flex-shrink-0'>
      <img src={image} alt='burger-icon' className='rounded-2xl' />

      <div className='flex items-center gap-3 absolute top-5 right-0  w-full pl-4'>
        <div className='bg-[#FF501C] text-white flex items-center w-[134px] p-2 justify-center rounded-lg space-x-2'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Tag-icon.png`}
            alt='Tag-icon'
            className='h-[22px]'
          />
          <p className='text-[18px] font-bold text-center'>{percentageOff}</p>
        </div>
        <div className='bg-[#f2A73B] text-white flex items-center w-[134px] p-2 justify-center rounded-lg space-x-2'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Timer-icon.png`}
            alt='Timer-icon'
            className='w-[18px]'
          />
          <p className='text-[18px] font-bold text-center'>25 mins</p>
        </div>
      </div>

      <div className='flex items-center justify-between px-4 absolute bottom-36 w-full'>
        <button className='bg-[#EAFFF3] text-[#03A900] p-3 rounded-full text-xs'>
          Available for order Now
        </button>
        <button className='border p-2 rounded-full bg-white '>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/heart.png`}
            alt='heart-icon'
            className=''
          />
        </button>
      </div>

      <div className='flex items-center gap-2 mt-5'>
        <h1 className='text-[#424242] text-[20px] font-bold'>{mealName}</h1>
        <p className='flex items-center text-[#FFB30E]'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Star-icon.png`}
            alt='star-icon'
            className=''
          />
          46
        </p>
      </div>

      <div className='flex justify-between items-center mt-7'>
        <h1 className='text-[40px] font-bold'>$38</h1>
        <button className='flex items-center border rounded-lg border-[#BE2E03] text-[#BE2E03] p-2 text-[14px] gap-2'>
          Add to cart
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/shopping-cart.png`}
            alt='caart-icon'
            className=''
          />
        </button>
      </div>
    </div>
  )
}

export default Meal
