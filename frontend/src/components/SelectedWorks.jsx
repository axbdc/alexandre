import React from "react";
import { useLang, t } from "../context/LanguageContext";
import { PROJECTS, SECTION_LABELS } from "../data/content";
import useReveal from "../hooks/useReveal";

const SelectedWorks = () => {
    const { lang } = useLang();
    const rootRef = useReveal([lang]);

    return (
        <section
            id="work"
            ref={rootRef}
            data-testid="works-section"
            className="px-6 md:px-12 py-24 md:py-40 hairline-top"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="flex items-end justify-between mb-16 md:mb-24 reveal">
                    <div>
                        <span className="overline">— 01</span>
                        <h2 className="font-display text-4xl md:text-6xl mt-3 text-ink">
                            {t(SECTION_LABELS.work, lang)}
                        </h2>
                    </div>
                    <span className="hidden md:inline overline">
                        {PROJECTS.length}{" "}
                        {lang === "PT" ? "projetos" : "projects"}
                    </span>
                </div>

                <div className="grid grid-cols-12 gap-y-24 md:gap-y-32 md:gap-x-12">
                    {PROJECTS.map((p, i) => {
                        const colClass = layoutFor(i, p.aspect);
                        return (
                            <article
                                key={p.id}
                                data-testid={`project-card-${p.id}`}
                                className={`reveal col-span-12 ${colClass.col}`}
                            >
                                <div
                                    className={`project-image-wrap ${colClass.frame}`}
                                >
                                    <img
                                        src={p.cover}
                                        alt={t(p.title, lang)}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-6 flex items-start justify-between gap-4">
                                    <div>
                                        <div className="overline mb-2">
                                            {p.index} · {t(p.category, lang)}
                                        </div>
                                        <h3 className="font-display text-2xl md:text-3xl text-ink">
                                            {t(p.title, lang)}
                                        </h3>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="text-sm text-graphite">
                                            {t(p.client, lang)}
                                        </div>
                                        <div className="text-sm text-mist">
                                            {p.year}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 text-base md:text-lg text-graphite max-w-xl">
                                    {t(p.summary, lang)}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Asymmetric grid: alternates wide/tall and offsets
function layoutFor(i, aspect) {
    // 5 projects, asymmetric "tetris" composition
    const map = [
        { col: "md:col-span-7", frame: "aspect-[4/5]" }, // 01 tall
        { col: "md:col-span-5 md:col-start-8 md:-mt-32", frame: "aspect-[5/4]" }, // 02 wide, raised
        { col: "md:col-span-8 md:col-start-3", frame: "aspect-[16/10]" }, // 03 wide, centered
        { col: "md:col-span-5", frame: "aspect-[4/5]" }, // 04 tall
        { col: "md:col-span-6 md:col-start-7 md:-mt-40", frame: "aspect-[5/4]" }, // 05 wide raised
    ];
    return map[i] || { col: "md:col-span-6", frame: aspect === "tall" ? "aspect-[4/5]" : "aspect-[5/4]" };
}

export default SelectedWorks;
