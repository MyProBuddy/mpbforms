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
import NewPricing from '@/components/sections/newpricing'
import NewHero from '@/components/sections/newhero'
import AmrishHero from '@/components/sections/amrishhero'
import Howitworks from '@/components/sections/howitworks'


export default function Home() {
    return (
        <main className='min-h-screen bg-white'>
            <Navbar />
            {/* <AmrishHero /> */}
            <NewHero />
            {/* */}
            <Counter />
            <Features />
            {/* <Howitworks /> */}
            <Schemes />
            <Grants />
            <Cta />
            <Featuredin />
            <VismeContactForm />
            <NewPricing />

            <Partners />
            <Footer />

        </main>
    )
}
