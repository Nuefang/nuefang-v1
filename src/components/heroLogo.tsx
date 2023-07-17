'use client'

import Image from "next/image";
import Lottie from "lottie-react";
import animationData from './../lotties/nuefang.json';

export default function HeroLogo() {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"max-w-[500px] min-h-[500px] pt-[128px]"}>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                />
            </div>
            <p className={"text-[40px] pt-[128px] pb-[32px] text-center"}>
                Welcome to nuefang
            </p>
            <a href={"#whatWeDo"}>
                <Image
                    src={"/icons/arrow_down.png"} alt={"Hero arrow"} width={"60"} height={"60"}
                    className={"globalHover hover:border-2 hover:border-black"}
                />
            </a>
            {/*<div className={"absolute h-[113px] w-[50vw] md:w-[25vw] lg:w-[50vw] bg-lightYellow bottom-0 right-0 -z-10"} />*/}
        </div>
    )
}