"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

const Hero = () => {
    const profile = "/assets/nat2.jpg"

    const MotionImage = motion(Image);
    const MotionLink = motion(Link);

    const CONTENT = `Hello! I am a passionate Front-End Developer eager to learn and grow. I am seeking an internship opportunity to enhance my skills and gain real-world experience. I have a solid foundation in React, Next.js, Tailwind CSS, and Angular and love working in a dynamic team environment!`;

    const containerVariants = {
        hidden: { opacity: 0, x:-100},
        visible: {
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.5
          } }
      };
  
      const childVariants ={ 
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0},
        transition: { duration: 0.5}
      }

    return (
        <div className="pb-4 py-6 lg:mb-36">
            <div className='flex flex-wrap lg:flex-row-reverse'>

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8 relative w-full md:w-[400px] md:mx-auto lg:w-[450px] aspect-square">
                        <MotionImage
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.5 , delay: 0.6}}
                        className="border border-stone-900 rounded-lg object-cover"
                        src={profile}
                        alt="pf"
                        fill
                        />
                    </div>
                </div>

                 {/* Text Section */}
                 <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10"
                >
                    <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl">
                        Thanthita Kornwanwanat
                    </motion.h2>
                    <motion.span 
                        variants={childVariants} 
                        className="text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent"
                    >
                        Front-End Developer
                    </motion.span>
                    
                    {/* Description */}
                    <motion.p 
                        variants={childVariants} 
                        className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter whitespace-pre-line"
                    >
                        {CONTENT}
                    </motion.p>

                    {/* Download Resume Button */}
                    <motion.div variants={childVariants}>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-full px-6 py-3 text-stone-800 font-semibold shadow-lg hover:bg-gray-200 transition"
                        >
                            Download Resume
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
