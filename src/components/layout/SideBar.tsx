"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '../../lib/utils'
import { LayoutPanelLeft, FileText, BriefcaseBusiness, Mail, Github, Linkedin, Twitter, CircleParking, History, ExternalLink, PanelLeftOpen, PanelLeftClose,BookText  } from 'lucide-react'

const links = [
    {
        name: 'Home',
        icon: LayoutPanelLeft,
        href: '/',
    },
    {
        name: 'About',
        icon: BookText,
        href: '/about',
    },
    {
        name: 'Projects',
        icon: BriefcaseBusiness,
        href: '/projects',
    },
    {
        name: 'Articles',
        icon: FileText,
        href: '/articles',
    },
    {
        name: 'Contact',
        icon: Mail,
        href: '/contact',
    },
]

const social_links = [
    {
        name: 'Github',
        icon: Github,
        href: 'https://github.com/irvinosazee',
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/irvin-osazee/',
    },
    {
        name: 'X (Twitter) ',
        icon: Twitter,
        href: 'https://x.com/irvinosazee', 
    },
    {
        name: 'Product Hunt',
        icon: CircleParking,
        href: 'https://www.producthunt.com/@irvinosazee/',
    },
]


export default function SideBar() {
    const pathname =  usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSidebarOnMobile = () =>{
        if(window.innerWidth < 768){
            setIsSidebarOpen(false) 
        } 
    }
    useEffect(() => {
        // Setting the initial state of the sidebar on initial page load to display on screens larger than 768px and give that nav slide in effect
        setIsSidebarOpen(window.innerWidth > 768);
    }, []);
    return (
        <span>        
            <div className={cn('sticky top-0 left-0 flex flex-col h-screen max-w-[16em] px-6 py-10 bg-neutral-100 transition-all duration-300 ease-in-out text-sm md:text-base overflow-x-scroll', {'-translate-x-full' : !isSidebarOpen})}>
                <div className='flex items-center'>
                    <Image
                    src="/img/pfp.jpg"
                    alt="Irvin Osazee"
                    className='rounded-full h-auto'
                    width={38}
                    height={38}
                    />
                    <div className='flex flex-col ml-2'>
                        <p className='font-bold text-gray-950' >Irvin Osazee</p>
                        <p className='font-light text-gray-500'>Developer</p>
                    </div>
                </div>

                <nav className='mt-10'>
                    <ul className='space-y-4'>
                        {
                            links.map((link)=>{
                                const Icon = link.icon
                                return (
                                    <li key={link.name} className={cn('px-2 flex items-center flex-row space-x-2 text-gray-600 transition-all duration-300 ease-in-out hover:text-gray-900', {'bg-white rounded-md shadow-lg py-1' : pathname === link.href})}>
                                        <Icon size={14} className={cn('transition-all duration-300 ease-in-out', {'text-gray-950' : pathname === link.href})}/>
                                        <span onClick={toggleSidebarOnMobile}>
                                        <Link href={link.href} className={cn('transition-all text-sm duration-300 ease-in-out', {'text-gray-950' : pathname === link.href})}>{link.name}</Link>
                                        </span>
                                        
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <h2 className='mt-12 px-2 font-bold text-base text-gray-700' >Socials</h2>
                <nav className='mt-2'>
                    <ul className='space-y-4'>
                        {
                            social_links.map((link)=>{
                                const Icon = link.icon
                                return (
                                    <li key={link.name} className='px-2 flex items-center flex-row space-x-2 text-gray-600 hover:text-gray-950'>
                                        <Icon size={16} />
                                        <Link href={link.href} target="_blank" className='text-xs' >{link.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <div className='hidden md:flex absolute bottom-20 px-5 items-center justify-center flex-row space-x-2 text-gray-600'>
                    <span>Version 2.x</span>
                    <History size={14} className='text-gray-600'/>
                </div>
                <button className='hidden md:flex absolute bottom-10 mt-10  px-1 py-1 w-3/4 bg-gray-600 text-white font-bold rounded-md shadow-lg duration-300 ease-in-out flex-col items-center justify-center hover:bg-gray-800 transition-all'>
                    <Link href='https://irvinosazee.github.io/' target='_blank' className='w-full flex flex-row items-center justify-center space-x-2'><span>Version 1.x</span><ExternalLink size={17}/></Link>
                </button>
            </div>
            {/* Toggle Sidebar */}
            <button
                    className="fixed right-6 bottom-6 p-2 bg-neutral-100 text-gray-400 rounded-full border shadow-lg active:text-gray-800 transition-all duration-400 ease-in-out md:hidden"
                    onClick={toggleSidebar}
                    aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                    aria-expanded={isSidebarOpen}
                >
                    {isSidebarOpen ? <PanelLeftClose size={16} /> : <PanelLeftOpen size={16}/>}
                </button>
        </span>
    )
}
