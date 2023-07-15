import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Header from "@/components/header";
import ThreeColumn from "@/components/threeColumn";
import TwoColumn from "@/components/twoColumn";
import HeaderSub from "@/components/headerSub";
import Carousel from "@/components/carousel";
import ContactUs from "@/components/contactUs";
import LogoRow from "@/components/logoRow";
import Image from "next/image";
import FourColumn from "@/components/fourColumn";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <main className="flex flex-col w-[100vw] m-0 p-0">
        <div className={"pt-[32px] md:pt-[40px] min-h-[100svh]"}>
          <Navbar />
          <Hero />
        </div>
        <div id={"about"} className={"bg-lightGrey pb-[12svh] min-h-[100svh]"}>
          <Header
              text={"We design and develop bespoke websites from the ground up"}
              color={"white"}
              width={"lg:max-w-[912px]"}
          />
          <ThreeColumn />
        </div>
        <div className={"bg-white w-[100vw] min-h-[100svh] pb-[12svh]"}>
          <Header
              text={"Our team has combined experience working with some of the worlds most successful brands"}
              color={"black"}
              width={"lg:max-w-[1350px]"}
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
              width={"lg:max-w-[1350px]"}
          />
          <FourColumn />
        </div>
        <div id={"work"} className={"bg-white w-[100vw] min-h-[90svh] relative pb-[12svh]"}>
          <div className={"absolute w-[40vw] md:w-[20vw] lg:w-[55vw] top-[0%] right-0 h-[80px] md:h-[113px] bg-lightYellow z-10"} />
          <HeaderSub text={"Our work"} sub={"A selection of recent projects"} color={"text-subText"} />
          <Carousel />
          <div className={"md:hidden flex flex-row items-center justify-start space-x-[20px] max-w-[100%] pt-[2vh] pl-[32px]"}>
            <Image src={"/icons/arrow_back.png"} alt={"Slide Left"} width={40} height={40} className={"globalHover"} />
            <Image src={"/icons/arrow_next.png"} alt={"Slide Right"} width={40} height={40} className={"globalHover"} />
          </div>
        </div>
        <div id={"contact"} className={"flex flex-col items-start justify-start bg-lightGrey w-[100vw] min-h-[100svh] pb-[12svh]"}>
          <Header
              text={"Want to work with us?"}
              color={"black"}
              width={"text-lightYellow w-[80%] md:max-w-[1000px]"}
          />
          <Header
              text={"Fill out our form or get in touch."}
              color={"white"}
              width={"w-[80%] md:max-w-[1000px] pt-0"}
              topPadding={"pt-[0px] md:pt-[0px]"}
          />
          <ContactForm />
          <ContactUs />
          <Footer />
        </div>
      </main>
  )
}