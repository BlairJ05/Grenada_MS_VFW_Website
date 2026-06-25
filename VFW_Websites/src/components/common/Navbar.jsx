import logo from "../../assets/VFW_Icon.png";
import { NavLink } from "react-router-dom";

function Navbar() {
    const linkClass = ({ isActive }) =>
        `px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-[#162F5E] hover:text-white ${
            isActive ? "text-white bg-[#c98b36]" : ""
        }`;

    return (
        <div
            className="sticky top-0 z-50 text-white px-50 py-4 flex items-center justify-between border-b-6"
            style={{
                backgroundColor: "#051642",
                borderBottomColor: "#c98b36",
                fontFamily: "'Playfair Display', serif",
            }}
        >
            <div className="flex items-center gap-6">
                <img src={logo} alt="Logo" className="h-16 w-16" />

                <h1 className="text-xl font-bold tracking-wide">
                    Veterans of Foreign Wars
                    <p className="text-sm font-bold" style={{ color: "#B8C8E8" }}>
                        Grenada, Mississippi
                    </p>
                </h1>
            </div>

            <div className="flex gap-6 text-lg" style={{ color: "#B8C8E8" }}>
                <NavLink to="/" className={linkClass} >Home</NavLink>
                <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
                <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                <NavLink to="/donations" className={linkClass}>Donations</NavLink>
                <NavLink to="/admindashbord" className={linkClass}>Admin</NavLink>
            </div>
        </div>
    );
}

export default Navbar;