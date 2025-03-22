'use client'
import Image from 'next/image'
import { poppins } from "@/components/ui/font";
import { motion } from 'framer-motion'
export default function AboutContext() {
    return (
        <>
            {/* Building with Purpose */}
            <section className="space-y-3 mt-6">
                <h3 className={`font-bold text-xl md:text-2xl text-gray-600 ${poppins.className}`}>Building with Purpose, Designing with Precision</h3>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    I&apos;m a Full-stack Web, Mobile Developer and software architect dedicated to crafting high-performance, scalable, and visually engaging digital experiences. My work spans blockchain, span, AI-driven automation, interactive UI/UX, real-time systems, and software optimizations—always grounded in efficiency, security, and innovation. I believe in ethical software development—code should be performant, maintainable, and accessible. My approach integrates clean architecture, security best practices, and user-focused design, ensuring that every solution I build is not just functional but also intuitive and future-proof.
                </motion.p>
            </section>

            {/* My Work Ethics */}
            <section className="space-y-4 mt-6">
                <h3 className={`font-bold text-xl md:text-2xl text-gray-600 ${poppins.className}`}>My Work Ethics</h3>
                <motion.div
                    className="space-y-3 flex flex-col md:grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <article className='hidden md:grid md:place-content-center'>
                        <object>
                            <Image
                                src="/svg/efficiency-in-dev.svg"
                                alt="Efficiency in Development Svg"
                                width={300}
                                height={300}
                            />
                        </object>
                    </article>
                    <article className="space-y-2">
                        <h4 className={`text-lg md:text-xl text-gray-600 ${poppins.className}`}>Efficiency in Development</h4>
                        <p>
                            From Dockerized environments to WebSockets for real-time updates, I focus on writing clean, reusable, and modular code. I prioritize developer-friendly workflows with automated CI/CD pipelines, well-documented APIs, and seamless frontend/backend integrations.
                        </p>
                    </article>
                    <article className="space-y-2">
                        <h4 className={`text-lg md:text-xl text-gray-600 ${poppins.className}`}>Problem-Solving First</h4>
                        <p>
                            At my core, I’m a problem solver. Whether it’s optimizing a blockchain-based payroll system, refining API interactions, or designing a seamless Web3 experience, I focus on creating solutions that scale. I believe that every challenge is an opportunity to innovate, and I approach each project with a fresh perspective, ready to tackle complex problems head-on.
                        </p>
                    </article>
                    <article className='hidden md:grid md:place-content-center'>
                        <object>
                            <Image
                                src={'/svg/work-ethic.svg'}
                                alt='work ethic svg'
                                width={300}
                                height={300} />
                        </object>
                    </article>
                    <article className='hidden md:grid md:place-content-center'>
                        <object>
                            <Image
                                src="/svg/security-privacy.svg"
                                alt="Security Privacy Svg"
                                width={300}
                                height={300}
                            />
                        </object>

                    </article>
                    <article className="space-y-2">
                        <h4 className={`text-lg md:text-xl text-gray-600 ${poppins.className}`}>Security & Privacy as a Standard</h4>
                        <p>
                            Security isn’t an afterthought—it’s integrated from day one. I adhere to secure coding principles, encryption best practices, and GDPR compliance, ensuring that user data remains protected while systems run efficiently. I believe that privacy is a fundamental right, and I design every solution with that in mind.
                        </p>
                    </article>
                </motion.div>
            </section>
            {/* Beyond Code: The Tools & Workflow */}
            <section className="space-y-4 mt-6">
                <h3 className={`font-bold text-xl md:text-2xl text-gray-600 ${poppins.className}`}>Beyond Code: The Tools & Workflow</h3>
                <motion.div className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}>
                    <h4 className={`text-lg md:text-xl text-gray-600 ${poppins.className}`}>Daily Workflow & Setup</h4>
                    <p>
                        I operate in a highly iterative development cycle, balancing Agile methodologies with pragmatic problem-solving. My workspace is optimized for rapid development:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Primary Stack: React (Next.js, Remix), Tailwind, TypeScript, Django, Flask, PostgreSQL, MongoDB</li>
                        <li>DevOps & Infra: Docker, GitHub Actions, Firebase, Supabase, IndexedDB</li>
                        <li>Design & Prototyping: Figma, Framer Motion, GSAP for animations</li>
                        <li>Automation & AI: Custom AI integrations, WebAssembly, LLM APIs</li>
                    </ul>
                    <p>
                        I believe in test-driven development (TDD) and ensuring my work meets the highest standards before deployment. My workflow is designed for efficiency, with a focus on rapid prototyping, continuous integration, and seamless deployment.
                    </p>
                </motion.div>
            </section>

            {/* More Than Just Code */}
            <section className="space-y-4 mt-6">
                <h3 className={`font-bold text-xl md:text-2xl text-gray-600 ${poppins.className}`}>More Than Just Code</h3>
                <motion.div className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}>
                    <h4 className={`text-lg md:text-xl text-gray-600 ${poppins.className}`}>Interdisciplinary Skills</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Project Management: Experience in leading end-to-end software development with clear timelines and great collaboration and leadership skills.</li>
                        <li>UI/UX Design: Experience in creating intuitive, user-centered designs with Figma, Adobe XD, and Sketch.</li>
                        <li>Self-Improvement: Always improving both technical and social skills.</li>
                    </ul>
                </motion.div>
            </section>

            {/* Skill Evolution & Roadmap */}
            <section className="space-y-4 mt-6">
                <h3 className={`font-bold text-xl md:text-2xl text-gray-600 ${poppins.className}`}>Skill Evolution & Roadmap</h3>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Technology is always evolving, and so am I. My journey started with foundational full-stack development, expanded into simple Basic Mobile applications with flutter, and is now growing into AI-driven applications, blockchain integrations, and real-time WebSockets integrations.
                </motion.p>
                <p>
                    I’m always looking ahead—exploring decentralized infrastructure, AI-powered automation, and next-gen front-end frameworks to stay ahead of the curve.
                </p>
            </section>
        </>
    )
}
