import type React from "react"
import Image from "next/image"

interface SocialLink {
  icon: string
  alt: string
  href: string
}

const socialLinks: SocialLink[] = [
  { icon: "linkedin.svg", alt: "LinkedIn", href: "https://linkedin.com" },
  { icon: "facebook.svg", alt: "Facebook", href: "https://facebook.com" },
  { icon: "twitter.svg", alt: "Twitter", href: "https://twitter.com" },
  { icon: "instagram_or.svg", alt: "Instagram", href: "https://instagram.com" },
]

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-[19.2px] font-medium leading-none text-white">Follow Us</h2>
      <div className="flex gap-6 sm:gap-8 items-center mt-6 w-full max-w-[176px]">
      {socialLinks.map((link, index) => (
        <a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none focus:ring-2 focus:ring-white rounded-none transition-transform"
        >
        <Image
          loading="lazy"
          src={`/` + link.icon}
          alt={link.alt}
          className="object-contain hover:brightness-0 hover:invert shrink-0 self-stretch my-auto w-5 aspect-square rounded-none transition-all duration-200"
          width={20}
          height={20}
        />
        </a>
      ))}
      </div>
    </div>
  )
}

export default SocialLinks
