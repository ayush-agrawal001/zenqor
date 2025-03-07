"use client"

import Link from "next/link"
import { WarpBackground } from "./warp-background"
import ButtonZen from "./style/buttonZen"
import HeadingAndDesc from "./style/headingAndDesc"
import { useState, useEffect } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import HomeSecondHeading from "./homeSecondHeading"

export default function HomeHeading() {
  const [isInViewSec, setIsInViewSec] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const screenScroll = useScroll();

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px is the typical sm breakpoint
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Only track scroll progress for non-mobile devices
  useMotionValueEvent(screenScroll.scrollYProgress, "change", (latest) => {
    if (!isMobile) {
      setIsInViewSec(latest > 0.15);
    }
  });

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
          {!isInViewSec && <WarpBackground>
            <HeadingAndDesc
              heading={<Heading />}
              subHeading={<SubHeading />}
              desc={<Desc />}
              ctaButton={<CtaButton />}
              className=""
            />
          </WarpBackground>}
          <div className="relative flex items-end sm:items-center justify-center h-[200vh] md:h-[250vh] md:min-h-[200vh] w-full"> 
            {isInViewSec && <HomeSecondHeading />}
          </div>
        </>
      )}
    </>
  )
}

const Heading = () => {
  return (
    <h1 className="text-[30px] w-full md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[40.5px]">
      Revolutionizing Industries with{" "}
    </h1>
  )
}

const SubHeading = () => {
  return (
    <div className="bg-gradient-to-b from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent -mt-1 md:mt-2 ">
      <div className="text-[30px] md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-[40.5px]">
        Quantum Neural Networks
      </div>
    </div>
  )
}

const Desc = () => (
  <p className="mx-auto -mt-[14px] w-[98vw] text-center md:max-w-md text-[16px] font-thin text-muted-foreground px-4 md:px-0">
    Combining AI with Quantum Computing to Create the Next Generation of Artificial Intelligence.
  </p>
)

const CtaButton = () => (
  <div className="mt-[32px]">
    <ButtonZen className="transition-all ease-in-out font-extralight h-[40px] duration-300">
      <Link href="/technology">Discover Our Technology</Link>
    </ButtonZen>
  </div>
)