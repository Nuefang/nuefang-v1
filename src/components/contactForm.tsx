import {Roboto} from "next/font/google";

const font = Roboto({ weight: "700", subsets: ['latin'] })
const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function ContactForm() {
    return (
        <div className={"flex flex-col pt-[64px] pl-[16px]"}>
            <p className={`${font.className} text-[18px] text-white pb-[10px]`}>
                What industry is your business
            </p>
            <input className={`w-[95%] p-[16px] h-[50px] placeholder:${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"} />
            <p className={`${font.className} text-[18px] text-white pt-[64px] pb-[10px]`}>
                What is your budget?
            </p>
            <input className={`w-[95%] p-[16px] h-[50px] placeholder:${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"} />
            <p className={`${font.className} text-[18px] pt-[64px] text-white`}>
                Your phone number
            </p>
            <p className={`${subFont.className} text-[18px] text-subTextInvert pb-[10px]`}>
                So we can get back to you - we won't use it for any other reason
            </p>
            <input className={`w-[95%] p-[16px] h-[50px] placeholder:${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"} />
        </div>
    )
}