import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, t } from "../context/LanguageContext";
import { PROJECTS, CATEGORIES, SECTION_LABELS } from "../data/content";
import useReveal from "../hooks/useReveal";

const localize = (v, lang) => (typeof v === "string" ? v : t(v, lang));

const SelectedWorks = () => {
    const { lang } = useLang();
    const rootRef = useReveal([lang]);
    const [active, setActive] = useState("all");

    const filtered = useMemo(
        () =>
            active === "all"
                ? PROJECTS
                : PROJECTS.filter((p) => p.category === active),
        [active],
    );

    const counts = useMemo(() => {
        const out = { all: PROJECTS.length };
        for (const c of CATEGORIES) {
            if (c.id === "all") continue;
            out[c.id] = PROJECTS.filter((p) => p.category === c.id).length;
        }
        return out;
    }, []);

    return (
        <section
            id="work"
            ref={rootRef}
            data-testid="works-section"
            className="px-6 md:px-12 py-24 md:py-40 hairline-top"
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="flex items-end justify-between mb-12 md:mb-16 reveal">
                    <div>
                        <span className="overline">— 01</span>
                        <h2 className="font-display text-4xl md:text-6xl mt-3 text-ink">
                            {t(SECTION_LABELS.work, lang)}
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="overline">
                            {lang === "PT" ? "A mostrar" : "Showing"}
                        </div>
                        <div
                            className="font-display text-2xl text-ink mt-1 tabular-nums"
                            data-testid="works-count"
                        >
                            {String(filtered.length).padStart(2, "0")}
                            <span className="text-mist mx-2">/</span>
                            <span className="text-mist">
                                {String(PROJECTS.length).padStart(2, "0")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Category tabs */}
                <div
                    className="reveal -mx-6 md:mx-0 mb-12 md:mb-16 overflow-x-auto no-scrollbar"
                    data-testid="category-tabs"
                >
                    <ul className="flex items-center gap-2 md:gap-3 px-6 md:px-0">
                        {CATEGORIES.map((c) => {
                            const isActive = c.id === active;
                            return (
                                <li key={c.id}>
                                    <button
                                        onClick={() => setActive(c.id)}
                                        data-testid={`category-tab-${c.id}`}
                                        aria-pressed={isActive}
                                        className={`group relative inline-flex items-center gap-2 px-5 py-3 border transition-colors duration-500 whitespace-nowrap ${
                                            isActive
                                                ? "bg-ink text-bone border-ink"
                                                : "border-hairline text-ink hover:border-ink"
                                        }`}
                                    >
                                        <span className="text-sm tracking-wide">
                                            {t(c.label, lang)}
                                        </span>
                                        <span
                                            className={`text-xs tabular-nums ${
                                                isActive
                                                    ? "text-bone/60"
                                                    : "text-mist"
                                            }`}
                                        >
                                            {String(counts[c.id]).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Filtered grid */}
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={active}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        data-testid="works-grid"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-16 md:gap-y-24"
                    >
                        {filtered.map((p, i) => (
                            <motion.li
                                key={p.id}
                                data-testid={`project-card-${p.id}`}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.04,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group"
                            >
                                <div className="project-image-wrap aspect-[4/5]">
                                    <img
                                        src={p.cover}
                                        alt={t(p.title, lang)}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-5 flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <div className="overline mb-2 truncate">
                                            {t(p.subtitle, lang)}
                                        </div>
                                        <h3 className="font-display text-xl md:text-2xl text-ink truncate group-hover:text-terracotta transition-colors duration-500">
                                            {t(p.title, lang)}
                                        </h3>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="text-xs md:text-sm text-graphite truncate max-w-[140px]">
                                            {localize(p.client, lang)}
                                        </div>
                                        <div className="text-xs md:text-sm text-mist">
                                            {p.year}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm text-graphite line-clamp-3">
                                    {t(p.summary, lang)}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <p className="text-center text-graphite py-24">
                        {lang === "PT"
                            ? "Nenhum projeto nesta categoria ainda."
                            : "No projects in this category yet."}
                    </p>
                )}
            </div>
        </section>
    );
};

export default SelectedWorks;
