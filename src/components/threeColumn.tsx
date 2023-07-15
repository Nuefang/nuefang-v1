import ColumnBlock from "@/components/columnBlock";

export default function ThreeColumn() {
    return (
        <div className={"flex flex-col m-0 md:flex-row pt-[64px] md:pt-[91px] items-center justify-center space-y-[32px] md:space-y-0 md:space-x-[8px] lg:space-x-[32px]"}>
            <ColumnBlock
                title={"Design"}
                sub={"We are a group of designers and developers that believe digital experiences shouldn’t be average."}
                theme={"white"}
            />
            <ColumnBlock
                title={"Build"}
                sub={"We are a group of designers and developers that believe digital experiences shouldn’t be average."}
                theme={"white"}
            />
            <ColumnBlock
                title={"Maintain"}
                sub={"We are a group of designers and developers that believe digital experiences shouldn’t be average."}
                theme={"white"}
            />
        </div>
    )
}