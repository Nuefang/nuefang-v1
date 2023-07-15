import Image from "next/image";

interface LogoProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export default function Logo(props: LogoProps) {
    return (
        <Image src={`/brands/${props.src}.png`} alt={props.alt} width={props.width} height={props.height}
               className={"p-[8px]"}
        />
    )
}