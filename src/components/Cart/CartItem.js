import { useEffect, useState } from 'react'

function CartItem ({
  name,
  image,
  cartItem,
  onHandleDeleteCart,
  price,
  setPrice,
  toppings,
  setToppings,
  onQtyChange
}) {
  // console.log(cartItem)
  // const [toppings, setToppings] = useState(1)

  useEffect(
    function () {
      if (toppings > 0) {
        setPrice(prevPrice => 5000 * toppings)
      }
    },
    [toppings, setPrice]
  )
  function handleRemoveCart (cartItem) {
    // console.log(cartItem)
    onHandleDeleteCart(cartItem)
  }
  function handleAddTopping () {
    console.log(cartItem)
    onQtyChange(cartItem.unique_id, toppings + 1)
    // setToppings(toppings => toppings + 1)
    // setPrice(prevPrice => prevPrice * toppings)
  }
  function handleSubtractTopping () {
    if (toppings === 1) {
      return
    }
    // setToppings(toppings => toppings - 1)
    onQtyChange(cartItem.unique_id, toppings - 1)
    // setPrice(prevPrice => prevPrice * toppings)
  }
  return (
    <>
      <div className='mt-[29px] py-[20px] flex min-[750px]:items-center'>
        <div className='flex items-start gap-2 w-full '>
          <label>
            <input type='checkbox' />
          </label>
          <div className=''>
            <img
              src={image}
              alt='beans-icon'
              className='w-[100px] min-[750px]:'
            />
            <button
              className='flex items-center flex-wrap gap-2 mt-3 min-[750px]:hidden'
              onClick={() => handleRemoveCart(cartItem)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/trash.png`}
                alt='beans-icon'
                className='w-[16px]'
              />
              <span className='text-[#EB190E] text-[12px] font-normal'>
                Remove
              </span>
            </button>
          </div>

          <div className=''>
            <header className='text-[14px] font-semibold'>{name}</header>
            <p className='text-[8px] font-normal max-w-[100px] '>
              1 Plate of {name}, 1 Big Coke or Water, 3 Pieces of Meat.
            </p>
            <p className='text-[16px] font-semibold min-[750px]:hidden'>
              ₦{price}
            </p>
            <div className='hidden justify-between min-[750px]:flex '>
              <button className='bg-[#F6F6F6] mt-2 rounded-[50%] '>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/heart.png`}
                  alt='heart-icon'
                />
              </button>

              <button
                className=' items-center gap-2 mt-3 flex '
                onClick={() => handleRemoveCart(cartItem)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/trash.png`}
                  alt='beans-icon'
                  className='w-[16px]'
                />
                <span className='text-[#EB190E] text-[12px] font-normal'>
                  Remove
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-between items-end min-[750px]:flex-row  min-[750px]: min-[750px]:items-center w-full min-[750px]:ml-3'>
          <button className='bg-[#F6F6F6] p-2 rounded-[50%] min-[750px]:hidden'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/heart.png`}
              alt='cart-icon'
            />
          </button>
          <div className='flex flex-col items-end min-[750px]:flex-row-reverse min-[750px]:items-center min-[750px]:justify-center min-[750px]:gap-[2px] min-[1000px]:gap-[56px]'>
            <div className='flex w-full items-center gap-2 min-[750px]:gap-0 min-[930px]:gap-5'>
              <button
                className='p-1 flex items-center rounded-[50%]'
                onClick={handleSubtractTopping}
              >
                -
              </button>
              <p>{toppings}</p>
              <button
                className='p-2 rounded-[50%] text-[#D13303]'
                onClick={handleAddTopping}
              >
                +
              </button>
            </div>
            <button className='px-[16px] py-[3px] bg-[#D13303] rounded-md font-semibold text-[11px] text-white w-full'>
              Toppigs
            </button>
          </div>
        </div>
        <p className='text-[16px] font-semibold min-[750px]:block hidden'>
          ₦{price}
        </p>
      </div>
      <div className='h-[2px] mt-7 w-full bg-[hsl(218,17%,91%)] mb-3'></div>
    </>
  )
}

export default CartItem
