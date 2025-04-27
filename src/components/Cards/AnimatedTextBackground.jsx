"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger, easeInOut, easeOut } from "motion";
import Image from "next/image";

export const AnimatedTextBackground = ({
  images = ["/4.png", "/5.png", "/6.png", "/7.png"],
  words = ["Luffy", "Naruto", "Gojo", "Minato"],
}) => {
  const indexRef = useRef(0);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const bgRef = useRef(null);

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateContent = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const exitAnimations = [];

    if (textRef.current) {
      const letters = textRef.current.querySelectorAll(".letter");
      exitAnimations.push(
        animate(
          letters,
          {
            y: "120%",
            opacity: 0,
          },
          {
            duration: 0.8,
            easing: easeInOut,
            delay: stagger(0.03),
          }
        )
      );
    }

    if (imageRef.current) {
      animate(imageRef.current, { opacity: 0 }, {
        duration: 0.8,
        easing: easeInOut,
      });
    }

    if (bgRef.current) {
      exitAnimations.push(
        animate(bgRef.current, { opacity: 0 }, {
          duration: 0.8,
          easing: easeInOut,
        })
      );
    }

    Promise.all(exitAnimations.map((animation) => animation.finished)).then(() => {
      const nextIndex = (indexRef.current + 1) % words.length;
      indexRef.current = nextIndex;
      setCurrentWord(words[nextIndex]);
      setCurrentImage(images[nextIndex]);
      setIsAnimating(false);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animateContent();
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    if (!textRef.current || isAnimating) return;

    const letters = textRef.current.querySelectorAll(".letter");

    letters.forEach((letter) => {
      letter.style.transform = "translateY(120%)";
      letter.style.opacity = "0";
    });

    if (imageRef.current) imageRef.current.style.opacity = "0";
    if (bgRef.current) bgRef.current.style.opacity = "0";

    const entranceAnimations = [];

    entranceAnimations.push(
      animate(
        letters,
        {
          y: "0%",
          opacity: 1,
        },
        {
          duration: 0.8,
          easing: easeOut,
          delay: stagger(0.03),
        }
      )
    );

    if (imageRef.current) {
      entranceAnimations.push(
        animate(imageRef.current, { opacity: 0.4 }, {
          duration: 1,
          easing: easeOut,
        })
      );
    }

    if (bgRef.current) {
      entranceAnimations.push(
        animate(bgRef.current, { opacity: 0.5 }, {
          duration: 1,
          easing: easeOut,
        })
      );
    }

    return () => {
      entranceAnimations.forEach((animation) => animation.cancel());
    };
  }, [currentWord, isAnimating]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#040f12] from-20% to-[#15442c] to-100% px-8 py-24 text-white overflow-hidden z-10">
      <div
        ref={bgRef}
        className="fixed top-0 left-0 w-full h-screen opacity-0 bg-no-repeat bg-center bg-cover transition-opacity duration-1000 pointer-events-none"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto z-10 pointer-events-none">
        <Image
          width={1920}
          height={1080}
          ref={imageRef}
          src={currentImage || "/placeholder.svg"}
          alt="hero background"
          className="w-screen h-screen object-contain opacity-0 mix-blend-color pointer-events-none"
        />
      </div>

      <div className="relative z-20">
        <div className="relative flex items-center justify-center" style={{ perspective: "1000px" }}>
          <div
            ref={textRef}
            className="relative block text-7xl sm:text-8xl md:text-9xl lg:text-[15rem] font-black uppercase leading-none tracking-tight"
          >
            {currentWord.split("").map((letter, i) => (
              <span key={i} className="letter inline-block relative">
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTextBackground;
