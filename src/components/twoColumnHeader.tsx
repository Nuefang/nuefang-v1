'use client'

import {Roboto} from "next/font/google";
import Image from "next/image";
import {useState} from "react";
import {list} from "postcss";

interface BlockProps {
    title: string;
    sub: string;
    header?: string;
    copy: string[];
    bg: string;
    col: string;
    subCol: string;
    extra?: string;
}

const subFont = Roboto({ weight: "700", subsets: ['latin'] })
const subFontSm = Roboto({ weight: "300", subsets: ['latin'] })

export default function TwoColumnHeader({title, sub, header="Included in this package", copy, bg, col, subCol, extra=""}: BlockProps) {
    return (
        <div className={"flex flex-col justify-center items-center w-[100%] p-[8px]"}>
            <div className={`flex flex-col justify-center items-start rounded-t-[4px] w-[100%] ${bg}`}>
                <p className={`pt-8 px-8 text-[32px] ${col}`}>{title} <span className={"text-lightYellow"}>{extra}</span></p>
                <p className={`pb-8 px-8 text-[18px] ${subFont.className} ${subCol}`}>{sub}</p>
            </div>
            <div className={"flex flex-col justify-start items-start bg-white rounded-b-[4px] w-[100%] h-[350px]"}>
                <p className={`px-8 py-4 text-subText ${subFont.className} text-[14px] md:text-[18px]`}>{header}</p>
                {copy.map((copyItem) => {
                    return (<p key={copyItem} className={`px-8 py-1 text-subText ${subFontSm.className} text-[14px] md:text-[18px]`}>| {copyItem}</p>)
                })}
            </div>
        </div>
    )
}