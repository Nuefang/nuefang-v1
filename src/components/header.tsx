interface HeaderProps {
    color: string;
    text: string;
    topPadding?: string;
    width: string;
    center?: boolean;
}

export default function Header({color, text, topPadding="pt-[128px] md:pt-[173px]", width, center=false}: HeaderProps) {
    return (
        <p className={`${'text-' + color} text-[35px] md:text-[48px] -tracking-[1.05px] md:-tracking-[1.5px] ${center ? "text-center w-[100vw]" : "pl-[16px] md:pl-[64px] lg:pl-[128px] w-[95%] md:max-w-[778px]"} ${topPadding} ${width}`}>
            {text}
        </p>
    )
}