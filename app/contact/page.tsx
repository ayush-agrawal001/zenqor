import HeadingAndDesc from "@/components/style/headingAndDesc";

const Contact = () => {
  return (
    <div>
        <div className="flex flex-col items-center w-full mt-24 sm:mt-24 md:mt-32 lg:mt-[256px]">
            <div className="w-full flex flex-col relative px-4 sm:px-6 md:px-8">
                <HeadingAndDesc heading={<Heading />} desc={<Desc />} className="relative z-10" />                
            </div>
        </div>
    </div>
  )
}

const Heading = () => {
    return (
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-center">
        Feel Free to{" "}
        <span className="bg-gradient-to-b font-semibold tracking-tight from-[#A15BE4] to-[#000EA3] bg-clip-text text-transparent">
        Get In Touch
        </span>
      </h1>
    )
  }
  
  const Desc = () => {
    return (
      <p className="mx-auto mt-4 w-full text-center md:max-w-md text-sm font-thin text-muted-foreground">
        Have questions or want to learn more? We’d love to hear from you.
      </p>
    )
  }
  
  

export default Contact;