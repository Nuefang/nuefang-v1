'use client'

import Image from "next/image";

export default function Navbar() {
    const scroll = (sectionId: string) => {
        const section = document.querySelector( sectionId );
        if (section != null) section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <nav className={"flex flex-row justify-between items-center pb-[1svh] md:pb-[32px] w-screen h-[10%]"}>
            <a href={"/"}>
                <Image src={"/nuefang.png"} key={"nuefang"} alt={"Nuefang Logo"} width={55} height={55} className={"max-w-[40px] ml-[16px] md:ml-[64px]"} />
            </a>
            <div className={"flex flex-row justify-between items-center text-center md:space-x-[32px] md:mr-[64px]"}>
                <button className={"hidden md:block navLink globalHover md:rounded-[6px] text-[16px] md:text-[20px]"} onClick={()=> {scroll('#whatWeDo')}}>What we do</button>
                <button className={"hidden md:block navLink globalHover md:rounded-[6px] text-[16px] md:text-[20px]"} onClick={()=> {scroll('#about')}}>About us</button>
                <button className={"navLink globalHover border-2 rounded-[4px] border-black text-[16px] mr-[16px] md:mr-0 md:text-[20px] w-[128px]"} onClick={()=> {scroll('#contact')}}>Contact</button>
            </div>
        </nav>
    )
}