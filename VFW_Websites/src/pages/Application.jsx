import { useState } from "react";
import { Shield, CheckCircle } from "lucide-react";

const emptyFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "MS",
    zip: "",
    militaryRank: "",
    unit: "",
};

function Application() {
    const [formData, setFormData] = useState(emptyFormData);
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // TODO: actually save the application once a backend/storage is connected.
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#F5F1E8] py-12 flex items-center justify-center">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <div className="bg-white rounded-xl shadow-lg p-12 border-t-4 border-[#D4871A]">
                        <div className="w-20 h-20 bg-[#FFF5E8] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#D4871A]">
                            <CheckCircle className="text-[#D4871A]" size={48} />
                        </div>
                        <h2
                            className="text-3xl font-bold text-[#0B1E4A] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Application Submitted!
                        </h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Thank you for your interest in joining VFW Grenada. We will be in touch soon.
                        </p>
                        <p className="text-gray-500">
                            Confirmation sent to <strong>{formData.email}</strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F5F1E8] py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-[#0B1E4A] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#D4871A]">
                        <Shield className="text-white" size={32} />
                    </div>
                    <h1
                        className="text-4xl font-bold text-[#0B1E4A] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Join VFW Grenada
                    </h1>
                    <p className="text-xl text-gray-600">
                        Become part of our community dedicated to serving those who served
                    </p>
                </div>

                <div className="bg-[#EEF4FF] border-l-4 border-[#0B1E4A] p-6 mb-8 rounded-r-lg">
                    <h3 className="font-semibold text-[#0B1E4A] mb-2">Eligibility Requirements</h3>
                    <ul className="text-[#162F5E] space-y-1 text-sm">
                        <li>• U.S. citizen or U.S. national</li>
                        <li>• Served in the Armed Forces of the United States</li>
                        <li>• Received a campaign medal for overseas service or served in a combat zone</li>
                        <li>• Honorable discharge or currently serving honorably</li>
                    </ul>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl shadow-md p-8 space-y-6 border-t-4 border-[#D4871A]"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                First Name *
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(662) 555-0123"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                            Street Address *
                        </label>
                        <input
                            type="text"
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                City *
                            </label>
                            <input
                                type="text"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                State *
                            </label>
                            <input
                                type="text"
                                name="state"
                                required
                                value={formData.state}
                                onChange={handleChange}
                                maxLength={2}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none uppercase"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                Zip Code *
                            </label>
                            <input
                                type="text"
                                name="zip"
                                required
                                value={formData.zip}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                Military Rank
                            </label>
                            <input
                                type="text"
                                name="militaryRank"
                                value={formData.militaryRank}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                Unit
                            </label>
                            <input
                                type="text"
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4871A] focus:outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#D4871A] text-white py-4 rounded-lg font-semibold hover:bg-[#B8700F] transition-colors shadow-lg"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Application;
