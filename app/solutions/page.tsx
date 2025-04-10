"use client"

import HeadingAndDesc from "@/components/style/headingAndDesc"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import CardSolutions from "@/components/cardSolutions"
import Footer from "@/components/footer"
import { Inter } from "next/font/google"
import LargeCtaCompo from "@/components/LargeCtaCompo"

const inter = Inter({ subsets: ["latin"] })

export default function Solutions() {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target : ref,
    offset : ["0.4 1", "1.33 1"]
  });

  const scaleProggress = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const scaleProggressOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center w-full mt-24 sm:mt-24 md:mt-32 lg:mt-[256px]">
        <div className="w-full flex flex-col relative px-4 sm:px-6 md:px-8">
          <HeadingAndDesc heading={<Heading />} desc={<Desc />} className="relative z-10" />
        </div>

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

        <motion.div
          style={{
            scale: scaleProggress,
            opacity: scaleProggressOpacity,
          }}
          className="w-full flex justify-center items-center"
          ref={ref}
        >
          <div className="w-full px-4 sm:w-[90vw] md:w-[85vw] lg:w-[80vw] mt-16 sm:mt-20 md:mt-24 lg:mt-[120px] flex flex-col justify-center items-center relative">
            <div className="absolute top-16 -z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-16 sm:h-20 md:h-24 bg-gradient-to-br from-[#A15BE4] to-[#000EA3] rounded-full opacity-100 blur-3xl"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-center">
              How we Help Industries
            </h1>
            <p className="mx-auto mt-4 w-full text-center md:max-w-[582px] text-sm sm:text-base font-thin text-muted-foreground px-4 md:px-0">
              Zenqor integrates AI and Quantum Computing to develop Quantum Neural Networks (QNN), pushing the limits of
              intelligence towards Quantum AGI.
            </p>
          </div>
        </motion.div>

        <motion.div className="w-full mt-16 sm:mt-20 md:mt-24 lg:mt-[120px] px-4 flex flex-col justify-center items-center">
          <CardSolutions />
        </motion.div>

        <div className=" -mt-72 sm:-mt-20 md:-mt-96">
          <LargeCtaCompo heading="Shape the Future with Us" desc="Explore Opportunities to Work Together Contact us Today." butt="Meet the Team"></LargeCtaCompo>
        </div>

        <div className="dark relative w-full mt-16 sm:mt-20 md:mt-24 lg:mt-[160px] flex items-end justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

const Heading = () => {
  return (
    <h1 className="text-[30px] w-full md:text-4xl lg:text-5xl font-semibold tracking-normal leading-[40.5px]">
      Solutions for{" "}
      <span className="bg-gradient-to-b font-semibold tracking-tight from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent">
        Every Industry
      </span>
    </h1>
  )
}

const Desc = () => {
  return (
    <p className={`mx-auto -mt-[14px] w-[90vw] text-center md:max-w-md text-[16px] leading-6 text-muted-foreground px-4 md:px-0 ${inter.className}`}>
      Our Quantum Neural Networks are transforming industries.
    </p>
  )
}

