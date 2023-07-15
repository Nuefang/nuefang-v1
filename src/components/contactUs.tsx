import {Roboto} from "next/font/google";

const subFont = Roboto({ weight: "300", subsets: ['latin'] })
export default function ContactUs() {
    return (
        <div className={"flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-10 justify-start mt-[64px] ml-[16px] md:mt-[128px] md:ml-[64px] lg:space-x-[6vw]"}>
            <div className={"place-items-center"}>
                <p className={`${subFont.className} text-lightYellow text-[18px]`}>Email us</p>
                <p className={"text-white text-[30px] -tracking-[0.9px]"}>Hello@nuefang.com</p>
            </div>
            <div className={""}>
                <p className={`${subFont.className} text-lightYellow text-[18px] pt-[64px] md:pt-0`}>Call us</p>
                <p className={"text-white text-[30px] -tracking-[0.9px]"}>07941446953</p>
            </div>
            <div className={""}>
                <p className={`${subFont.className} text-lightYellow text-[18px] pt-[64px] md:pt-0`}>Follow us</p>
                <p className={"text-white text-[30px] -tracking-[0.9px]"}>@nuefang</p>
            </div>
        </div>
    )
}