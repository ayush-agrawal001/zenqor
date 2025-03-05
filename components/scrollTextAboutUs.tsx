import { ReactNode, useRef } from "react";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"] })

const contentSoln = [
    {
    head : "History", 
    content : () =>(
    <>
        Our journey began with a simple, yet ambitious goal to combine the disruptive power of quantum computing with the transformative potential of artificial intelligence, creating an entirely new frontier in technology. Acknowledging the limitations of traditional AI, we sought to go beyond the boundaries of classical computing, unlocking new dimensions of computational power through quantum mechanics.
        <br></br>
        <br></br>
        Born from a passion to redefine what&apos;s possible, our team is composed of a diverse group of quantum physicists, AI researchers, and industry experts united in a singular mission: to develop Quantum Neural Networks (QNNs) that not only outperform current artificial neural networks but surpass them in every conceivable way. By integrating quantum computing with deep learning technologies, we are laying the foundation for a new era of innovation. From day one, we&apos;ve been committed to pushing the envelope, turning visionary ideas into real-world, high-impact solutions.
    </>)
    },
    {
    head : "Mission", 
    content : () =>(
    <>
        We believe the future of AI lies in merging quantum computing with neural networks. Our mission is to develop Quantum Neural Networks (QNNs) that solve problems once thought impossible, revolutionizing industries with unmatched computational power.
        <br></br>
        <br></br>
        By leveraging quantum speed and complexity, we break the limits of traditional machine learning, creating AI models that are exponentially more efficient and capable of learning from vast, diverse datasets. We are not just building AI—we are redefining intelligence itself.
        <br></br>
        <br></br>
        From simulating quantum states for space exploration to accelerating drug discovery, optimizing supply chains, and transforming climate modeling, our QNNs will reshape every major industry.
        <br></br>
        <br></br>
        Our ultimate goal is to advance Artificial General Intelligence (AGI) through quantum-powered AI, paving the way for groundbreaking technologies that surpass today&apos;s most advanced systems. By tackling global challenges, we aim to create a lasting, positive impact on humanity.
    </>)
    },
    {
    head : "Vision", 
    content : () =>(
    <>
        We envision a future where the fusion of quantum computing and AI drives a fundamental transformation across every sector of human progress. Our long-term mission is to develop Quantum Artificial General Intelligence (QAGI)—an advanced AI system that learns, reasons, and makes decisions with the depth and adaptability of human cognition. By leveraging the immense computational power of quantum mechanics, QAGI will unlock new frontiers in problem-solving, pushing the boundaries of what AI can achieve.
        <br></br>
        <br></br>
        This revolutionary technology will redefine possibilities across industries, solving complex challenges in healthcare, drug discovery, space exploration, cybersecurity, logistics, and climate change. By processing vast datasets and modeling intricate systems beyond classical AI&apos;s capabilities, QAGI will provide unprecedented solutions to some of the world&apos;s most pressing issues.
        <br></br>
        <br></br>
        As we continue to innovate, we position ourselves at the forefront of a global technological shift. From designing life-saving drugs at the molecular level to optimizing deep-space missions, quantum-powered intelligence will enhance every aspect of life. By pioneering QAGI, we aim not just to advance AI but to reshape the future, ensuring that the synergy of quantum computing and artificial intelligence drives progress, innovation, and a better world for generations to come.
    </>)
    },
]

const contentTech = [
    {
    head : "Quantum Neural Networks (QNN)", 
    content : () =>(
    <>
        Quantum Neural Networks (QNNs) mark the next evolution in AI, harnessing the power of quantum computing to outperform classical neural networks. QNNs leverage quantum superposition and entanglement to process vast amounts of data exponentially faster, solving problems that are impossible for classical AI.
        <br></br>
        <br></br>
        Our goal is to build scalable, high-performance QNNs that drive breakthroughs in pattern recognition, optimization, and decision-making. By combining quantum mechanics with deep learning, we open doors to Quantum Artificial General Intelligence (QAGI), where machines achieve true human-like intelligence and beyond.
    </>)
    },
    {
    head : "Artificial Intelligence (AI)", 
    content : () =>(
    <>
        Artificial Intelligence (AI) is transforming industries by enabling machines to learn, adapt, and make intelligent decisions. Traditional AI relies on classical neural networks, but its potential is limited by computational constraints. We push AI beyond its limits by integrating advanced deep learning, reinforcement learning, and generative models to solve real-world challenges. 
        <br></br>
        <br></br>
        Our AI-driven systems optimize efficiency, automate complex tasks, and uncover insights at an unprecedented scale. With our innovative AI solutions, businesses and researchers can harness the power of intelligent automation, revolutionizing everything from data analytics to robotics and beyond.

    </>)
    },
    {
    head : "Vision", 
    content : () =>(
    <>
        Quantum Computing (QC) redefines computation by leveraging qubits, entanglement, and superposition to solve problems at an unprecedented scale. Unlike classical computing, which processes information in binary states (0s and 1s), QC performs calculations across multiple states simultaneously, enabling massive parallelism. 
        <br></br>
        <br></br>
        Our mission is to harness QC for exponential speedups in AI, cryptography, and complex simulations. By integrating QC with AI, we push the boundaries of problem-solving, leading to breakthroughs in industries like healthcare, finance, cybersecurity, and space exploration.
    </>)
    },
]

interface contentType {
    head : string,
    content : () => ReactNode
}

export default function ScrollTextAboutUs({type} : {type : "tech" | "solution"}) {
    const ref1 = useRef(null);
    // const ref2 = useRef(null);

    let content : contentType[];
    if (type === "tech") {
        content = contentTech
    }else{
        content = contentSoln
    }

    return (
        <div className="w-full">
            <div className="flex flex-col justify-center items-center space-y-16 md:space-y-24 lg:space-y-32">
                {content.map((item, i) => (
                    <div 
                        key={i}
                        ref={ref1} 
                        className="flex flex-col items-center justify-center md:items-start md:flex-row lg:gap-8 xl:gap-16 w-[90vw] md:w-[85vw] lg:w-[80vw] py-8"
                    >
                        <h2 className="text-2xl md:text-3xl text-center md:text-start lg:text-4xl font-medium mb-6 md:mb-0 md:min-w-[200px]">
                            {item.head}
                        </h2>
                        <div className={`${inter.className} text-base md:text-lg text-[#6A686B] font-normal`}>
                            {item.content()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
