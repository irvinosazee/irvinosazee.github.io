'use client'
import { motion } from "framer-motion";
import { poppins, playfair } from "@/components/ui/font"
import Link from "next/link";
// import Image from "next/image";

type article = {
    platform: string;
    link: string;
    mins: number;
    dateTime: string;
    header: string;
    description: string;
    tags: string[];
};

const articles: article[] = [
    {
        platform: "Medium",
        link: "https://medium.com/@uyiosazeeirvin/setting-up-a-next-js-project-professionally-best-practices-open-source-standards-2f764d584948",
        dateTime: "Mar 19, 2025",
        mins: 3,
        header: "Setting Up a Next.js Project Professionally",
        description:
            "Best Practices & Open Source Standards for Setting Up a Next.js Scalable Project.",
        tags: ["NextJs", "Software Development", "SEO"],
    },
    {
        platform: "Medium",
        link: "https://medium.com/@uyiosazeeirvin/from-coder-to-creator-my-journey-to-redefine-trivia-and-saas-innovation-0c74224f41c6",
        dateTime: "Jan 11, 2025",
        mins: 3,
        header: " From Developer Dreams to SaaS Visions",
        description:
            "From Developer Dreams to SaaS Visions: My Journey, Goals, and the Future of Trivia Experiences",
        tags: ["Life", "Leadership", "Productivity"],
    },
    {
        platform: "Medium",
        link: "https://medium.com/@uyiosazeeirvin/the-founders-dilemma-why-understanding-your-craft-is-key-to-building-great-products-46c96e8efcc1",
        dateTime: "Jan 12, 2025",
        mins: 2,
        header: "The Founder’s Dilemma",
        description:
            "The Founder’s Dilemma: Why Understanding Your Craft is Key to Building Great Products",
        tags: ["Founders", "StartUps", "Marketing"],
    },
    {
        platform: "Medium",
        link: "https://medium.com/@uyiosazeeirvin/title-finding-strength-in-silence-and-power-in-speaking-up-overcoming-shyness-and-low-self-esteem-fb71ac2cfa10",
        dateTime: "Jan 11, 2025",
        mins: 3,
        header: "Overcoming Shyness and Low Self-Esteem",
        description:
            "Finding Strength in Silence and Power in Speaking Up: Overcoming Shyness and Low Self-Esteem",
        tags: ["Mindset", "Communication", "Social Skills"],
    },
];

export default function Articles() {
    return (
        <section>
            <div className="grid grid-cols-1 gap-4 mt-5 md:mt-16">
                {articles.length === 0 ? (
                    <div className="mt-3 p-4">
                        <p className="text-gray-600">Articles are coming soon...</p>
                    </div>
                ) : (
                    articles.map((article, index) => {
                        return (
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={index}>
                                <Link
                                    href={article.link}
                                    target="_blank"
                                    className="md:hover:bg-gray-100 p-4 rounded-lg md:grid grid-cols-3"
                                >
                                    {/* <Image
                                        className="rounded-md shadow-xl"
                                        width={180}
                                        height={180}
                                        src={article.platform}
                                        style={{ objectFit: "contain" }}
                                        alt={`image of ${article.header}`}
                                    /> */}
                                    <div className="hidden md:grid w-52 p-2 bg-black rounded-md col-span-1  place-content-center border">
                                        <p className={`font-bold text-white text-4xl ${playfair.className}`}>{article.platform}</p>
                                    </div>
                                    <div className={`flex flex-col col-span-2 gap-2 ${poppins.className}`}>
                                        <h2 className="font-semibold text-base">
                                            {article.header}
                                        </h2>
                                        <p className="font-light text-sm">{article.description}</p>
                                        <p className="font-thin text-xs">
                                            {article.mins} mins ● {article.dateTime}
                                        </p>
                                        <ul className="flex flex-row gap-4">
                                            {article.tags.map((tag, tagIndex) => (
                                                <li
                                                    key={tagIndex}
                                                    className="border p-1 rounded-md text-xs font-thin"
                                                >
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Link>
                            </motion.span>
                        );
                    })
                )}
            </div>
        </section>
    )
}
