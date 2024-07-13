function Offers () {
  return (
    <div className='px-7'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-bold'>Offers</h1>
        <button className='flex text-sm font-normal p-2 items-center gap-2 rounded-lg'>
          See all offers
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Right-angle-dark.png`}
            alt='arrouwright-icon'
            className=''
          />
        </button>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

export default Offers
