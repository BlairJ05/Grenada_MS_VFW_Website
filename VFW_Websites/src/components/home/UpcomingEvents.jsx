import { Calendar, Clock, Star } from "lucide-react";

// TODO: replace with real events once event data is connected (see hooks/useEvents.js).
const events = [];

function formatEventDay(dateString) {
    const date = new Date(dateString);
    return date.getDate();
}

function formatEventMonth(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short" });
}

function formatFullDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

function UpcomingEvents() {
    const [featuredEvent, ...otherEvents] = events;

    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2
                        className="text-3xl font-bold text-[#0B1E4A]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Upcoming Events
                    </h2>
                    <div className="w-12 h-1 bg-[#D4871A] mt-2 rounded" />
                </div>

                {events.length === 0 ? (
                    <div className="text-center py-16 bg-[#F5F1E8] rounded-xl">
                        <p className="text-gray-500 text-lg">No upcoming events scheduled at this time.</p>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-5 gap-4">
                        {/* Featured event card */}
                        <div className="lg:col-span-2 bg-[#0B1E4A] rounded-xl p-7 text-white flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Star className="text-[#D4871A] fill-[#D4871A]" size={16} />
                                    <span className="text-[#D4871A] text-xs font-semibold tracking-widest uppercase">
                                        Featured
                                    </span>
                                </div>
                                <h3
                                    className="text-2xl font-bold mb-4 leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {featuredEvent.title}
                                </h3>
                                <p className="text-[#B8C8E8] text-sm leading-relaxed mb-6">
                                    {featuredEvent.description}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-[#D4C090]">
                                    <Calendar size={16} />
                                    <span className="text-sm">{formatFullDate(featuredEvent.date)}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#D4C090]">
                                    <Clock size={16} />
                                    <span className="text-sm">{featuredEvent.time}</span>
                                </div>
                            </div>
                        </div>

                        {/* Remaining events list */}
                        <div className="lg:col-span-3 space-y-4">
                            {otherEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-[#F5F1E8] rounded-xl p-5 border-l-4 border-[#D4871A] hover:shadow-md transition-shadow"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3
                                                className="text-lg font-bold text-[#0B1E4A] mb-1"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <div className="text-[#D4871A] font-bold text-lg leading-none">
                                                {formatEventDay(event.date)}
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                {formatEventMonth(event.date)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <Clock size={13} />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default UpcomingEvents;
