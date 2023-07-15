import {Roboto} from "next/font/google";

const font = Roboto({ weight: "700", subsets: ['latin'] })
const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function ContactForm() {
    return (
        <div className={"flex flex-col pt-[64px] pl-[16px] md:pl-[64px]"}>
            <p className={`${font.className} text-[18px] text-white pb-[10px]`}>
                What industry is your business
            </p>
            <input className={`w-[85vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"} />
            <p className={`${font.className} text-[18px] text-white pt-[64px] pb-[10px]`}>
                What is your budget?
            </p>
            <input className={`w-[85vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"} />
            <p className={`${font.className} text-[18px] pt-[64px] text-white`}>
                Your phone number
            </p>
            <p className={`${subFont.className} text-[18px] text-subTextInvert pb-[10px] text-opacity-80`}>
                So we can get back to you - we won't use it for any other reason
            </p>
            <input className={`w-[85vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"} />
            <a className={'ctaWhite w-[85vw] mt-[64px] md:mt-[32px] md:w-[150px] h-[60px]'}>
                <p className={'ctaTextWhite'}>
                    Submit form
                </p>
            </a>
        </div>
    )
}