"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer';
import { useRouter } from 'next/navigation';


const Herosection = () => {
  const router = useRouter();
  
  const hendle_click = ()=>{
    router.push('/#Contact')
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Path to your PDF file in the public folder
    link.download = "cv.pdf"; // Filename for the downloaded PDF
    link.click();
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-12 items-center'>

      <motion.div 
      initial={{opacity: 0,scale:0.5}}
      animate={{opacity: 1,scale:1}} 
      transition={{duration: 0.5}} 
      className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
        <h1 className="text-white mb-4 text-4xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">  {"Hello, I'm  "}</span>
          <br></br>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Somesh Saini',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Web Developer',
              1000,
              'React Developer',
              1000,
              'UI/UX Designer'
            ]}
            wrapper="span"
            speed={200}
            style={{ fontSize: '', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
        I simplify complex user experience problems to create dependable solutions that help connect people.
        </p>
        <div>
          <button onClick={hendle_click} className="px-6 py-3 w-full sm:w-fit  rounded-full bg-white hover:bg-slate-200 text-black m-3">Hire Me</button>
          <button onClick={handleDownload} className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-200 text-white border border-2 m-3 hover:text-black">
            Download CV
          </button>
        </div>
      </motion.div>

      <motion.div 
      initial={{opacity: 0,scale:0.5}}
      animate={{opacity: 1,scale:1}} 
      transition={{duration: 0.5}} 
      className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full overflow-hidden  bg-[#181818] w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem]  relative'>
          <Image alt='img'
            src='/image.png'
            width={200}
            height={200}
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[60%] left-1/2'
          />
        </div>
      </motion.div>

    </div>
  )
}

export default Herosection
