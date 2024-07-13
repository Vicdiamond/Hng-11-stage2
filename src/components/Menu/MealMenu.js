function MealMenu ({
  mealName,
  image,
  onHandleAddCart,
  product,
  setStatus,
  onHandleSetDescription
}) {
  // console.log(product)
  function handleClick () {
    onHandleAddCart(product)
  }
  function handleDescription () {
    // console.log('working')
    setStatus('description')
    // console.log(product)
    onHandleSetDescription(product)
  }
  return (
    <div className=' relative max-w-[345px] rounded-2xl'>
      <img
        src={image}
        alt='burger-icon'
        className='rounded-2xl '
        onClick={handleDescription}
      />
      <div className='flex items-center justify-between px-2  absolute bottom-8 text-lg right-0  w-full '>
        <p className=' text-white font-bold shadow-2xl'>{mealName}</p>
        <button
          className='flex items-center text-white justify-center text-sm font-semibold bg-[#D13303] px-2 py-1 gap-3 rounded-md '
          onClick={handleClick}
        >
          Buy
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/shopping-cart-light.png`}
            alt='shopping-cart-icon'
            className=''
          />
        </button>
      </div>

      <div className='flex items-center gap-3 absolute bottom-0  right-0  w-full px-2  justify-between'>
        <p className='text-[#FCD507]  font-bold leading-[33px] tracking-[-0.28px] text-lg'>
          ₦5000
        </p>
        <button className='flex items-center text-base font-semibold text-white gap-1 '>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/dollar-square.png`}
            alt='shopping-cart-icon'
            className=''
          />
          Bargain
        </button>
      </div>
    </div>
  )
}

export default MealMenu
