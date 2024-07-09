function Footer () {
  return (
    <footer className='bg-[#191716] px-7 pt-10  pb-10 min-[1120px]:px-[100px]'>
      <div className='min-[750px]:flex min-[750px]:gap-4 w-full justify-start items-start min-[860px]:gap-2 min-[900px]:justify-between min-[900px]:gap-16'>
        <div className='min-[750px]:max-w-[300px]'>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Footer-logo-icon.png`}
              alt='logo'
              className=''
            />
          </div>
          <p className='text-white text-sm mt-3 min-[750px]:max-w-[400px] min-[750px]:text-xs'>
            From fluffy pastries to delicious meals, we pride ourselves on using
            only the finest ingredients to create mouthwatering masterpieces
            that will tantalize your taste buds.
          </p>
        </div>
        <div className='text-white min-[750px]:max-w-[300px] flex items-center min-[750px]:items-start justify-between min-[750px]:justify-center gap-3 text-xs  mt-7 w-full h-full min-[750px]:mt-0'>
          <div className='gap-2 min-[750px]:gap-1 min-[750px]:flex min-[750px]:flex-col min-[750px]:h-full'>
            <h3 className='text-base font-semibold'>Company</h3>
            <p className='mt-4 '>About Us</p>
            <p className='mt-1'>Menu</p>
            <p className='mt-1'>Product</p>
            <p className='mt-1'>Offers</p>
          </div>
          <div className='min-[750px]:h-full min-[750px]:flex min-[750px]:flex-col min-[750px]:h-full min-[750px]:gap-1'>
            <h3 className='text-base font-semibold'>Help</h3>
            <p className='mt-4 '>Help & support</p>
            <p className='mt-1'>Delivery and Refund</p>
            <p className='mt-1'>Partner with us</p>
            <p className='mt-1'>Ride with us</p>
          </div>
          <div className='min-[750px]:flex min-[750px]:flex-col min-[750px]:h-full min-[750px]:gap-1'>
            <h3 className='text-base font-semibold'>Resources</h3>
            <p className='mt-4'>Terms and conditions</p>
            <p className='mt-1'>Refund policy</p>
            <p className='mt-1'>Privacy Policy</p>
            <p className='mt-1'>Cookies Policy</p>
          </div>
        </div>

        {/* flex items-start justify-between mt-7  text-white w-full */}

        <div className='flex items-start min-[750px]:justify-center justify-between mt-7 min-[750px]:mt-0  min-[750px]:flex-col w-full min-[750px]:max-w-[300px]  h-full text-white '>
          <div>
            <h1 className='text-lg font-bold'>Follow us</h1>
            <div className='flex items-center justify-center gap-3 mt-4 min-[750px]:mt-4'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Twitter-logo.png`}
                alt='Twitter-logo'
                className='w-[20px]'
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Facebook-logo.png`}
                alt='Twitter-logo'
                className='w-[20px]'
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Instagram-logo.png`}
                alt='Twitter-logo'
                className='w-[20px]'
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo-github 1.png`}
                alt='Twitter-logo'
                className='w-[20px]'
              />
            </div>
          </div>

          <div className='min-[750px]:hidden  ml-10'>
            <h3 className='text-lg font-bold'>Contact Us</h3>
            <div className='flex items-center gap-2 mt-4 min-[750px]:mt-0 '>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Message-icon.png`}
                alt='Message-icon'
                className=''
              />
              <p className='text-xs'> contact@obstack.com</p>
            </div>
            <div className='flex items-center gap-2 mt-3'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Phone-icon.png`}
                alt='Twitter-logo'
                className=''
              />
              <p className='text-xs'>+234 814 526 3509</p>
            </div>
          </div>

          <div className='mt-3 hidden min-[750px]:inline'>
            <p className='text-white min-[750px]:text-xs'>
              Receive exclusive offers in your mailbox
            </p>
            <div className='flex items-center min-[750px]: min-[750px]:items-start justify-between mt-3 gap-3'>
              <div className='w-full'>
                <input
                  type='text'
                  className='border-none bg-[#424242] rounded-lg p-2 text-white outline-none w-full'
                  placeholder='Enter your email'
                />
              </div>
              <button className='p-2 bg-[#D13303] rounded-lg font-semibold text-base text-white'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* */}

      <div className='mt-10 min-[750px]:hidden'>
        <p className='text-white'>Receive exclusive offers in your mailbox</p>
        <div className='flex items-center justify-between mt-3 gap-3 '>
          <div className='w-full '>
            <input
              type='text'
              className='border-none bg-[#424242] rounded-lg p-2 text-white outline-none w-full'
              placeholder='Enter your email'
            />
          </div>
          <button className='p-2 bg-[#D13303] rounded-lg font-semibold text-base text-white'>
            Subscribe
          </button>
        </div>
      </div>

      <div className='h-[1px] mt-7 w-full bg-white min-[750px]:block hidden '></div>
      <div className='mt-7 text-white'>
        <h1 className='mb-3 font-semibold text-base'>Our top cities</h1>
        <ul className='flex flex-col flex-wrap h-16 gap-1 items-start justify-start text-xs min-[750px]:h-[80px]'>
          <li>Lagos</li>
          <li>Abeokuta</li>
          <li>Oyo</li>
          <li>Ibadan</li>
          <li>Abuja</li>
          <li>Okene</li>
          <li>Umuahia</li>
          <li>Kaduna</li>
          <li>Enugu</li>
          <li>Osun</li>
          <li>Osogbo</li>
          <li>Portharcourt</li>
          <div className='min-[750px]:inline hidden'>
            <ul className='flex flex-col flex-wrap h-16 gap-1 items-start justify-start text-xs min-[750px]:h-[80px]'>
              <li>Jos</li>
              <li>Niger</li>
              <li>Calabar</li>
              <li>Ondo</li>
            </ul>
          </div>

          <div className='min-[750px]:inline hidden ml-10'>
            <div className='flex items-center gap-2 mt-4 min-[750px]:mt-0 '>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Message-icon.png`}
                alt='Message-icon'
                className=''
              />
              <p className='text-xs'> contact@obstack.com</p>
            </div>
            <div className='flex items-center gap-2 mt-3'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Phone-icon.png`}
                alt='Twitter-logo'
                className=''
              />
              <p className='text-xs'>+234 814 526 3509</p>
            </div>
          </div>
        </ul>
        <div className='h-[1px] mt-5 w-full bg-white'></div>
      </div>

      <div className='mt-6 min-[750px]:flex min-[750px]:flex-row-reverse min-[750px]:justify-between min-[750px]:items-center'>
        <div className='flex items-center justify-center gap-3 '>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Visa-Icon.png`}
            alt='Visa-icon'
            className='h-[14px]'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/MasterCard-icon.png`}
            alt='MasterCard-icon'
            className='h-[14px]'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Paypal-icon.png`}
            alt='Paypal-icon'
            className='h-[14px]'
          />
        </div>
        <p className='text-xs text-white mt-5 text-center'>
          © Copyright 2024, All Rights Reserved by Sabibakers Stores
        </p>
      </div>
    </footer>
  )
}

export default Footer
