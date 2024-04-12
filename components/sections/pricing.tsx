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
                <h1 className='uppercase text-[28px] sm:text-[28px] text-white'>our pricing</h1>
                <p className='text-[18px] sm:text-[20px] font-normal text-white mb-4 text-center'>
                    We offer you comprehensive service at an affordable price
                </p>
            </div>
            <div className="wrapper">
    <div className="table premium">
      <div className="ribbon"><span>Recommend</span></div>
      <div className="price-section">
        <div className="price-area">
          <div className="inner-area">
            
            <span className="price">₹2,199</span>
          </div>
        </div>
      </div>
      <div className="package-name"></div>
      <ul className="features">
        <li className='flex justify-center'>
          <span className="list-name">Everything in Standard

</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
        
        <li>
          <span className="list-name">
Grant Proposal Template
</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
      
      </ul>
      <div className="btn"><button>Start now</button></div>
    </div>
    <div className="table ultimate">
      <div className="price-section">
        <div className="price-area">
          <div className="inner-area">
           
            <span className="price">₹1,999</span>
          </div>
        </div>
      </div>
      <div className="package-name"></div>
      <ul className="features">
        <li>
          <span className="list-name">Top 5 Eligibility report
</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
        <li>
          <span className="list-name">Competitor Analysis
</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
        <li>
          <span className="list-name">Grant Roadmap
</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
        <li>
          <span className="list-name">Application best practices</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
      </ul>
      <div className="btn"><button>Start now</button></div>
    </div>
  </div>
        </section>
    )
}
