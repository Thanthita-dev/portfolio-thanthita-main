"use client"

import { motion } from "framer-motion"

const Skills = () => {
    const HARD_SKILLS = [
        {
            category: "Frontend Development",
            skills: [
                { name: "React", level: 85 },
                { name: "Next.js", level: 60 },
                { name: "TypeScript", level: 80 },
                { name: "JavaScript", level: 50 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 }
            ]
        },
        {
            category: "Styling & Design",
            skills: [
                { name: "Tailwind CSS", level: 90 },
                { name: "Bootstrap", level: 75 },
                { name: "Responsive Design", level: 85 }
            ]
        },
        {
            category: "Tools & Technologies",
            skills: [
                { name: "Git/GitHub", level: 80 },
                { name: "Angular", level: 70 },
                { name: "Node.js", level: 40 },
            ]
        },
        {
            category: "Mobile Development",
            skills: [
                { name: "React Native", level: 70 },
                { name: "Mobile App Design", level: 75 }
            ]
        }
    ];

    const SOFT_SKILLS = [
        {
            name: "Team Collaboration",
            description: "ทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ",
            icon: "👥"
        },
        {
            name: "Problem Solving",
            description: "แก้ไขปัญหาและหาแนวทางแก้ไขที่เหมาะสม",
            icon: "🧩"
        },
        {
            name: "Adaptability",
            description: "ปรับตัวและเรียนรู้เทคโนโลยีใหม่ได้อย่างรวดเร็ว",
            icon: "🔄"
        },
        {
            name: "Time Management",
            description: "จัดการเวลาและลำดับความสำคัญได้ดี",
            icon: "⏰"
        },
        {
            name: "Creative Thinking",
            description: "คิดสร้างสรรค์และนำเสนอแนวคิดใหม่ๆ",
            icon: "💡"
        },
        {
            name: "Attention to Detail",
            description: "ใส่ใจในรายละเอียดและความถูกต้อง",
            icon: "🎯"
        },
        {
            name: "Continuous Learning",
            description: "มีความกระตือรือร้นในการเรียนรู้สิ่งใหม่",
            icon: "📚"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const skillBarVariants = {
        hidden: { width: 0 },
        visible: (level: number) => ({
            width: `${level}%`,
            transition: { duration: 1.5, ease: "easeOut" }
        })
    };

    return (
        <div className="pb-16">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-16 text-center text-4xl font-bold tracking-tight">
                Skills & Abilities
            </motion.h2>

            <div className="max-w-7xl mx-auto px-4">
                {/* Hard Skills Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="mb-20"
                >
                    <h3 className="text-3xl font-semibold text-center mb-12 text-blue-400">
                        Hard Skills
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {HARD_SKILLS.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                variants={itemVariants}
                                className="bg-stone-900/40 border border-stone-700 rounded-xl p-6"
                            >
                                <h4 className="text-xl font-semibold mb-6 text-stone-200">
                                    {category.category}
                                </h4>
                                
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-stone-300 font-medium">
                                                    {skill.name}
                                                </span>
                                                <span className="text-stone-400 text-sm">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            
                                            <div className="w-full bg-stone-800 rounded-full h-2">
                                                <motion.div
                                                    custom={skill.level}
                                                    variants={skillBarVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Soft Skills Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <h3 className="text-3xl font-semibold text-center mb-12 text-green-400">
                        Soft Skills
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SOFT_SKILLS.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-stone-900/40 border border-stone-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-colors cursor-pointer"
                            >
                                <div className="text-4xl mb-4">
                                    {skill.icon}
                                </div>
                                
                                <h4 className="text-lg font-semibold mb-3 text-stone-200">
                                    {skill.name}
                                </h4>
                                
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills