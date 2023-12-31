import TwoColumnBlock from "@/components/twoColumnBlock";

export default function TwoColumn() {
    return (
        <div className={"flex flex-col m-0 lg:flex-row pt-[64px] lg:pl-0 lg:mx-[128px] pl-0 md:pl-[64px] items-center md:items-start justify-center lg:space-x-[128px] space-x-0 lg:px-0 lg:justify-center space-y-[32px] lg:space-y-0"}>
            <TwoColumnBlock
                title={"Jacob"}
                sub={"Designer & Co-founder"}
                copy={"From local sole traders to international corporations, Jacob has vast experience designing digital solutions. He prides himself on understanding the unique needs of each client and providing them with a tangible ROI. "}
                src={"jacob"}
            />
            <div className={"md:pb-[64px] lg:pb-0"}></div>
            <TwoColumnBlock
                title={"Karl"}
                sub={"Developer & Co-founder"}
                copy={"Karl’s full stack experience expands over multiple disciplines - from quick back end infrastructure to clinical front end developments. Karl has the skill-set to deliver world-class code."}
                src={"karl"}
            />
        </div>
    )
}