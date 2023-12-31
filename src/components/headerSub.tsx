import {Roboto} from "next/font/google";
import Image from "next/image";

interface HeaderSubProps {
    text: string;
    color: string;
    sub: string;
}

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function HeaderSub(props: HeaderSubProps) {
    return (
        <div className={"ml-[32px] md:ml-[64px] pt-[128px] max-w-[90vw]"}>
            <p className={`${props.color} text-[40px] -tracking-[1.2px] max-w-[500px]`}>
                {props.text}
            </p>
            <div className={"flex flex-row items-center justify-start md:space-x-[190px] lg:space-x-[800px] max-w-[90vw]"}>
                <p className={`${props.color} ${subFont.className} text-[24px] max-w-[500px]`}>
                    {props.sub}
                </p>
                <div className={"hidden md:flex md:flex-row md:items-center justify-around space-x-[32px] max-w-[200px]"}>
                    <Image src={"/icons/arrow_back.png"} alt={"Slide Left"} width={40} height={40} className={"globalHover"} />
                    <Image src={"/icons/arrow_next.png"} alt={"Slide Right"} width={40} height={40} className={"globalHover"} />
                </div>
            </div>
        </div>
    )
}