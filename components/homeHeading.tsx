"use client"

import Link from "next/link"
import { WarpBackground } from "./warp-background"
import ButtonZen from "./style/buttonZen"
import HeadingAndDesc from "./style/headingAndDesc"
import { useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import HomeSecondHeading, { useMediaQuery } from "./homeSecondHeading"

export default function HomeHeading() {

  const [isInViewSec, setIsInViewSec] = useState(false);

  const screenScroll = useScroll();
  const isTabletAndLaptop = useMediaQuery('(min-width: 768px)');

  useMotionValueEvent(screenScroll.scrollYProgress, "change", (latest) => {
    if(isTabletAndLaptop) {
      setIsInViewSec(latest > 0.15);
    }else{
      setIsInViewSec(latest > 0.15);
    };
  })

  return (
    <>
      {!isInViewSec &&<WarpBackground>
         <HeadingAndDesc
          heading={<Heading />}
          subHeading={<SubHeading />}
          desc={<Desc />}
          ctaButton={<CtaButton />}
          className=""
        />
      </WarpBackground>}
      <div className="relative flex items-end sm:items-center justify-center h-[200vh] md:h-[250vh]  md:min-h-[200vh] w-full "> 
        {isInViewSec && <HomeSecondHeading />}
      </div>
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

