
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
            <Hero />
            <Stats />
            <CommanderMessage />
            <QuickLinks />
            <Slideshow />
            <UpcomingEvents />
            <NewsSection />
            <AboutSection />
            <MapSection />
            <CallToAction />
        </>
        
    );
    
}

export default Home;