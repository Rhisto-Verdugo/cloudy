import Image from "next/image"
import Link from "next/link"

const Screenshots = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-center w-11/12 grid-cols-2 gap-12 m-auto mt-20 bg-gray-900 lg:grid rounded-3xl'>
      <div className='relative flex my-20 ml-10'>
        <Image src='/images/screen.svg' width={700} height={450} />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-4 mb-8 text-4xl text-center text-white'>
          One platform,<br></br>Infinite solutions
        </h1>
        <p className='w-11/12 mb-8 text-xl text-center text-gray-400'>
          Quisque faucibus turpis volutpat.
        </p>
        <p className='w-3/6 p-3 mt-6 text-2xl font-bold text-center text-white bg-blue-500 rounded-md hover:bg-blue-400'>
          <Link href='/products'>Learn More</Link>
        </p>
      </div>
    </div>
  )
}
export default Screenshots
