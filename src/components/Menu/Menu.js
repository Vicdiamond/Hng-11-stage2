import WhatTheySay from './WhatTheySay'
import SearchCategory from './SearchCategory'

// import AboutUs from './AboutUs'
// import OurServices from './OurServices'
// import HowItWorks from './HowItWorks'
import Hero from './Hero'
import MenuList from './MenuList'
import Offers from './Offers'
function Home () {
  return (
    <div className=''>
      <Hero />
      <SearchCategory />
      <MenuList />
      <Offers />

      {/* <AboutUs /> */}
      {/* <OurServices />
      <HowItWorks /> */}
      <WhatTheySay />
    </div>
  )
}

export default Home
