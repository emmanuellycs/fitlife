import logo from '@/assets/logo.png'
import logoName from '@/assets/logo-name.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-around">
      <div className='flex flex-col items-center gap-8'>
        <Image src={logo} alt="store logo" width={160} height={139} />
        <Image src={logoName} alt="store logo" width={224} height={54} />
      </div>

      <div className='flex flex-col gap-4'>
        <Link href='/login'>
          <button className='w-52 h-12 rounded-md border-2 border-black font-bold bg-slate-50'>Login</button>
        </Link>
        <Link href='/signup'>
          <button className='w-52 h-12 rounded-md border-2 border-black font-bold bg-slate-50'>Cadastro</button>
        </Link>
      </div>
    </div>
  )
}
