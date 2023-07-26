import Logo from "@/components/logo";

export default function LogoRow() {
    return (
        <div className="flex flex-row justify-center items-center max-w-[400px] md:max-w-[800px] md:w-[800px] lg:max-w-[1000px] lg:w-[1000px] pl-[16px] lg:pl-[128px] md:pl-[128px] md:pr-[128px] lg:pr-0 pt-[64px]">
            <div className="grid place-items-center grid-cols-2 lg:grid-cols-4 lg:gap-4">
                <Logo src={"MS"} alt={"Microsoft"} />
                <Logo src={"PLSF"} alt={"Premier League Stadium Fund"} />
                <Logo src={"Xbox"} alt={"Xbox"} />
                <Logo src={"FF"} alt={"Football Foundation"} />
                <Logo src={"MC"} alt={"Minecraft"} />
                <Logo src={"Bud"} alt={"Budweiser Brewing Group"} />
                <Logo src={"Moz"} alt={"Morrisons"} />
                <Logo src={"Hisense"} alt={"Hisense"} />
                <Logo src={"Ngas"} alt={"Northern Gas"} />
                <Logo src={"RRgent"} alt={"Related Argent"} />
                <Logo src={"TIQ"} alt={"The Island Quarter"} />
            </div>
        </div>
    )
}