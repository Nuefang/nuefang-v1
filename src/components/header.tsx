interface HeaderProps {
    text: string;
    color: string;
    width: string;
}

export default function Header(props: HeaderProps) {
    return (
        <p className={`${'text-' + props.color} text-[35px] md:text-[50px] -tracking-[1.05px] md:-tracking-[1.5px] pl-[16px] md:pl-[32px] lg:pl-[121px] pt-[128px] md:pt-[173px] w-[95%] md:max-w-[600px] ${props.width}`}>
            {props.text}
        </p>
    )
}