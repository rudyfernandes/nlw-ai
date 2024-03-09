import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
    return (
        <div className='space-y-6'>
          <Image src={nlwLogo} alt="Logo NLW Spacetime" />
          <div className='max-w-[420px] space-y-1'>
            <h1 className='text-4xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
            <p className='text-base leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <Link className='shadow-2xl  inline-block rounded-full bg-violet-600 px-5 py-3 font-alt text-sm leading-none uppercase text-zinc-950 hover:bg-violet-700' 
          href="/memories/new"
          >
            CADASTRAR LEMBRANÇA
          </Link>
        </div>

    )
}