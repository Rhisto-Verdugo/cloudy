import Link from "next/link"
import { GiCloudyFork, GiHamburgerMenu } from "react-icons/gi"
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai"
import { useState } from "react"
import { Fade, Slide } from "react-awesome-reveal"

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div>
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
        <GiHamburgerMenu
          className='mr-3 text-4xl md:hidden'
          onClick={() => setSidebar(!sidebar)}
        />
      </nav>

      <aside
        className={
          sidebar
            ? "w-52 h-[90vh] transition-all ease-in-out duration-800 flex flex-col justify-between fixed top-24 right-0 bg-white z-50"
            : "w-0 transition-all ease-in-out duration-800"
        }
      >
        <ul
          className={`flex flex-col items-center ${
            !sidebar && "hidden"
          } justify-center w-full gap-8 mt-36`}
        >
          <li className='text-lg font-semibold hover:text-blue-900'>
            <Link href='/about'>About</Link>
          </li>
          <li className='text-lg font-semibold hover:text-blue-900'>
            <Link href='/products'>Products</Link>
          </li>
          <li className='text-lg font-semibold hover:text-blue-900'>
            <Link href='/pricing'>Pricing</Link>
          </li>
          <li className='p-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-400'>
            <Link href='/register'>Get Started</Link>
          </li>
        </ul>
        <ul
          className={`flex justify-center w-full ${
            !sidebar && "hidden"
          } mb-12 text-3xl text-blue-900`}
        >
          <li className='m-2 hover:text-blue-800 hover:cursor-pointer'>
            <Link href='https://www.facebook.com/'>
              <AiFillFacebook />
            </Link>
          </li>
          <li className='m-2 hover:text-blue-800 hover:cursor-pointer'>
            <Link href='https://www.instagram.com/'>
              <AiFillInstagram />
            </Link>
          </li>
          <li className='m-2 hover:text-blue-800 hover:cursor-pointer'>
            <Link href='https://www.linkedin.com/'>
              <AiFillLinkedin />
            </Link>
          </li>
          <li className='m-2 hover:text-blue-800 hover:cursor-pointer'>
            <Link href='https://www.youtube.com/'>
              <AiFillYoutube />
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  )
}
export default Header
