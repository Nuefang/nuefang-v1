import TwoColumnBlock from "@/components/twoColumnBlock";

export default function TwoColumn() {
    return (
        <div className={"flex flex-col m-0 lg:flex-row pt-[64px] lg:pl-0 lg:mx-[128px] pl-0 md:pl-[64px] items-center md:items-start justify-center lg:space-x-[128px] space-x-0 lg:px-0 lg:justify-center space-y-[32px] lg:space-y-0"}>
            <TwoColumnBlock
                title={"Karl"}
                sub={"Developer & Co-founder"}
                copy={"Expertise in all things digital, Karl has a passion for delivering high quality products that provide brilliant user experiences. Whether your project needs to catch the eye, or handle a lot of data, Karl is on board to assist."}
                src={"karl"}
            />
            <div className={"md:pb-[64px] lg:pb-0"}></div>
            <TwoColumnBlock
                title={"Jacob"}
                sub={"Designer & Co-founder"}
                copy={"From local sole traders to international corporations Jacob has vast experience designing digital solutions. He prides himself on understanding the unique needs of each client and providing them with a tangible ROI."}
                src={"jacob"}
            />
        </div>
    )
}