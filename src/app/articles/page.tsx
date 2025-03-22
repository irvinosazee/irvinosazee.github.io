import { PenLine } from "lucide-react";
import Articles from "@/components/articles/Articles";
import { poppins, montserrat } from "@/components/ui/font";


export default function Article() {
    return (
        <main className="max-w-4xl w-full mx-auto md:px-10 text-gray-600">
            {/*Article Header Section */}
            <section className="space-y-2 p-1 md:p-4">
                <h2
                    className={`text-2xl md:text-3xl text-gray-700 font-bold antialiased flex gap-3 ${montserrat.className}`}
                >
                    <span>Articles</span>
                    <span className="grid place-content-center">
                        <PenLine />
                    </span>
                </h2>
                <div>
                    I share my insights on technology, development, and the{" "}
                    <span
                        className={`bg-gray-100 p-0.5 antialiased ${poppins.className}`}
                    >
                        ideas that inspire me. ✎
                    </span>
                </div>
            </section>
            {/* Articles section */}
            <Articles/>
        </main>
    );
}
