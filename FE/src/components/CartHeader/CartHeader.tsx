import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import useSearchProducts from 'src/hooks/useSearchProducts'
import NavHeader from '../NavHeader'

export default function CartHeader() {
  const { onSubmitSearch, register } = useSearchProducts()

  return (
    <div className='border-b border-b-[#DDDDE3]'>
      <div className=''>
        <div className='container'>
          <NavHeader />
        </div>
      </div>
      <div className='bg-white py-4'>
        <div className='container'>
          <nav className='md:flex md:items-center md:justify-between'>
            <Link to={path.home} className='flex flex-shrink-0 items-end'>
              <div>
                <img src="/logo.png" alt="Logo" className='h-8 md:h-10' />
              </div>
              <div className='mx-4 h-6 w-[1px] bg-[#DDDDE3] md:h-8' />
              <div className='text-[#242424] md:text-xl'>Giỏ hàng</div>
            </Link>
            <form className='mt-3 md:mt-0 md:w-[50%]' onSubmit={onSubmitSearch}>
              <div className='flex rounded-sm border-2 border-[#1A94FF]'>
                <input
                  type='text'
                  className='w-full flex-grow border-none bg-transparent px-3 py-1 text-[#242424] outline-none placeholder:text-[#808089]'
                  placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...'
                  {...register('name')}
                />
                <button className='flex-shrink-0 rounded-sm bg-[#1A94FF] py-2 px-6 hover:opacity-90'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 stroke-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                  
                </button>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </div>
  )
}
