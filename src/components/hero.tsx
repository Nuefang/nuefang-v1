import Image from "next/image";

export default function Hero() {
    return (
        <div className={"flex flex-col shrink-0 pt-[128px] md:pt-[160px] h-[275px] md:h-[691px]"}>
            <p className={"ml-[16px] md:pl-[32px] leading-[50px] md:leading-[90px] max-w-[343px] md:max-w-[959px] text-black text-[35px] sm:text-[45px] md:text-[70px] font-normal -tracking-[1.35px] md:-tracking-[2.1px]"}>
                nuefang create purpose built websites bespoke for your business
            </p>
            <a className={"flex flex-row items-center justify-center ml-[16px] border-2 border-black mt-[32px] w-1/3"}>
                <p className={"text-black text-[20px] -tracking-[0.6px] m-[8px]"}>Contact us</p>
            </a>
            <Image
                src={"/icons/arrow_down.png"} alt={"Hero arrow"} width={"40"} height={"40"}
                className={"absolute top-[85svh] left-[6vw]"}
            />
            <div className={"absolute h-[545px] w-[50vw] bg-lightYellow top-[75svh] md:top-[800px] right-0 -z-10"} />
        </div>
    )
}