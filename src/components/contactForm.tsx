'use client'

import {Roboto} from "next/font/google";
import SendEmail, { emailProps } from "@/components/sendEmail";
import React, {useState} from "react";

const font = Roboto({ weight: "700", subsets: ['latin'] })
const subFont = Roboto({ weight: "300", subsets: ['latin'] })

export default function ContactForm() {
    const [userName, setUserName] = useState('');
    const [requirements, setRequirements] = useState('');
    const [business, setBusiness] = useState('');
    const [contact, setContact] = useState('');
    const [sentEmail, setSentEmail] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        if (!sentEmail) {
            e.preventDefault();

            const formData: emailProps = {
                userName,
                requirements,
                business,
                contact,
            };

            SendEmail(formData);
            setSentEmail(true);
            setRequirements('');
            setBusiness('');
            setUserName('');
            setContact('');
        }
    };

    return (
        <div className={"flex flex-col pt-[64px] pl-[16px] md:pl-[64px] lg:pl-[128px]"}>
            <form onSubmit={handleSubmit}>
                <p className={`${font.className} w-[85vw] text-[18px] text-white pb-[10px]`}>
                    What should we call you?
                </p>
                <input className={`w-[85vw] lg:w-[60vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Your name"}
                       value={userName}
                       onChange={(e) => setUserName(e.target.value)}
                       required
                />
                <p className={`${font.className} w-[85vw] text-[18px] text-white pt-[64px] pb-[10px]`}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    What's your business called?
                </p>
                <input className={`w-[85vw] lg:w-[60vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Your business"}
                       value={business}
                       onChange={(e) => setBusiness(e.target.value)}
                       required
                />
                <p className={`${font.className} w-[85vw] text-[18px] pt-[64px] text-white`}>
                    How should we get in touch?
                </p>
                <p className={`${subFont.className} w-[85vw] text-[18px] text-subTextInvert pb-[10px] text-opacity-80`}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    So we can get back to you - we won't use data for any other reason
                </p>
                <input className={`w-[85vw] lg:w-[60vw] p-[16px] h-[50px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Your email address or phone number"}
                       value={contact}
                       onChange={(e) => setContact(e.target.value)}
                       required
                />
                <p className={`${font.className} w-[85vw] text-[18px] pt-[64px] text-white`}>
                    How can we help?
                </p>
                <textarea className={`w-[85vw] lg:w-[60vw] p-[16px] h-[200px] ${subFont.className} placeholder:text-[18px] placeholder:text-subText`} placeholder={"Tell us a bit about your requirements"}
                       value={requirements}
                       onChange={(e) => setRequirements(e.target.value)}
                       required
                       rows={6}
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