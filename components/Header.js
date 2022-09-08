import Link from "next/link"
import { GiCloudyFork } from "react-icons/gi"

const Header = () => {
  return (
    <nav className='fixed top-0 z-50 flex flex-row items-center justify-between w-full h-24 bg-white opacity-100'>
      <span className='flex ml-12'>
        <GiCloudyFork className='text-4xl text-blue-500' />
        <h1 className='text-4xl font-bold'>
          <Link href='/'>cloudy</Link>
        </h1>
      </span>
      <ul className='hidden mr-4 md:flex'>
        <li className='p-1 mr-4 text-lg font-semibold hover:text-blue-900'>
          <Link href='/about'>About</Link>
        </li>
        <li className='p-1 mr-4 text-lg font-semibold hover:text-blue-900'>
          <Link href='/products'>Products</Link>
        </li>
        <li className='p-1 mr-8 text-lg font-semibold hover:text-blue-900'>
          <Link href='/pricing'>Pricing</Link>
        </li>
        <li className='p-1 pl-4 pr-4 mr-4 font-semibold text-white bg-blue-500 rounded-xl hover:bg-blue-400'>
          <Link href='/register'>Get Started</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
