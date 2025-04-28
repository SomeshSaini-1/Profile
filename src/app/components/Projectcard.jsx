"use client"

import React from 'react';
import { motion } from 'framer-motion';

const projectdata = [
  {
    title: 'Gryo',
    image: './project1.png',
    description: "This crm for mantain the compony work.",
    link:"https://cspv.in/Gyro/User/login.php"
  },
  {
    title: 'Smartswitch',
    image: './project2.png',
    description: "This is the a Smarthome control dashboard.",
    link : "http://otplcloud.com:9004/Ldr/Login"
  },
  {
    title: 'Airbin',
    image: './project3.png',
    description: "This project relative to air testing and control dashboard.",
    link : "http://otplcloud.com:27021/zylemenergy/Airbin/login"
  },
  {
    title: 'Feedback',
    image: './project7.png',
    description: "This dashboard for get the feeback from multipal device's.",
    link : "https://feedbackbharat.com/Oxymora-Technology/"
  },
  {
    title: "Well health",
    image: "https://someshsaini-1.github.io/Well-Health/04.jpg",
    description: "This is a freelance project dedicated to Yuktaahara - BSR Group, aiming to reach out to people and provide information about health",
    link : "https://someshsaini-1.github.io/Well-Health/"
  }

]
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Projectcard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className='w-[90%] m-auto'
    >

      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          projectdata.map((ele,index) => (
            <motion.div key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='h-52 md:h-72 rounded-t-xl relative group'
                style={{ background: `url(${ele.image})`, backgroundSize: 'cover' }}
              >
                <div className="overlay absolute top-0 left-0 h-full
                 w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex 
                 group-hover:bg-opacity-80 transition-all duration-500">
                </div>
              </div>

              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className='text-xl font-semibold '>{ele.title}</h5>
                <p className='text-[#adb7be]'>{ele.description}</p>
              </div>
            </motion.div>
          ))
        }
      </div>

    </motion.div>
  )
}

export default Projectcard
