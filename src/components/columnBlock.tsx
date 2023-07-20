'use client'

import {Roboto} from "next/font/google";
import Image from "next/image";
import {useState} from "react";

interface BlockProps {
    title: string;
    sub: string;
    theme: string;
    width?: string;
    icon: string;
}

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function ColumnBlock({width="lg:max-w-[370px]", theme, title, sub, icon}: BlockProps) {
    const [hoverState, setHoverState] = useState<boolean>(false);
    return (
        <div onMouseOver={() => setHoverState(true)} onMouseOut={() => setHoverState(false)} className={`${theme === 'white' ? 'text-subTextInvert globalHoverInvert' : 'text-subText globalHover'} flex flex-col justify-end items-start h-[386px] lg:h-[500px] max-w-[351px] w-[95vw] md:max-w-[640px] ${width} py-[32px] px-[16px] rounded-none border-b-[1px] border-opacity-[0.6] border-${theme}`}>
            <Image src={`/icons/${icon}.png`} alt={"Nuefang Icon"} width={140} height={100} className={`hidden lg:block pb-[32px] ${hoverState ? 'fade-in-to-upper-right' : 'fade-out-to-lower-left opacity-0'}`} />
            <Image src={`/icons/Y_${icon}.png`} alt={"Nuefang Icon"} width={140} height={100} className={`block lg:hidden pb-[32px]`} />
            <p className={`text-inherit text-[25px] md:text-[30px] -tracking-[0.75px] md:-tracking-[0.9px]`}>{title}</p>
            <p className={`${subFont.className} text-[18px] md:text-[20px] leading-[22px] text-inherit text-opacity-80`}>
                {sub}
            </p>
        </div>
    )
}