function SectionHead ({ title }) {
  return (
    <div className='flex items-center justify-between mt-10'>
      <h1 className='text-lg font-bold'>{title}</h1>
      <button className='flex text-sm font-normal p-2 items-center gap-2 rounded-lg'>
        View All
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Right-angle-dark.png`}
          alt='arrouwright-icon'
          className=''
        />
      </button>
    </div>
  )
}

export default SectionHead
