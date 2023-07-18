import ColumnBlock from "@/components/columnBlock";

export default function ThreeColumn() {
    return (
        <div className={"flex flex-col m-0 lg:flex-row pt-[64px] lg:pl-0 lg:mx-[128px] pl-0 md:pl-[64px] items-center md:items-start justify-center lg:px-0 lg:justify-between space-y-[32px] lg:space-y-0"}>
            <ColumnBlock
                title={"Understand"}
                sub={"We are a group of designers and developers that believe digital experiences shouldn’t be average."}
                theme={"white"}
                width={"lg:max-w-[100vw] lg:w-[26vw]"}
                icon={"Understand"}
            />
            <ColumnBlock
                title={"Create"}
                sub={"We are a group of designers and developers that believe digital experiences shouldn’t be average."}
                theme={"white"}
                width={"lg:max-w-[100vw] lg:w-[26vw]"}
                icon={"Create"}
            />
            <ColumnBlock
                title={"Maintain"}
                sub={"We are a group of designers and developers that believe digital experiences shouldn’t be average."}
                theme={"white"}
                width={"lg:max-w-[100vw] lg:w-[26vw]"}
                icon={"Maintain"}
            />
        </div>
    )
}