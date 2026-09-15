import { useState } from "react";
import { DollarSign, Heart, Users, Award } from "lucide-react";
import Flag from "../assets/home/vfw_3.jpg";
import Flag2 from "../assets/home/american_flag_2.jpg";

const presetAmounts = [25, 50, 100, 250, 500];

const otherWaysToGive = [
    "Mail a check to our post office address",
    "Donate goods or services to our fundraising events",
    "Volunteer your time at our community programs",
    "Consider a planned gift or bequest",
];

const emptyDonorInfo = {
    name: "",
    email: "",
    message: "",
};

function Donations() {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState("");
    const [donorInfo, setDonorInfo] = useState(emptyDonorInfo);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function selectPresetAmount(amount) {
        setSelectedAmount(amount);
        setCustomAmount("");
    }

    function handleCustomAmountChange(event) {
        setCustomAmount(event.target.value);
        setSelectedAmount(null);
    }

    function handleDonorInfoChange(event) {
        const { name, value } = event.target;
        setDonorInfo({ ...donorInfo, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const amount = selectedAmount || parseFloat(customAmount);

        if (!amount || amount <= 0) {
            setError("Please enter a valid donation amount.");
            setSuccessMessage("");
            return;
        }

        if (!donorInfo.name || !donorInfo.email) {
            setError("Please fill in your contact information.");
            setSuccessMessage("");
            return;
        }

        const formattedAmount = amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

        setError("");
        setSuccessMessage(`Thank you for your ${formattedAmount} donation!`);
        setSelectedAmount(null);
        setCustomAmount("");
        setDonorInfo(emptyDonorInfo);
    }

    return (
        <div className="min-h-screen bg-[#F5F1E8]">
            {/* Banner */}
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#0B1E4A]">
                    <img
                        src={Flag}
                        alt="Soldiers holding American flag"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E4A]/90 to-[#0B1E4A]/70" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h1
                        className="text-4xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Support Our Veterans
                    </h1>
                    <div className="w-16 h-1 bg-[#D4871A] rounded mb-3" />
                    <p className="text-[#B8C8E8] text-lg max-w-2xl">
                        Your generous donations help us provide vital services and support to
                        veterans and their families in the Grenada community.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4871A]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Donation form */}
                    <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#D4871A]">
                        <h2
                            className="text-2xl font-bold text-[#0B1E4A] mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Make a Donation
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-[#0B1E4A] mb-3">
                                    Select Amount
                                </label>
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {presetAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            type="button"
                                            onClick={() => selectPresetAmount(amount)}
                                            className={`py-3 px-4 rounded-md border-2 font-semibold transition-colors ${
                                                selectedAmount === amount
                                                    ? "border-[#D4871A] bg-[#FFF5E8] text-[#A86010]"
                                                    : "border-gray-300 hover:border-[#D4871A] text-gray-700"
                                            }`}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <DollarSign className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="number"
                                        min="1"
                                        step="0.01"
                                        placeholder="Custom amount"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#D4871A] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={donorInfo.name}
                                    onChange={handleDonorInfoChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#D4871A] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={donorInfo.email}
                                    onChange={handleDonorInfoChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#D4871A] focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#0B1E4A] mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    value={donorInfo.message}
                                    onChange={handleDonorInfoChange}
                                    rows={4}
                                    placeholder="Leave a message of support..."
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#D4871A] focus:outline-none resize-none"
                                />
                            </div>

                            {error && <p className="text-sm text-[#9B1C2E]">{error}</p>}
                            {successMessage && (
                                <p className="text-sm text-green-700">{successMessage}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-[#D4871A] text-white py-4 rounded-md font-semibold hover:bg-[#B8700F] transition-colors shadow-lg tracking-wide"
                            >
                                Complete Donation
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                Demo form only — integrate a payment processor for production.
                            </p>
                        </form>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#0B1E4A]">
                            <h3
                                className="text-xl font-bold text-[#0B1E4A] mb-5"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                How Your Donation Helps
                            </h3>
                            <div className="space-y-5">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#FFF5E8] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Heart className="text-[#D4871A]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#0B1E4A] mb-1">
                                            Veteran Support Services
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Providing assistance with healthcare, housing, and essential
                                            needs
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#EEF4FF] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users className="text-[#0B1E4A]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#0B1E4A] mb-1">
                                            Community Programs
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Supporting youth programs, scholarships, and community
                                            events
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#FFF0F3] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Award className="text-[#9B1C2E]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#0B1E4A] mb-1">
                                            Memorial Programs
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Honoring fallen heroes and maintaining memorial sites
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-lg shadow-md overflow-hidden">
                            <div className="absolute inset-0 bg-[#0B1E4A]">
                                <img
                                    src={Flag2}
                                    alt="American flag"
                                    className="w-full h-full object-cover opacity-20"
                                />
                            </div>
                            <div className="relative p-8">
                                <h3
                                    className="text-xl font-bold text-white mb-4"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    Other Ways to Give
                                </h3>
                                <ul className="space-y-3 text-[#B8C8E8]">
                                    {otherWaysToGive.map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="text-[#D4871A] mt-1 font-bold">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white border-l-4 border-[#D4871A] rounded-md p-6 shadow-sm">
                            <p className="text-[#0B1E4A] font-semibold mb-2">Tax Deductible</p>
                            <p className="text-gray-600 text-sm">
                                VFW is a 501(c)(19) organization. Your donation may be
                                tax-deductible. Consult your tax advisor for details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donations;
