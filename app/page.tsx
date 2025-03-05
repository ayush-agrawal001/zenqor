import Footer from "@/components/footer"
import HomeHeading from "@/components/homeHeading"
import { SmoothScrollerProvider } from "@/components/smoothScrollerContext"


export default function Home() {
  return (
    <main className="">
      <SmoothScrollerProvider>
      <div className="grid min-h-[300vh]  w-full">
        <HomeHeading />
        {/* <HomeSecondHeading /> */}
        <div className="dark relative w-full h-full flex items-end justify-center md:mt-14">
          <Footer />
        </div>
      </div>
      </SmoothScrollerProvider>
    </main>
  )
}
