import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Header from "@/components/header";
import ThreeColumn from "@/components/threeColumn";
import TwoColumn from "@/components/twoColumn";
import HeaderSub from "@/components/headerSub";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import LogoRow from "@/components/logoRow";
import Image from "next/image";
import FourColumn from "@/components/fourColumn";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
      <main className="flex flex-col w-[100vw] m-0 p-0">
        <div className={"pt-[32px] md:pt-[40px] min-h-[100svh]"}>
          <Navbar />
          <Hero />
        </div>
        <div className={"bg-lightGrey pb-[12svh] min-h-[100svh]"}>
          <Header
              text={"We design and develop websites for your business from the ground up"}
              color={"white"}
              width={"lg:max-w-[912px]"}
          />
          <ThreeColumn />
        </div>
        <div className={"bg-white w-[100vw] min-h-[100svh]"}>
          <Header
              text={"Our team has combined experience developing and designing"}
              color={"black"}
              width={"lg:max-w-[1100px]"}
          />
          <LogoRow />
        </div>
        <div className={"bg-lightGrey w-[100vw] min-h-[100svh] pb-[12svh]"}>
          <Header
              text={"Our team"}
              color={"white"}
              width={"md:max-w-[350px]"}
          />
          <TwoColumn />
        </div>
        <div className={"bg-white w-[100vw] min-h-[100svh] pb-[12svh]"}>
          <Header
              text={"Why choose nuefang to create your website?"}
              color={"black"}
              width={"md:max-w-[350px]"}
          />
          <FourColumn />
        </div>
        <div className={"bg-white w-[100vw] min-h-[100svh] relative"}>
          <div className={"absolute w-[40vw] top-[0%] right-0 h-[80px] bg-lightYellow z-10"} />
          <HeaderSub text={"Our work"} sub={"A selection of recent projects"} color={"black"} />
          <Carousel />
          <div className={"block md:hidden flex flex-row items-center justify-start space-x-[20px] max-w-[100%] pt-[2vh] pl-[32px]"}>
            <Image src={"/icons/arrow_back.png"} alt={"Slide Left"} width={40} height={40} />
            <Image src={"/icons/arrow_next.png"} alt={"Slide Right"} width={40} height={40} />
          </div>
        </div>
        <div className={"flex flex-col items-start justify-start bg-lightGrey w-[100vw] min-h-[100svh]"}>
          <Header
              text={"Want to work with us?"}
              color={"lightYellow"}
              width={"w-[90%] md:max-w-[1000px]"}
          />
          <Header
              text={"Fill out our form or get in touch."}
              color={"white"}
              width={"w-[90%] md:max-w-[1000px] pt-[0px]"}
          />
          <ContactForm />
          <Footer />
        </div>
      </main>
  )
}