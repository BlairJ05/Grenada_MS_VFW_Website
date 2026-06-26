import Flag from "../../assets/americanFlag.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#0B1E4A]" style={{ minHeight: "520px" }}>
            <div className="absolute top-15 left-80 z-10 gap-2 leading-loose">
                <div className="flex items-center gap-2 mb-8">
                    <div className="h-px w-8 bg-[#D4871A]" />
                    <span className="text-[#D4871A] text-sm font-semibold tracking-widest uppercase">
                        Grenada, Mississippi
                    </span>
                </div>

                <h1
                    className="text-6xl font-bold text-white tracking-wide w-100 leading-[70px]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Veterans of Foreign Wars
                </h1>

                <p
                    className="mt-8 text-xl text-[#B8C8E8] max-w-[700px]"
                    style={{ fontFamily: "'Source Sans 3', system-ui, sans-serif'" }}
                >
                    Honoring those who served, serving those who came home. A cornerstone
                    of the Grenada community since 1945.
                </p>

                <Link
                    to="/applications"
                    className="inline-flex items-center gap-2 bg-[#D4871A] text-white px-4 py-2 rounded-md hover:bg-[#b97715] transition mt-10 pt-2 pb-2 pl-6 pr-6 font-semibold font-lg"
                >
                    Become a Member
                    <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                    to="/donations"
                    className="inline-flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-md transition mt-10 pt-2 pb-2 pl-6 pr-6 font-semibold font-lg border-1 border-white/40 ml-4 hover:bg-white/10 transition-colors"
                >
                    Donate
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
            <div
                className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden"
                style={{
                    backgroundColor: "#051642",
                    borderBottomColor: "#c98b36",
                    fontFamily: "'Playfair Display', serif",
                }}
            >
                <img src={Flag} alt="American flag" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E4A] via-[#0B1E4A]/30 to-transparent" />
            </div>
        </section>
    );
}

export default Hero;