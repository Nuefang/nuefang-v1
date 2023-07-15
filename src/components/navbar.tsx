import Image from "next/image";

export default function Navbar() {
    return (
        <nav className={"flex flex-row justify-around md:justify-between items-center pb-[32px] md:pb-[40px] w-screen"}>
            <Image src={"/logo.png"} alt={"Nuefang Logo"} width={"26"} height={"37"} className={"md:ml-[64px]"} />
            <div className={"flex flex-row justify-between items-center md:space-x-[32px] md:mr-[64px]"}>
                <a className={"navLink"} href={"#about"}>About</a>
                <a className={"navLink"} href={"#work"}>Work</a>
                <a className={"navLink"} href={"#contact"}>Contact</a>
            </div>
        </nav>
    )
}