import ColumnBlock from "@/components/columnBlock";

export default function ThreeColumn() {
    return (
        <div className={"flex flex-col m-0 lg:flex-row pt-[64px] pl-0 md:pl-[64px] items-center md:items-start justify-center space-y-[32px] lg:space-y-0 lg:space-x-[32px]"}>
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