import { Mail, Phone, MapPin, Award } from "lucide-react";
import Flag from "../assets/home/american_flag.jpg";
import Flag2 from "../assets/home/american_flag_2.jpg";

// TODO: replace with real leadership data once it can be managed from the Admin Dashboard.
const leadershipTeam = [
    {
        id: 1,
        name: "John Anderson",
        position: "Commander",
        rank: "SGT",
        email: "j.anderson@email.com",
        phone: "(662) 226-1234",
    },
    {
        id: 2,
        name: "Robert Williams",
        position: "Senior Vice Commander",
        rank: "CPL",
        email: "r.williams@email.com",
        phone: "(662) 226-2345",
    },
    {
        id: 3,
        name: "Michael Davis",
        position: "Junior Vice Commander",
        rank: "PFC",
        email: "m.davis@email.com",
        phone: "(662) 226-3456",
    },
    {
        id: 4,
        name: "James Thompson",
        position: "Quartermaster",
        rank: "SPC",
        email: "j.thompson@email.com",
        phone: "(662) 226-4567",
    },
];

function getInitials(name) {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("");
}

function Contact() {
    return (
        <div className="min-h-screen bg-[#F5F1E8]">
            {/* Banner */}
            <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-[#0B1E4A]">
                    <img
                        src={Flag}
                        alt="American flag close up"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E4A]/80 to-[#0B1E4A]/70" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h1
                        className="text-4xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Contact Us
                    </h1>
                    <div className="w-16 h-1 bg-[#D4871A] rounded mb-3" />
                    <p className="text-[#B8C8E8] text-lg">
                        Get in touch with our VFW leadership team
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4871A]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Contact cards */}
                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-[#D4871A] hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-[#EEF4FF] rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="text-[#0B1E4A]" size={32} />
                        </div>
                        <h3
                            className="text-lg font-bold text-[#0B1E4A] mb-2"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Visit Us
                        </h3>
                        <p className="text-gray-600">
                            VFW Post<br />
                            Grenada, Mississippi<br />
                            38901
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-[#0B1E4A] hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-[#FFF5E8] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="text-[#D4871A]" size={32} />
                        </div>
                        <h3
                            className="text-lg font-bold text-[#0B1E4A] mb-2"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Call Us
                        </h3>
                        <p className="text-gray-600">
                            Main Line:<br />
                            <a
                                href="tel:6622260000"
                                className="text-[#D4871A] hover:underline font-semibold"
                            >
                                (662) 226-0000
                            </a>
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-[#9B1C2E] hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-[#FFF0F3] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="text-[#9B1C2E]" size={32} />
                        </div>
                        <h3
                            className="text-lg font-bold text-[#0B1E4A] mb-2"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Email Us
                        </h3>
                        <p className="text-gray-600">
                            General Inquiries:<br />
                            <a
                                href="mailto:info@grenadavfw.org"
                                className="text-[#D4871A] hover:underline font-semibold"
                            >
                                info@grenadavfw.org
                            </a>
                        </p>
                    </div>
                </div>

                {/* Leadership team */}
                <div className="mb-12">
                    <h2
                        className="text-3xl font-bold text-[#0B1E4A] mb-2 text-center"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Leadership Team
                    </h2>
                    <div className="w-16 h-1 bg-[#D4871A] mx-auto mb-8 rounded" />

                    <div className="grid md:grid-cols-2 gap-6">
                        {leadershipTeam.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-[#0B1E4A]"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-[#0B1E4A] to-[#162F5E] rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ border: "3px solid #D4871A" }}
                                    >
                                        <span className="text-white font-bold text-xl">
                                            {getInitials(member.name)}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <h3
                                            className="text-xl font-bold text-[#0B1E4A] mb-1"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p className="text-[#D4871A] font-semibold mb-3">
                                            {member.position}
                                        </p>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Award size={16} className="text-[#9B1C2E]" />
                                                <span className="text-sm">{member.rank}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Mail size={16} className="text-gray-400" />
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="text-sm hover:text-[#D4871A] transition-colors"
                                                >
                                                    {member.email}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Phone size={16} className="text-gray-400" />
                                                <a
                                                    href={`tel:${member.phone.replace(/\D/g, "")}`}
                                                    className="text-sm hover:text-[#D4871A] transition-colors"
                                                >
                                                    {member.phone}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Office hours */}
                <div className="relative rounded-lg shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-[#0B1E4A]">
                        <img
                            src={Flag2}
                            alt="American flag"
                            className="w-full h-full object-cover opacity-15"
                        />
                    </div>
                    <div className="relative p-8 text-white">
                        <h2
                            className="text-2xl font-bold mb-1 text-center"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Office Hours
                        </h2>
                        <div className="w-12 h-1 bg-[#D4871A] mx-auto mb-6 rounded" />

                        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            <div>
                                <h3 className="font-semibold mb-3 text-[#D4871A]">Regular Hours</h3>
                                <div className="space-y-2 text-blue-100">
                                    <div className="flex justify-between">
                                        <span>Monday - Thursday:</span>
                                        <span className="font-semibold">10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Friday:</span>
                                        <span className="font-semibold">10:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span className="font-semibold">12:00 PM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span className="font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3 text-[#D4871A]">Monthly Meetings</h3>
                                <p className="text-blue-100 mb-4">
                                    General membership meetings are held on the third Tuesday of each
                                    month at 6:00 PM.
                                </p>
                                <p className="text-blue-100">
                                    All members are encouraged to attend. Light refreshments provided.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
