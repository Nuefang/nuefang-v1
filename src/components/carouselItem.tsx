import Image from "next/image";
import {Roboto} from "next/font/google";

const subFont = Roboto({ weight: "400", subsets: ['latin'] })

interface CarouselItemProps {
    src: string;
    alt: string;
    brand: string;
    copy: string;
}
export default function CarouselItem(props: CarouselItemProps) {
    return (
        <div className={`flex flex-col shrink-0 h-[75vw] w-[75vw] max-w-[340px] max-h-[340px] min-w-[250px] min-h-[250px] p-[32px] lg:w-[33vw] lg:h-[33vw] lg:max-w-[500px] lg:max-h-[500px]`}
             style={{backgroundImage: `url("/carousel/${props.src}.png")`}}
        >
            <p className={`${subFont.className} text-white text-[16px] -tracking-[0.48px] mt-[55%]`}>{props.brand}</p>
            <p className={`leading-7 text-white text-[20px] md:text-[30px] -tracking-[0.9px]`}>{props.copy}</p>
        </div>
    )
}