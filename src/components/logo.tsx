import Image from "next/image";

interface LogoProps {
    src: string;
    alt: string;
}

export default function Logo(props: LogoProps) {
    return (
        <div className={"h-[128px] lg:h-[96px] flex flex-row justify-around items-center w-auto"}>
            <Image src={`/brands/M_${props.src}.png`} alt={props.alt} width={370} height={264}
                   className={"z-10 block md:hidden dropShadow"}
            />
            <Image src={`/brands/D_${props.src}.png`} alt={props.alt} height={264} width={800}
                   className={"z-10 hidden md:block dropShadow"}
            />
        </div>
    )
}