"use client"

import { motion, type MotionValue, useScroll, useTransform } from "motion/react"
import {
  Children,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
  useEffect,
  useRef,
  isValidElement,
  RefObject,
} from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  heightOfScroll: string,
  targetRef: RefObject<HTMLDivElement>
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, heightOfScroll, targetRef }) => {
  // const targetRef = useRef<HTMLDivElement | null>(null)
  const childrenRef = useRef<HTMLDivElement | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: childrenRef,
    offset : ["start 0.22", "end 0.69"]
  })
  console.log(heightOfScroll)
  console.log(targetRef)

  const processChildren = () => {
    const items: { type: "word" | "linebreak"; content?: string }[] = []

    const childrenArray = Children.toArray(children)

    childrenArray.forEach((child) => {
      if (typeof child === "string") {
        const words = child.split(" ").filter(Boolean)
        words.forEach((word) => {
          items.push({ type: "word", content: word })
        })
      } else if (isValidElement(child) && child.type === "br") {
        items.push({ type: "linebreak" })
      } else {
        const stringContent = String(child)
        if (stringContent.trim()) {
          const words = stringContent.split(" ").filter(Boolean)
          words.forEach((word) => {
            items.push({ type: "word", content: word })
          })
        }
      }
    })

    return items
  }

  const contentItems = processChildren()
  const wordCount = contentItems.filter((item) => item.type === "word").length

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      console.log(value)
    })
  }, [scrollYProgress])

  return (
      <div ref={childrenRef} className={"sticky top-40 mx-auto flex h-[65%] max-w-4xl bg-transparent font-normal" + className}>
        <span className={"flex flex-wrap text-black/20 dark:text-white/20"}>
          {contentItems.map((item, i) => {
            if (item.type === "linebreak") {
              return <div className="w-full h-5" key={i}></div> 
            }

            // Calculate the word index (excluding linebreaks)
            const wordIndex = contentItems.slice(0, i).filter((item) => item.type === "word").length

            const start = wordIndex / wordCount
            const end = start + 1 / wordCount

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {item.content}
              </Word>
            )
          })}
        </span>
      </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className={`relative mx-1 font-normal lg:mx-[2px] text-[20px] ${inter.className}`}>
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-black dark:text-white"}>
        {children}
      </motion.span>
    </span>
  )
}

