import {Roboto} from "next/font/google";

interface BlockProps {
    title: string;
    sub: string;
    theme: string;
}

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function ColumnBlock(props: BlockProps) {
    return (
        <div className={`flex flex-col max-w-[351px] w-[95vw] md:max-w-[280px] lg:max-w-[316px] p-[16px] md:p-[12px] lg:p-[16px] border-[1px] border-opacity-[0.6] border-${props.theme}`}>
            <p className={`text-${props.theme} text-[25px] md:text-[30px] -tracking-[0.75px] md:-tracking-[0.9px] w-[100%] pt-[260px] md:pt-[160px]`}>{props.title}</p>
            <p className={`${subFont.className} ${props.theme === 'white' ? 'text-subTextInvert' : 'text-subText'} text-[18px] md:text-[20px] w-[100%] leading-[22px]`}>
                {props.sub}
            </p>
        </div>
    )
}