import { Fade } from "react-awesome-reveal"

const Partners = () => {
  return (
    <Fade triggerOnce>
      <section className='bg-gray-200'>
        <h1 className='pt-20 mb-8 text-5xl font-semibold text-center text-blue-900'>
          Proudly working with:
        </h1>
        <div className='flex flex-row flex-wrap items-center justify-center pt-8 bg-gray-800'>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/2.png' />
          </div>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/5.png' />
          </div>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/4.png' />
          </div>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/3.png' />
          </div>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/6.png' />
          </div>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/8.png' />
          </div>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/9.png' />
          </div>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/10.png' />
          </div>
          <div className='w-24 h-16 mx-2'>
            <img src='/images/logos-grayscale/11.png' />
          </div>
        </div>
      </section>
    </Fade>
  )
}
export default Partners
