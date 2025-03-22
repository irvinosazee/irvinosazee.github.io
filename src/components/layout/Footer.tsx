import { poppins } from "../ui/font";
export default function Footer() {
    return (
        <footer className="py-3 mt-3 md:mt-8 w-full text-gray-500 flex flex-col items-center border-t border-gray-200">
            <div className={`text-center w-full text-sm font-bold ${poppins.className}`}>
                {new Date().getFullYear()} © Irvin Osazee
            </div>
        </footer>
    );
}
