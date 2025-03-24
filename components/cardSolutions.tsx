import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import { motion } from "framer-motion";

interface CardContent {
    title : string,
    desc : string,
    img : string,
    style : "basic" | "revert",
    pad : string,
    bottomPadding : string,
    ref : MutableRefObject<HTMLDivElement | null>
}

const CardSolutions = () => {
    const containerRef = useRef(null);
    const refCard0 = useRef(null);
    const refCard1 = useRef(null);
    const refCard2 = useRef(null);
    const refCard3 = useRef(null);
    
    const cardContent: CardContent[] = [
      {
        title: "Healthcare",
        desc: `Health care 24/7 access. This way, the student can learn and get help from anywhere, at any time. Be it
               homework or midnight exam preparation, Misty is there to guide them in detail, acting like your live
               companion.`,
        img: "/healthCare.png",
        style: "basic",
        // For small screens (like a 14" laptop) use less top offset, and increase it on larger screens
        pad: "sm:top-[15vh] md:top-[18vh] lg:top-[20vh]",
        bottomPadding: "35vh",
        ref: refCard0,
      },
      {
        title: "Finance",
        desc: `Finance 24/7 access. This way, the student can learn and get help from anywhere, at any time. Be it
               homework or midnight exam preparation, Misty is there to guide them in detail, acting like your live
               companion.`,
        img: "/financeSoln.png",
        style: "revert",
        pad: "sm:top-[20vh] md:top-[23vh] lg:top-[25vh]",
        bottomPadding: "30vh",
        ref: refCard1,
      },
      {
        title: "Artificial Intelligence (AI)",
        desc: `AI 24/7 access. This way, the student can learn and get help from anywhere, at any time. Be it
               homework or midnight exam preparation, Misty is there to guide them in detail, acting like your live
               companion.`,
        img: "/AISoln.png",
        style: "basic",
        pad: "sm:top-[25vh] md:top-[28vh] lg:top-[30vh]",
        bottomPadding: "25vh",
        ref: refCard2,
      },
      {
        title: "Space",
        desc: `Space 24/7 access. This way, the student can learn and get help from anywhere, at any time. Be it
               homework or midnight exam preparation, Misty is there to guide them in detail, acting like your live
               companion.`,
        img: "/spaceSoln.png",
        style: "revert",
        pad: "sm:top-[30vh] md:top-[33vh] lg:top-[35vh]",
        bottomPadding: "20vh",
        ref: refCard3,
      },
    ];
    

    return (
      <div ref={containerRef} className="relative">
        {/* Container with proper spacing */}
        <div className="flex flex-col gap-[120px] min-h-[300vh] w-full relative pb-[40vh]">
          {cardContent.map((item, index) => {
            return <CardSoln 
              key={index} 
              index={index} 
              item={item}
              // containerRef={containerRef}
              bottomPadding={item.bottomPadding}
            />
          })}
        </div>
      </div>
  );
};

const CardSoln = ({
  index, 
  item, 
  // isLast,
  bottomPadding,
  // containerRef
} : {
  index: number, 
  item: CardContent, 
  bottomPadding: string,
  // isLast: boolean,
  // containerRef?: MutableRefObject<HTMLDivElement | null>
}) => {
    // For individual card animations
    const { scrollYProgress } = useScroll({
        target: item.ref,
        offset: ["0 1", "1.1 1"],
    });
    
    // For end of scroll detection
    // const { scrollYProgress: containerScrollProgress } = useScroll({
    //     target: containerRef,
    //     offset: ["start start", "end end"],
    // });
    
    // //console.log(containerScrollProgress)

    const scaleProgressCard = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    
    // Bottom padding calculation for the last card when reaching end of scroll
    // const bottomPadding = useTransform(
    //     containerScrollProgress,
    //     [0.75, 1],  // Adjust these values as needed
    //     [20, 35]     // Adjust these values for desired bottom spacing
    // );

    return (
        <motion.div
          key={index}
          ref={item.ref}
          style={{
            scale: scaleProgressCard,
            opacity: scaleProgressCard,
            marginBottom: bottomPadding,
          }}
          className={`sticky ${item.pad} w-full max-w-[1128px] min-w-[342px] 
            h-auto md:h-[432px] rounded-lg border border-[#8B888C] 
            overflow-hidden backdrop-blur-3xl bg-[#BAB8BC1A] 
            flex flex-col
            ${
              item.style === "revert" ? "md:flex-row-reverse" : "md:flex-row"
            }
          `}
        >
          {/* Image section */}
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image
              src={item.img}
              alt="Futuristic visualization"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text section */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-white mb-4">{item.title}</h2>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      );
}

export default CardSolutions;