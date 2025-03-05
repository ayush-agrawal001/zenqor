"use client"

import HeadingAndDesc from "@/components/style/headingAndDesc"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import CardSolutions from "@/components/cardSolutions"
import ButtonZen from "@/components/style/buttonZen"
import Link from "next/link"
import Footer from "@/components/footer"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Solutions() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.4 1"],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center w-full mt-24 sm:mt-24 md:mt-32 lg:mt-[256px]">
        <div className="w-full flex flex-col relative px-4 sm:px-6 md:px-8">
          <HeadingAndDesc heading={<Heading />} desc={<Desc />} className="relative z-10" />
        </div>

        <div className="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] h-[30vh] sm:h-[35vh] md:h-[50vh] lg:h-screen relative mt-12 sm:mt-16 md:mt-20 lg:mt-[120px] motion-translate-x-in-[0%] motion-translate-y-in-[80%] motion-delay-[100ms]">
          <Image
            src="/technology.png"
            className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-all duration-300 aspect-[16/9] rounded-lg"
            fill
            priority
            alt="Laboratory"
          />
        </div>

        <motion.div
          style={{
            scale: scaleProgress,
            opacity: scaleProgress,
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

        <div className="w-[90vw] sm:w-[85vw] md:w-[80vw] py-12 sm:py-16 md:py-20 bg-slate-800 mt-16 sm:mt-20 md:mt-24 lg:mt-[180px] relative flex flex-col justify-center items-center rounded-lg">
          <div className="px-4 sm:px-6 md:px-8 text-center">
            <h2 className="font-medium text-2xl sm:text-3xl md:text-[34px] mb-4">Shape the Future with Us</h2>
            <div className="flex flex-col w-full justify-center items-center gap-6 sm:gap-8 md:gap-[48px]">
              <p className={`font-normal ${inter.className} text-sm sm:text-base text-[#98959B]`}>
                Explore Opportunities to Work Together Contact us Today.
              </p>
              <ButtonZen className="w-full max-w-[200px] h-[36px] flex font-extralight text-[#E6E1E8] justify-center transition-all ease-in-out duration-300">
                <Link href="/get-started" className={`font-extralight ${inter.className}`}>
                  Get in Touch
                </Link>
              </ButtonZen>
            </div>
          </div>
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
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-center md:text-left">
      Solutions for{" "}
      <span className="bg-gradient-to-b font-semibold tracking-tight from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent">
        Every Industry
      </span>
    </h1>
  )
}

const Desc = () => {
  return (
    <p className="mx-auto mt-4 w-full text-clip md:text-left md:max-w-md text-sm font-thin text-muted-foreground">
      Our Quantum Neural Networks are transforming industries.
    </p>
  )
}

