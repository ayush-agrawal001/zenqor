import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import HeadingAndDesc from "@/components/style/headingAndDesc"
import { Inter } from "next/font/google"

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-full gap-12 sm:gap-16 md:gap-20 lg:gap-[120px] w-full mt-24 sm:mt-24 md:mt-32 lg:mt-[256px]">
      <div className="w-full flex flex-col relative px-4 sm:px-6 md:px-8">
          <HeadingAndDesc heading={<Heading />} desc={<Desc />} className="relative z-10" />
        </div>
        <div className="w-full sm:w-[95vw] md:w-[90vw] flex justify-center">
          <ContactForm />
        </div>
        <div className="dark w-full mt-12 md:mt-16 lg:mt-32 flex items-end justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

const inter = Inter({ subsets : ["latin"] ,weight : "400" })

const Heading = () => {
  return (
    <h1 className="text-[30px] w-full md:text-4xl lg:text-5xl font-semibold tracking-normal leading-[40.5px]">
      Feel Free to{" "}
      <span className="bg-gradient-to-b font-semibold tracking-tight from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent">
        Get In Touch
      </span>
    </h1>
  )
}

const Desc = () => {
  return (
    <p className={`mx-auto -mt-[14px] w-[90vw] text-center md:max-w-md text-[16px] leading-6 text-muted-foreground px-4 md:px-0 ${inter.className}`}>
      Have questions or want to learn more? We&apos;d love to hear from you.
    </p>
  )
}

export default Contact

