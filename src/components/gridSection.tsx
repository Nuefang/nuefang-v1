'use client'

import Image from "next/image";
import TwoColumnHeader from "@/components/twoColumnHeader";

export default function GridSection() {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"flex flex-row justify-center items-center"}>
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
                />
            </div>
            <div className={"flex flex-row justify-center items-center"}>
                <TwoColumnHeader
                    title={"Website +"}
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
                />
                <TwoColumnHeader
                    title={"Custom ∞"}
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
                />
            </div>
        </div>
    )
}