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
        <div className={"ml-[32px] md:ml-[121px] pt-[128px] max-w-[90vw]"}>
            <p className={`${props.color} text-[40px] -tracking-[1.2px] max-w-[300px]`}>
                {props.text}
            </p>
            <div className={"flex flex-row items-center justify-start md:space-x-[260px] lg:space-x-[500px] max-w-[90vw]"}>
                <p className={`${props.color} ${subFont.className} text-[20px] opacity-[0.6] max-w-[300px]`}>
                    {props.sub}
                </p>
                <div className={"hidden md:flex md:flex-row md:items-center justify-around space-x-[20px] max-w-[200px]"}>
                    <Image src={"/icons/arrow_back.png"} alt={"Slide Left"} width={40} height={40} />
                    <Image src={"/icons/arrow_next.png"} alt={"Slide Right"} width={40} height={40} />
                </div>
            </div>
        </div>
    )
}