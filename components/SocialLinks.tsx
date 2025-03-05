import React from 'react';
import Image from 'next/image';

interface SocialLink {
  icon: string;
  alt: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: "facebook.svg", alt: 'Facebook', href: 'https://facebook.com' },
  { icon: "twitter.svg", alt: 'Twitter', href: 'https://twitter.com' },
  { icon: "instagram_or.svg", alt: 'Instagram', href: 'https://instagram.com' },
  { icon: "linkedin.svg", alt: 'LinkedIn', href: 'https://linkedin.com' },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col text-[19.2px]">
      <h2 className="text-xl font-medium leading-none text-white">
        Follow Us
      </h2>
      <div className="flex gap-8 items-center mt-6 w-44 max-w-full">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-white rounded-none"
          >
            <Image
              loading="lazy"
              src={`/` + link.icon}
              alt={link.alt}
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square rounded-none"
              width={20}
              height={20}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;