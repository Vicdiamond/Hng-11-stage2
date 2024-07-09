function PaymentInfoForm () {
  return (
    <div className='mt-14'>
      <h1 className='text-[24px] font-semibold'>Payment Information</h1>

      <form className='mt-7 min-[750px]:flex min-[750px]:flex-row-reverse min-[750px]:gap-[10px] min-[1020px]:gap-[30px] min-[1150px]:gap-[50px] min-[750px]:items-center'>
        <div className='flex flex-col border p-[32px] rounded-lg'>
          <label for='discount' className='text-[16px] font-normal'>
            Apply Discount
          </label>
          <div className='flex items-center gap-4 mt-2'>
            <input
              type='text'
              id='discount'
              name='discount'
              className='w-full px-[16px] py-[12px] bg-[#F9FAFB] text-white outline-none rounded-[8px] placeholder-[#98A2B3]'
              placeholder='Enter coupon code'
            />
            <button className='px-[24px] py-[10px] text-white bg-[#B3B1B0] rounded-[8px]'>
              Apply
            </button>
          </div>

          <div className='h-[1px] mt-7 w-full bg-[hsl(218,17%,91%)] mb-3'></div>

          <div>
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-[20px]'>Pay with</h1>
              <div className='flex items-center gap-2'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/Visa-Icon.png`}
                  alt='Visa-icon'
                  className='w-[32px]'
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/MasterCard-icon.png`}
                  alt='MasterCard-icon'
                  className='w-[32px]'
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/opay.png`}
                  alt='Paypal-icon'
                  className='w-[32px]'
                />
              </div>
            </div>

            <label>
              <div className='custom-radio mt-3'>
                <label>
                  <input
                    type='radio'
                    value='Debit or Credit Card'
                    name='payment-choice'
                  />
                  <span className='text-[#5B5554] font-normal text-[14px]'>
                    Debit or Credit Card
                  </span>
                </label>
              </div>
              <div className='custom-radio mt-3'>
                <label>
                  <input
                    type='radio'
                    value='Pay on Delivery'
                    name='payment-choice'
                  />
                  <span className='text-[#5B5554] text-[14px] font-normal'>
                    Pay on Delivery
                  </span>
                </label>
              </div>
            </label>
          </div>

          <div className='h-[1px] mt-7 w-full bg-[hsl(218,17%,91%)] mb-3'></div>

          <div>
            <h1 className='font-semibold text-[20px] text-[#5B5554]'>
              Enter Card Information
            </h1>
            <div className='mt-3'>
              <div>
                <label className='text-[#3B3533] text-[14px] font-medium'>
                  Name on Card
                </label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                  placeholder='Belrah Mercy'
                />
              </div>

              <div className='mt-3'>
                <label className='text-[#3B3533] text-[14px] font-medium'>
                  Card Number
                </label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                  placeholder='5555 5555 5555 5555'
                />
              </div>

              <div className='flex items-center gap-[16px] mt-3'>
                <div>
                  <label className='text-[#3B3533] text-[14px] font-medium'>
                    Exp Date
                  </label>
                  <input
                    type='text'
                    className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                    placeholder='09/2024'
                  />
                </div>
                <div>
                  <label className='text-[#3B3533] text-[14px] font-medium'>
                    CVV
                  </label>
                  <input
                    type='text'
                    className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                    placeholder='123'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='h-[1px] mt-7 w-full bg-[hsl(218,17%,91%)] mb-3'></div>

          <div className='mt-4'>
            <div className='flex items-center justify-between'>
              <p className='#475367'>Sub Total</p>
              <p className=' text-[15px] font-medium'>₦ 89000.00</p>
            </div>
            <div className='flex items-center justify-between mt-[17.5px]'>
              <p className='#475367'>{`Tax (10%)`}</p>
              <p className='text-[12px] font-normal'>₦ 8500.00</p>
            </div>
            <div className='flex items-center justify-between mt-[17.5px]'>
              <p className='#475367'>{`Discount (20%)`}</p>
              <p className='text-[12px] font-normal'>₦ 8500.00</p>
            </div>
          </div>

          <div className='h-[1px] mt-7 w-full bg-[hsl(218,17%,91%)] mb-3'></div>

          <div>
            <div className='flex justify-between'>
              <p>Total</p>
              <p>₦ 72,000.00</p>
            </div>
            <button className='px-[24px] py-[14px] bg-[#D13303] rounded-lg font-semibold text-base text-white w-full mt-[28px]'>
              Pay $718.08
            </button>
          </div>
        </div>

        <div className='mt-[51px] min-[750px]:mt-0  p-[32px]  w-full'>
          <div className=''>
            <header className='text-[20px] font-bold text-[#3C4242]'>
              Shipping Address
            </header>
            <p className='text-[12px] font-normal'>
              Select the address that matches your card or payment method.
            </p>
            <div className='px-[28px] py-[38px] bg-[#F6F7F9] rounded-[12px] mt-[26px]'>
              <div className='custom-radio mt-3 flex flex-col items-start '>
                <label>
                  <input type='radio' value='Pay on Delivery' name='address' />
                  <span className='text-[#5B5554] text-[14px] font-normal'>
                    Same billing Address?
                  </span>
                </label>
              </div>

              <div className='h-[2px] mt-7 w-full bg-[hsl(218,17%,91%)] mb-3'></div>

              <div className='custom-radio mt-8'>
                <label>
                  <input type='radio' value='Pay on Delivery' name='address' />
                  <span className='text-[#5B5554] text-[14px] font-normal'>
                    Use a different Shipping Address
                  </span>
                </label>
              </div>
            </div>

            <button className='px-[24px] py-[14px] bg-[#D13303] rounded-lg font-semibold text-base text-white w-full mt-[28px]'>
              Change Address
            </button>
          </div>

          <div className='mt-[40px]'>
            <div className='flex items-center gap-4'>
              <div>
                <label>First name</label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                />
              </div>
              <div>
                <label>Last name</label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                />
              </div>
            </div>

            <div className='flex items-center gap-4 mt-3'>
              <div>
                <label>Street Address</label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                />
              </div>
              <div>
                <label>Area</label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                />
              </div>
            </div>

            <div className='flex items-center gap-4 mt-3'>
              <div>
                <label>State</label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                />
              </div>
              <div>
                <label>Area</label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                />
              </div>
            </div>

            <div className='flex items-center gap-4 mt-3'>
              <div>
                <label>Phone Number</label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                />
              </div>
              <div>
                <label>Postal Code</label>
                <input
                  type='text'
                  className='w-full border border-[#E7E6E6] p-[16px] rounded-[6px] mt-1 outline-none'
                />
              </div>
            </div>

            <div className='mt-3 custom-checkbox'>
              <label>
                <input type='checkbox' />
                <span className='text-[14px]'>
                  Save my Information for a faster checkout
                </span>
              </label>
            </div>

            <button className='px-[24px] py-[14px] bg-[#D13303] rounded-lg font-semibold text-base text-white w-full mt-[28px]'>
              Save Billing Address
            </button>
          </div>
        </div>
      </form>

      <div></div>
    </div>
  )
}

export default PaymentInfoForm
