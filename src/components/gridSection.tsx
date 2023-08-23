'use client'

import Image from "next/image";
import TwoColumnHeader from "@/components/twoColumnHeader";

export default function GridSection() {
    return (
        <div className={"grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 w-[100vw] gap-12 justify-center items-center place-items-center  px-[16px] md:px-[64px] lg:px-[128px] pt-[64px]"}>
            <TwoColumnHeader
                title={"Landing Page"}
                sub={"Perfect to kickstart your business"}
                copy={[
                    "One-on-one communication to understand your business",
                    "Bespoke, business-specific design",
                    "Lightweight, performant code",
                    "Contact form to collect interest",
                    "A web page that converts"
                ]}
                bg={'bg-lightYellow'}
                col={'text-lightGrey'}
                subCol={'text-subText'}
            />
            <TwoColumnHeader
                title={"Website"}
                sub={"Establish your business presence"}
                copy={[
                    "One-on-one communication to understand your business",
                    "Bespoke, business-specific design",
                    "Lightweight, performant code",
                    "Contact form to collect interest",
                    "A comprehensive 3 page website",
                    "More room to showcase your business"
                ]}
                bg={'bg-lightYellow'}
                col={'text-lightGrey'}
                subCol={'text-subText'}
            />
            <TwoColumnHeader
                title={"Website"}
                sub={"Truly showcase your brand"}
                copy={[
                    "One-on-one communication to understand your business",
                    "Bespoke, business-specific design",
                    "Lightweight, performant code",
                    "Contact form to collect interest",
                    "All-encompassing 5 page website",
                    "Dedicated areas for specific content",
                    "Latitude to present the full scope of your services"
                ]}
                bg={'bg-gradient-to-r from-subText to-endGray'}
                col={'text-white'}
                subCol={'text-subTextInvert'}
                extra={'+'}
            />
            <TwoColumnHeader
                title={"Custom"}
                sub={"Have something special in mind?"}
                copy={[
                    "End to end communication",
                    "Unmatched creativity and brand elevation",
                    "Research-driven UX design",
                    "Bespoke code for ultra high performance",
                    "Direct control over your website content",
                    "Multiple sessions with our full team"
                ]}
                header={"Contact us to talk about a specialised solution"}
                bg={'bg-gradient-to-r from-subText to-endGray'}
                col={'text-white'}
                subCol={'text-subTextInvert'}
                extra={'∞'}
            />
        </div>
    )
}