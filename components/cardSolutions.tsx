import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import { motion } from "motion/react";

interface CardContent {
    title : string,
    desc : string,
    img : string,
    style : "basic" | "revert",
    pad : string,
    ref : MutableRefObject<HTMLDivElement | null>
}

const CardSolutions = () => {
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
        pad: "top-[20vh]",
        ref: refCard0,
      },
      {
        title: "Finance",
        desc: `Finance 24/7 access. This way, the student can learn and get help from anywhere, at any time. Be it homework or midnight exam preparation, Misty is there to guide them in detail, acting like your live companion.`,
        img: "/financeSoln.png",
        style: "revert",
        pad: "top-[25vh]",
        ref : refCard1,
      },
      {
        title: "Artificial Intelligence (AI)",
        desc: `AI 24/7 access. This way, the student can learn and get help from anywhere, at any time. Be it homework or midnight exam preparation, Misty is there to guide them in detail, acting like your live companion.`,
        img: "/AISoln.png",
        style: "basic",
        pad: "top-[30vh]",
        ref : refCard2,
      },
      {
        title: "Space",
        desc: `Space 24/7 access. This way, the student can learn and get help from anywhere, at any time. Be it homework or midnight exam preparation, Misty is there to guide them in detail, acting like your live companion.`,
        img: "/spaceSoln.png",
        style: "revert",
        pad: "top-[35vh]",
        ref : refCard3,
      },
    ];

  
    return (
    <div className="flex flex-col gap-[120px] h-[300vh] w-full relative justify-center items-center">
      {cardContent.map((item, index) => {
        return <CardSoln key={index} index={index} item={item} />
      })}
    </div>
  );
};

const CardSoln = ({index, item} : {index : number, item : CardContent}) => {

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: item.ref,
        offset: ["0 1", "1.33 1"],
      });
      const scaleProgressCard = useTransform(scrollYProgress2, [0, 1], [0.8, 1]);

    return (
        <motion.div
          key={index}
          ref={item.ref}
          style={{
            scale: scaleProgressCard,
            opacity: scaleProgressCard,
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
              alt="Futuristic healthcare visualization showing a patient with holographic brain scan"
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