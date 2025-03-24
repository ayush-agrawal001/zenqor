import Image from "next/image"
import { MutableRefObject } from "react"

const HomeVideo = ({imageRef, isInViewImage} : {imageRef : MutableRefObject<HTMLImageElement | null>, isInViewImage : boolean}) => {
    return (
        <div className="relative w-full h-full aspect-[16/9] group overflow-visible motion-translate-x-in-[0%] motion-translate-y-in-[82%] motion-delay-0">
                  <Image
                    src="/laboratoryImg.png"
                    alt="Hover Background"
                    fill
                    className="relative blur-2xl shadow-2xl scale-100 object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />

                <Image
                  ref={imageRef}
                  src="/laboratoryImg.png"
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                    !isInViewImage ? "opacity-100" : "opacity-0"
                  }`}
                  fill
                  priority
                  alt="Laboratory"
                />

                <video
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 hover:opacity-100 ${
                    isInViewImage ? "opacity-90" : "opacity-0"
                  }`}
                  autoPlay
                  loop
                  muted
                  preload="metadata" // consider 'auto' if you need more buffering
                >
                  <source src="/lab_vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
    )
}

export default HomeVideo