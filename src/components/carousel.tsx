import CarouselItem from "@/components/carouselItem";

export default function Carousel() {
    return (
        <div className={"flex flex-row pt-[80px] ml-[32px] md:ml-[121px] h-[440px]"}>
            <CarouselItem src={"1"} alt={"Dave's Detailing"} brand={"Dave's Detailing"} copy={"Increasing revenue for world-class detailing"} />
            {/*<CarouselItem src={"2"} alt={"John's Pressure Washing"} brand={"John's Pressure Washing"} copy={"Showcasing breathtaking artwork"} />*/}
            {/*<CarouselItem src={"3"} alt={"Charlie's Window Cleaning"} brand={"Charlie's Window Cleaning"} copy={"Increasing revenue for world-class detailing"} />*/}
            {/*<CarouselItem src={"4"} alt={"Tim's Phone Repairs"} brand={"Tim's Phone Repairs"} copy={"Increasing revenue for world-class detailing"} />*/}
        </div>
    )
}