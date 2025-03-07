"use client"

import Footer from "@/components/footer"
import HoverVideoPlayer from "@/components/hoverPlayYt"
import ScrollTextAboutUs from "@/components/scrollTextAboutUs"
import ButtonZen from "@/components/style/buttonZen"
import HeadingAndDesc from "@/components/style/headingAndDesc"
import { motion, useScroll, useTransform } from "motion/react"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function About() {
  const ref = useRef(null)
  // const isInView = useInView(ref, { once: true, amount: 0.8 })
  const {scrollYProgress} = useScroll({
    target : ref,
    offset : ["0.4 1", "1.33 1"]
  });

  const scaleProggress = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const scaleProggressOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <>
      <div className="flex flex-col items-center top-[120px] sm:top-[180px] md:top-[256px] relative w-full h-[1049vh]">
        <HeadingAndDesc heading={<Heading />} desc={<Desc />} className="" />
        <div className="w-[90vw] sm:w-[85vw] md:w-[75vw] h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-screen overflow-hidden relative mt-[60px] sm:mt-[80px] md:mt-[120px] motion-translate-x-in-[0%] motion-translate-y-in-[80%] motion-delay-[50ms]">
          <Image
            src="/technology.png"
            className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-all duration-300 aspect-[16/9]"
            fill
            priority
            alt="tech"
          />
        </div>
        <div className="h-[170vh] relative">
          <motion.div
            style={{
              scale: scaleProggress,
              opacity: scaleProggressOpacity,
            }}
            className="w-full sticky -top-[100px] flex justify-center items-center"
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
        <div className="mt-[60px] sm:mt-[80px] md:mt-[110px] w-full">
          <ScrollTextAboutUs type="tech"></ScrollTextAboutUs>
        </div>
        </div>

        <div className="w-[90vw] absolute bottom-[120vh] sm:w-[85vw] md:w-[80vw] mt-[60px] sm:mt-[80px] md:mt-[120px] flex flex-col justify-center items-center ">
          <div className="absolute top-16 -z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[85vw] md:w-[75vw] h-24 bg-gradient-to-br from-[#A15BE4] to-[#000EA3] rounded-full opacity-100 blur-3xl"></div>
          <h1 className="text-[24px] sm:text-[30px] text-center flex justify-center items-center w-full md:text-4xl lg:text-5xl font-semibold tracking leading-[1.35] px-4">
            How Quantum Neural Networks <br className="hidden sm:block"></br> (QNN) Work
          </h1>
          <HoverVideoPlayer></HoverVideoPlayer>
        </div>
        <div className="w-[90vw] absolute bottom-[60vh] sm:w-[85vw] md:w-[80vw] h-auto py-12 sm:h-[320px] bg-slate-800 mt-[80px] sm:mt-[120px] md:mt-[180px] flex justify-center items-center">
          <div className="px-6 sm:px-0">
            <h2 className="font-medium text-[24px] sm:text-[28px] md:text-[34px] text-center">
              Shape the Future with Us
            </h2>
            <div className="flex flex-col w-full justify-center mt-[16px] items-center gap-[24px] sm:gap-[48px]">
              <p className={`font-normal ${inter.className} text-[14px] sm:text-[16px] text-[#98959B] text-center`}>
                Explore Opportunities to Work Together Contact us Today.
              </p>
              <ButtonZen className="w-[137px] h-[36px] flex font-extralight text-[#E6E1E8] justify-center transition-all ease-in-out duration-300">
                <Link href="/get-started" className={`font-extralight ${inter.className}`}>
                  Meet the Team
                </Link>
              </ButtonZen>
            </div>
          </div>
        </div>
        <div className="dark absolute bottom-0 w-full mt-[80px] sm:mt-[120px] md:mt-[160px] flex items-end justify-center">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

const Heading = () => (
  <>
    <h1 className="text-[24px] sm:text-[30px] w-full text-center md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.35] px-4">
      Our{" "}
      <span className="bg-gradient-to-b font-semibold tracking-tight from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent">
        Cutting-Edge
      </span>{" "}
      Technology
    </h1>
  </>
)

const Desc = () => (
  <p className="mx-auto mt-[16px] w-[90vw] text-center md:max-w-md text-[14px] sm:text-[16px] font-thin text-muted-foreground px-4 md:px-0">
    AI meets Quantum Computing to create the most powerful neural networks.
  </p>
)

