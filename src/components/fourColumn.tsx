import ColumnBlock from "@/components/columnBlock";

export default function FourColumn() {
    return (
        <div className={"flex flex-col m-0 lg:grid lg:grid-cols-2 lg:gap-10 pt-[64px] lg:place-items-center items-center justify-center space-y-[32px] lg:space-y-0 lg:px-[128px]"}>
            <ColumnBlock
                title={"Bespoke"}
                sub={"Your business is unique; off the shelf solutions just don’t cut it. Through discussion and collaboration we understand exactly what you need from your website."}
                theme={"white"}
                width={"lg:max-w-[100%]"}
                icon={"Unique"}
            />
            <ColumnBlock
                title={"Lean"}
                sub={"We are are a small team by design. You are talking directly to the people who are designing and building your website - no middle men and nothing lost in translation."}
                theme={"white"}
                width={"lg:max-w-[100%]"}
                icon={"Team"}
            />
            <ColumnBlock
                title={"Cutting-Edge Tech"}
                sub={"High-performing websites require high-performing tools. We use state-of-the-art software to design, develop and deliver. No compromises."}
                theme={"white"}
                width={"lg:max-w-[100%]"}
                icon={"Tech"}
            />
            <ColumnBlock
                title={"Expertise"}
                sub={"Digital is our bread and butter. We not only provide proven industry experience, but absolute passion for what we do. We know what works."}
                theme={"white"}
                width={"lg:max-w-[100%]"}
                icon={"Expertise"}
            />
        </div>
    )
}