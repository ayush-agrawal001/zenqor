"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
// import Image from "next/image"

function HoverVideoPlayer() {
  const videoId = "xL383DseSpE"
  const ref = useRef(null)
  const isVisible = useInView(ref, { amount: 0.8 })

  return (
    <div ref={ref} className="mt-[40px] sm:mt-[60px] md:mt-[120px] relative w-full aspect-video max-w-[1062px] h-auto">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?${isVisible ? `autoplay=1&` : ``}controls=0&modestbranding=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="z-0 absolute inset-0"
          style={{ aspectRatio: "16/9" }}
        ></iframe>
    </div>
  )
}

export default HoverVideoPlayer

