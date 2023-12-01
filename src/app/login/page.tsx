import Link from 'next/link'
import { CornerUpLeft } from 'lucide-react'

export default function Login() {
  return (
    <div className="w-full min-h-screen flex flex-col mt-20 gap-4">

      <div className='w-full pl-4 flex flex-col items-start'>
        <div className='flex flex-col gap-2'>
          <Link href='/'>
            <CornerUpLeft />
          </Link>
          <h1 className='font-semibold text-4xl'>Login</h1>
        </div>
      </div>

      <div>
        <div className='w-full p-4 flex flex-col items-center justify-center gap-4'>
          <input
            type="text"
            placeholder='e-mail'
            className='h-12 w-full pl-2 rounded-md border-2 outline-none border-black font-bold bg-slate-50'
          />
          <input
            type="text"
            placeholder='senha'
            className='h-12 w-full pl-2 rounded-md border-2 outline-none border-black font-bold bg-slate-50'
          />

          <Link href='/store' className='w-full'>
            <button className='w-full h-12 rounded-md font-bold text-lg text-white bg-black'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
