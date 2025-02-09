import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer>
       <div className='footer border border-top-[#33353f] border-l-transparent border-r-transparent text-white'>
            <span className='p-4 flex justify-between items-center '>
            <Image
              src="/logo.jpg"
              alt="Vercel Logo"
              className="dark:invert rounded-full"
              width={80}
              height={20}
              id='nav-image'
              priority
            />
            <p className='text-slate-700'>All right reserved.</p>
            </span>
       </div>
    </footer>
  )
}

export default Footer
