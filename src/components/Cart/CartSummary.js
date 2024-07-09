function CartSummary ({ setStatus }) {
  return (
    <div className='py-[32px] mt-3 border px-[32px] rounded-lg'>
      <header>Cart Summary</header>
      <div className='h-[2px] mt-10 w-full bg-[hsl(218,17%,91%)] mb-3'></div>
      <div className='flex justify-between mb-[16px] mt-[20px]'>
        <p>Sub Total</p>
        <p>$89.50</p>
      </div>
      <div className='flex justify-between  mb-[16px]'>
        <p>{`Tax (2%)`}</p>
        <p>$1.79</p>
      </div>
      <div className='flex justify-between  mb-[16px]'>
        <p>{`Discount (5%)`}</p>
        <p>$4.47</p>
      </div>
      <div className='flex justify-between  mb-[16px]'>
        <p>Delivery</p>
        <p>$3</p>
      </div>

      <div className='h-[2px] mt-10 w-full bg-[hsl(218,17%,91%)] mb-10'></div>

      <div className='flex justify-between  mb-[16px]'>
        <p>Total</p>
        <p>$89.82</p>
      </div>

      <button
        className='px-[16px] py-[18.5px] bg-[#D13303] rounded-[8px] mt-10 font-semibold text-[16px] text-white w-full'
        onClick={() => setStatus('checkOut')}
      >
        Proceed to Checkout
      </button>
      <button className='px-[16px] py-[18.5px] mt-7 text-[#D13303] bg-[#FFF7F3] rounded-[8px] font-semibold text-[16px] w-full'>
        Pair Delivery With Other Users
      </button>

      <div className='mt-[28px]'>
        <h1 className='text-[16px] font-semibold'>Return Policy</h1>
        <p className='text-[#858585] mt-[12px]'>
          returning an item is very easy. read details
          <span className='text-[#FF501C]'> here</span>
        </p>
      </div>
    </div>
  )
}

export default CartSummary
