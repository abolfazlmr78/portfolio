import SocialMedia from '@/components/card/SocialMedia'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid grid-cols-10 gap-10 grid-rows-1 grow'>
      <div className='col-span-3 rounded-xl border border-border p-10'>
        <Image className='rounded-xl grayscale hover:grayscale-0 duration-200'
          alt='abolfazl mr'
          src={'/abolfazl.jpeg'}
          width={768}
          height={768} />
        <SocialMedia />
        <h1 className='text-center text-5xl font-semibold'>
          Abolfazl MR
        </h1>
      </div>
      <div className='col-span-7'>
        mr
      </div>
    </div>
  )
}
