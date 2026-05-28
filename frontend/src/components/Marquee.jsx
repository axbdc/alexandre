import React from "react";
import { useLang } from "../context/LanguageContext";

const ITEMS = [
    { PT: "Augmented Reality", EN: "Augmented Reality" },
    { PT: "Design Gráfico", EN: "Graphic Design" },
    { PT: "3D — Blender", EN: "3D — Blender" },
    { PT: "Fotografia", EN: "Photography" },
    { PT: "Web Design", EN: "Web Design" },
    { PT: "Direção de Arte", EN: "Art Direction" },
    { PT: "Motion", EN: "Motion" },
    { PT: "Editorial", EN: "Editorial" },
];

const Marquee = () => {
    const { lang } = useLang();
    const items = ITEMS.map((i) => i[lang]);
    const line = items.join("  ·  ");

    return (
        <div
            className="overflow-hidden hairline-top hairline-bottom py-6 md:py-8 bg-bone"
            aria-hidden="true"
            data-testid="marquee"
        >
            <div className="marquee font-display text-3xl md:text-5xl text-ink whitespace-nowrap">
                <span className="px-8">{line}</span>
                <span className="px-8 text-terracotta">·</span>
                <span className="px-8">{line}</span>
                <span className="px-8 text-terracotta">·</span>
                <span className="px-8">{line}</span>
                <span className="px-8 text-terracotta">·</span>
                <span className="px-8">{line}</span>
            </div>
        </div>
    );
};

export default Marquee;
