import Image from "next/image"
import { MutableRefObject, useEffect } from "react"

const HomeVideo = ({videoRef, isInViewImage} : {videoRef : MutableRefObject<HTMLVideoElement | null>, isInViewImage : boolean}) => {
    
    useEffect(() => {
      if (videoRef.current) {
        if (isInViewImage) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }, [isInViewImage])


    return (
        <div className=" relative w-full h-full aspect-[16/9] group overflow-visible motion-translate-x-in-[0%] motion-translate-y-in-[82%] motion-delay-0">
                  <Image
                    src="/laboratoryImg.png"
                    alt="Hover Background"
                    fill
                    className="relative blur-3xl shadow-2xl scale-110 object-cover transition-all duration-300 opacity-0 group-hover:opacity-100"
                  />

                <video
                  ref={videoRef}
                  className={`w-full h-full object-cover absolute inset-0 transition-all duration-300 hover:opacity-100 ${
                    true ? "opacity-90" : "opacity-0"
                  }`}
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