import Meal from './Meal'
function SavedDelicacies () {
  return (
    <div className='mt-[51px]'>
      <div className='flex justify-between mb-[32px] '>
        <header className='text-[20px] font-bold'>Saved Delicacies</header>
        <button className='flex justify-between items-center gap-3'>
          see all offers
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Right-angle-dark.png`}
            alt='arrouwright-icon'
            className=''
          />
        </button>
      </div>

      <div className='overflow-x-auto'>
        <div className='flex space-x-4'>
          <Meal
            percentageOff='20'
            mealName='Chief Burger'
            image={`${process.env.PUBLIC_URL}/assets/images/Buger-main.png`}
          />
          <Meal
            percentageOff='20'
            mealName='Rotissorie Chicken'
            image={`${process.env.PUBLIC_URL}/assets/images/Chicken.png`}
          />
          <Meal
            percentageOff='20'
            mealName='Jollof Rice'
            image={`${process.env.PUBLIC_URL}/assets/images/Jollof-main.png`}
          />
          <Meal
            percentageOff='20'
            mealName='Salad'
            image={`${process.env.PUBLIC_URL}/assets/images/Salad-main.png`}
          />
          <Meal
            percentageOff='20'
            mealName='Swallow'
            image={`${process.env.PUBLIC_URL}/assets/images/Swallow.png`}
          />
          <Meal
            percentageOff='20'
            mealName='Salad'
            image={`${process.env.PUBLIC_URL}/assets/images/Salad-main.png`}
          />
        </div>
      </div>
    </div>
  )
}

export default SavedDelicacies
