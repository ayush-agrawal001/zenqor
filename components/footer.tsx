import QuickLinks from "./QuickLinks"
import SocialLinks from "./SocialLinks"
import Copyright from "./Copyright"
import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-[1200px] pb-4">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Logo and description - takes full width on mobile, less on larger screens */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
        <div className="flex gap-2">
          <Image src="/zenqor.svg" alt="Zenqor Logo" width={44} height={44} />
          <Link href={"/"}>
            <div className="flex flex-col items-center gap-0">
              <span className="text-[19.2px] font-semibold text-[#FDF7FF] p-0 m-0">Z E N Q O R</span>
              <span className={`text-[7.72px] font-normal text-[#B4AFB5] p-0 m-0 ${inter.className}`}>QUANTUM NEURAL NETWORK</span>
            </div>
          </Link>
        </div>
          <p className="text-[16px] sm:text-base font-normal text-zinc-500 max-w-xs">
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

