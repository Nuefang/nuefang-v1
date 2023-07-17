import {Roboto} from "next/font/google";
import React from "react";
import Image from "next/image";

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function Footer() {
    return (
        <div className={"flex flex-col ml-[16px] md:ml-[64px] lg:ml-[128px]"}>
            <p className={`${subFont.className} order-1 md:order-2 text-white text-[18px] text-opacity-80 pt-[64px] md:pt-[16px] w-[87%] md:w-[100%] md:max-w-[640px] lg:max-w-[1200px]`}>
                This is all fake for now © Copyright Nuefang Limited<br />
                Registration No: 000000 | Registered address: La Salle, Chadwick Street Leeds, LS1 1NW
            </p>
            <Image src={'/footer.png'} alt={'Nuefang Footer'} height={150} width={600} className={"order-2 md:order-1 pt-[32px] md:pt-[128px]"} />
        </div>
    )
}