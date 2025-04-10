"use client"

import Footer from "@/components/footer"
import HoverVideoPlayer from "@/components/hoverPlayYt"
import LargeCtaCompo from "@/components/LargeCtaCompo"
import ScrollTextAboutUs from "@/components/scrollTextAboutUs"
import HeadingAndDesc from "@/components/style/headingAndDesc"
import { motion, useScroll, useTransform } from "motion/react"
import { Inter } from "next/font/google"
import Image from "next/image"
import { useRef } from "react"
// import * as animationData from "../../public/Animation.json"

const inter = Inter({ subsets: ["latin"] })

export default function About() {
  const ref = useRef(null)
  // const isInView = useInView(ref, { once: true, amount: 0.8 })
const { scrollYProgress } = useScroll({
    target : ref,
    offset : ["0.4 1", "1.33 1"]
  });

  const scaleProggress = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const scaleProggressOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <>
      <div className="flex flex-col items-center top-[120px] sm:top-[180px] md:top-[256px] relative w-full h-full">
        <HeadingAndDesc heading={<Heading />} desc={<Desc />} className="" />
        <div className="w-[80vw] h-[40vh] md:h-screen relative hover:opacity-100 mt-20">
                        <div className="relative w-full h-full aspect-[16/9] group overflow-visible motion-translate-x-in-[0%] motion-translate-y-in-[82%] motion-delay-0">
                                <Image
                                    src="/technology.png"
                                    alt="Hover Background"
                                    fill
                                    className="relative blur-3xl -z-20 shadow-2xl scale-110 object-cover transition-all duration-300 opacity-0 group-hover:opacity-100"
                                />
                                <Image
                                    src="/technology.png"
                                    className="w-full h-full z-0 object-cover opacity-50 group-hover:opacity-100 inset-0 transition-all duration-300 aspect-[16/9]"
                                    fill
                                    priority
                                    alt="tech"
                                />
                            </div>
                    </div>
        <div className="">
          <motion.div
            style={{
              scale: scaleProggress,
              opacity: scaleProggressOpacity,
            }}
            className="md:top-[1vh] lg:-top-[100px] flex justify-center items-center"
            ref={ref}
          >
            <div className="w-[90vw] sm:w-[85vw] md:w-[80vw] mt-[60px] sm:mt-[80px] md:mt-[120px] flex flex-col justify-center items-center relative">
              <div className="absolute top-16 -z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[85vw] md:w-[75vw] h-24 bg-gradient-to-br from-[#A15BE4] to-[#000EA3] rounded-full opacity-100 blur-3xl"></div>
              <h1 className="text-[24px] sm:text-[30px] flex justify-center items-center w-full text-center md:text-4xl lg:text-5xl font-semibold tracking leading-[1.35]">
                Technologies
              </h1>
              <p className="mx-auto mt-[16px] w-[90vw] text-center md:max-w-[582px] text-[14px] sm:text-[16px] font-thin text-muted-foreground px-4 md:px-0">
                Zenqor integrates AI and Quantum Computing to develop Quantum Neural Networks (QNN), pushing the limits of
                intelligence towards Quantum AGI.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-[60px] sm:mt-[80px] md:mt-[110px] w-full">
          <ScrollTextAboutUs type="tech"></ScrollTextAboutUs>
        </div>

        <div className="w-[90vw] relative sm:w-[85vw] md:w-[80vw] mt-[60px] sm:mt-[80px] md:mt-[120px] flex flex-col justify-center items-center ">
          <div className="absolute top-16 -z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[85vw] md:w-[75vw] h-24 bg-gradient-to-br from-[#A15BE4] to-[#000EA3] rounded-full opacity-100 blur-3xl"></div>
          <h1 className="text-[24px] sm:text-[30px] text-center flex justify-center items-center w-full md:text-4xl lg:text-5xl font-semibold tracking leading-[1.35] px-4">
            How Quantum Neural Networks <br className="hidden sm:block"></br> (QNN) Work
          </h1>
          <HoverVideoPlayer></HoverVideoPlayer>
        </div>
        <div className="mt-20">
          <LargeCtaCompo heading="Shape the Future with Us" desc="Explore Opportunities to Work Together Contact us Today." butt="Meet the Team"></LargeCtaCompo>
        </div>
        <div className="dark w-full mt-[80px] sm:mt-[120px] md:mt-[160px] flex items-end justify-center">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

const Heading = () => (
  <>
    <h1 className="text-[30px] w-full md:text-4xl lg:text-5xl font-semibold tracking-normal leading-[40.5px]">
      Our{" "}
      <span className="bg-gradient-to-b font-semibold tracking-tight from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent">
        Cutting-Edge
      </span>{" "}
      Technology
    </h1>
  </>
)

const Desc = () => (
  <p className={`mx-auto -mt-[14px] w-[90vw] text-center md:max-w-md text-[16px] leading-6 text-muted-foreground px-4 md:px-0 ${inter.className}`}>
    AI meets Quantum Computing to create the most powerful neural networks.
  </p>
)

