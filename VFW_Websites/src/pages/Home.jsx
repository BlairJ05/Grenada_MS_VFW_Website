
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import CommanderMessage from "../components/home/CommanderMessage";
import QuickLinks from "../components/home/QuickLinks";
import Slideshow from "../components/home/Slideshow";
import UpcomingEvents from "../components/home/UpcomingEvents";
import NewsSection from "../components/home/NewsSection";
import AboutSection from "../components/home/AboutSection";
import MapSection from "../components/home/MapSection";
import CallToAction from "../components/home/CallToAction";
import Applications from "../pages/Application"







function Home() {
    return (
        <>
            {/* Sections that match the Figma homepage design */}
            <Hero />
            <Stats />
            <Slideshow />
            <UpcomingEvents />
            <AboutSection />
            <CallToAction />

            {/* Extra sections not in the Figma design, shown below it for now */}
            <CommanderMessage />
            <QuickLinks />
            <NewsSection />
            <MapSection />
        </>
    );
}

export default Home;