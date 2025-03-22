import { Rocket } from "lucide-react";

export default function Projects(){
    return (
        <main className="w-full md:px-10 text-gray-600">
            {/* Projects Header section  */}
            <section>
                <h2
                    className={`text-2xl md:text-3xl text-gray-700 font-bold antialiased flex gap-3 `}
                >
                    <span>Projects</span>
                    <span className="grid place-content-center">
                        <Rocket/>
                    </span>
                </h2>
            </section>
            {/* Projects list section */}
            <div className="">
                    
            </div>
            <section></section>
        </main>
    )
}