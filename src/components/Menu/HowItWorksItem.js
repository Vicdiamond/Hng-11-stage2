function HowItWorksItem ({ src, header, content }) {
  return (
    <div className='px-3  flex flex-col items-center justify-center flex-shrink-0 w-[260px] h-[278px] border border-[#F9E2DB] bg-[#F9FAFB]  rounded-2xl mx-3 '>
      <img src={src} alt={`${header}-icon`} className='w-[87px]' />
      <h2 className='text-[#731C02] text-[22px] font-bold mt-4 text-center'>
        {header}
      </h2>
      <p className='text-[16px] font-normal mt-4 text-center'>{content}</p>
    </div>
  )
}

export default HowItWorksItem
