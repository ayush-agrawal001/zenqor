"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { Inter } from "next/font/google"
import { Menu, X } from "lucide-react"
import ContactFormDialog from "./dialougue-contact_form"

const inter = Inter({ subsets: ["latin"] })

interface Navigation {
  nav: "home" | "aboutUs" | "tech" | "solutions" | "contact" | "none"
}

export function NavBar() {
  const pathName = usePathname()
  const [whichHovered, setWhichHovered] = useState<Navigation>({ nav: "none" })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollValue, setScrollValue] = useState(0)
  const { scrollYProgress } = useScroll()

  const activeClassName = "text-white/90"

  const navItems = [
    { href: "/", label: "Home", nav: "home" },
    { href: "/about", label: "About Us", nav: "aboutUs" },
    { href: "/technology", label: "Technology", nav: "tech" },
    { href: "/solutions", label: "Solutions", nav: "solutions" },
    { href: "/contact", label: "Contact", nav: "contact" },
  ]

  const location = usePathname();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
      setScrollValue(latest)
  })


  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 ${(scrollValue >= 0 && scrollValue <= 0.15 && location === "/") ? ` bg-inherit ` : ` bg-transparent backdrop-blur-md `}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex gap-2">
          <Image src="/zenqor.svg" alt="Zenqor Logo" width={44} height={44} />
          <Link href={"/"}>
            <div className="flex flex-col items-center gap-0">
              <span className="text-[19.2px] font-semibold text-[#FDF7FF] p-0 m-0">Z E N Q O R</span>
              <span className={`text-[7.72px] font-normal text-[#B4AFB5] p-0 m-0 ${inter.className}`}>QUANTUM NEURAL NETWORK</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden text-[14px] items-center gap-6 lg:flex ${inter.className}`}>
          {navItems.map((item) => (
            <div key={item.nav} className="flex-col">
              <Link
                href={item.href}
                className={`text-white/50 hover:text-white transition-all ease-in-out duration-300 ${pathName === item.href ? activeClassName : ""}`}
                onMouseEnter={() => setWhichHovered({ nav: item.nav as Navigation["nav"] })}
                onMouseLeave={() => setWhichHovered({ nav: "none" })}
              >
                {item.label}
              </Link>
              <HoveredUnderLine isHovered={whichHovered.nav === item.nav} />
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex gap-10">
        <ContactFormDialog></ContactFormDialog>
        <button className="lg:hidden text-white z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="lg:hidden fixed top-0 left-0 h-screen w-screen bg-black z-50"
    >
      <div className="flex flex-col h-full p-6">
        {/* Close button */}
        <div className="flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Mobile menu items container - now a motion.div with variants */}
        <motion.div 
          className="flex flex-col mt-12 space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3, // Start after container animation completes
                staggerChildren: 0.1 // Delay between each child animation
              }
            }
          }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.nav}
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >
              <Link
                href={item.href}
                className={`text-2xl transition-colors ${
                  pathName === item.href ? "text-white font-medium" : "text-white/50 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  )
}

export const HoveredUnderLine = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className="h-[1px] overflow-hidden">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="h-[1px] w-5 bg-[#8B888C]"
            initial={{ opacity: 1, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "tween", duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

