function SearchCategory () {
  return (
    <div className='mt-16 px-7 min-[1120px]:px-[100px] '>
      <div className='min-[750px]:flex justify-between items-center'>
        <h3 className='font-bold text-[#212121]  leading-4 w-full'>
          Search by Category
        </h3>
        <div className='mt-4 flex gap-2 items-center w-full min-[750px]:mt-0'>
          <input
            type='text'
            placeholder='search for food'
            className='border rounded-full py-2 px-5 w-full outline-none'
          />
          <button className='border rounded-full p-2'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/filter.png`}
              alt='filter-icon'
              className=''
            />
          </button>
        </div>
      </div>

      <div className='mt-6 overflow-x-auto p-4'>
        <div className='flex space-x-10'>
          <div className='flex flex-col w-[218px] justify-between flex-shrink-0'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/chicken-search.png`}
              alt='swallow-icon'
              className='rounded-[50%] w-full h-[218px] object-cover'
            />
            <p className='text-[28px] mt-5 font-bold text-[#191716] text-center'>
              Chicken
            </p>
          </div>
          <div className='flex flex-col w-[218px] justify-between flex-shrink-0'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/burger-search.png`}
              alt='swallow-icon'
              className='rounded-[50%] w-full h-[218px] object-cover'
            />
            <p className='text-[28px] mt-5 font-bold text-[#191716] text-center'>
              Snacks
            </p>
          </div>
          <div className='flex flex-col w-[218px] justify-between flex-shrink-0'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Swallow.png`}
              alt='swallow-icon'
              className='rounded-[50%] w-full h-[218px] object-cover'
            />
            <p className='text-[28px] mt-5 font-bold text-[#191716] text-center'>
              Swallow
            </p>
          </div>
          <div className='flex flex-col w-[218px] justify-between flex-shrink-0'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Soups.png`}
              alt='Soups-icon'
              className='rounded-[50%] w-full h-[218px] object-cover'
            />
            <p className='text-[28px] mt-5 font-bold text-[#191716] text-center'>
              Soups
            </p>
          </div>
          <div className='flex flex-col w-[218px] justify-between flex-shrink-0'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Salads.png`}
              alt='Salad-icon'
              className='rounded-[50%] w-full h-[218px] object-cover'
            />
            <p className='text-[28px] mt-5 font-bold text-[#191716] text-center'>
              Salads
            </p>
          </div>
          <div className='flex flex-col w-[218px] justify-between flex-shrink-0'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Drinks.png`}
              alt='Drinks-icon'
              className='rounded-[50%] w-full h-[218px] object-cover'
            />
            <p className='text-[28px] mt-5 font-bold text-[#191716] text-center'>
              Drinks
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchCategory
