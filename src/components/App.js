import { useState } from 'react'
import Menu from './Menu/Menu'
import Header from './Header'
import Footer from './Footer'
import CheckOut from './CheckOut/CheckOut'
import Cart from './Cart/Cart'
// const initialState = {
//   status: 'home'
// }

// function reducer (state, action) {}

function App () {
  // const { state, dispatch } = useReducer(reducer, initialState)
  const [status, setStatus] = useState('menu')
  return (
    <div className='bg-[#F6F6F6]'>
      <Header setStatus={setStatus} />
      {status === 'menu' && <Menu setStatus={setStatus} />}
      {status === 'checkOut' && <CheckOut setStatus={setStatus} />}
      {status === 'cart' && <Cart setStatus={setStatus} />}
      <Footer />
    </div>
  )
}

export default App
