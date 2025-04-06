import Link from "next/link";
import ButtonZen from "./style/buttonZen";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] })

const LargeCtaCompo = () => { 
    return (
        <div className=" relative w-[90vw] z-10 md:w-[85vw] lg:w-[80vw] lg:h-[320px] py-12 md:py-16 lg:py-24 bg-transparent mt-16 md:mt-24 lg:mt-32 flex justify-center items-center gap-[48px] rounded-lg overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-all aspect-[16/9] rounded-lg"
                    autoPlay
                    loop
                    muted
                    preload="metadata"
                >
                    <source src="/largeCta.mp4" type="video/mp4">
                    </source>
                </video>
                
                <Image
                src="/largeCta.png"
                className=" opacity-10 absolute inset-0 object-cover -z-0"
                fill
                priority
                alt="Laboratory"
                />
                
                <div className="absolute -top-20 w-[50%] h-[80%]  bg-gradient-to-b opacity-30 rounded-full bg-radial-[at_50%_75%] from-[#A15BE4] to-[#000EA3] blur-3xl"></div>

                <div className="absolute inset-0 bg-gradient-to-b opacity-40 rounded-lg from-[#A15BE4] to-[#000EA3] "></div>

                <div className="px-4 md:px-8 text-center relative z-10">
                    <h2 className="font-semibold text-xl md:text-2xl lg:text-[33.18px]">
                        Join us on our Journey for the Future
                    </h2>
                    <div className="flex flex-col w-full justify-center mt-4 md:mt-6 items-center gap-6 md:gap-8">
                        <p className={`font-normal ${inter.className} text-sm md:text-base text-[#98959B]`}>
                            Get to know the People Turning Zenqor&apos;s Vision into Reality.
                        </p>
                        <ButtonZen className="w-[137px] h-[36px] md:h-[42px] font-extralight text-[#E6E1E8] justify-center transition-all ease-in-out duration-300"> 
                            <Link href="/get-started" className={`font-extralight ${inter.className}`}>
                                Meet the Team
                            </Link>
                        </ButtonZen>
                    </div>
                </div>
            </div>
    )
}

export default LargeCtaCompo;