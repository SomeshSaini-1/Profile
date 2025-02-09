"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import $ from 'jquery'
import { FaHome,FaCommentAlt  } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { RiCustomerServiceFill } from "react-icons/ri";
import { motion } from 'framer'


const Nav = () => {

  useEffect(()=>{
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('nav').addClass("nav");
      }
      else{
        $('nav').removeClass("nav");
      }
    });
    
  })
  return (
    <>
    <motion.div 
      initial={{opacity: 0,scale:0.5}}
      animate={{opacity: 1,scale:1}} 
      transition={{duration: 0.5}} 
      >
      
      <nav className=' rounded-lg flex items-center justify-between z-10'>

        <div className="logo">
        <Image
              src="/logo.jpg"
              alt=" Logo"
              className="dark:invert rounded-full"
              width={80}
              height={20}
              id='nav-image'
              priority
            />
        </div>
        <ul className='flex justify-between'>
            <Link href={'/#Home'}> <li><p><FaHome /></p><p>Home</p></li> </Link>
            <Link href={'/#About'}> <li><p><FaCommentAlt /></p><p>About Me</p></li> </Link>
            <Link href={'/#Services'}> <li><p><RiCustomerServiceFill/></p><p>Services</p></li> </Link>
            <Link href={'/#Projects'}> <li><p><GrProjects /></p><p>Projects</p></li> </Link>
            <Link href={'/#Contact'}> <li><p><MdAddCall/></p><p>Contect</p></li> </Link>
        </ul>
        
      </nav>
    </motion.div>
    </>
  )
}

export default Nav
