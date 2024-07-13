import MealMenu from './MealMenu'
import SectionHead from '../SectionHead'
function MenuList ({
  onHandleAddCart,
  products,
  setStatus,
  onHandleSetDescription
}) {
  return (
    <div className='m-7'>
      <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Menu Listing' />
        <div className='mt-5 grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          {products.map(product => (
            <MealMenu
              mealName={product.name}
              image={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              onHandleAddCart={onHandleAddCart}
              key={product.name}
              product={product}
              setStatus={setStatus}
              onHandleSetDescription={onHandleSetDescription}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuList

//   <div className='flex items-center justify-between px-4 gap-3 absolute bottom-16 right-0  w-full pl-4'>
/* <p className='text-2xl text-white font-bold'>{mealName}</p>
<button className='flex items-center text-white justify-center text-sm font-semibold bg-[#D13303] px-4 py-2 gap-3 rounded-md'>
  Buy
  <img
    src={`${process.env.PUBLIC_URL}/assets/images/shopping-cart-light.png`}
    alt='shopping-cart-icon'
    className=''
  />
</button>
</div>
<div className='flex items-center gap-3 absolute bottom-5 right-0  w-full pl-4 justify-between px-4'>
<p className='text-[#FCD507] text-[28px] font-bold leading-[33px] tracking-[-0.28px]'>{`$5 (per plate)`}</p>
<button className='flex items-center text-base font-semibold text-white gap-1 '>
  <img
    src={`${process.env.PUBLIC_URL}/assets/images/dollar-square.png`}
    alt='shopping-cart-icon'
    className=''
  />
  Bargain
</button>
</div> */

/* <div className='flex items-center gap-3 absolute top-5 right-0  w-full pl-4'>
        <div className='bg-[#FF501C] text-white flex items-center w-[134px] p-2 justify-center rounded-lg space-x-2'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Tag-icon.png`}
            alt='Tag-icon'
            className='h-[22px]'
          />
          <p className='text-[18px] font-bold text-center'>{percentageOff}</p>
        </div>
        <div className='bg-[#f2A73B] text-white flex items-center w-[134px] p-2 justify-center rounded-lg space-x-2'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Timer-icon.png`}
            alt='Timer-icon'
            className='w-[18px]'
          />
          <p className='text-[18px] font-bold text-center'>25 mins</p>
        </div>
      </div>

      <div className='flex items-center justify-between px-4 absolute bottom-36 w-full'>
        <button className='bg-[#EAFFF3] text-[#03A900] p-3 rounded-full text-xs'>
          Available for order Now
        </button>
        <button className='border p-2 rounded-full bg-white '>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/heart.png`}
            alt='heart-icon'
            className=''
          />
        </button>
      </div>

      <div className='flex items-center gap-2 mt-5'>
        <h1 className='text-[#424242] text-[20px] font-bold'>
          Chief Burger Meal
        </h1>
        <p className='flex items-center text-[#FFB30E]'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Star-icon.png`}
            alt='star-icon'
            className=''
          />
          46
        </p>
      </div> */

/* <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Soup' />
        <div className='mt-5 grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          <MealMenu
            mealName='Vegetable Soup'
            image={`${process.env.PUBLIC_URL}/assets/img/soup1.png`}
          />
          <MealMenu
            mealName='Oha Soup'
            image={`${process.env.PUBLIC_URL}/assets/img/soup2.png`}
          />
          <MealMenu
            mealName='Egusi Soup'
            image={`${process.env.PUBLIC_URL}/assets/img/soup3.png`}
          />
          <MealMenu
            mealName='Vegetable Soup'
            image={`${process.env.PUBLIC_URL}/assets/img/soup4.png`}
          />
        </div>
      </div>

      <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Meals' />
        <div className='mt-5 grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          <MealMenu
            mealName='Jollof Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/Meal1.png`}
          />
          <MealMenu
            mealName='Fried Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/Meal2.png`}
          />
          <MealMenu
            mealName='Beans and plantain'
            image={`${process.env.PUBLIC_URL}/assets/img/Meal3.png`}
          />
          <MealMenu
            mealName='Noodles'
            image={`${process.env.PUBLIC_URL}/assets/img/Meal4.png`}
          />
        </div>
      </div>

      <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Salad' />
        <div className='mt-5 grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          <MealMenu
            mealName='Jollof Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/salad1.png`}
          />
          <MealMenu
            mealName='Fried Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/salad2.png`}
          />
          <MealMenu
            mealName='Beans and plantain'
            image={`${process.env.PUBLIC_URL}/assets/img/salad3.png`}
          />
          <MealMenu
            mealName='Noodles'
            image={`${process.env.PUBLIC_URL}/assets/img/salad4.png`}
          />
        </div>
      </div>

      <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Meat' />
        <div className='mt-5  grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          <MealMenu
            mealName='Jollof Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/meat1.png`}
          />
          <MealMenu
            mealName='Fried Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/meat2.png`}
          />
          <MealMenu
            mealName='Beans and plantain'
            image={`${process.env.PUBLIC_URL}/assets/img/meat3.png`}
          />
          <MealMenu
            mealName='Noodles'
            image={`${process.env.PUBLIC_URL}/assets/img/meat4.png`}
          />
        </div>
      </div>

      <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Coffee & Tea' />
        <div className='mt-5 grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          <MealMenu
            mealName='Jollof Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/tea1.png`}
          />
          <MealMenu
            mealName='Fried Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/tea2.png`}
          />
          <MealMenu
            mealName='Beans and plantain'
            image={`${process.env.PUBLIC_URL}/assets/img/tea3.png`}
          />
          <MealMenu
            mealName='Noodles'
            image={`${process.env.PUBLIC_URL}/assets/img/tea4.png`}
          />
        </div>
      </div>

      <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Drinks' />
        <div className='mt-5 grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          <MealMenu
            mealName='Jollof Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/drink1.png`}
          />
          <MealMenu
            mealName='Fried Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/drink2.png`}
          />
          <MealMenu
            mealName='Beans and plantain'
            image={`${process.env.PUBLIC_URL}/assets/img/drink3.png`}
          />
          <MealMenu
            mealName='Noodles'
            image={`${process.env.PUBLIC_URL}/assets/img/drink4.png`}
          />
        </div>
      </div>

      <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Ice Cream' />
        <div className='mt-5 grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          <MealMenu
            mealName='Jollof Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/icecream1.png`}
          />
          <MealMenu
            mealName='Fried Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/icecream2.png`}
          />
          <MealMenu
            mealName='Beans and plantain'
            image={`${process.env.PUBLIC_URL}/assets/img/icecream3.png`}
          />
          <MealMenu
            mealName='Noodles'
            image={`${process.env.PUBLIC_URL}/assets/img/icecream4.png`}
          />
        </div>
      </div>

      <div className='min-[1120px]:px-[100px]'>
        <SectionHead title='Swallow' />
        <div className='mt-5 grid w-full min-[420px]:grid-cols-2 min-[810px]:grid-cols-3 min-[1160px]:grid-cols-4 gap-4'>
          <MealMenu
            mealName='Jollof Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/swallow1.png`}
          />
          <MealMenu
            mealName='Fried Rice'
            image={`${process.env.PUBLIC_URL}/assets/img/swallow2.png`}
          />
          <MealMenu
            mealName='Beans and plantain'
            image={`${process.env.PUBLIC_URL}/assets/img/swallow3.png`}
          />
          <MealMenu
            mealName='Noodles'
            image={`${process.env.PUBLIC_URL}/assets/img/swallow4.png`}
          />
        </div>
      </div> */

/* <MealMenu
            mealName='Egg Roll'
            image={`${process.env.PUBLIC_URL}/assets/img/snacks2.png`}
            onHandleAddCart={onHandleAddCart}
          />
          <MealMenu
            mealName='Shawarma'
            image={`${process.env.PUBLIC_URL}/assets/img/snacks3.png`}
            onHandleAddCart={onHandleAddCart}
          />
          <MealMenu
            mealName='Chicken Pie'
            image={`${process.env.PUBLIC_URL}/assets/img/snacks4.png`}
            onHandleAddCart={onHandleAddCart}
          /> */
