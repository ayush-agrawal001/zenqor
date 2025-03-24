"use client"

import Link from "next/link"
import ButtonZen from "./style/buttonZen"
import HeadingAndDesc from "./style/headingAndDesc"
import { useEffect, useRef, useState } from "react"
import { useScroll, motion, AnimatePresence, useTransform, useSpring, useInView } from "framer-motion"
import dynamic from "next/dynamic"
import { Inter } from "next/font/google"

const HomeVideo = dynamic(() => import('@/components/homeVideo'), {
  // loading: () => <p>Loading...</p>,
  ssr: false,
});

const inter = Inter({ subsets: ["latin"], weight: "400" })

export default function HomeSecondHeading() {
  // const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  const parentRef = useRef(null)
  const imageRef = useRef(null)

  const isInViewImage = useInView(parentRef, { amount: 0.6})
  
  const isMobile = useMediaQuery("(max-width: 768px)")
  // const isTablet = useMediaQuery("(max-width: 1024px)")
  

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  })

  

  const opacityRaw = useTransform(scrollYProgress, [0.3, 0.6, 0.7], [0.5, 1, 0.5])

  const springConfig = {
    stiffness: isMobile ? 50 : 50,
    damping: isMobile ? 12 : 20,
  }

  const opacity = useSpring(opacityRaw, springConfig)

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChild(true);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={parentRef}
      viewport={{ once: true }}
      className="md:top-44 sticky h-fit w-full"
      exit={{opacity : 0.5}}
    >
      <AnimatePresence>
          <motion.div
            className="flex flex-col gap-[96px] md:gap-[120px] lg:gap-[136px] items-center justify-center w-full px-6 md:px-8"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, scale: 1, transition: { duration: 0.1 } }}
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1, transition: { duration: 0.2 } }}
              className="w-full "
            >
              <HeadingAndDesc
                heading={<Heading />}
                subHeading={<SubHeading />}
                desc={<Desc />}
                ctaButton={<CtaButton />}
                className=""
              />
            </motion.div>

            {/* Wrapper to contain the scaled content */}
            <div className="w-full ">
            <motion.div
              className="w-full flex justify-center "
              // style={{
              //   scale,
              //   y,
              //   zIndex: z,
              // }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1 },
                }}
                className="w-[80vw] h-[40vh] md:h-screen relative hover:opacity-100 "
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.6 } }}
                style={{
                  opacity: opacity,
                }}
              >
                {showChild && <HomeVideo imageRef={imageRef} isInViewImage={isInViewImage}></HomeVideo>}
              </motion.div>
            </motion.div>
            </div>
          </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

const Heading = () => (
  <h1 className="text-[30px] w-full md:text-4xl lg:text-5xl font-semibold tracking-normal leading-[40.5px]">
    Pioneering the Future of{" "}
    <span className="bg-gradient-to-b font-semibold tracking-tight from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent">
      AI
    </span>{" "}
    and
  </h1>
)

const SubHeading = () => (
  <div className="bg-gradient-to-b from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent -mt-1 md:mt-2">
      <div className="text-[30px] md:text-4xl lg:text-5xl font-semibold tracking-normal leading-[40.5px]">
        Quantum computing
      </div>
    </div>
)

const Desc = () => (
  <p className={`mx-auto -mt-[14px]  w-[90vw] md:max-w-[50vw] text-center text-[16px] font-thin text-muted-foreground md:px-0 ${inter.className} `}>
    Our groundbreaking Quantum Neural Networks (QNN) combine the power of quantum computing with AI to solve problems
    that were previously thought impossible. Explore how we&apos;re changing the future.
  </p>
)

const CtaButton = () => (
  <div className="mt-[32px]">
    <ButtonZen className="transition-all ease-in-out font-extralight h-[40px] w-[224px] duration-300">
      <Link href="/technology">Discover Our Technology</Link>
    </ButtonZen>
  </div>
)



export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, query])

  return matches
}

