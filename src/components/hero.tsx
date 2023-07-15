import Image from "next/image";

export default function Hero() {
    return (
        <div className={"flex flex-col shrink-0 pt-[128px] md:pt-[200px] h-[275px] md:h-[691px]"}>
            <p className={"ml-[16px] md:ml-[64px] lg:ml-[128px] leading-[50px] md:leading-[90px] max-w-[343px] md:max-w-[650px] lg:max-w-[1184px] text-black text-[35px] sm:text-[45px] md:text-[64px] font-normal -tracking-[1.35px] md:-tracking-[1.92px]"}>
                nuefang create purpose built websites bespoke for your business
            </p>
            <a href={"#contact"} className={"cta ml-[16px] md:ml-[64px] lg:ml-[128px] mt-[32px] md:mt-[64px] h-[60px] w-[140px] border-2 border-black globalHover"}>
                <p className={"ctaText"}>Contact us</p>
            </a>
            <Image
                src={"/icons/arrow_down.png"} alt={"Hero arrow"} width={"40"} height={"40"}
                className={"absolute top-[85svh] left-[6vw] md:top-[90svh] md:left-[12vw] globalHover"}
            />
            <div className={"absolute h-[113px] w-[50vw] md:w-[25vw] lg:w-[50vw] bg-lightYellow bottom-0 right-0 -z-10"} />
        </div>
    )
}