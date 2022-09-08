import Image from "next/image"
import { BiCloudLightning } from "react-icons/bi"
import { ImStatsDots } from "react-icons/im"
import { MdGppGood } from "react-icons/md"
import { Fade } from "react-awesome-reveal"

const Features = () => {
  return (
    <div>
      <h1 className='mt-6 mb-8 text-5xl font-semibold text-center text-blue-900'>
        The future of cloud based platforms
      </h1>

      <section className='flex flex-col w-11/12 p-10 m-auto border-8 border-gray-400 rounded-lg md:grid-cols-2 md:grid'>
        <Fade triggerOnce>
          <div className='mx-auto mr-2 bg-blue-200 rounded-lg'>
            <Image
              src='/images/features1.svg'
              width={500}
              height={300}
              layout='intrinsic'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-8 mb-2 text-3xl font-semibold text-center text-blue-900'>
              Fast
            </h1>
            <span className='flex flex-col items-center'>
              <p className='w-full p-4 mb-1 ml-auto mr-auto text-xl text-white rounded-lg bg-sky-700'>
                Praesent non condimentum turpis. Sed porttitor finibus dolor et
                fringilla. Nam mollis augue odio, eget scelerisque justo
                facilisis vel.
              </p>
              <BiCloudLightning className='text-5xl text-yellow-500 bg-blue-900 rounded-full ' />
            </span>
          </div>
        </Fade>

        <Fade triggerOnce>
          <div className='mx-auto mt-12 mr-2 bg-blue-200 rounded-lg'>
            <Image src='/images/features2.svg' width={500} height={300} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-8 mb-2 text-3xl font-semibold text-blue-900'>
              Scalable
            </h1>
            <span className='flex flex-col items-center'>
              <p className='w-full p-4 mb-1 ml-auto mr-auto text-xl text-white rounded-lg bg-sky-700'>
                Praesent non condimentum turpis. Sed porttitor finibus dolor et
                fringilla. Nam mollis augue odio, eget scelerisque justo
                facilisis vel.
              </p>
              <ImStatsDots className='p-1 text-5xl text-yellow-500 bg-blue-900 rounded-full' />
            </span>
          </div>
        </Fade>

        <Fade triggerOnce>
          <div className='mt-12 mr-2 bg-blue-200 rounded-lg'>
            <Image src='/images/features3.svg' width={500} height={300} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-8 mb-2 text-3xl font-semibold text-center text-blue-900'>
              Reliable
            </h1>
            <span className='flex flex-col items-center'>
              <p className='w-full p-4 mb-1 ml-auto mr-auto text-xl text-white rounded-lg bg-sky-700'>
                Praesent non condimentum turpis. Sed porttitor finibus dolor et
                fringilla. Nam mollis augue odio, eget scelerisque justo
                facilisis vel.
              </p>
              <MdGppGood className='p-1 text-5xl text-yellow-500 bg-blue-900 rounded-full' />
            </span>
          </div>
        </Fade>
      </section>
    </div>
  )
}
export default Features
