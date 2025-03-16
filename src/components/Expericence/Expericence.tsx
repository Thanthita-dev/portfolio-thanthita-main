"use client"
import { motion } from "framer-motion";

const Experience = () => {
    const EXPERIENCES = [
        {
          year: "2024",
          role: "Web Development Workshop",
          company: "Kobdemy",
          description: `Gained hands-on experience with TailwindCSS, Vue + Nuxt3, and Angular, along with Full Stack web development using Node.js, Express, and Prisma ORM.`,
          tech: ["TailwindCSS", "Vue.js", "Nuxt3", "Angular", "Node.js", "Express", "Prisma ORM"],
        },
        {
          year: "2024",
          role: "TypeScript & JavaScript Frameworks Workshop",
          company: "IT Genius Academy",
          description: `Studied TypeScript and popular frameworks such as React, Vue, Angular, and Next.js to build high-performance web applications.`,
          tech: ["TypeScript", "React", "Vue", "Angular", "Next.js"],
        },
        {
          year: "2023 - Present",
          role: "Speech-to-Text Project",
          company: "University Project",
          description: `Developing a Speech-to-Text application using Machine Learning and AI to convert spoken language into text. The project is still in progress.`,
          tech: ["Python", "Machine Learning", "AI", "Speech-to-Text"],
        }
    ];

    return (
        <div className="pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl my-20">
                Experience
            </motion.h2>

            <div>
                {EXPERIENCES.map((item, index) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>

                        {/* section year */}
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">{item.year}</p>      
                        </motion.div>

                        {/* section roles */}
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-3/4 max-w-xl">
                            <h3 className="mb-2 font-semibold">
                                {item.role} - {" "}
                                <span className="text-sm text-stone-500">{item.company}</span>
                            </h3>
                            <p className="mb-4 text-stone-400">{item.description}</p>
                            {item.tech.map((tech, index) => (
                                <span 
                                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm text-stone-400 font-medium"
                                    key={index}>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
