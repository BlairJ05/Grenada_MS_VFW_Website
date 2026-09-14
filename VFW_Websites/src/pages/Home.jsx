import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Slideshow from "../components/home/Slideshow";
import UpcomingEvents from "../components/home/UpcomingEvents";
import AboutSection from "../components/home/AboutSection";
import CallToAction from "../components/home/CallToAction";

function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Slideshow />
            <UpcomingEvents />
            <AboutSection />
            <CallToAction />
        </>
    );
}

export default Home;
