import PaymentInfoForm from './PaymentInfoForm'

import SavedDelicacies from '../SavedDelicacies'

function CheckOut ({ setStatus }) {
  return (
    <div className='p-7 bg-white'>
      <div className='font-medium text-[24px]'>
        <span onClick={() => setStatus('menu')} className='cursor-pointer'>
          Menu
        </span>
        {` > `}
        <span onClick={() => setStatus('cart')} className='cursor-pointer'>
          Cart
        </span>
        {` > `}
        <span className='text-[#D13303]'>CheckOut</span>
      </div>
      <PaymentInfoForm />
      <SavedDelicacies />
    </div>
  )
}

export default CheckOut
