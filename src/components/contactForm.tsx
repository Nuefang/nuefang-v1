'use client'

import {Roboto} from "next/font/google";
import SendEmail, { emailProps } from "@/components/sendEmail";
import React, {useState} from "react";

const font = Roboto({ weight: "700", subsets: ['latin'] })
const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function ContactForm() {
    const [industry, setIndustry] = useState('');
    const [budget, setBudget] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [sentEmail, setSentEmail] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        if (!sentEmail) {
            e.preventDefault();

            const formData: emailProps = {
                industry,
                budget,
                phoneNumber,
            };

            SendEmail(formData);
            setSentEmail(true);
            setIndustry('');
            setBudget('');
            setPhoneNumber('');
        }
    };

    return (
        <div className={"flex flex-col pt-[64px] pl-[16px] md:pl-[64px] lg:pl-[128px]"}>
            <form onSubmit={handleSubmit}>
                <p className={`${font.className} w-[85vw] text-[18px] text-white pb-[10px]`}>
                    What industry is your business
                </p>
                <input className={`w-[85vw] lg:w-[60vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"}
                       value={industry}
                       onChange={(e) => setIndustry(e.target.value)}
                />
                <p className={`${font.className} w-[85vw] text-[18px] text-white pt-[64px] pb-[10px]`}>
                    What is your budget?
                </p>
                <input className={`w-[85vw] lg:w-[60vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"}
                       value={budget}
                       onChange={(e) => setBudget(e.target.value)}
                />
                <p className={`${font.className} w-[85vw] text-[18px] pt-[64px] text-white`}>
                    Your phone number
                </p>
                <p className={`${subFont.className} w-[85vw] text-[18px] text-subTextInvert pb-[10px] text-opacity-80`}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    So we can get back to you - we won't use it for any other reason
                </p>
                <input className={`w-[85vw] lg:w-[60vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Input"}
                       value={phoneNumber}
                       onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button className={`${sentEmail ? "hover:bg-green-400" : "hover:bg-lightYellow"} hover:duration-300 hover:text-lightGrey hover:border-0 rounded-xl ctaWhite w-[85vw] mt-[64px] md:mt-[32px] sm:w-[150px] h-[60px]`}
                    type={sentEmail ? undefined : "submit"}
                >
                    <p className={'ctaTextWhite'}>
                        {sentEmail ? "Email sent" : "Send email"}
                    </p>
                </button>
            </form>
        </div>
    )
}