"use client"

import Footer from "@/components/footer";
import LargeCtaCompo from "@/components/LargeCtaCompo";
import ScrollTextAboutUs from "@/components/scrollTextAboutUs";
// import ButtonZen from "@/components/style/buttonZen";
import HeadingAndDesc from "@/components/style/headingAndDesc";
import { motion, useScroll, useTransform} from "motion/react";
import { Inter } from 'next/font/google';
import Image from "next/image";
import { useRef } from "react";

const inter = Inter({ subsets: ['latin'], weight: "400" })

export default function About() {
    const ref = useRef(null);
    // const isInView = useInView(ref, {once : true, amount : 0.8 })
    const {scrollYProgress} = useScroll({
      target : ref,
      offset : ["0.4 1", "1.33 1"]
    });

    const scaleProggress = useTransform(scrollYProgress, [0, 1], [0.4, 1])
    const scaleProggressOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])


    return (
    <>
        <div className="flex flex-col items-center h-full w-full pt-32 md:pt-48 lg:pt-64">
            <HeadingAndDesc heading={<Heading />} desc={<Desc />} className=""/>
            
            <div className="w-[90vw] sm:w-[85vw] md:w-[75vw] h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-screen overflow-hidden relative mt-[60px] sm:mt-[80px] md:mt-[120px] motion-translate-x-in-[0%] motion-translate-y-in-[80%] motion-delay-[50ms]">
                      <Image
                        src="/aboutUs2.png"
                        className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-all duration-300 aspect-[16/9]"
                        fill
                        priority
                        alt="tech"
                      />
                    </div>
            
            <div className="">
                <motion.div 
                    style={{
                        scale: scaleProggress,
                        opacity: scaleProggressOpacity
                    }}
                    ref={ref} 
                    className=" md:top-[1vh] lg:-top-[100px] w-full flex justify-center items-center"
                >
                    <div className="w-[90vw] md:w-[85vw] lg:w-[80vw] mt-16 md:mt-24 lg:mt-32 flex flex-col justify-center items-center relative">
                        <div className="absolute top-16 -z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-24 bg-gradient-to-br from-[#A15BE4] to-[#000EA3] rounded-full opacity-100 blur-3xl"></div>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-tight leading-tight text-center">
                            Company
                        </h1>
                        <p className="mx-auto mt-4 md:mt-6 w-[90vw] text-center md:max-w-[582px] text-sm md:text-base font-thin text-muted-foreground px-4 md:px-0"> 
                            Combining AI with Quantum Computing to Create the Next Generation of Artificial Intelligence.
                        </p>        
                    </div>
                </motion.div>
            </div>
            
            <div className="lg:mb-[10vh] mt-16 md:mt-24 lg:mt-32 w-full">
                <ScrollTextAboutUs type="solution"></ScrollTextAboutUs>
            </div>
            
            <LargeCtaCompo></LargeCtaCompo>
            
            <div className="dark w-full mt-16 md:mt-24 lg:mt-32 flex items-end justify-center">
                <Footer></Footer>
            </div>
        </div>
    </>
  )
}

const Heading = () => (
    <h1 className="text-[30px] w-full md:text-4xl lg:text-5xl font-semibold tracking-normal leading-[40.5px]">
        Who {" "}
        <span className="bg-gradient-to-b font-semibold tracking-tight from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent">
            We
        </span>{" "}
        Are
</h1>
)

const Desc = () => (
    <p className={` mx-auto -mt-[14px] w-[90vw] text-center md:max-w-md text-[16px] leading-6 text-muted-foreground px-4 md:px-0 ${inter.className} `}>
        A team of innovators revolutionizing industries with quantum computing and AI.
    </p>
)
