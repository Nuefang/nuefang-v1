import {Roboto} from "next/font/google";

interface BlockProps {
    title: string;
    sub: string;
    theme: string;
    width?: string;
}

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function ColumnBlock({width="lg:max-w-[370px]", theme, title, sub}: BlockProps) {
    return (
        <div className={`${theme === 'white' ? 'text-subTextInvert globalHoverInvert' : 'text-subText globalHover'} flex flex-col justify-end items-start h-[386px] max-w-[351px] w-[95vw] md:max-w-[640px] ${width} py-[32px] px-[16px] border-[1px] border-opacity-[0.6] border-${theme}`}>
            <p className={`text-inherit text-[25px] md:text-[30px] -tracking-[0.75px] md:-tracking-[0.9px]`}>{title}</p>
            <p className={`${subFont.className} text-[18px] md:text-[20px] leading-[22px] text-inherit text-opacity-80`}>
                {sub}
            </p>
        </div>
    )
}