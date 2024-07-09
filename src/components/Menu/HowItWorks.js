import HowItWorksItem from './HowItWorksItem'

function HowItWorks () {
  return (
    <div className='mt-14 overflow-x-auto  justify-center items-center mx-5 mb-5'>
      <div className='flex'>
        <HowItWorksItem
          src={`${process.env.PUBLIC_URL}/assets/images/Bell.png`}
          header='Choose an Order'
          content='Check over hundreds of menus to pick your favorite food'
        />
        <HowItWorksItem
          src={`${process.env.PUBLIC_URL}/assets/images/Mesage-icon.png`}
          header='Make a Fair Bargain'
          content='If the price is high for you, you have the option to make a fair bargain.'
        />
        <HowItWorksItem
          src={`${process.env.PUBLIC_URL}/assets/images/Location-icon.png`}
          header='Select & Pair Delivery'
          content='Select your location and be graced with the opportunity to pair delivery'
        />
        <HowItWorksItem
          src={`${process.env.PUBLIC_URL}/assets/images/Payment-icon.png`}
          header='Make Payment'
          content="It's quick, safe, and simple. Select several methods of payment"
        />
        <HowItWorksItem
          src={`${process.env.PUBLIC_URL}/assets/images/donut.png`}
          header='Enjoy your Meal'
          content='Food is made and delivered directly to your home in quick time.'
        />
      </div>
    </div>
  )
}

export default HowItWorks
