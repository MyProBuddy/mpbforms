
import Image from 'next/image'

export default function Features() {
    return (
        <section className='flex flex-col items-center gap-8 py-10'>
            <h1 className='text-[#5F248E] text-[26px] font-semibold uppercase'>
                Here&apos;s what we do
            </h1>
            <div>
                <Image alt='features-img' src='/features.png' />
            </div>
        </section>
    )
}
