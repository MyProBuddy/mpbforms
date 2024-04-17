import Hero from '@/components/sections/hero'
import Navbar from '@/components/sections/navbar'
import Image from 'next/image'
import Counter from '@/components/sections/counter'
import Grants from '@/components/sections/grants'
import Schemes from '@/components/sections/schemes'
import Features from '@/components/sections/features'
import Cta from '@/components/sections/cta'
import Featuredin from '@/components/sections/featuredin'
import Partners from '@/components/sections/partners'
import Footer from '@/components/sections/footer'
import Pricing from '@/components/sections/pricing'
import VismeContactForm from '@/components/sections/heroform'

export default function Home() {
    return (
        <main className='min-h-screen bg-white'>
            <Navbar />
            <VismeContactForm/>
            <Counter />
            <Features />
            <Schemes />
            <Grants />
            <Cta/>
            <Featuredin />
            <Pricing />
            <Partners />
            <Footer />
            
        </main>
    )
}
