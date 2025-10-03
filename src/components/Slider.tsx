import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { slider } from "../lib/Constant";
import type { sliderImg } from "../lib/types";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const onSelect = useCallback(
    (emblaApi: any) => {
      if (emblaApi) {
        setCurrent(emblaApi.selectedScrollSnap());
      }
    },
    [setCurrent]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className=" mt-20 w-full h-56 sm:h-[25rem] md:h-[35rem]">
      <div
        ref={emblaRef}
        className="embla__viewport overflow-hidden w-full h-full"
      >
        <div className="flex items-center embla__container h-full">
          {slider.map((img: sliderImg, index) => (
            <div
              key={img.id}
              className={`embla__slide flex-shrink-0 relative pl-2 w-[85%] transition-all duration-700 ${
                index == current ? " h-56 sm:h-[25rem] md:h-[30rem] z-9" : " h-36 sm:h-[15rem] md:h-96 opacity-55 z-0"
              }`}
            >
              <img
                key={img.id}
                src={img.img}
                className=" embla__slide w-full h-full object-cover rounded-4xl shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
