import Link from "next/link"
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai"

const Footer = () => {
  return (
    <section className='text-blue-200 bg-gray-900'>
      <div className='grid h-64 grid-cols-2 text-blue-200 bg-gray-900'>
        <div className=''>
          <ul className='flex items-center justify-center h-full text-3xl '>
            <li className='m-2 hover:text-orange-100 hover:cursor-pointer'>
              <Link href='https://www.facebook.com/'>
                <AiFillFacebook />
              </Link>
            </li>
            <li className='m-2 hover:text-orange-100 hover:cursor-pointer'>
              <Link href='https://www.instagram.com/'>
                <AiFillInstagram />
              </Link>
            </li>
            <li className='m-2 hover:text-orange-100 hover:cursor-pointer'>
              <Link href='https://www.linkedin.com/'>
                <AiFillLinkedin />
              </Link>
            </li>
            <li className='m-2 hover:text-orange-100 hover:cursor-pointer'>
              <Link href='https://www.youtube.com/'>
                <AiFillYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className='grid items-center justify-center h-full py-8 md:grid-cols-2'>
            <span>
              <li className='w-20 m-1 hover:text-orange-100 hover:cursor-pointer'>
                <Link href='/register'>Get Started</Link>
              </li>
              <li className='w-20 m-1 hover:text-orange-100 hover:cursor-pointer'>
                <Link href='/about'>About Us</Link>
              </li>
              <li className='w-20 m-1 hover:text-orange-100 hover:cursor-pointer'>
                <Link href='/products'>Products</Link>
              </li>
              <li className='w-20 m-1 hover:text-orange-100 hover:cursor-pointer'>
                <Link href='/pricing'>Pricing</Link>
              </li>
            </span>
            <span>
              <li className='w-20 m-1 hover:text-orange-100 hover:cursor-pointer'>
                Contact
              </li>
              <li className='m-1 w-28 hover:text-orange-100 hover:cursor-pointer'>
                Privacy center
              </li>
              <li className='w-24 m-1 hover:text-orange-100 hover:cursor-pointer'>
                Our partners
              </li>
              <li className='w-20 m-1 hover:text-orange-100 hover:cursor-pointer'>
                Info
              </li>
            </span>
          </ul>
        </div>
      </div>
      <span>
        <p className='py-4 text-sm text-center text-gray-400'>
          All Rights Reserved Ⓒ Cloudy 2022
        </p>
      </span>
    </section>
  )
}
export default Footer
