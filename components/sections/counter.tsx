'use client'

import React from 'react'
import CountUp from 'react-countup'

interface CounterItemProps {
    count: number
    append: string
    content: string
}

export function CounterItem({ count, append, content }: CounterItemProps) {
    return (
        <div className='w-52 py-4 flex flex-col gap-1 justify-center items-center'>
            <h2 className='text-3xl md:text-5xl font-bold text-center text-white'>
                <CountUp start={0} end={count} />
                {append}
            </h2>
            <p className='pt-2 font-bold text-center text-[#d5b3ef] sm:text-xl text-xs'>
                {content}
            </p>
        </div>
    )
}

const Counter = () => {
    return (
        <div className='bg-[#5F248E] py-6 justify-items-center grid grid-cols-2 lg:grid-cols-4 gap-6'>
            <CounterItem count={103} append='' content='Schemes Available' />
            <CounterItem count={82} append='L' content='Avg Deal Size' />
            <CounterItem count={7000} append='+' content='Happy Customers' />
            <CounterItem count={91.8} append='%*' content='Success rate' />
        </div>
    )
}

export default Counter
