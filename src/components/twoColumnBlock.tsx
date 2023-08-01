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
            <div className={"w-[90vw] lg:w-[30vw] flex flex-row lg:justify-center items-center justify-start"}>
                <Image src={`/headshots/${props.src}.png`} alt={props.title} height={1000} width={1000} className={"max-w-[343px] md:max-w-[450px] w-[90vw] lg:w-[30vw] md:h-auto"} />
            </div>
            <p className={"text-left max-w-[343px] lg:max-w-[450px] text-black pt-[32px] text-[40px] pl-[16px] lg:pl-0"}>{props.title}</p>
            <p className={"text-left max-w-[343px] lg:max-w-[450px] text-black text-[30px] pl-[16px] lg:pl-0"}>{props.sub}</p>
            <p className={`text-left max-w-[343px] lg:max-w-[450px] text-subText text-[18px] pt-[16px] ${subFont.className} pl-[16px] lg:pl-0`}>{props.copy}</p>
        </div>
    )
}