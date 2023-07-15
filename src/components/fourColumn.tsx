import ColumnBlock from "@/components/columnBlock";

export default function FourColumn() {
    return (
        <div className={"flex flex-col m-0 md:flex-row pt-[64px] md:pt-[91px] items-center justify-center space-y-[32px] md:space-y-0 md:space-x-[8px] lg:space-x-[32px]"}>
            <ColumnBlock
                title={"Bespoke solutions"}
                sub={"Every business is different. Different goals, different challenges and different customers. We work closely with clients to define exactly what they need from their website; every website we build is a collaboration."}
                theme={"black"}
            />
            <ColumnBlock
                title={"Small team"}
                sub={"Our team is small. You are talking directly to the people who are designing and building your website - no middle men and nothing lost in translation. "}
                theme={"black"}
            />
            <ColumnBlock
                title={"Industry expertise"}
                sub={"As a team we have worked with some of the worlds most successful brands, with cutting edge design and development tools. It’s our bread and butter, we know what works."}
                theme={"black"}
            />
            <ColumnBlock
                title={"A partnership"}
                sub={"We view every client as an ongoing partnership, by the time we’ve designed and built your website - we understand your business better than anyone. World-class Strapi CMS means that you have complete control over your websites content post launch. But we’ll be there to give you a hand if you need it."}
                theme={"black"}
            />
        </div>
    )
}