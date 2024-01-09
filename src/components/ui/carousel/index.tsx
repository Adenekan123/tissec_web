import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "./carousel.css";
import { ReactNode, useCallback } from "react";

export const Carousel = ({ children }: { children: ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">{children}</div>
      <div className="carousel-nav flex justify-between absolute w-full left-0 top-1/4 px-8">
        <button className="embla__prev bg-white/50 p-2 rounded-sm font-bold" onClick={scrollPrev}>
          Prv
        </button>
        <button className="embla__next bg-white/50 p-2 rounded-sm font-bold" onClick={scrollNext}>
          Nxt
        </button>
      </div>
    </div>
  );
};
