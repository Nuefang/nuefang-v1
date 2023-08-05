'use client'

import Image from "next/image";

export default function CTA() {
    return (
        <div className={"flex flex-row justify-center items-center pt-[32px]"}>
            <a href={"#contact"} className={"px-8 py-4 text-[20px] text-white border-2 border-white rounded-[6px] w-[81vw] text-center"}>Contact Us</a>
        </div>
    )
}