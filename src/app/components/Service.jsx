"use client"
import React from 'react';
import { motion } from 'framer-motion';
import * as Faicons from 'react-icons/fa';

const servicedata = [
  {
    title: "Web Design",
    icon: <Faicons.FaAirbnb />,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, voluptas! Provident recusandae quod quas error.'
  },
  {
    title: 'Web Development',
    icon: <Faicons.FaLaptopCode />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem.'
  },
  {
    title: "UI/UX Design",
    icon: <Faicons.FaPaintBrush />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem."
  },
  {
    title: "Graphic Design",
    icon: <Faicons.FaPalette />,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea?'
  }
];

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className='w-[90%] m-auto'
    >
      <h2 className="text-3xl font-bold mb-4">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {servicedata.map((service, index) => (
          <motion.div
            key={index}
            className="h-56 md:h-76 rounded-xl bg-[#262020] flex items-center justify-center flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
          >
            <span className='services-box'>
              {service.icon}
            </span>
            <span className='text-center'>
              {service.title}
              <p className="text-[#adb7be]">{service.description}</p>
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Service;



// "use client"
// import React from 'react';
// import { motion } from 'framer';
// import * as Faicons from 'react-icons/fa'; // Corrected import statement


// const servicedata = [
//   {
//     title: "Web Design",
//     icon: <Faicons.FaAirbnb />,
//     description : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, voluptas! Provident recusandae quod quas error.'
//   },
//   {
//     title: 'Web Development',
//     icon: <Faicons.FaLaptopCode />,
//     description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem.'
//   },
//   {
//     title: "UI/UX Design",
//     icon: <Faicons.FaPaintBrush />,
//     description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem."
//   },
//   {
//     title : "Graphic Design",
//     icon : <Faicons.FaPalette />,
//     description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea?'
//   }
// ];

// const Service = () => {
//   return (
//     // <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}  viewport={{ once: true }}>
//     <motion.div
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   viewport={{ once: true }}
// >
//       <h2 className="text-3xl font-bold mb-4">Services</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {servicedata.map((service, index) => (
//             <div className=" h-56 md:h-76  rounded-xl bg-[#262020] flex items-center justify-center flex-col">
//                <span className='services-box'>
//                 {service.icon}
//                </span>
//                <span className='text-center'>
//                 {service.title}
//                 <p className="text-[#adb7be]">{service.description}</p>
//                </span>

//             </div>
//         ))}
//       </div>
//     </motion.div> 
//     // <li key={index} className="flex items-center mb-2">
//           //   {service.icon}
//           //   <span className="ml-2 text-xl">{service.title}</span> {/* Render the title */}
//           // </li>
//   );
// }

// export default Service;
