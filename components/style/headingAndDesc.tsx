import { cn } from "@/lib/utils"
import type { MutableRefObject, ReactNode } from "react"

function HeadingAndDesc({
  heading,
  subHeading,
  desc,
  className,
  ctaButton,
  ref,
}: {
  heading: ReactNode
  subHeading?: ReactNode
  desc: ReactNode
  className: string
  ctaButton?: ReactNode
  ref?: MutableRefObject<null>
}) {
  return (
    <div
      className={cn(
        "mx-auto relative max-w-4xl text-center",
        "", // Responsive top spacing
        className,
      )}
      {...(ref && { ref })}
    >
      <div className="">
        <div className="motion-scale-in-[0.75] motion-translate-x-in-[0%] motion-translate-y-in-[-110%] motion-opacity-in-[0%] motion-delay-[50ms] motion-delay-[0ms]/scale motion-delay-[0ms]/translate motion-duration-[1000ms]/opacity motion-delay-[0ms]/opacity">
          {heading}
        </div>

        {subHeading && (
          <div className="motion-scale-in-[0.60] motion-translate-x-in-[0%] motion-translate-y-in-[-220%] motion-opacity-in-[0%] motion-delay-[1ms] motion-delay-[0ms]/scale motion-delay-[0ms]/translate motion-duration-[1000ms]/opacity motion-delay-[0ms]/opacity">
            {subHeading}
          </div>
        )}
      </div>
      <div className="mt-4 sm:mt-6 motion-scale-in-[0.47] motion-translate-x-in-[0%] motion-translate-y-in-[50%] motion-opacity-in-[0%] motion-delay-[1ms] motion-delay-[0ms]/scale motion-delay-[0ms]/translate motion-duration-[500ms]/opacity motion-delay-[0ms]/opacity">
        {desc}
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 motion-scale-in-[1.01] motion-translate-x-in-[0%] motion-translate-y-in-[150%] motion-opacity-in-[0%] motion-delay-[1ms] motion-delay-[0ms]/scale motion-delay-[0ms]/translate motion-duration-[500ms]/opacity motion-delay-[0ms]/opacity">
        {ctaButton ? ctaButton : <></>}
      </div>
    </div>
  )
}

export default HeadingAndDesc

