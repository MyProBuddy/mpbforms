'use client'

import Image from 'next/image'

import { ChevronRight, Loader2 } from 'lucide-react'
import React, { useState, ChangeEvent } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface CheckboxProps {
    label: string
    name: string
    checked: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface SelectItem {
    value: string
}

export function Checkbox({ label, name, checked, onChange }: CheckboxProps) {
    return (
        <div className='flex p-1 items-center gap-2'>
            <input
                className='w-4 h-4'
                type='checkbox'
                name={name}
                value={name}
                checked={checked}
                onChange={onChange}
            ></input>
            <label className='text-center font-inter text-lg font-normal'>
                {label}
            </label>
        </div>
    )
}

export default function Hero() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [plan, setPlan] = useState<string>('')
    const [showAlert, setShowAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [referralOrigins, setReferralOrigins] = useState<string[]>([])

    const handleCheckboxChange = (value: string, checked: boolean) => {
        if (checked) {
            setReferralOrigins([value])
        } else {
            setReferralOrigins([])
        }
    }

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setPlan(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        setIsSubmitting(true)
        console.log(plan)
        const data = new FormData()
        data.append('name', name)
        data.append('phone', phone)
        data.append('email', email)
        data.append('description', description)
        data.append('plan', plan)
        data.append('referralOrigin', referralOrigins.join(','))

        const isFormValid = () => {
            return (
                name.trim() !== '' &&
                phone.trim() !== '' &&
                email.trim() !== '' &&
                description.trim() !== '' &&
                plan.trim() !== '' &&
                referralOrigins.length > 0
            )
        }

        if (!isFormValid()) {
            setErrorMessage('Please fill all the fields')
            setIsSubmitting(false)
            return
        }

        setErrorMessage('')

        fetch('/api/db/', {
            method: 'POST',
            body: data,
        })
            .then((response) => {
                console.log(response)
                setShowAlert(true)
                setIsSubmitting(false)
            })
            .catch((error) => {
                console.error(error)
                setErrorMessage('An error occurred while submitting the form')
                setIsSubmitting(false)
            })
    }

    return (
        <section className='flex justify-center pt-6 md:pb-0 pb-6'>
            <div className='w-21/24 gap-10 mx-4 lg:flex justify-center items-center'>
                <div className='lg:col-span-7 sm:w-1/2 w-full flex flex-col gap-7 pt-6'>
                    <div className='flex flex-col gap-4 text-[#5F248E] text-[26px] w-full sm:w-fit font-semibold lg:p-4'>
                        <span className='text-xl text-center md:text-left sm:text-2xl'>
                            Know the best
                        </span>
                        <span className='text-xl text-center lg:text-[28px] md:text-2xl sm:text-2xl text-[#FF8F40] uppercase'>
                            Grants & Government Schemes
                        </span>
                        <span className=' text-center md:text-right text-xl sm:text-2xl'>
                            for your business idea / startup
                        </span>
                    </div>
                    <div className='hidden lg:block'>
                        <Image
                            alt='hero-img'
                            src='/hero-img.png'
                            // className="w-full"
                        />
                    </div>
                </div>
                <div className='lg:col-span-5 sm:w-1/2 flex justify-center items-center w-full mt-8 mb-4 lg:mt-0'>
                    <form
                        onSubmit={handleSubmit}
                        className='border-4 border-gray-500 flex py-6 flex-col gap-8 rounded-2xl'
                    >
                        <h2 className='text-[#5F248E] text-center text:xl sm:text-2xl font-semibold'>
                            Share your details below to get <br />a call from
                            our Experts
                        </h2>
                        <div className='px-4 flex flex-col gap-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                <input
                                    className='px-3 py-2 border-2 border-[#9C9C9C] rounded-md'
                                    type='text'
                                    placeholder='Name*'
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setName(e.target.value)
                                    }}
                                ></input>
                                <input
                                    className='px-3 py-2 border-2 border-[#9C9C9C] rounded-md'
                                    type='tel'
                                    placeholder='Phone*'
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        setPhone(e.target.value)
                                    }}
                                ></input>
                            </div>
                            <input
                                className='px-3 py-2 border-2 border-[#9C9C9C] rounded-md'
                                type='email'
                                placeholder='Email*'
                                onChange={(
                                    e: ChangeEvent<HTMLInputElement>,
                                ) => {
                                    setEmail(e.target.value)
                                }}
                            ></input>
                            <textarea
                                className='px-3 py-2 border-2 border-[#9C9C9C] rounded-md'
                                placeholder='Short description about your business idea/startup*'
                                onChange={(
                                    e: ChangeEvent<HTMLTextAreaElement>,
                                ) => {
                                    setDescription(e.target.value)
                                }}
                            ></textarea>
                            <Select onValueChange={setPlan}>
                                <SelectTrigger className='border-2 border-[#9C9C9C] w-full'>
                                    <SelectValue placeholder='Choose your plan' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='Basic'>Basic</SelectItem>
                                    <SelectItem value='Standard'>
                                        Standard
                                    </SelectItem>
                                    <SelectItem value='Professional'>
                                        Professional
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div>
                                <p className='text-[#4D4D4D] text-lg mb-3'>
                                    From where did you hear about us?{' '}
                                </p>
                                <div className='flex flex-wrap gap-2 items-start content-start self-stretch text-[#4D4D4D]'>
                                    <Checkbox
                                        label='Instagram'
                                        name='instagram'
                                        checked={referralOrigins.includes(
                                            'Instagram',
                                        )}
                                        onChange={(e) =>
                                            handleCheckboxChange(
                                                'Instagram',
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <Checkbox
                                        label='Facebook'
                                        name='facebook'
                                        checked={referralOrigins.includes(
                                            'Facebook',
                                        )}
                                        onChange={(e) =>
                                            handleCheckboxChange(
                                                'Facebook',
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <Checkbox
                                        label='LinkedIn'
                                        name='linkedin'
                                        checked={referralOrigins.includes(
                                            'LinkedIn',
                                        )}
                                        onChange={(e) =>
                                            handleCheckboxChange(
                                                'LinkedIn',
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <Checkbox
                                        label='Organic'
                                        name='organic'
                                        checked={referralOrigins.includes(
                                            'Organic',
                                        )}
                                        onChange={(e) =>
                                            handleCheckboxChange(
                                                'Organic',
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <Checkbox
                                        label='MPB Club'
                                        name='mpb-club'
                                        checked={referralOrigins.includes(
                                            'MPB Club',
                                        )}
                                        onChange={(e) =>
                                            handleCheckboxChange(
                                                'MPB Club',
                                                e.target.checked,
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <p className='text-red-500'>
                                {' '}
                                {errorMessage && `!! ${errorMessage}`}
                            </p>
                        </div>
                        <button
                            type='submit'
                            className={`mr-auto ml-auto flex items-center justify-center gap-2 py-2 px-5 rounded-full w-fit ${
                                isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#EC3D28]'
                            }`}
                            disabled={isSubmitting}
                        >
                            <p className='text-white text-center font-inter text-sm sm:text-xl font-semibold uppercase'>
                                Book Now
                            </p>
                            <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                                {isSubmitting ? (
                                    <Loader2
                                        className='animate-spin'
                                        size={24}
                                        color={
                                            isSubmitting ? '#9CA3AF' : '#EC3D28'
                                        }
                                    />
                                ) : (
                                    <ChevronRight size={24} color='#EC3D28' />
                                )}
                            </div>
                        </button>
                        {/* ... */}
                        <AlertDialog
                            open={showAlert}
                            onOpenChange={setShowAlert}
                        >
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className='flex text-xl text-black justify-center items-center text-center'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width={80}
                                            height={80}
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='#25da43'
                                            strokeWidth={2}
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            className='lucide text-center lucide-circle-check-big'
                                        >
                                            <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                                            <path d='m9 11 3 3L22 4' />
                                        </svg>
                                    </AlertDialogTitle>
                                    <AlertDialogTitle className='text-black justify-center items-center text-center text-2xl'>
                                        Success
                                    </AlertDialogTitle>
                                    <AlertDialogDescription className='text-base'>
                                        <br /> Thank you for submitting your
                                        details. Our Expert will call you
                                        shortly.
                                        <br />
                                        <br />
                                        Until then, please check your email ID
                                        for the consultancy agreement and
                                        questionnaire.
                                        <br />
                                        <br />
                                        <span className='font-bold'>
                                            Note:
                                        </span>{' '}
                                        You will have to pay only if your idea
                                        gets shortlisted by our expert team
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className='bg-[#F47217] text-white'>
                                        Okay
                                    </AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </form>
                </div>
            </div>
        </section>
    )
}
