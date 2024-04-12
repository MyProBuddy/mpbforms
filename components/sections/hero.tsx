"use client";

import Image from 'next/image'
import heroImg from '@/static/hero-img.png'
import { ChevronRight } from 'lucide-react'
import axios from 'axios'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Airtable from 'airtable';
import dotenv from 'dotenv';


interface CheckboxProps {
    label: string;
    name: string
}


export function Checkbox({ label, name }: CheckboxProps) {
    return (
        <div className='flex p-1 items-center gap-2'>
            <input
                className='w-4 h-4'
                type='checkbox'
                name={name}
                value={name}
            ></input>
            <label className='text-center font-inter text-lg font-normal'>
                {label}
            </label>
        </div>
    )
}

export default function Hero() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');


dotenv.config();

const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('phone', phone);
    data.append('email', email);
    data.append('description', description);

    axios.post('/api/db/root', data)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };



    return (
        <section className='flex justify-center px-6 pt-6 md:pb-0 pb-6'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 lg:px-16 xl:w-11/12 items-center'>
                <div className='lg:col-span-7 flex flex-col gap-7 pt-6'>
                    <div className='flex flex-col gap-4 text-[#5F248E] text-[26px] w-full sm:w-fit font-semibold lg:p-4'>
                        <span className='text-xl text-center sm:text-left sm:text-2xl'>
                            Know the best
                        </span>
                        <span className='text-xl text-center sm:text-3xl text-[#FF8F40] uppercase'>
                            Grants & Government Schemes
                        </span>
                        <span className=' text-center sm:text-right text-xl sm:text-2xl'>
                            for your business idea / startup
                        </span>
                    </div>
                    <div className='hidden lg:block'>
                        <Image
                            alt='hero-img'
                            src={heroImg}
                            // className="w-full"
                        />
                    </div>
                </div>
                <div className='lg:col-span-5 mt-8 lg:mt-0'>
                    <form className='border-4 border-gray-500 flex py-6 flex-col gap-8 rounded-2xl'>
                        <h2 className='text-[#5F248E] text-center text:xl sm:text-2xl font-semibold'>
                            Share your details below to 
                            get <br/>a call from our Experts
                        </h2>
                        <div className='px-4 flex flex-col gap-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                <input
                                    className='px-3 py-2 border-2 border-[#9C9C9C] rounded-md'
                                    type='text'
                                    placeholder='Name*'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}}
                                ></input>
                                <input
                                    className='px-3 py-2 border-2 border-[#9C9C9C] rounded-md'
                                    type='tel'
                                    placeholder='Phone*'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {setPhone(e.target.value)}}
                                ></input>
                            </div>
                            <input
                                className='px-3 py-2 border-2 border-[#9C9C9C] rounded-md'
                                type='email'
                                placeholder='Email*'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}
                            ></input>
                            <textarea
                                className='px-3 py-2 border-2 border-[#9C9C9C] rounded-md'
                                placeholder='Short description about your business idea/startup*'
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {setDescription(e.target.value)}}
                            ></textarea>

                            <div>
                                <p className='text-[#4D4D4D] text-lg mb-3'>
                                    From where did you hear about us?{' '}
                                </p>
                                <div className='flex flex-wrap gap-2 items-start content-start self-stretch text-[#4D4D4D]'>
                                    {/* Instagram, Facebook, LinkedIn, Organic, MPB Club, Quora/medium, Referral */}
                                    <Checkbox
                                        label='Instagram'
                                        name='instagram'
                                    />
                                    <Checkbox
                                        label='Facebook'
                                        name='facebook'
                                    />
                                    <Checkbox
                                        label='LinkedIn'
                                        name='linkedin'
                                    />
                                    <Checkbox label='Organic' name='organic' 
                                    />
                                    <Checkbox
                                        label='MPB Club'
                                        name='mpb-club'
                                    />
                                    <Checkbox
                                        label='Quora/Medium'
                                        name='quora-medium'
                                    />
                                    <Checkbox
                                        label='Referral'
                                        name='referral'
                                    />
                                </div>
                            </div>
                        </div>

                        <button className='mr-auto ml-auto flex items-center justify-center gap-2 py-2 px-5 rounded-full bg-[#EC3D28] w-fit'>
                            <p className='text-white text-center font-inter text-xl font-semibold uppercase' onClick={handleSubmit}>
                                Book Now
                            </p>
                            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                <ChevronRight size={24} color='#EC3D28' />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
