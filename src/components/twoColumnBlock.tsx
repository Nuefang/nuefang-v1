import Image from "next/image";
import {Roboto} from "next/font/google";

interface TwoColumnBlock {
    title: string;
    sub: string;
    copy: string;
    src: string;
}

const subFont = Roboto({ weight: "100", subsets: ['latin'] })

export default function TwoColumnBlock(props: TwoColumnBlock) {
    return (
        <div className={"flex flex-col items-start justify-center w-[100%] md:w-[493px] lg:w-[560px]"}>
            <Image src={`/headshots/${props.src}.png`} alt={props.title} width={493} height={550} />
            <p className={"text-white pt-[32px] text-[40px]"}>{props.title}</p>
            <p className={"text-white text-[30px]"}>{props.sub}</p>
            <p className={`text-white opacity-[0.8] text-[18px] pt-[16px] max-w-[466px] ${subFont.className}`}>{props.copy}</p>
        </div>
    )
}