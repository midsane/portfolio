import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


interface CarouselProps {
  images: string[]
  autoSwitchInterval?: number // in milliseconds
  className?: string
}

export  function Carousel({ images, autoSwitchInterval = 3000, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-switch functionality
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, autoSwitchInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSwitchInterval])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }


  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    )
  }

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      {/* Main image container */}
      <div className="relative  sm:h-36 sm:w-64 h-24 w-44  border border-white  overflow-hidden rounded-lg bg-transparent/20">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Slide ${currentIndex + 1}`}
          className="object-contain transition-opacity duration-500"
         
        />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <div
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 rounded-full cursor-pointer 
              bg-black/80 top-1/2 -translate-y-1/2 
               hover:bg-black/70 text-white sm:p-2 p-1  transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="sm:w-5 sm:h-5 w-3 h-3 " />
            </div>

            <div
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 
              -translate-y-1/2 bg cursor-pointer bg-black/80
               hover:bg-black/70 text-white p-1 sm:p-2 rounded-full transition-all 
               duration-200 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="sm:w-5 sm:h-5 w-3 h-3 "/>
            </div>
           
          </>
        )}

        {/* Image counter */}
  
      </div>

   
    </div>
  )
}
