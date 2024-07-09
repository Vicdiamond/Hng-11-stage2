function Hero () {
  return (
    <div className='min-[1120px]:px-[100px]'>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/Home-image.png`}
        alt='home-image'
        className='min-[396px]:hidden'
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/Hero-img-desktop.png`}
        alt='home-image'
        className='hidden min-[396px]:block'
      />
    </div>
  )
}

export default Hero
