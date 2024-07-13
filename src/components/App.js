import { useEffect, useState } from 'react'
import Menu from './Menu/Menu'
import Header from './Header'
import Footer from './Footer'
import CheckOut from './CheckOut/CheckOut'
import Cart from './Cart/Cart'
import Description from './Description'

const APP_ID = '25TRRUD87QA3OAD'
const API_KEY = 'c01bc418bf3b4f2c9883d469deff357520240712205054419152'
const ORG_ID = '6f258587aa89450ba42f00a4fb8789d4'

function App () {
  const [status, setStatus] = useState('menu')
  const [products, setProducts] = useState([])
  const [itemsInCart, setItemsinCart] = useState([])
  const [descriptionItem, setDescriptionItem] = useState({})
  const [curPage, setCurPage] = useState(1)
  const [toppings, setToppings] = useState(1)

  useEffect(
    function () {
      async function getData () {
        try {
          const res = await fetch(
            `https://api.timbu.cloud/products?organization_id=${ORG_ID}&reverse_sort=false&page=${curPage}&size=12&Appid=${APP_ID}&Apikey=${API_KEY}`
          )
          const data = await res.json()
          // console.log(data)
          setProducts(data.items)
        } catch (err) {
          console.error(`err ${err}`)
        }
      }

      getData()
    },
    [curPage]
  )

  console.log(curPage)
  function handleAddCart (product) {
    if (
      itemsInCart.length > 0 &&
      itemsInCart.some(item => item.name === product.name)
    )
      return itemsInCart

    setItemsinCart(prevItems => [...prevItems, product])
  }

  function handleDeleteCart (selectedItem) {
    setItemsinCart(prevItems => prevItems.filter(item => item !== selectedItem))
  }
  function handleClearCart () {
    setItemsinCart([])
  }

  function handleSetDescription (item) {
    // console.log(item.photos[0].url)
    setDescriptionItem(item)
  }
  function handleNextPage () {
    console.log('working')
    if (curPage === 3) return

    setCurPage(prevPage => prevPage + 1)
  }
  function handlePreviousPage () {
    if (curPage === 1) return

    setCurPage(prevPage => prevPage - 1)
  }

  return (
    <div className='bg-[#F6F6F6]'>
      <Header setStatus={setStatus} itemsInCart={itemsInCart} />
      {status === 'menu' && (
        <Menu
          setStatus={setStatus}
          onHandleAddCart={handleAddCart}
          products={products}
          onHandleSetDescription={handleSetDescription}
          onHandleNextPage={handleNextPage}
          onHandlePreviousPage={handlePreviousPage}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      )}

      {status === 'cart' && (
        <Cart
          setStatus={setStatus}
          itemsInCart={itemsInCart}
          onHandleDeleteCart={handleDeleteCart}
          onHandleClearCart={handleClearCart}
          toppings={toppings}
          setToppings={setToppings}
          setItemsinCart={setItemsinCart}
        />
      )}

      {status === 'checkOut' && <CheckOut setStatus={setStatus} />}

      {status === 'description' && (
        <Description
          setStatus={setStatus}
          onHandleAddCart={handleAddCart}
          image={`https://api.timbu.cloud/images/${descriptionItem.photos[0].url}`}
          name={descriptionItem.name}
          descriptionItem={descriptionItem}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
