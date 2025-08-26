"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Stack = () => {
  type StackIconType = {
    stack: string;
    image: string;
    alt: string;
    className: string;
    variants: Variants;
  };

  const iconVariants = (duration: number): Variants => ({
   initial: { y: -10},
   animate: {
      y: [10,-10],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "reverse" as const,
      }
    }
  })

  const StackIcon: StackIconType[] = [
    {
      stack: "babigon",
      image: "/assets/babigon.png",
      alt: "Babigon",
      className: "w-16 h-16 md:w-20 md:h-20 object-contain",
      variants: iconVariants(2),
    },
    {
      stack: "makro",
      image: "/assets/Makro.png",
      alt: "Makro",
      className: "w-16 h-16 md:w-20 md:h-20 object-contain",
      variants: iconVariants(2.5),
    },
    {
      stack: "mkk",
      image: "/assets/MKK.png",
      alt: "MKK",
      className: "w-16 h-16 md:w-20 md:h-20 object-contain",
      variants: iconVariants(3),
    },
    {
      stack: "prem",
      image: "/assets/prem.png",
      alt: "Prem",
      className: "w-16 h-16 md:w-20 md:h-20 object-contain",
      variants: iconVariants(3.5),
    },
    {
      stack: "teenoi",
      image: "/assets/teenoi.png",
      alt: "Teenoi",
      className: "w-16 h-16 md:w-20 md:h-20 object-contain",
      variants: iconVariants(4),
    },
  ];

  return (
    <>
      <div className="pb-24">
        {/* <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
          className="text-center text-4xl my-16"
        >
          Stack
        </motion.h2> */}

        <div className="flex flex-wrap justify-center items-center gap-6">
          {StackIcon.map((item, index) => (
            <motion.div 
              variants={item.variants}
              initial="initial"
              animate="animate"
              className="flex items-center gap-1" 
              key={index}
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image 
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stack;