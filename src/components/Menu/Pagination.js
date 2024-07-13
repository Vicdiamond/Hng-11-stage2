function Pagination ({
  onHandlePreviousPage,
  onHandleNextPage,
  curPage,
  setCurPage
}) {
  return (
    <div className='flex justify-between py-[32px] px-[28px]'>
      <div>
        <button
          className='flex items-center justify-center  gap-2 px-[14px] py-[8px] border rounded-[8px]'
          onClick={onHandlePreviousPage}
          disabled={curPage === 1}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/arrow-left.png`}
            alt='cart-icon'
          />
          Previous
        </button>
      </div>

      <div className='flex gap-1 items-center'>
        <button
          className={`px-[15px] py-[5px] ${
            curPage === 1 ? 'text-[#1877F2] bg-[#F7FBFF]' : ''
          }  rounded-[8px]`}
          onClick={() => setCurPage(1)}
        >
          1
        </button>

        <button
          className={`px-[15px] py-[5px] ${
            curPage === 2 ? 'text-[#1877F2] bg-[#F7FBFF]' : ''
          } rounded-[8px]`}
          onClick={() => setCurPage(2)}
        >
          2
        </button>

        <button
          className={`px-[15px] py-[5px] ${
            curPage === 3 ? 'text-[#1877F2] bg-[#F7FBFF]' : ''
          } rounded-[8px]`}
          onClick={() => setCurPage(3)}
        >
          3
        </button>
      </div>

      <div>
        <button
          className={`flex items-center justify-center gap-2 px-[14px] py-[8px] border rounded-[8px] ${
            curPage === 3 ? 'cursor-not-allowed' : ''
          }`}
          onClick={onHandleNextPage}
          disabled={curPage === 3}
        >
          Next
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icon-right.png`}
            alt='cart-icon'
          />
        </button>
      </div>
    </div>
  )
}

export default Pagination
