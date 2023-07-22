'use client'

import Image from "next/image";
import Lottie from "lottie-react";
import animationData from './../lotties/nuefang.json';

export default function HeroLogo() {
    const scroll = (sectionId: string) => {
        const section = document.querySelector( sectionId );
        if (section != null) section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"max-w-[300px] md:max-w-[400px] min-h-[400px] pt-[64px] md:pt-[128px]"}>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                />
            </div>
            <p className={"text-[30px] md:text-[40px] pt-[32px] md:pt-[64px] pb-[32px] text-center"}>
                Welcome to nuefang
            </p>
            <button onClick={() => {scroll('#whatWeDo')}}>
                <Image
                    src={"/icons/arrow_down.png"} alt={"Hero arrow"} width={"60"} height={"60"}
                    className={"max-w-[50px] md:max-w-[100vw] globalHover hover:border-2 hover:border-black"}
                />
            </button>
            {/*<div className={"absolute h-[113px] w-[50vw] md:w-[25vw] lg:w-[50vw] bg-lightYellow bottom-0 right-0 -z-10"} />*/}
        </div>
    )
}