import SavedDelicacies from '../SavedDelicacies'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

function Cart ({ setStatus }) {
  return (
    <div className='p-7'>
      <div className='font-medium text-[24px]'>
        <span onClick={() => setStatus('menu')} className='cursor-pointer'>
          Menu
        </span>
        {` > `}
        <span className='text-[#D13303]'>Cart</span>
      </div>

      <div className='min-[750px]:flex gap-[70px]'>
        <div className='w-full'>
          <div className='flex items-center justify-between mt-[30px]'>
            <p>Items in Cart</p>
            <button>Clear Cart</button>
          </div>

          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div>
          <CartSummary setStatus={setStatus} />
        </div>
      </div>
      <SavedDelicacies />
    </div>
  )
}

export default Cart
