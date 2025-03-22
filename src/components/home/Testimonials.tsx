"use client";

import { motion } from "framer-motion";
import Star from "../ui/Star";
import { poppins } from "../ui/font";

type Testimonial = {
    name: string;
    message: string;
    position: string;
    stars: number;
};

const testimonials: Testimonial[] = [
    {
        name: "John Doe",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.",
        position: "CEO at Company",
        stars: 5,
    },
    {
        name: "Jane Smith",
        message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        position: "CTO at Startup",
        stars: 4,
    },
    {
        name: "Alex Johnson",
        message: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
        position: "Product Manager",
        stars: 5,
    },
    {
        name: "Emily Williams",
        message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        position: "Lead Developer",
        stars: 4,
    },
];

// Duplicate testimonials for infinite loop effect
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
    return (
        <div className="relative overflow-hidden py-6">
            <motion.div
                className="flex space-x-6 w-max"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 45,
                    ease: "linear",
                }}
            >
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl p-5 w-80 min-w-[18rem] shadow-lg transform hover:scale-105 transition duration-300 ${poppins.className}`}
                    >
                        <div className="flex items-center space-x-3">
                            <div>
                                <p className="text-md font-semibold text-gray-700">{testimonial.name}</p>
                                <p className="text-gray-500 text-xs">{testimonial.position}</p>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm italic mt-2">“{testimonial.message}”</p>

                        <div className="flex justify-end mt-2">
                            <Star numberOfPoints={testimonial.stars} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
