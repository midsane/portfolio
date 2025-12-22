'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type FlipStackCard = {
    id: number
    content?: React.ReactNode
}

type FlipStackProps = {
    cards?: FlipStackCard[]
    mobileDirection?: 'top' | 'bottom'
}

function FlipStack({
    cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    mobileDirection = 'top',
}: FlipStackProps) {
    const [isInView, setIsInView] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024)
        checkMobile()
        window.addEventListener('resize', checkMobile)

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true)
            },
            { threshold: 0.3 }
        )

        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            window.removeEventListener('resize', checkMobile)
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [])

    useEffect(() => {
        if (!isMobile || !isInView) return

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isMobile, isInView, cards.length])

    const getRotation = (index: number) => {
        const rotations = [-8, 5, -3, 7, -5, 4, -6, 8, -2, 3]
        return rotations[index % rotations.length]
    }

    const isActive = (index: number) => index === activeIndex

    const getCardVariants = (index: number) => {
        const totalCards = cards.length
        const centerIndex = Math.floor(totalCards / 2)
        const positionFromCenter = index - centerIndex

        if (isMobile) {
            const yInitial = mobileDirection === 'bottom' ? -100 : 100
            const yBounce = mobileDirection === 'bottom' ? [0, 80, 0] : [0, -80, 0]

            return {
                initial: {
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                    y: yInitial,
                },
                animate: {
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotation(index),
                    zIndex: isActive(index) ? 40 : totalCards + 2 - index,
                    y: isActive(index) ? yBounce : 0,
                },
            }
        }

        return {
            initial: {
                x: 0,
                y: index * 8 + 100,
                rotate: getRotation(index),
                scale: 1,
                zIndex: totalCards - index,
            },
            animate: {
                x: positionFromCenter * 140,
                y: Math.abs(positionFromCenter) * 30,
                rotate: positionFromCenter * 12,
                scale: 1,
                zIndex: totalCards - Math.abs(positionFromCenter),
            },
        }
    }

    return (
        <div className="h-full w-full pt-20 pb-56">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <div
                        ref={containerRef}
                        className="relative h-fit w-full sm:max-w-md max-w-[300px] max-[380px]:max-w-[250px] mx-auto"
                    >
                        {isMobile ? (
                            <div className="relative h-full w-full flex items-center justify-center">
                                <AnimatePresence>
                                    {cards.map((card, index) => {
                                        const variants = getCardVariants(index)
                                        return (
                                            <motion.div
                                                key={card.id}
                                                className="absolute flex justify-center inset-0 origin-bottom"
                                                initial="initial"
                                                animate={isInView ? 'animate' : 'initial'}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.9,
                                                    z: 100,
                                                    rotate: getRotation(index),
                                                }}
                                                variants={variants}
                                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                            >
                                                <div className="w-80 h-fit shadow-2xl rounded-xl bg-transparent overflow-hidden">
                                                    {card.content}
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div
                                className="relative h-full w-full flex items-center justify-center"
                                style={{ perspective: '1000px' }}
                            >
                                {cards.map((card, index) => {
                                    const variants = getCardVariants(index)
                                    return (
                                        <motion.div
                                            key={card.id}
                                            className="absolute origin-bottom"
                                            initial="initial"
                                            animate={isInView ? 'animate' : 'initial'}
                                            variants={variants}
                                            transition={{
                                                duration: 0.8,
                                                delay: index * 0.1,
                                                ease: 'easeOut',
                                            }}
                                        >
                                            <div className="w-80 h-fit shadow-2xl rounded-xl bg-transparent overflow-hidden">
                                                {card.content}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}



interface FlipStackImage {
    src: string
    alt?: string
}

interface FlipStackDemoProps {
    images: FlipStackImage[]
    header: string
    subHeader: string
    desc: string
    direction?: 'top' | 'bottom'
}

export function FlipStackShowCase({
    header,
    subHeader,
    desc,
    images,
    direction = 'top',
}: FlipStackDemoProps) {
    const cards = images.map((img, i) => ({
        id: i,
        content: (
            <img
                src={img.src}
                alt={img.alt ?? ''}
                width={320}
                height={420}
            />
        ),
    }))

    return (
        <>
            <div className="text-center mt-24 sm:mt-32 mb-20 px-4">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl flagship-text-gradient font-semibold tracking-tight">
                    {header}
                    <span className="block text-foreground">{subHeader}</span>
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-foreground/90">{desc}</p>
            </div>

            {/* Mobile */}
            <div className="w-full lg:hidden flex flex-col items-center gap-4">
                <FlipStack cards={cards} mobileDirection={direction} />
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex w-full justify-center mb-48">
                <FlipStack cards={cards} />
            </div>
        </>
    )
}