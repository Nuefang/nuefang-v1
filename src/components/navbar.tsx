'use client'

import Image from "next/image";

export default function Navbar() {
    const scroll = (sectionId: string) => {
        const section = document.querySelector( sectionId );
        if (section != null) section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <nav className={"flex flex-row justify-around md:justify-between items-center pb-[32px] md:pb-[32px] w-screen"}>
            <a href={"/"}>
                <Image src={"/nuefang.png"} key={"nuefang"} alt={"Nuefang Logo"} width={"55"} height={"55"} className={"max-w-[40px] md:ml-[64px]"} />
            </a>
            <div className={"flex flex-row justify-between items-center text-center md:space-x-[32px] md:mr-[64px]"}>
                <button className={"navLink globalHover text-[16px] md:text-[20px]"} onClick={()=> {scroll('#whatWeDo')}}>What we do</button>
                <button className={"navLink globalHover text-[16px] md:text-[20px]"} onClick={()=> {scroll('#about')}}>About us</button>
                <button className={"navLink globalHover border-0 md:border-2 border-black text-[16px] md:text-[20px]"} onClick={()=> {scroll('#contact')}}>Contact us</button>
            </div>
        </nav>
    )
}