import { useState } from 'react'
import SavedDelicacies from '../SavedDelicacies'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

function Cart ({
  setStatus,
  itemsInCart,
  onHandleDeleteCart,
  onHandleClearCart,
  toppings,
  setToppings,
  setItemsinCart
}) {
  const [price, setPrice] = useState(5000)
  function handleQtyChange (id) {}
  return (
    <div className='p-7 bg-[#F9FAFB]'>
      <div className='font-medium text-[24px]'>
        <span onClick={() => setStatus('menu')} className='cursor-pointer'>
          Menu
        </span>
        {` > `}
        <span className='text-[#D13303]'>Cart</span>
      </div>

      {itemsInCart.length === 0 && (
        <div className='flex flex-col items-center justify-center h-full w-full bg-white p-[50px] rounded-[20px] mt-[80px] mb-[80px]'>
          <h1 className='text-[#3B3533] text-[40px] font-semibold'>
            Empty Cart!
          </h1>
          <p className='text-[#5B5554] text-center max-w-[368px] text-sm mt-[8px]'>
            You currently do not have an item in your cart. Select an item from
            the menu page.
          </p>
          <button
            className='bg-[#FFF7F3] text-[#D13303] text-[16px] font-bold px-[16px] py-[18px] mt-[24px]'
            onClick={() => setStatus('menu')}
          >
            Add an Item to Cart
          </button>
        </div>
      )}

      {itemsInCart.length !== 0 && (
        <div className='min-[750px]:flex gap-[70px] bg-white p-5 rounded-xl mt-7'>
          <div className='w-full '>
            <div className='flex items-center justify-between mt-[30px]'>
              <p>Items in Cart</p>
              <button
                onClick={onHandleClearCart}
                className='text-[#E33B32] flex items-center justify-center gap-2'
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/Shape.png`}
                  alt='cart-icon'
                />
                Clear Cart
              </button>
            </div>

            {itemsInCart.map(
              item => (
                (item.price = 5000),
                (
                  <CartItem
                    name={item.name}
                    key={item.name}
                    image={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                    cartItem={item}
                    onHandleDeleteCart={onHandleDeleteCart}
                    price={item.price}
                    setPrice={setPrice}
                    toppings={toppings}
                    setToppings={setToppings}
                    onQtyChange={handleQtyChange}
                  />
                )
              )
            )}
          </div>

          <div>
            <CartSummary setStatus={setStatus} />
          </div>
        </div>
      )}
      <SavedDelicacies />
    </div>
  )
}

export default Cart
