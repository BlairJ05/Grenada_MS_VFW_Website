import { Link } from "react-router-dom";
import logo from "../../assets/vfw_icon.png";

function Footer() {
    return (
    
        <footer className=" bottom-0 z-50 py-12 px-10 items-center justify-between text-white border-t-4 " style={{ backgroundColor: "#070c1e", borderTopColor: "#c98b36", fontFamily: "'Playfair Display', serif" }}>

            <div className="flex justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-b-1 " style={{ borderBottomColor: "#1A3050"}}>
                    <div className="text-left">
                        <h2 className="font-bold mb-3 font-lg ont-bold mb-3 flex items-center gap-5 tracking-wide"><img src={logo} alt="Logo" className="h-8 w-8" />VFW Grenada, MS</h2>
                        <ul className="space-y-2">
                            <li className="" style={{ color: "#a2afce"}}>Supporting veterans and their families in our community since 1945.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold mb-3 text-left">Quick Links</h2>
                        <ul className="space-y-2 text-left " style={{fontFamily: "'Source Sans 3', system-ui, sans-serif" }}>
                            <li><Link to="/" className="block text-sm py-1 text-[#a2afce] hover:text-[#c98b36] transition-colors" >Home</Link></li>
                            <li><Link to="/gallery" className="block text-sm py-1 text-[#a2afce] hover:text-[#c98b36] transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="block text-sm py-1 text-[#a2afce] hover:text-[#c98b36] transition-colors">Contact</Link></li>
                            <li><Link to="/applications" className="block text-sm py-1 text-[#a2afce] hover:text-[#c98b36] transition-colors">Join Us</Link></li>
                        </ul>
                    </div>

                    <div className="text-left">
                        <h2 className="font-bold mb-3">Contact</h2>
                        <ul className="space-y-2 text-left " style={{fontFamily: "'Source Sans 3', system-ui, sans-serif'"}}>
                            <li className="block text-sm py-1 text-[#a2afce] hover:text-[#c98b36] transition-colors">
                                <a href="https://maps.app.goo.gl/C2iNEjx8fK6wDhAfA"
                                    target="_blank"
                                    rel="noopener noreferrer">Grenada, Mississippi
                                </a>
                            </li>
                            <li className="block text-sm py-1 text-[#a2afce] hover:text-[#c98b36] transition-colors"><a href="">Phone: (662) 226-XXXX</a></li>
                            <li className="block text-sm py-1 text-[#a2afce] hover:text-[#c98b36] transition-colors"><a href="mailto:example@gmail.com">Email: info@grenadavfw.org</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>


    );
}

export default Footer;