"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"

function HoverVideoPlayer() {
  const videoId = "xL383DseSpE"
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 0.5 })

  return (
    <div ref={ref} className="mt-[40px] sm:mt-[60px] md:mt-[120px] relative w-full aspect-video max-w-[1062px] h-auto">
      {isVisible ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="z-0 absolute inset-0"
          style={{ aspectRatio: "16/9" }}
        ></iframe>
      ) : (
        <div className="relative w-full h-0 pb-[56.25%]">
          <Image
            src="/technology.png"
            className="object-cover opacity-50 hover:opacity-100 transition-all duration-300"
            fill
            alt="tech"
          />
        </div>
      )}
    </div>
  )
}

export default HoverVideoPlayer

