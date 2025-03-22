import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import { poppins } from "../components/ui/font";
import Testimonials from "@/components/home/Testimonials";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="max-w-4xl w-full mx-auto md:px-10 text-gray-600">
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* What i've been  working on section */}
      <section className="mt-5">
        <h2 className={`text-xl md:text-2xl font-semibold text-gray-600 antialiased ${poppins.className}`}>Some of my recent projects</h2>
        <div className="mt-3">
          <ul className="space-y-3">
            <Projects numOfProjects={3} />
          </ul>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="mt-5 space-y-3">
        <h2 className={`text-xl md:text-2xl font-semibold text-gray-600 antialiased ${poppins.className}`}>Testimonials</h2>
        <div className="mt-3 p-3">
          <ul className="space-x-4 flex items-center justify-center overflow-x-hidden">
            <Testimonials />
          </ul>
        </div>
      </section>

      {/* What Tech Stack on section */}
      <section className="mt-5 space-y-3">
        <h2 className={`text-xl md:text-3xl font-semibold text-gray-600 antialiased ${poppins.className}`}>Tech Stack</h2>
        <TechStack />
      </section>
    </main>
  )
}
