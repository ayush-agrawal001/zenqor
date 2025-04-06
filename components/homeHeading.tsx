"use client"

import Link from "next/link"
import { WarpBackground } from "./warp-background"
import ButtonZen from "./style/buttonZen"
import HeadingAndDesc from "./style/headingAndDesc"
import { useState, useEffect, useRef } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import HomeSecondHeading from "./homeSecondHeading"
import { Inter } from "next/font/google"
import { useSmoothScroller } from "./smoothScrollerContext"

const inter = Inter({ subsets: ["latin"], weight: "400" })

export default function HomeHeading() {
  const [isInViewSec, setIsInViewSec] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollVal, setScrollVal] = useState(0)
  
  const screenScroll = useScroll()
  const lenis = useSmoothScroller()

  // Refs to track last scroll position and snapping state
  const lastScroll = useRef(0)
  const isSnapping = useRef(false)

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Only track scroll progress for non-mobile devices
  useMotionValueEvent(screenScroll.scrollYProgress, "change", (latest) => {
    if (!isMobile) {
      setScrollVal(latest)

      // When in the snapping zone and not currently snapping
      if (lenis && latest > 0.12 && latest < 0.16 && !isSnapping.current) {
        // Determine scroll direction based on last scroll value
        const targetProgress = latest > lastScroll.current ? 0.16 : 0.14
        // Calculate total scrollable distance (accounting for viewport height)
        const totalScrollable = document.documentElement.scrollHeight - window.innerHeight
        const targetPosition = totalScrollable * targetProgress

        isSnapping.current = true
        lenis.scrollTo(targetPosition, { duration: 0.3 })

        // Re-enable snapping after the animation completes
        setTimeout(() => {
          isSnapping.current = false
        }, 350)
      }

      // Update in-view state based on a 0.15 threshold
      setIsInViewSec(latest > 0.15)
      lastScroll.current = latest
    }
  })

  return (
    <>
      {isMobile ? (
        // Static layout for mobile
        <div className="min-h-screen">
          <WarpBackground>
            <HeadingAndDesc
              heading={<Heading />}
              subHeading={<SubHeading />}
              desc={<Desc />}
              ctaButton={<CtaButton />}
              className=""
            />
          </WarpBackground>
          <div className="mt-16">
            <HomeSecondHeading />
          </div>
        </div>
      ) : (
        // Original animated layout for tablets and laptops
        <>
          {!isInViewSec && (
            <WarpBackground>
              <div className={`${scrollVal > 0.12 && `opacity-0`}`}>
                <HeadingAndDesc
                  heading={<Heading />}
                  subHeading={<SubHeading />}
                  desc={<Desc />}
                  ctaButton={<CtaButton />}
                  className=""
                />
              </div>
            </WarpBackground>
          )}

          <div className={`relative flex items-end sm:items-center justify-center h-[200vh] md:h-[250vh] lg:h-[250vh] w-full`}>
            { isInViewSec && <HomeSecondHeading /> }
          </div>
        </>
      )}
    </>
  )
}

const Heading = () => {
  return (
    <h1 className="text-[30px] w-full md:text-4xl lg:text-5xl font-semibold tracking-normal leading-[40.5px]">
      Revolutionizing Industries with{" "}
    </h1>
  )
}

const SubHeading = () => {
  return (
    <div className="bg-gradient-to-b from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent -mt-1 md:mt-2">
      <div className="text-[30px] md:text-4xl lg:text-5xl font-semibold tracking-normal leading-[40.5px]">
        Quantum Neural Networks
      </div>
    </div>
  )
}

const Desc = () => (
  <p className={`mx-auto -mt-[14px] w-[90vw] text-center md:max-w-md text-[16px] leading-6 text-muted-foreground px-4 md:px-0 ${inter.className}`}>
    Combining AI with Quantum Computing to Create the Next Generation of Artificial Intelligence.
  </p>
)

const CtaButton = () => (
  <div className="mt-[32px]">
    <ButtonZen className="transition-all ease-in-out h-[40px] w-[224px] duration-300">
      <Link href="/technology">Discover Our Technology</Link>
    </ButtonZen>
  </div>
)
