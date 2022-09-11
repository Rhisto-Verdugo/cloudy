import Image from "next/image"
import { BiCloudLightning } from "react-icons/bi"
import { ImStatsDots } from "react-icons/im"
import { MdGppGood } from "react-icons/md"
import { Fade } from "react-awesome-reveal"

const Features = () => {
  return (
    <section className='bg-blue-100'>
      <h1 className='pt-8 text-5xl font-semibold text-center text-blue-900'>
        The future of cloud based platforms
      </h1>

      <div className='flex flex-col items-center justify-center gap-4 p-10 m-auto rounded-lg '>
        <Fade triggerOnce>
          <div className='flex flex-col items-center justify-center grid-cols-2 p-8 bg-blue-500 rounded-lg md:grid'>
            <div className='mx-auto rounded-lg'>
              <Image
                src='/images/features1.svg'
                width={500}
                height={300}
                layout='intrinsic'
              />
            </div>
            <div className='flex flex-col items-center justify-center p-2 rounded-xl'>
              <h1 className='p-2 text-3xl font-semibold text-center text-yellow-500 bg-blue-600 rounded-md'>
                Fast
              </h1>
              <span className='flex flex-col items-center'>
                <p className='w-full p-4 mb-1 text-xl text-center text-white rounded-lg'>
                  Praesent non condimentum turpis. Sed porttitor finibus dolor
                  et fringilla. Nam mollis augue odio, eget scelerisque justo
                  facilisis vel
                </p>
                <BiCloudLightning className='text-5xl text-yellow-500 bg-blue-600 rounded-full ' />
              </span>
            </div>
          </div>
        </Fade>

        <Fade triggerOnce>
          <div className='flex flex-col items-center justify-center grid-cols-2 p-8 bg-blue-500 rounded-lg md:grid'>
            <div className='mx-auto mt-12 rounded-lg'>
              <Image src='/images/features2.svg' width={500} height={300} />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='p-2 mt-8 mb-2 text-3xl font-semibold text-yellow-500 bg-blue-600 rounded-md'>
                Scalable
              </h1>
              <span className='flex flex-col items-center'>
                <p className='w-full p-4 mb-1 text-xl text-center text-white rounded-lg'>
                  Praesent non condimentum turpis. Sed porttitor finibus dolor
                  et fringilla. Nam mollis augue odio, eget scelerisque justo
                  facilisis vel
                </p>
                <ImStatsDots className='p-1 text-5xl text-yellow-500 bg-blue-600 rounded-full' />
              </span>
            </div>
          </div>
        </Fade>

        <Fade triggerOnce>
          <div className='flex flex-col items-center justify-center grid-cols-2 p-8 bg-blue-500 rounded-lg md:grid'>
            <div className='mt-12 rounded-lg'>
              <Image src='/images/features3.svg' width={500} height={300} />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='p-2 mt-8 mb-2 text-3xl font-semibold text-center text-yellow-500 bg-blue-600 rounded-md'>
                Reliable
              </h1>
              <span className='flex flex-col items-center'>
                <p className='w-full p-4 mb-1 text-xl text-center text-white rounded-lg'>
                  Praesent non condimentum turpis. Sed porttitor finibus dolor
                  et fringilla. Nam mollis augue odio, eget scelerisque justo
                  facilisis vel
                </p>
                <MdGppGood className='p-1 text-5xl text-yellow-500 bg-blue-900 rounded-full' />
              </span>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}
export default Features
