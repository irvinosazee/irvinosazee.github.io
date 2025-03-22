import AboutContext from "@/components/about/AboutContext";
import { Orbit } from "lucide-react";
import { poppins, montserrat } from "@/components/ui/font";

export default function About() {
    return (
        <main className="max-w-4xl w-full mx-auto md:px-10 text-gray-600">
            {/* About Me Section */}
            <section className="mt-8">
                <h2 className={`text-2xl md:text-3xl font-semibold antialiased ${poppins.className}`}>
                    <span className={`font-bold text-gray-700 antialiased  flex gap-3 ${montserrat.className}`}> <span>About Me</span><span className="grid place-content-center">
                        <Orbit />
                    </span></span>
                </h2>
            </section>

            <AboutContext />
        </main>
    );
}
