import QuickLinks from "./QuickLinks"
import SocialLinks from "./SocialLinks"
import Copyright from "./Copyright"
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-[1200px] pb-4">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Logo and description - takes full width on mobile, less on larger screens */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <Image src="/zenqor.svg" alt="Zenqor Logo" width={40} height={40} />
            <span className="text-xl sm:text-[23.04px] font-semibold text-[#FDF7FF]">Zenqor</span>
          </div>
          <p className="text-[16px] sm:text-base text-zinc-500 max-w-xs">
            Pioneering the future of AI & <br></br> Quantum Computing.
          </p>
        </div>

        {/* Links section - stacks on mobile, side by side on larger screens */}
        <div
          className={`flex flex-col sm:flex-row justify-between sm:justify-around w-full sm:w-2/3 gap-8 sm:gap-4 ${inter.className}`}
        >
          <div className="w-full sm:w-auto">
            <QuickLinks />
          </div>
          <div className="w-full sm:w-auto">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div>
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer

