"use client"
import { motion } from "framer-motion";

const Experience = () => {
    const EXPERIENCES = [
        {
          year: "2024",
          role: "Software Developer Intern",
          company: "SAMART CORPORATION PUBLIC COMPANY LIMITED",
          description: `พัฒนาโครงการ STS ในตำแหน่ง Developer โดยใช้ React, Next.js และ TypeScript รวมถึงงานประสานงานกับลูกค้า และให้บริการ Helpdesk สำหรับระบบประกันสังคม และช่วยงานโครงการ SP3`,
          tech: ["React", "Next.js", "TypeScript", "Customer Service", "Helpdesk"],
          image: "/assets/samart.jpg"
        },
        {
          year: "2023",
          role: "Administrative Assistant Intern",
          company: "มหาวิทยาลัยพระจอมเกล้าธนบุรี",
          description: `ทำงานด้านเอกสารเกี่ยวกับการเรียน สร้างสื่อการนำเสนอและโปสเตอร์ ช่วยอาจารย์ตรวจงาน ประสานงานกับคณะต่างๆ และตรวจสอบครุภัณฑ์`,
          tech: ["Document Management", "Presentation Design", "Poster Design", "Administrative Work", "Asset Management"],
          image: "/assets/King2.png"
        },
        {
          year: "2022",
          role: "Banking Services Intern",
          company: "ธนาคารกรุงไทย",
          description: `ช่วยดำเนินโครงการคนละครึ่ง ให้บริการและประสานงานกับลูกค้า ทำงานร่วมกับทีมงาน และช่วยงานด้านการตรวจสอบเช็ค`,
          tech: ["Customer Service", "Project Support", "Banking Operations", "Team Coordination", "Check Processing"],
          image: "/assets/krungthi.png"
        }
    ];

    return (
        <div className="pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl my-20">
                ประสบการณ์การฝึกงาน
            </motion.h2>

            <div>
                {EXPERIENCES.map((item, index) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>

                        {/* section logo */}
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
                            <img 
                                src={item.image} 
                                alt={item.company} 
                                className="w-40 h-40 object-contain rounded-lg"
                            />
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
                            <p className="mb-1 text-xs text-stone-500">{item.year}</p>
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