import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function ButtonZen({ children, className, onClick ,...props }: { children: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <Button
      className={`relative text-[16px] font-normal text-[#FDF7FF] ${inter.className} glow-effect glow-purple ${className} bg-gradient-to-b from-[#A15BE4] to-[#000EA3] text-white transition-all ease-in-out duration-300`}
      {...props}
    onClick={onClick}
      asChild
    >
      {children}
    </Button>
  );
}
