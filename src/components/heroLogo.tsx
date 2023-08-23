'use client'

import Image from "next/image";
import '@dotlottie/react-player/dist/index.css';
import Rive from '@rive-app/react-canvas';

export default function HeroLogo() {
    const scroll = (sectionId: string) => {
        const section = document.querySelector( sectionId );
        if (section != null) section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <div className={"flex flex-col justify-center items-center pt-[4svh] md:pt-[128px] h-[89%]"}>
            <Rive className={"w-[200px] h-[200px] sm:w-[300px] md:w-[400px] md:h-[400px]"} src="/lotties/nuefang.riv" />
            <div className={"flex flex-col justify-center items-center flex-fill"}>
                <p className={"text-[30px] md:text-[40px] text-center"}>
                    Welcome to nuefang
                </p>
                <button onClick={() => {scroll('#whatWeDo')}} className={"flex-squish"}>
                    <Image
                        src={"/icons/arrow_down.png"} alt={"Hero arrow"} width={"60"} height={"60"}
                        className={"max-w-[50px] md:max-w-[100vw] globalHover hover:border-2 hover:border-black"}
                    />
                </button>
            </div>
        </div>
    )
}