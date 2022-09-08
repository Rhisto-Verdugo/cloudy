import Image from "next/image"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

const Hero = () => {
  return (
    <Fade triggerOnce>
      <div className='grid items-center justify-center w-full mt-24 bg-blue-100 md:grid-cols-2'>
        <div className='w-5/6 m-auto text-left'>
          <div>
            <h1 className='mt-4 mb-4 text-5xl font-semibold text-blue-900 md:text-6xl'>
              Lightning fast <br></br> cloud hosting
            </h1>
            <p className='mb-6 text-xl'>
              Aliquam ornare ligula eget lectus fringilla, at tincidunt ipsum
              fringilla. Donec in ligula nunc. Pellentesque non tempor quam.
            </p>
            <p className='w-3/6 p-4 mt-6 text-xl font-bold text-center text-white bg-blue-500 rounded-md hover:bg-blue-400'>
              <Link href='/register'>Get Started</Link>
            </p>
          </div>
        </div>
        <div>
          <div className='w-5/6 py-8 mx-auto my-8 bg-blue-500 rounded-3xl'>
            <Image
              src='/images/hero.svg'
              width={700}
              height={450}
              layout='intrinsic'
            />
          </div>
        </div>
      </div>
    </Fade>
  )
}
export default Hero
