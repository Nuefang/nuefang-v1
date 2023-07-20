import ColumnBlock from "@/components/columnBlock";

export default function ThreeColumn() {
    return (
        <div className={"flex flex-col m-0 lg:flex-row pt-[64px] lg:pl-0 lg:mx-[128px] pl-0 md:pl-[64px] items-center md:items-start justify-center lg:px-0 lg:justify-between space-y-[32px] lg:space-y-0"}>
            <ColumnBlock
                title={"Collaborate"}
                sub={"We view each project as a partnership; we'll discuss your individual business needs to understand your vision."}
                theme={"white"}
                width={"lg:max-w-[100vw] lg:w-[26vw]"}
                icon={"Collaborate"}
            />
            <ColumnBlock
                title={"Build"}
                sub={"Using best in class technology and research based design we’ll create an inspiring, responsive website that aligns with your goals."}
                theme={"white"}
                width={"lg:max-w-[100vw] lg:w-[26vw]"}
                icon={"Build"}
            />
            <ColumnBlock
                title={"Grow"}
                sub={"With unmatched user experience and lightning fast performance; your website will convert. "}
                theme={"white"}
                width={"lg:max-w-[100vw] lg:w-[26vw]"}
                icon={"Grow"}
            />
        </div>
    )
}