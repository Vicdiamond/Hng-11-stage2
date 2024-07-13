import WhatTheySay from '../WhatTheySay'
import SearchCategory from './SearchCategory'

import Hero from './Hero'
import MenuList from './MenuList'
import Offers from '../Offers'
import Pagination from './Pagination'
function Menu ({
  onHandleAddCart,
  products,
  setStatus,
  onHandleSetDescription,
  onHandlePreviousPage,
  onHandleNextPage,
  curPage,
  setCurPage
}) {
  return (
    <div className=''>
      <Hero />
      <SearchCategory />
      <MenuList
        onHandleAddCart={onHandleAddCart}
        products={products}
        setStatus={setStatus}
        onHandleSetDescription={onHandleSetDescription}
      />
      <Pagination
        onHandlePreviousPage={onHandlePreviousPage}
        onHandleNextPage={onHandleNextPage}
        curPage={curPage}
        setCurPage={setCurPage}
      />
      <Offers />

      <WhatTheySay />
    </div>
  )
}

export default Menu
