'use client'

import Image from 'next/image'
import { useState } from 'react'
import pricingImg from '@/static/pricing.png'
import { Contact } from 'lucide-react'
import ContactForm from './form'

interface PricingCardProps {
    recommended: boolean
    title: string
    price: string
    description: string
    color: string
}

export function PricingCard({
    recommended,
    title,
    price,
    description,
    color,
}: PricingCardProps) {
    const createMarkup = () => {
        return { __html: description.replace(/\n/g, '<br>') }
    }

    
    return (
        <div
            className='bg-white rounded-2xl w-72 text-black font-semibold pt-8 flex flex-col items-center px-4 gap-4'
            style={{ height: '420px' }}
        >
            <h1
                className='text-center text-4xl font-bold'
                style={{ color: color }}
            >
                {price}
            </h1>
            <div
                className='text-white py-2 rounded-md w-full'
                style={{ background: color }}
            >
                <h2 className='text-center'>{title}</h2>
            </div>
            <div className='flex-grow flex items-center'>
                <p
                    className='text-center h-fit'
                    dangerouslySetInnerHTML={createMarkup()}
                ></p>
            </div>
            <div className='flex justify-center mb-6'>
                <button className='mr-auto ml-auto py-2 px-8 rounded-full bg-[#EC3D28] w-fit text-white text-xl font-semibold uppercase'>
                    Select
                </button>
            </div>
        </div>
    )
}

export default function Pricing() {
    const [Purchase, setPurchase] = useState(false)

    return (
        <section className='pt-12 bg-[#F47217] p-6'>
            <div className='flex flex-col justify-center items-center font-semibold gap-3'>
                <h1 className='uppercase text-[22px] sm:text-[28px] text-center text-white'>
                    Ready to get started?
                </h1>
                <p className='text-[18px] sm:text-[20px] font-normal text-white mb-4 text-center'>
                    Choose a plan that best suits your need.
                </p>
            </div>
            <div className='wrapper'>
                <div className='table basic'>
                    <div className='price-section'>
                        <div className='price-area'>
                            <div className='inner-area'>
                                <span className='price'>₹499</span>
                            </div>
                        </div>
                    </div>
                    <div className='package-name' />
                    <ul className='features'>
                        <li>
                            <span className='list-name'>
                                Grant Proposal Template
                            </span>
                            <span className='icon check'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>Consultation Call</span>
                            <span className='icon check'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Top 5 Eligible Grants
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#ff0000'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-x'
                                >
                                    <path d='M18 6 6 18' />
                                    <path d='m6 6 12 12' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Competitor Analysis
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#ff0000'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-x'
                                >
                                    <path d='M18 6 6 18' />
                                    <path d='m6 6 12 12' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>Grant Roadmap</span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#ff0000'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-x'
                                >
                                    <path d='M18 6 6 18' />
                                    <path d='m6 6 12 12' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Application best Practices
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#ff0000'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-x'
                                >
                                    <path d='M18 6 6 18' />
                                    <path d='m6 6 12 12' />
                                </svg>
                            </span>
                        </li>
                    </ul>
                    <a href='#hero'> <div className='btn'>
                    <button>Purchase</button>
                    </div></a>
    
                </div>
                <div className='table ultimate'>
                    <div className='price-section'>
                        <div className='price-area'>
                            <div className='inner-area'>
                                <span className='price'>₹1,999</span>
                            </div>
                        </div>
                    </div>
                    <div className='package-name' />
                    <ul className='features'>
                        <li>
                            <span className='list-name'>
                                Grant Proposal Template
                            </span>
                            <span className='icon check'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#ff0000'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-x'
                                >
                                    <path d='M18 6 6 18' />
                                    <path d='m6 6 12 12' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>Consultation Call</span>
                            <span className='icon check'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Top 5 Eligible Grants
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Competitor Analysis
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>Grant Roadmap</span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Application best Practices
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                    </ul>
                    <a href='#hero'> <div className='btn'>
                    <button>Purchase</button>
                    </div></a>
                </div>
                <div className='table premium'>
                    <div className='ribbon'>
                        <span>Recommended</span>
                    </div>
                    <div className='price-section'>
                        <div className='price-area'>
                            <div className='inner-area'>
                                <span className='price'>₹2,199</span>
                            </div>
                        </div>
                    </div>
                    <div className='package-name' />
                    <ul className='features'>
                        <li>
                            <span className='list-name'>
                                Grant Proposal Template
                            </span>
                            <span className='icon check'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>Consultation Call</span>
                            <span className='icon check'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Top 5 Eligible Grants
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Competitor Analysis
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>Grant Roadmap</span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className='list-name'>
                                Application best Practices
                            </span>
                            <span className='icon cross'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={20}
                                    height={20}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='#00ff11'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='lucide lucide-check'
                                >
                                    <path d='M20 6 9 17l-5-5' />
                                </svg>
                            </span>
                        </li>
                    </ul>
                    <a href='#hero'> <div className='btn'>
                    <button>Purchase</button>
                    </div></a>
                </div>
              
            </div>
        </section>
    )
}