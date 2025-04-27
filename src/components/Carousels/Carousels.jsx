"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function Carousels({
    slides = [
        "https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?q=80&w=2218&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    autoPlay = true,
    interval = 2000,
    showArrows = true,
    showIndicators = true,
    className = "",
    height = "h-96",
    animationType = "fade",
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    useEffect(() => {
        let slideInterval;

        if (isPlaying) {
            slideInterval = setInterval(() => {
                nextSlide();
            }, interval);
        }

        return () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying, interval]);

    const handleMouseEnter = () => setIsPlaying(false);
    const handleMouseLeave = () => setIsPlaying(autoPlay);

    const variants = {
        fade: {
            enter: () => ({
                opacity: 0,
            }),
            center: {
                opacity: 1,
                zIndex: 1,
            },
            exit: () => ({
                opacity: 0,
                zIndex: 0,
            }),
        },
        slide: {
            enter: (direction) => ({
                x: direction > 0 ? "100%" : "-100%",
                opacity: 0,
            }),
            center: {
                x: 0,
                opacity: 1,
                zIndex: 1,
            },
            exit: (direction) => ({
                x: direction < 0 ? "100%" : "-100%",
                opacity: 0,
                zIndex: 0,
            }),
        },
        zoom: {
            enter: () => ({
                scale: 0.8,
                opacity: 0,
            }),
            center: {
                scale: 1,
                opacity: 1,
                zIndex: 1,
            },
            exit: () => ({
                scale: 1.2,
                opacity: 0,
                zIndex: 0,
            }),
        },
    };

    const selectedVariant = variants[animationType];

    if (!slides.length) return null;

    return (
        <div
            className={cn(
                `relative overflow-hidden rounded-lg ${height} ${className}`
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative w-full h-full">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={selectedVariant}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        className="absolute w-full h-full"
                    >
                        {typeof slides[currentIndex] === "string" ? (
                            <Image
                                width={1920}
                                height={1080}
                                src={slides[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            slides[currentIndex]
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {showArrows && slides.length > 1 && (
                <>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 focus:outline-none"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 focus:outline-none"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                </>
            )}

            {showIndicators && slides.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {slides.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full focus:outline-none ${index === currentIndex
                                ? "bg-white"
                                : "bg-white/50 hover:bg-white/80"
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
