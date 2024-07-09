function MealMenu ({ mealName, image }) {
  return (
    <div className=' relative max-w-[345px] rounded-2xl'>
      <img src={image} alt='burger-icon' className='rounded-2xl' />
    </div>
  )
}

export default MealMenu
