function Header ({ setStatus }) {
  return (
    <div className='flex p-5 items-center justify-between min-[1120px]:px-[100px] bg-white border-b border-b-[#E7E6E6]'>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/MasterChef_Logo-removebg-preview1.png`}
          alt='logo'
          className='w-11'
        />
      </div>
      <div className='flex items-center justify-center gap-3'>
        <button className='' onClick={() => setStatus('cart')}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/cart.png`}
            alt='cart-icon'
          />
        </button>
        <button className=''>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Profile-img.png`}
            alt='cart-icon'
            className='w-7'
          />
        </button>
      </div>
    </div>
  )
}

export default Header
