// import React from 'react'

// const Tabbutton = ({active,seleteTab,childern}) => {

//     const buttonclass = active ? 'text-[#adb7ad] border-b border-purple-500':'text-[#adb7ad]'
//   return (

//     <button onClick={seleteTab}>
//         <p className={`mr-3 font-semibold hover:text-white ${buttonclass}`}>
//             {childern}
//         </p>
//     </button>
//   )
// }

// export default Tabbutton

import React from "react";
import { motion } from "framer";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
}

const Tabbutton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-white  "
    : "text-[#adb7ad]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default Tabbutton;