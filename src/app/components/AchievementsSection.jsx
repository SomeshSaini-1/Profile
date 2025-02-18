"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer'


const Animatednumber = dynamic(() => { return import("react-animated-numbers"); },
    { ssr: false }
)

const Achievementlist = [
    {
        metric: "Projects",
        value: '20',
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "200",
    },
    {
        metric: "Awards",
        value: "2",
        // postfix : "+"
    },
    {
        metric: "Year's",
        value: "2",
        postfix: "+"
    }
]

const AchievementsSection = () => {
    return (
        <div className='px-8 py-8 xl:gap-16 sm:py-16 xl:px-16'>

            <div className="border-[#33353f] border rounded-md py-8 px-16 flex flex-row items-center justify-between ">
                {Achievementlist.map((ele, index) => (
                    <div key={index} className='flex flex-col items-center justify-center mx-4'>
                        <h2 className='text-white text-4xl font-bold flex items-center justify-center'>
                            {ele.prefix}
                            <Animatednumber
                                includeComma
                                animateToNumber={parseInt(ele.value)}
                                locale="en-US"
                                className='text-white text-4xl font-bold'
                                configs={(_, index) => {
                                    return {
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    }
                                }}
                            />
                            {ele.postfix}
                        </h2>
                        <p className='text-[adb7be] text-base '>{ele.metric}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AchievementsSection
