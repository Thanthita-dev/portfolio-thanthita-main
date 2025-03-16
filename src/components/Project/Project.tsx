"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Project = () => {
    const PROJECTS = [
        {
            title: "E-Commerce Website",
            image: "/assets/mongodb.svg",
            des: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
            tech: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
            demo: "https://your-ecommerce-demo.com"
        },
        {
            title: "Task Management App",
            image: "/assets/angular.svg",
            des: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
            tech: ["HTML", "CSS", "Angular", "Firebase"],
            demo: "https://your-taskapp-demo.com"
        },
        {
            title: "Portfolio Website",
            image: "/assets/svelte.svg",
            des: "A personal portfolio website showcasing projects, skills, and contact information.",
            tech: ["HTML", "CSS", "Svelte", "Tailwind"],
            demo: "https://your-portfolio-demo.com"
        },
        {
            title: "Blogging Platform",
            image: "/assets/nestjs.svg",
            des: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
            tech: ["HTML", "CSS", "Nest.js", "Express", "MySQL"],
            demo: "https://your-blogging-demo.com"
        },
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
                                width={190}
                                height={190}
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
