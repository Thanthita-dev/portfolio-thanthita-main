"use client"
import { IoLogoLinkedin } from "react-icons/io"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {
    const socialLinks = [
        {
            platform: "Linkedin",
            icon: <IoLogoLinkedin />,
            url: "https://www.linkedin.com/in/thanthita-kornwanwanat-b0a7a234b/"
        },
        {
            platform: "Github",
            icon: <FaGithub />,
            url: "https://github.com/Thanthita-dev"
        },
        // {
        //     platform: "Instagram",
        //     icon: <FaInstagram />,
        //     url: "https://www.instagram.com/tk.naet/"
        // },
        // {
        //     platform: "FB",
        //     icon: <FaFacebookSquare />,
        //     url: "https://www.facebook.com/thanthita.kornwanwanat/"
        // },
    ]

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 1.5 }}
                className="flex items-center justify-between py-6"
            >
                <div>
                    <h3 className="uppercase">Thanthita Portfolio</h3>
                </div>

                {/* Loop icons */}
                <div className="flex items-center justify-center gap-4 text-2xl">
                    {socialLinks.map((item, index) => (
                        <Link 
                            href={item.url} 
                            key={index} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </>
    )
}
export default Navbar
