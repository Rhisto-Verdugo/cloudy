import Image from "next/image"
import Header from "../components/Header"
import { AiOutlineBlock, AiFillCodeSandboxSquare } from "react-icons/ai"
import { TbFileDots } from "react-icons/tb"
import Footer from "../components/Footer"

export default function Products() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className='mt-24'>
        <h1 className='pt-8 text-4xl font-semibold text-center text-blue-900'>
          Our Products
        </h1>
        <div className='grid items-center justify-center mx-auto mt-12 md:w-5/6 md:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <Image src='/images/products-1.svg' width={500} height={300} />
          </div>
          <div>
            <p className='flex items-center justify-center w-5/6 mx-auto mt-8 text-xl'>
              <span className='mr-4 text-4xl text-orange-400'>
                <AiOutlineBlock />
              </span>
              Nullam mattis, felis ut sollicitudin rhoncus, libero quam
              convallis mauris, sit amet suscipit nisi diam id ipsum.
            </p>
            <p className='flex items-center justify-center w-5/6 mx-auto mt-2 text-xl'>
              <span className='mr-4 text-4xl text-orange-400'>
                <AiFillCodeSandboxSquare />
              </span>
              Aliquam erat volutpat. Aenean auctor egestas elit, non facilisis
              ante sagittis eget.
            </p>
            <p className='flex items-center justify-center w-5/6 mx-auto mt-2 text-xl'>
              <span className='mr-4 text-4xl text-orange-400'>
                <TbFileDots />
              </span>
              Nullam mattis, felis ut sollicitudin rhoncus, libero quam
              convallis mauris, sit amet suscipit nisi diam id ipsum.
            </p>
          </div>
        </div>
        <div className='relative flex flex-col items-center justify-center w-5/6 p-12 mx-auto my-8 text-white bg-gray-900 rounded-md'>
          <Image
            src='/images/products-2.svg'
            width={500}
            height={300}
            layout='intrinsic'
          />
          <p className='w-11/12 pt-8 text-xl text-center'>
            Phasellus blandit placerat velit quis sagittis. Quisque condimentum
            ornare risus, id sollicitudin enim mattis ut.
          </p>
        </div>
        <Footer />
      </section>
    </>
  )
}
