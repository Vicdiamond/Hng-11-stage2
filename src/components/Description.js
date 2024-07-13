import { useState } from 'react'

function Description ({
  setStatus,
  image,
  onHandleAddCart,
  name,
  descriptionItem
}) {
  const [toppings, setToppings] = useState(1)

  function handleAddTopping () {}
  function handleSubtractTopping () {}
  return (
    <div className='p-7 min-[1120px]:px-[100px]'>
      <div className='font-medium text-[24px] flex justify-between items-center'>
        <div>
          <span onClick={() => setStatus('menu')} className='cursor-pointer'>
            Menu
          </span>
          {` > `}
          <span className='text-[#D13303]'>Description</span>
        </div>

        <button className='bg-[#D13303] text-white px-[16px] py-2 rounded text-[11px]'>
          Bulk order
        </button>
      </div>

      <div className='mt-[25px] flex justify-center items-center '>
        <img
          src={image}
          alt='drink'
          className='rounded-[20px] w-full h-auto max-h-[400px] min-[850px]:max-h-[500px]'
        />
      </div>

      <div className='mt-[25px] min-[800px]:flex min-[800px]:justify-between min-[800px]:gap-'>
        <div className='min-[800px]:max-w-[500px]'>
          <div className='flex items-center justify-start'>
            <p className='text-[24px] font-bold text-[#0A0200] text-center'>
              {name}
            </p>
            <p className='flex items-center justify-center text-[14px] font-semibold text-[#3A3A3A] ml-[8px] gap-1'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/star.png`}
                alt='cart-icon'
              />
              4.8
            </p>
            <p className='text-[14px] font-semibold text-[#3A3A3A] text-center'></p>
          </div>
          <p className='text-[14px] font-[400] text-[#3B3533] mt-[12px] opacity-75 leading-[20px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            varius nisl sit amet libero aliquam, at dapibus metus ultricies.
          </p>
        </div>

        <div className='mt-[23px] min-[800px]:flex min-[800px]:flex-col min-[800px]:text-end  '>
          <p className='text-[24px] font-extrabold leading-[24px] min-[800px]:block hidden w-full'>
            ₦5000
          </p>
          <div className='flex  justify-between flex-col min-[800px]:flex-row min-[800px]:items-center'>
            <div className='flex items-center justify-between'>
              <p className='text-[24px] font-extrabold leading-[24px] min-[800px]:hidden'>
                ₦5000
              </p>
              <div className='  items-center gap-4 min-[800px]:hidden flex '>
                <button
                  className='p-1 flex items-center rounded-[50%] text-[20px] font-semibold'
                  onClick={handleSubtractTopping}
                >
                  -
                </button>
                <p className='text-[24px] font-semibold'>{toppings}</p>
                <button
                  className='p-2 rounded-[50%] text-[#D13303] bg-[#FFF7F3] text-[20px] font-semibold'
                  onClick={handleAddTopping}
                >
                  +
                </button>
              </div>
            </div>
            <div className='flex items-center justify-center min-[800px]:gap-10'>
              <div className='  items-center gap-4 min-[800px]:flex hidden'>
                <button
                  className='p-1 flex items-center rounded-[50%] text-[20px] font-semibold'
                  onClick={handleSubtractTopping}
                >
                  -
                </button>
                <p className='text-[24px] font-semibold'>{toppings}</p>
                <button
                  className='p-2 rounded-[50%] text-[#D13303] bg-[#FFF7F3] text-[20px] font-semibold'
                  onClick={handleAddTopping}
                >
                  +
                </button>
              </div>

              <button
                className='bg-[#D13303] text-white w-full flex items-center justify-center font-semibold gap-[10px] rounded-md mt-[31px] min-[800px]:mt-0 px-[16px] py-[18px] min-[800px]:py-[7.5px] min-[800px]:text-sm'
                onClick={() => onHandleAddCart(descriptionItem)}
              >
                Order Now
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/shopping-cart-light.png`}
                  alt='cart-icon'
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[41px]'>
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <p className='text-[16px] font-semibold'>Rating & Reviews</p>
            <p className='flex items-center text-[10px] gap-[3px]'>
              4.8
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/star.png`}
                alt='cart-icon'
              />
            </p>
          </div>
          <button className='text-[#D13303] bg-[#FFF7F3] font-medium px-[16px] py-[4px] text-[11px]'>
            Add Review
          </button>
        </div>

        <div className='mt-[41px]'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Reviews-mobile.png`}
            alt='cart-icon'
            className='min-[400px]:hidden'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Reviews.png`}
            alt='cart-icon'
            className='hidden min-[400px]:block'
          />
          <p className='text-center mt-[29px] text-[#5B5554] font-medium text-[16px] leading-[23px] -tracking-[0.32]'>
            load more review
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description
