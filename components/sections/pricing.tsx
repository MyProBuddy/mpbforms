import Image from 'next/image'
import pricingImg from '@/static/pricing.png'

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
    return (
        <section className='pt-12 bg-[#5F248E] p-6'>
            <div className='flex flex-col justify-center items-center font-semibold gap-3'>
                <h1 className='uppercase text-[28px] sm:text-[36px] text-white'>our pricing</h1>
                <p className='text-[18px] sm:text-[24px] font-normal text-white mb-4 text-center'>
                    We offer you comprehensive service at an affordable price
                </p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-6 md:gap-14'>
                <div className='hidden lg:block'>
                    <Image alt='pricing-img' src={pricingImg} width={750} />
                </div>
                <div>
                    <PricingCard
                        recommended={true}
                        title='Professional'
                        price='₹ 2,199'
                        description='Everything in Standard <br/><br/> + <br/><br/> <p className="font-semibold">Grant Proposal Template</p>'
                        color='#F47217'
                    />
                </div>
                <div>
                    <PricingCard
                        recommended={false}
                        title='Standard'
                        price='₹ 1,999'
                        description='Top 5 Eligibility report<br/><br/> Competitor Analysis<br/><br/> Grant Roadmap<br/><br/> Application best practices'
                        color='#5F248E'
                    />
                </div>
            </div>
        </section>
    )
}
