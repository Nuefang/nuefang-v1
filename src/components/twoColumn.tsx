import TwoColumnBlock from "@/components/twoColumnBlock";

export default function TwoColumn() {
    return (
        <div className={"flex flex-col space-y-[96px] md:space-y-0 md:flex-row pt-[32px] md:pt-[91px] items-center justify-around md:space-x-4 pl-[16px] md:pl-[121px] w-[96%] md:w-[92%]"}>
            <TwoColumnBlock
                title={"Karl"}
                sub={"Developer & Co-founder"}
                copy={"Expertise in all things digital, Karl has a passion for delivering high quality products that provide brilliant user experiences. Whether your project needs to catch the eye, or handle a lot of data, Karl is on board to assist."}
                src={"karl"}
            />
            <TwoColumnBlock
                title={"Jacob"}
                sub={"Designer & Co-founder"}
                copy={"From local sole traders to international corporations Jacob has vast experience designing digital solutions. He prides himself on understanding the unique needs of each client and providing them with a tangible ROI."}
                src={"jacob"}
            />
        </div>
    )
}