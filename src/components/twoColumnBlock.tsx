import Image from "next/image";
import {Roboto} from "next/font/google";

interface TwoColumnBlock {
    title: string;
    sub: string;
    copy: string;
    src: string;
}

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function TwoColumnBlock(props: TwoColumnBlock) {
    return (
        <div className={"flex flex-col items-start justify-center pl-[16px]"}>
            <img src={`/headshots/${props.src}.png`} alt={props.title} className={"max-w-343px w-[90vw] md:max-w-[100vw] md:w-[80vw] lg:w-[30vw] md:h-auto"} />
            <p className={"text-black pt-[32px] text-[40px]"}>{props.title}</p>
            <p className={"text-black text-[30px]"}>{props.sub}</p>
            <p className={`text-subText text-[18px] pt-[16px] max-w-[466px] ${subFont.className}`}>{props.copy}</p>
        </div>
    )
}