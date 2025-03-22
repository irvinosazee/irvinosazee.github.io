"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { montserrat, poppins } from "../ui/font";
import { cn } from "@/lib/utils";
import { Shrub } from "lucide-react";

export default function HeroSection() {
    return (
        <>
            <section className="space-y-2">
                <h2 className={`text-2xl md:text-3xl font-semibold antialiased flex ${poppins.className}`}><span className={`font-bold text-gray-700 antialiased flex gap-1 ${montserrat.className}`}><span>Hello! I&apos;m Irvin</span> <span className="grid place-content-center">
                    <Shrub />
                </span></span></h2>
                <h3 className={`text-xl md:text-2xl text-gray-600 ${poppins.className}`}>A Software Engineer</h3>
            </section>
            <section className={`mt-3 max-w-3xl space-y-3 text-gray-600 text-base antialiased ${montserrat.className}`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p><span className={`bg-gray-100 p-0.5 text-gray-700 antialiased ${poppins.className}`}>A Full-stack Developer</span> with a passion for building products that automate real-world solutions. In this modern era, I believe a software engineer&apos;s role goes beyond just providing solutions it&apos;s about automating those solutions to deliver maximum efficiency and impact.</p>

                    <p>With <span className={`bg-gray-100 p-0.5 text-gray-700 antialiased ${poppins.className}`}>3<sup>+</sup> years of experience</span>, I&apos;ve built scalable web applications, APIs, and mobile applications that are performance-optimized and visually appealing, always with a user-centered design approach. I specialize in creating seamless digital experiences with clean, intuitive UI/UX designs crafted by myself.</p>

                    <p>As a tech enthusiast, I continuously explore emerging technologies, expanding my skill set.</p>

                    <p>I&apos;m currently available for freelance work and open to new opportunities.</p>

                </motion.div>
                <Link href='/resume' className="flex w-full justify-end -ml-4 md:ml-0 ">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        aria-label="Get in Touch"
                        className={cn(
                            "bg-gradient-to-r from-slate-800 to-gray-700 text-white rounded-xl px-6 py-3 font-semibold tracking-wide relative overflow-hidden",
                            "hover:from-slate-900 hover:to-black",
                            "before:absolute before:inset-0 before:bg-white/10 before:scale-0 hover:before:scale-150 before:rounded-full before:transition-transform before:duration-500 before:ease-out",
                            "shadow-md hover:shadow-lg active:shadow-sm transition-all duration-300"
                        )}
                    >
                        View Resume
                    </motion.button>
                </Link>
            </section>
        </>
    )
}

