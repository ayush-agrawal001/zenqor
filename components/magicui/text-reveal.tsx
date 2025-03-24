"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  headForMobile?: string;
  isHeadHis?: boolean;
  type? : "tech" | "solution"
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, isHeadHis, headForMobile, type = "solution" }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.3", "end 0.85"],
  });

  const nodes = React.Children.toArray(children);

  const divRef = useRef<HTMLDivElement>(null);
  // const [height, setHeight] = useState(0);

  //console.log(height)

  // useEffect(() => {
  //   if (divRef.current) {
  //     // Using getBoundingClientRect to get an accurate height
  //     // const measuredHeight = divRef.current.getBoundingClientRect().height;
  //     // setHeight(measuredHeight);
  //   }
  // }, []); 

  const processedNodes: ReactNode[] = [];
  nodes.forEach((node) => {
    if (typeof node === "string") {
      const words = node.split(" ");
      words.forEach((word, idx) => {
        if (word !== "") {
          processedNodes.push(word);
        }
        if (idx < words.length - 1) {
          processedNodes.push(" ");
        }
      });
    } else {
      processedNodes.push(node);
    }
  });

  const totalAnimatable = processedNodes.filter(
    (node) => typeof node === "string" && node.trim() !== ""
  ).length;
  let animIndex = 0;

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh] flex flex-col items-center md:block", className)}>
      <div ref={divRef} className={`sticky ${
        isHeadHis ? `top-[25vh] sm:top-[28vh] md:top-[25vh] ${ type === "tech"  &&`lg:top-[30vh] xl:top-[30vh]`}` : `top-[15vh] sm:top-[18vh] md:top-[20vh] ${ type === "tech" && `lg:top-[25vh] xl:top-[30vh]`} `
      } mx-auto flex flex-col items-center md:items-start md:flex-row h-fit min-h-[40vh] sm:min-h-[50vh] md:h-[60vh] max-w-full bg-transparent mb-10`}>
        <h2 
          style={{
              lineHeight: "1.3",
              wordWrap: "break-word",
          }}
          className={`text-xl sm:text-2xl  ${
              headForMobile === "History" || headForMobile === "Quantum Neural Networks (QNN)" 
              ? `top-[20vh]` 
              : `top-[15vh]`
          } text-center font-semibold mb-6 text-white md:hidden w-full max-w-[250px]`}>
              {headForMobile}
      </h2>
        
        <span
          className={`flex flex-wrap h-fit text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black/20 dark:text-white/20 ${inter.className}`}
        >
          {processedNodes.map((node, i) => {
            if (React.isValidElement(node) && node.type === "br") {
              return <div key={i} className="h-4 w-full"></div>;
            }
            if (typeof node === "string") {
              if (node.trim() === "") {
                return node;
              }
              const start = animIndex / totalAnimatable;
              const end = start + 1 / totalAnimatable;
              animIndex++;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {node}
                </Word>
              );
            }
            return node;
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-[2px] font-normal">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};