'use client'

import {Roboto} from "next/font/google";
import Image from "next/image";
import {useState} from "react";
import {list} from "postcss";

interface BlockProps {
    title: string;
    sub: string;
    header: string;
    copy: list;
}

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function TwoColumnHeader({title, sub, header="Included in this package", copy}: BlockProps) {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"flex flex-col justify-center items-center"}>
                <p className={}>{title}</p>
                <p className={}>{sub}</p>
            </div>
            <div className={"flex flex-col justify-center items-center"}>
                <p className={}>{header}</p>
                {}
            </div>
        </div>
    )
}