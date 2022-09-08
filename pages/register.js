import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Register() {
  return (
    <div className='bg-blue-200'>
      <Header />
      <h1 className='pt-32 text-4xl font-semibold text-center text-gray-900'>
        Create new account
      </h1>
      <form className='flex flex-col items-center justify-center w-11/12 gap-6 py-20 mx-auto mt-12 bg-gray-800 md:w-4/6 rounded-xl'>
        <label className='mr-2 text-xl font-semibold text-white' htmlFor='name'>
          First name:
        </label>
        <input
          className='w-5/6 h-10 text-center rounded-md'
          type='text'
          name='name'
          placeholder='Your first name'
          required={true}
          minLength={3}
          maxLength={50}
        />

        <label
          className='mr-2 text-xl font-semibold text-white '
          htmlFor='name'
        >
          Last name:
        </label>
        <input
          className='w-5/6 h-10 text-center rounded-md'
          type='text'
          name='lastName'
          placeholder='Your last name'
          required={true}
          minLength={3}
          maxLength={50}
        />

        <label className='mr-2 text-xl font-semibold text-white' htmlFor='name'>
          Email:
        </label>
        <input
          className='w-5/6 h-10 text-center rounded-md'
          type='email'
          name='email'
          placeholder='Your email address'
          required={true}
        />

        <label className='mr-2 text-xl font-semibold text-white' htmlFor='name'>
          Password:
        </label>
        <input
          className='w-5/6 h-10 text-center rounded-md'
          type='password'
          name='password'
          placeholder='Password'
          required={true}
          minLength={8}
          maxLength={50}
        />

        <label className='mr-2 text-xl font-semibold text-white' htmlFor='name'>
          Confirm your password:
        </label>
        <input
          className='w-5/6 h-10 text-center rounded-md'
          type='password'
          name='name'
          placeholder='Confirm your password'
          required={true}
          minLength={8}
          maxLength={50}
        />
        <button className='w-4/6 p-4 mt-4 text-2xl font-bold text-white rounded-xl hover:bg-sky-500 bg-sky-600'>
          Submit
        </button>
      </form>
      <span className='w-full h-32 py-20 text-blue-200'>-</span>
      <Footer />
    </div>
  )
}
