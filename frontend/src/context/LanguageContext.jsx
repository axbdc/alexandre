import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        if (typeof window === "undefined") return "PT";
        return localStorage.getItem("ac_lang") || "PT";
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        localStorage.setItem("ac_lang", lang);
        document.documentElement.setAttribute(
            "lang",
            lang === "PT" ? "pt" : "en",
        );
    }, [lang]);

    const toggle = () => setLang((l) => (l === "PT" ? "EN" : "PT"));

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggle }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLang = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
    return ctx;
};

export const t = (dict, lang) => dict[lang] ?? dict.PT ?? dict.EN ?? "";
