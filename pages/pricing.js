import Header from "../components/Header"
import Footer from "../components/Footer"
import { AiOutlineCheck } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import { Fade } from "react-awesome-reveal"

export default function Pricing() {
  return (
    <>
      <Header />
      <h1 className='mt-32 text-4xl text-center text-blue-900'>
        Choose your plan
      </h1>
      <section className='flex flex-col-reverse w-11/12 gap-8 m-auto mt-12 md:grid md:grid-cols-3'>
        <Fade triggerOnce>
          <div className='flex flex-col items-center justify-center gap-6 py-10 mb-8 bg-blue-100 rounded-xl'>
            <h1 className='text-4xl'>Essential</h1>
            <p className=''>for hobbyists</p>
            <p className=''>free</p>
            <button className='p-4 bg-blue-200 hover:bg-blue-300 rounded-xl'>
              Get Started
            </button>
            <ul>
              <li className='flex items-center justify-center'>
                <AiOutlineCheck className='text-xl font-bold text-green-600' />
                Nice features
              </li>
              <li className='flex items-center justify-center'>
                <AiOutlineCheck className='text-xl font-bold text-green-600' />
                Nice features
              </li>
              <li className='flex items-center justify-center'>
                <AiOutlineCheck className='text-xl font-bold text-green-600' />
                Nice features
              </li>
              <li className='flex items-center justify-center text-gray-400'>
                <ImCross className='mr-1 font-light ' />
                Nice features
              </li>
              <li className='flex items-center justify-center text-gray-400'>
                <ImCross className='mr-1 font-light ' />
                Nice features
              </li>
              <li className='flex items-center justify-center text-gray-400'>
                <ImCross className='mr-1 font-light ' />
                Nice features
              </li>
              <li className='flex items-center justify-center text-gray-400'>
                <ImCross className='mr-1 font-light ' />
                Nice features
              </li>
            </ul>
          </div>
        </Fade>

        <Fade triggerOnce>
          <div className='flex flex-col items-center justify-center gap-6 py-10 mb-8 bg-blue-500 rounded-xl'>
            <h1 className='text-4xl font-semibold text-white'>Premium</h1>
            <p className='text-white'>for professionals</p>
            <p className='font-semibold text-white'>$15.99/y</p>
            <button className='p-4 font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-xl'>
              Get Started
            </button>
            <ul>
              <li className='flex items-center justify-center font-semibold'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center text-gray-400'>
                <ImCross className='mr-1 font-light ' />
                Nice features
              </li>
              <li className='flex items-center justify-center text-gray-400'>
                <ImCross className='mr-1 font-light ' />
                Nice features
              </li>
            </ul>
          </div>
        </Fade>

        <Fade triggerOnce>
          <div className='flex flex-col items-center justify-center gap-6 py-8 mb-8 bg-blue-700 border-8 border-yellow-500 rounded-xl'>
            <h1 className='text-4xl font-semibold text-yellow-500'>Deluxe</h1>
            <p className='text-white'>for enterprise</p>
            <p className='font-semibold text-white'>$50.00/y</p>
            <button className='p-4 font-semibold text-white bg-yellow-600 hover:bg-yellow-500 rounded-xl'>
              Get Started
            </button>
            <ul>
              <li className='flex items-center justify-center font-semibold text-white'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold text-white'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold text-white'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold text-white'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold text-white'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold text-white'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
              <li className='flex items-center justify-center font-semibold text-white'>
                <AiOutlineCheck className='text-xl font-bold text-green-400' />
                Nice features
              </li>
            </ul>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  )
}
