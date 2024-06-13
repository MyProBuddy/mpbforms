
import Image from 'next/image'

export default function Howitworks() {
    return (
        <section className='flex flex-col border-t-2 items-center gap-8 py-10'>
            <h1 className='text-[#5F248E] text-[26px] font-semibold uppercase'>
                How it Works ?
            </h1>
            <div className='px-2'>
                <img alt='features-img' src='/howitworks.png' />
            </div>
        </section>
    )
}
