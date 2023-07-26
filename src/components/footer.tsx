import {Roboto} from "next/font/google";
import React from "react";
import Image from "next/image";

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function Footer() {
    return (
        <div className={"flex flex-col ml-[16px] md:ml-[64px] lg:ml-[128px] space-y-0 justify-center"}>
            <a href={"/"}>
                <Image src={'/footer.png'} alt={'Nuefang Footer'} height={50} width={300} className={"pt-[64px] md:pt-[128px]"} />
            </a>
            <div className={`flex flex-row justify-start space-x-4 ${subFont.className} text-white text-[18px] text-opacity-80 pt-[8px] md:pt-[16px] w-[87%] md:w-[100%] md:max-w-[640px] lg:max-w-[1200px]`}>
                <a target={"_blank"} href="/privacy#cookies">Cookie Policy</a>
                <a target={"_blank"} href="/privacy">Privacy Policy</a>
            </div>
        </div>
    )
}