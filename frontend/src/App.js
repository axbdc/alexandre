import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Marquee from "@/components/Marquee";
import AboutServices from "@/components/AboutServices";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

const Portfolio = () => {
    useEffect(() => {
        // Smooth-scroll for anchor jumps (CSS native is enough; ensure html element)
        document.documentElement.style.scrollBehavior = "smooth";
        return () => {
            document.documentElement.style.scrollBehavior = "";
        };
    }, []);

    return (
        <div className="App grain" data-testid="portfolio-root">
            <CustomCursor />
            <Navigation />
            <main>
                <Hero />
                <Marquee />
                <SelectedWorks />
                <AboutServices />
                <Experience />
                <Contact />
            </main>
        </div>
    );
};

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="*" element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;
