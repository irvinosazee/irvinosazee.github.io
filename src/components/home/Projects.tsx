'use client'
import Image from 'next/image'
import { motion }from 'framer-motion'

type project ={
    name : string,
    description: string,
    href : string,
    slug: string,
    imgSrc : string,
    techStack : string[]
}

const projects : project[] = [
    {
        name : "Portfolio v0",
        description: "My Portfolio Website built in less than 3hrs with the help of Artificial intelligence.",
        href : "https://irvinosazee-v0.vercel.app/",
        slug: "",
        imgSrc : "/img/apw-1.png",
        techStack : ["NextJs", "Tailwindcss", "Ai"]
    },
    {
        name : "Film Finder",
        description: "A Film Search App that returns extensive information on the searched film.",
        href : "https://filmfinder-irvin.vercel.app/",
        slug: "",
        imgSrc : "/img/ff-1.png",
        techStack : ["Vite", "React", "React Router", "Tailwindcss", "OMDb API"]
    },
    {
        name : "Qr Code Generator",
        description: "Qr Code Generator for Links, E-mails, Whatsapp, Phone Numbers, SMS, Text etc.",
        href : "https://qr-code-irvin.vercel.app/",
        slug: "",
        imgSrc : "/img/qcg-1.png",
        techStack : ["Vite", "React","React Router", "Tailwindcss", "IndexedDb"]
    },
    {
        name : "Task Master",
        description: "A Superpowered task manager with offline support, where all the tasks are stored locally in the browser's IndexedDb just like in PWAs.",
        href : "https://taskmaster-irvin.vercel.app/",
        slug: "",
        imgSrc : "/img/tm-1.png",
        techStack : ["Vite", "React","Tailwindcss", "IndexedDb"]
    },
    {
        name : "Laundry UI",
        description: "Landing page for a laundry service platform very clean and engaging UI Design.",
        href : "https://laundry-ui-irvin.vercel.app/",
        slug: "",
        imgSrc : "/img/lui-1.png",
        techStack : ["Html", "Css"]
    },
    {
        name : "Primary Healthcare System",
        description: "This project is a Hospital Management System (HMS) built with PHP and MySQL to manage patient information, appointments, staff, and medications efficiently.",
        href : "https://github.com/irvinosazee/phc-system-php",
        slug: "",
        imgSrc : "/img/phc-1.png",
        techStack : ["Php", "Css", "MySql"]
    },
    {
        name : "Portfolio v1",
        description: "My First Portfolio Website.",
        href : "https://irvinosazee.github.io/",
        slug: "",
        imgSrc : "/img/fpw-1.png",
        techStack : ["Html", "Css", "Javascript", "Github"]
    },
    {
        name : "Mario Adventure Club Website",
        description: "A website for a fictional plumber named Mario Adventure Club, One of my beginner projects with a sleek design ~ Unresponsive but a really nice Ui Design, Definitely check out.",
        href : "",
        slug: "",
        imgSrc : "/img/mac-1.png",
        techStack : ["Html", "Css", "Javascript"]
    },
]

interface ProjectProp {
    numOfProjects? : number
}

export default function Project({ numOfProjects = projects.length } : ProjectProp ) {
    return (
        <>
            {
                projects.length === 0 ? <div className="mt-3"><p className="text-gray-600">Projects are coming soon...</p></div> 
                :projects.slice(0, numOfProjects).map((project, index) =>{
                    return (
                        <motion.li 
                        key={project.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                            <div>
                                <a href={project.href} className="pr-4 py-3 flex flex-col md:flex-row 
                                space-y-4 md:space-y-1.5 md:space-x-3 hover:bg-gray-50 rounded-xl">
                                    <span className='flex justify-center items-center md:flex-none md:justify-start md:items-start'>
                                        <Image
                                        src={project.imgSrc}
                                        width={180}
                                        height={180}
                                        alt="Image Of The Project"
                                        className="rounded-md shadow-xl "
                                        />
                                    </span>
                                    
                                    <div className="flex flex-col justify-between">
                                        <h2 className="font-semibold">{project.name}</h2>
                                        <p className="text-sm">{project.description}</p>
                                        <div className="flex flex-row space-x-2">
                                            {project.techStack.map(tech =>{
                                            return (
                                                <span key={tech} className="bg-gray-100 p-1 text-gray-600 rounded-sm font-light text-xs text-center flex justify-center items-center">{tech}</span>
                                            )
                                            })}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.li>
                    )
                })
            }
        </> 
    )
}
