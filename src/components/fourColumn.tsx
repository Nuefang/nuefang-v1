import ColumnBlock from "@/components/columnBlock";

export default function FourColumn() {
    return (
        <div className={"flex flex-col m-0 lg:grid lg:grid-cols-2 lg:gap-10 pt-[64px] lg:place-items-center items-center justify-center space-y-[32px] lg:space-y-0 lg:px-[128px]"}>
            <ColumnBlock
                title={"Bespoke solutions"}
                sub={"Every business is different; different goals, different challenges and different customers. We work closely with clients to define exactly what they need from their website; every website we build is a collaboration."}
                theme={"white"}
                width={"lg:max-w-[100%]"}
                icon={"Unique"}
            />
            <ColumnBlock
                title={"Small team"}
                sub={"Our team is small. You are talking directly to the people who are designing and building your website - no middle men, nothing lost in translation."}
                theme={"white"}
                width={"lg:max-w-[100%]"}
                icon={"Team"}
            />
            <ColumnBlock
                title={"Industry expertise"}
                sub={"As a team we have worked with some of the world’s most successful brands, with cutting edge design and development tools. It’s our bread and butter - we know what works."}
                theme={"white"}
                width={"lg:max-w-[100%]"}
                icon={"Expertise"}
            />
            <ColumnBlock
                title={"A partnership"}
                sub={"We view every client as an ongoing partnership; by the time we’ve designed and built your website - we understand your business better than anyone. World-class Strapi CMS means that you have complete control over your content post launch. But we’ll be there to give you a hand if you need it."}
                theme={"white"}
                width={"lg:max-w-[100%]"}
                icon={"Tech"}
            />
        </div>
    )
}