"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Project = () => {
    const PROJECTS = [
        {
            title: "Login to DashBoard",
            image: "/assets/admin1.jpg",
            des: "A login dashboard built with Tailwind CSS and HTML, designed for user authentication and project management.",
            tech: ["Tailwind CSS", "HTML"],
            demo: "https://login-to-dash-board-workshop-tailwind-5.vercel.app/"
        },
        {
            title: "Food POS Workshop",
            image: "/assets/POS.png",  
            des: "A Point of Sale (POS) system for restaurants, built with Tailwind CSS and modern web technologies.",
            tech: ["Tailwind CSS", "HTML"],
            demo: "https://food-pos-workshop-thiwind4.vercel.app/"
        },
        {
            title: "Shopee-Clone",
            image: "/assets/shopee.png",
            des: "A Shopee-inspired e-commerce website built with Tailwind CSS and HTML",
            tech: ["Tailwind CSS", "HTML"],
            demo: "http://shopee-clone-workshop-tailwind2.vercel.app/"

        }
    ];

    return (
        <div className="pb-12">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-16 text-center text-4xl font-bold tracking-tight">
                Projects
            </motion.h2>

            <div className="flex flex-col gap-12 p-0 lg:p-20">
                {PROJECTS.map((item, index) => (
                    <div
                        className="flex flex-col gap-8 lg:flex-row items-center lg:items-center lg:gap-12" 
                        key={index}
                    >
                        {/* Image Section */}
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="lg:w-1/5 w-full flex justify-center lg:justify-start"
                        >
                            <Image
                                className="shadow-lg object-contain"
                                src={item.image} 
                                alt={item.title}
                                width={400}
                                height={300}
                            />
                        </motion.div>

                        {/* Text Section */}
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="lg:w-4/5 w-full"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-stone-400 mb-4 leading-relaxed">{item.des}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tech.map((tech, techIndex) => (
                                    <span 
                                        className="inline-block bg-stone-900 text-stone-300 text-sm py-1 px-3 rounded"
                                        key={techIndex}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Demo Button */}
                            <Link href={item.demo} target="_blank" rel="noopener noreferrer">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                                    View Demo
                                </button>
                            </Link>

                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
