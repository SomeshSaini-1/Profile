"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Contectus = () => {
    const [data_list,setdata_list] = useState({
        name:"",
        email:"",
        message : ""
    })

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload
        // console.log(data_list)
       
        // Add any additional logic for sending email or processing the form here
           let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify(data_list);
            console.log(bodyContent)    
           let response = await fetch("http://localhost:3000/api", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
           
           let data = await response.json();
           console.log(data);
           if(data.success === true)
           {
                document.getElementById('send').innerText = "Thenkyou for submission!"
                setTimeout(()=>{
                    document.getElementById('send').innerText = "Send"
                },3000)
           }
    };

    return (
        <div className='w-[90%] m-auto pb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 h-full items-center'>
                <div>
                    <h2 className="text-3xl font-bold mb-4">{"Let's Contact"}</h2>
                    <p className='mb-2 text-[#adb7be]'>
                        {`I'm currently looking for new opportunities, my inbox is 
                        always open. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!`}
                    </p>
                    <div className="text-3xl text-white font-semibold flex space-x-4">
                        <Link href={'https://www.linkedin.com/in/somesh-saini-526a7b226'}>
                            <FaLinkedin />
                        </Link>
                        <Link href={'https://www.facebook.com/somesh.saini.5492'}>
                            <FaFacebookSquare />
                        </Link> 
                    </div>
                </div>
                <form className="space-y-4 text-black" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-lg font-medium text-white">Name</label>
                        <input type="text" className="w-full p-2 border rounded-lg" onChange={(e)=>{setdata_list((prev)=>({...prev,name:e.target.value}))}} />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-white">Email</label>
                        <input type="email" className="w-full p-2 border rounded-lg" onChange={(e)=>{setdata_list(prev => ({...prev,email:e.target.value}))}} />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-white">Message</label>
                        <textarea className="w-full p-2 border rounded-lg" onChange={(e)=>{setdata_list(prev => ({...prev,message:e.target.value}))}}></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg" id='send'
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contectus;
