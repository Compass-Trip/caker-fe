import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";

const AdCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <Carousel opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-5/6">
            <Card
              className={cn(
                "bg-[#AEA9B1] text-primary-foreground transition-all duration-500 h-[175px] relative border-none"
              )}
            >
              <div className="font-thin absolute bottom-3 right-4 text-white rounded-3xl bg-[#48464C] w-11 text-center">
                {index + 1} / 6
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AdCarousel;
