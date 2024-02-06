import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "./carousel.css";
import { ReactNode, useCallback } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

export const Carousel = ({ children }: { children: ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla h-full relative" ref={emblaRef}>
      <div className="embla__container h-full relative z-10">{children}</div>
      <div className="carousel-nav flex justify-between absolute z-10 w-full left-0 top-2/4 md:top-1/4 lg:px-8">
        <button
          className="embla__prev bg-white/50 p-2 rounded-sm font-bold hidden md:inline-block"
          onClick={scrollPrev}
        >
          <CgChevronLeft size={24} />
        </button>
        <button
          className="embla__next bg-white/50 p-2 rounded-sm font-bold ml-auto"
          onClick={scrollNext}
        >
          <CgChevronRight size={24} />
        </button>
      </div>
      <div className="absolute top-0 right-0">
        <img src="/images/home-bg-n.jpg" alt="" className="h-full" />
      </div>
    </div>
  );
};
