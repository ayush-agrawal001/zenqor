"use client"

import React, { useState } from 'react';
import { HoveredUnderLine } from './nav-bar';
import Link from 'next/link';

interface LinkItem {
  text: string;
  href: string;
}

const linkItems: LinkItem[] = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Technology', href: '/technology' },
  { text: 'Solutions', href: '/solutions' },
  // { text: 'Blogs', href: '/blogs' },
  { text: 'Contact', href: '/contact' },
];


const QuickLinks: React.FC = () => {

  const [whichHovered, setWhichHovered] = useState({nav: "none"});

  return (
    <div className="flex  flex-col flex-1 shrink basis-0">
      <h2 className="text-[19.2px] font-medium leading-none text-white">
        Quick Links
      </h2>
      <nav className="flex flex-wrap gap-10 items-end mt-6 w-full text-base text-center text-zinc-500 max-md:max-w-full">
        {[linkItems.slice(0, 3), linkItems.slice(3)].map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col items-start  justify-start self-stretch ">
            {column.map((item, index) => (
              <div key={index} className="flex text-[14px] relative flex-col justify-center whitespace-nowrap min-h-[24px] mt-4 first:mt-0"> 
                <div className="flex-col">
            <Link 
            href={item.href}
            className={` text-white/50 hover:text-white transition-all ease-in-out duration-300 `}
            onMouseEnter={() => setWhichHovered({nav: item.text})}
            onMouseLeave={() => setWhichHovered({nav: "none"})}
            >
              {item.text}
            </Link>
            <HoveredUnderLine isHovered={whichHovered.nav === item.text}></HoveredUnderLine>
          </div>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default QuickLinks;