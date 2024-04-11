import Image from "next/image";
import heroImg from "@/static/hero-img.png";

export default function Hero() {
    return (
        <section className="flex justify-center">
            <div className="grid grid-cols-12 gap-4 px-16 max-w-[1700px]">
                <div className="col-span-7 flex flex-col gap-7 py-6">
                    <div className="flex flex-col gap-4 text-[#5F248E] text-2xl w-fit font-semibold ">
                        <div>
                            Know the best
                        </div>
                        <div className="text-4xl text-[#FF8F40] uppercase">
                            Grants & Government Schemes
                        </div>
                        <div className="text-end">
                            for your business idea / startup
                        </div>
                    </div>
                    <div>
                        <Image
                            alt="hero-img"
                            src={heroImg}
                            className="w-full"

                        />
                    </div>
                </div>
                <div className="col-span-5">
                    {/* Content goes here */}
                </div>
            </div>
        </section>
    )
}