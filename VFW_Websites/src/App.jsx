import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import AdminDashboard from "./pages/AdminDashboard";
import Applications from "./pages/Application";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donations" element={<Donations />} />
                <Route path="/appications" element={<Applications />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;