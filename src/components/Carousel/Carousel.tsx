import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  noArrow?: boolean
  images: string[];
  autoSwitchInterval?: number;
  className?: string;
}

export function Carousel({noArrow=false, images, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // left = -1, right = 1

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full bg-transparent max-w-4xl mx-auto ${className}`}>
      <div className="relative max-[450px]:w-32 max-[450px]:h-20 md:h-36 md:w-64 h-24 w-44 border
       border-white/30 overflow-hidden rounded-lg bg-transparent/20">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            custom={direction}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full h-full object-contain"
          />
        </AnimatePresence>

        {images.length > 1 && !noArrow && (
          <>
            <div
              onClick={goToPrevious}
              className="absolute left-1 rounded-full cursor-pointer 
              /40 top-1/2 -translate-y-1/2 
              hover:/70 text-white p-1  transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </div>

            <div
              onClick={goToNext}
              className="absolute right-1 top-1/2 
              -translate-y-1/2 cursor-pointer /40
              hover:/70 text-white p-1  rounded-full transition-all 
              duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
