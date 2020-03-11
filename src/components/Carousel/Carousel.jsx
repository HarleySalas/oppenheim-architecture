import React, { useState, useEffect, useCallback } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import { useInterval } from "../utils";
import "./carousel.scss";

import {
  CarouselKey,
  PrevButton,
  NextButton,
} from "./CarouselKey/CarouselButtons";

const Carousel = ({
  autoplay,
  delayLength,
  paused,
  children,
  keys,
  arrows,
}) => {
  const [embla, setEmbla] = useState(null);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [delay, setDelay] = useState(delayLength);
  const [isRunning, setIsRunning] = useState(autoplay);

  const scrollTo = useCallback(index => embla.scrollTo(index), [embla]);
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

  useInterval(
    () => {
      if (selectedIndex === scrollSnaps.length - 1) {
        scrollTo(0);
      } else {
        scrollNext();
      }
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    if (paused) {
      setIsRunning(false);
    } else {
      setIsRunning(autoplay);
    }
  }, [paused]);

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    };

    const onDragStart = () => {
      setIsRunning(false);
    };

    const onDragEnd = () => {
      setIsRunning(autoplay);
    };

    if (embla) {
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
      onSelect();
      embla.on("dragStart", onDragStart);
      embla.on("dragEnd", onDragEnd);
    }
    return () => embla && embla.destroy();
  }, [embla]);

  const handleDelayChange = e => {
    setDelay(Number(e.target.value));
  };

  return (
    <div>
      <div className="carousel">
        <EmblaCarouselReact
          className="carousel__viewport"
          emblaRef={setEmbla}
          options={{ loop: true }}
          htmlTagName="div"
        >
          <div className="carousel__container">
            {children.map((Child, index) => (
              <div className="carousel__slide" key={index}>
                <div className="carousel__slide__inner">{Child}</div>
              </div>
            ))}
          </div>
        </EmblaCarouselReact>
        {keys && (
          <div className="carousel__keys">
            {scrollSnaps.map((snap, index) => (
              <CarouselKey
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
                key={index}
              />
            ))}
          </div>
        )}
        {arrows && (
          <>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
