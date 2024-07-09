function CartItem () {
  return (
    <>
      <div className='mt-[29px] py-[20px] flex min-[750px]:items-center'>
        <div className='flex items-start gap-2 w-full '>
          <label>
            <input type='checkbox' />
          </label>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Beans-main.png`}
              alt='beans-icon'
              className='w-[100px]'
            />
            <buton className='flex items-center gap-2 mt-3 min-[750px]:hidden'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/trash.png`}
                alt='beans-icon'
                className='w-[16px]'
              />
              <span className='text-[#EB190E] text-[12px] font-normal'>
                Remove
              </span>
            </buton>
          </div>

          <div className=''>
            <header className='text-[14px] font-semibold'>
              Beans and Plantain
            </header>
            <p className='text-[8px] font-normal max-w-[100px] '>
              1 Plate of Beans, 1 Full Portion of Fried Plantain, 1 Big Coke or
              Water, 3 Pieces of Meat.
            </p>
            <p className='text-[16px] font-semibold min-[750px]:hidden'>
              $38.00
            </p>
            <di className='hidden justify-between min-[750px]:flex '>
              <button className='bg-[#F6F6F6] mt-2 rounded-[50%] '>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/heart.png`}
                  alt='cart-icon'
                />
              </button>

              <buton className=' items-center gap-2 mt-3 flex '>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/trash.png`}
                  alt='beans-icon'
                  className='w-[16px]'
                />
                <span className='text-[#EB190E] text-[12px] font-normal'>
                  Remove
                </span>
              </buton>
            </di>
          </div>
        </div>

        <div className='flex flex-col justify-between items-end min-[750px]:flex-row min-[750px]:w-full min-[750px]:items-center'>
          <button className='bg-[#F6F6F6] p-2 rounded-[50%] min-[750px]:hidden'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/heart.png`}
              alt='cart-icon'
            />
          </button>
          <div className='flex flex-col items-end min-[750px]:flex-row-reverse min-[750px]:items-center min-[750px]:justify-center min-[750px]:gap-[56px]'>
            <div className='flex w-full items-center gap-2'>
              <button className='p-1 flex items-center rounded-[50%]'>-</button>
              <p>1</p>
              <button className='p-2 rounded-[50%] text-[#D13303]'>+</button>
            </div>
            <button className='px-[16px] py-[3px] bg-[#D13303] rounded-md font-semibold text-[11px] text-white w-full'>
              Toppigs
            </button>
          </div>
        </div>
        <p className='text-[16px] font-semibold min-[750px]:block hidden'>
          $38.00
        </p>
      </div>
      <div className='h-[2px] mt-7 w-full bg-[hsl(218,17%,91%)] mb-3'></div>
    </>
  )
}

export default CartItem
