import Image from "next/image";

export default function Navbar() {
    return (
        <nav className={"flex flex-row justify-around md:justify-between items-center pb-[32px] md:pb-[32px] w-screen"}>
            <a href={"#home"}>
                <Image src={"/nuefang.png"} key={"nuefang"} alt={"Nuefang Logo"} width={"45"} height={"45"} className={"md:ml-[64px]"} />
            </a>
            <div className={"flex flex-row justify-between items-center text-center md:space-x-[32px] md:mr-[64px]"}>
                <a className={"navLink globalHover text-[16px] md:text-[20px]"} href={"#whatWeDo"}>What we do</a>
                <a className={"navLink globalHover text-[16px] md:text-[20px]"} href={"#about"}>About us</a>
                <a className={"navLink globalHover border-2 border-black text-[16px] md:text-[20px]"} href={"#contact"}>Contact us</a>
            </div>
        </nav>
    )
}