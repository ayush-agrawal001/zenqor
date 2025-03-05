"use client"

import { cn } from "@/lib/utils"
import { type ReactNode } from "react"
import dynamic from "next/dynamic"
import { motion, useScroll, useTransform } from "framer-motion"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
import * as animationData from "../app/BG Animation.json"

export const WarpBackground = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll()
  // Adjust transform values for better mobile experience
  const bgScale = useTransform(scrollYProgress, [0, 0.15], [1, 4.5])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 1])

  const headingScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.6])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 1])


  // useMotionValueEvent(scrollYProgress, "change", (latest) => {console.log(latest)})

  return (
    <div className="h-[100vh] relative">
      <motion.div
        className={cn(
          "rounded sticky top-0 w-full",
          "p-4 md:p-12 lg:p-20", // Responsive padding
        )}
      >
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
          <motion.div
            style={{
              scale: bgScale,
              opacity: bgOpacity,
            }}
            className="flex justify-center items-center h-full w-full"
          >
            <Lottie rendererSettings={{ preserveAspectRatio : 'xMidYMid slice' }}  className="w-screen h-screen top-0 opacity-100" loop autoplay animationData={animationData} />
          </motion.div>
        </div>

        <motion.div
          style={{
            scale: headingScale,
            opacity: headingOpacity,
          }}
          className="w-full left-0 top-0 h-screen flex justify-center items-center absolute  z-20"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}