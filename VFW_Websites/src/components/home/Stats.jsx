// Simple list of stats. Add or edit numbers here and they'll show up automatically.
const stats = [
    { label: "Serving Since", value: "1945" },
    { label: "Active Members", value: "200+" },
    { label: "Community Support", value: "$50K+" },
];

function Stats() {
    return (
        <section className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                    {stats.map((stat) => (
                        <div key={stat.label} className="py-6 text-center">
                            <div
                                className="text-3xl font-bold text-[#D4871A]"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 mt-1 tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
