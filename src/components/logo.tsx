import Image from "next/image";

interface LogoProps {
    src: string;
    alt: string;
}

export default function Logo(props: LogoProps) {
    return (
        <>
            <Image src={`/brands/M_${props.src}.png`} alt={props.alt} width={370} height={264}
                   className={"m-[32px] z-10 block md:hidden dropShadow"}
            />
            <Image src={`/brands/D_${props.src}.png`} alt={props.alt} width={544} height={264}
                   className={"m-[32px] z-10 hidden md:block dropShadow"}
            />
        </>
    )
}