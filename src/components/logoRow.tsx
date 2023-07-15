import Logo from "@/components/logo";

export default function LogoRow() {
    return (
        <div className="grid w-[95%] lg:max-w-[1060px] pl-[16px] md:pr-[128px] pt-[64px]">
            <div className="grid place-items-center grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
                <Logo src={"microsoft"} alt={"Microsoft"} width={189} height={40} />
                <Logo src={"hisense"} alt={"Hisense"} width={160} height={33} />
                <Logo src={"xbox"} alt={"Xbox"} width={139} height={42} />
                <Logo src={"related_argent"} alt={"Related Argent"} width={179} height={33} />
                <Logo src={"minecraft"} alt={"Minecraft"} width={153} height={31} />
                <Logo src={"flutter"} alt={"Flutter"} width={138} height={34} />
                <Logo src={"plsf"} alt={"Premier League Stadium Fund"} width={148} height={68} />
                <Logo src={"morrisons"} alt={"Morrisons"} width={123} height={70} />
                <Logo src={"minecraft"} alt={"Minecraft"} width={153} height={31} />
                <Logo src={"flutter"} alt={"Flutter"} width={138} height={34} />
            </div>
        </div>
    )
}