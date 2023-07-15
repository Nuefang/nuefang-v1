import {Roboto} from "next/font/google";

const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function Footer() {
    return (
        <div className={"flex flex-col"}>
            <p className={`${subFont.className} order-1 md:order-2 text-white text-[18px] text-opacity-80 pt-[64px] md:pt-[16px] ml-[16px] md:ml-[64px] w-[87%] md:w-[100%] md:max-w-[640px] lg:max-w-[1200px]`}>
                From local sole traders to international corporations Jacob has vast experience designing digital solutions. He prides himself on understanding the unique needs of each client and providing them with a tangible ROI.
            </p>
            <p className={"order-2 md:order-1 pt-[32px] md:pt-[128px] ml-[16px] md:ml-[64px] text-white text-[94px] -tracking-[2.82px]"}>
                nuefang
            </p>
        </div>
    )
}