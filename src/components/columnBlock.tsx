import {Roboto} from "next/font/google";

interface BlockProps {
    title: string;
    sub: string;
    theme: string;
}

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function ColumnBlock(props: BlockProps) {
    return (
        <div className={`flex flex-col justify-end items-start h-[386px] max-w-[351px] w-[95vw] md:max-w-[640px] lg:max-w-[576px] py-[32px] px-[16px] border-[1px] border-opacity-[0.6] border-${props.theme}`}>
            <p className={`text-${props.theme} text-[25px] md:text-[30px] -tracking-[0.75px] md:-tracking-[0.9px]`}>{props.title}</p>
            <p className={`${subFont.className} ${props.theme === 'white' ? 'text-subTextInvert' : 'text-subText'} text-[18px] md:text-[20px] leading-[22px]`}>
                {props.sub}
            </p>
        </div>
    )
}