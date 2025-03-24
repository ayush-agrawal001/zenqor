import Footer from "@/components/footer"
import HomeHeading from "@/components/homeHeading"

export default function Home() {
  return (
    <main>
      <div className="grid min-h-[300vh] w-full">
        <HomeHeading />
        <div className="dark relative w-full h-full flex items-end justify-center -mt-36 md:-mt-36 lg:mt-14">
          <Footer />
        </div>
      </div>
    </main>
  )
}

