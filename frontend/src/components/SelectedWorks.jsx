import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLang, t } from "../context/LanguageContext";
import { PROJECTS, SECTION_LABELS } from "../data/content";
import useReveal from "../hooks/useReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SelectedWorks = () => {
    const { lang } = useLang();
    const rootRef = useReveal([lang]);
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    const recompute = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const cards = el.querySelectorAll("[data-card]");
        if (!cards.length) return;
        const max = el.scrollWidth - el.clientWidth;
        setMaxScroll(max);
        // Active = card whose left edge is closest to current scrollLeft (+small offset)
        const probe = el.scrollLeft + 24;
        let nearest = 0;
        let best = Infinity;
        cards.forEach((c, i) => {
            const d = Math.abs(c.offsetLeft - probe);
            if (d < best) {
                best = d;
                nearest = i;
            }
        });
        setActive(nearest);
        setProgress(max > 0 ? el.scrollLeft / max : 0);
    }, []);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        recompute();
        const onScroll = () => recompute();
        el.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", recompute);
        return () => {
            el.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", recompute);
        };
    }, [recompute]);

    const scrollToCard = (i) => {
        const el = trackRef.current;
        if (!el) return;
        const cards = el.querySelectorAll("[data-card]");
        const target = cards[Math.max(0, Math.min(cards.length - 1, i))];
        if (!target) return;
        // Align card left edge with the track's left padding (snap-start style)
        el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    };

    const next = () => scrollToCard(active + 1);
    const prev = () => scrollToCard(active - 1);

    const atStart = active === 0;
    const atEnd = active >= PROJECTS.length - 1 || progress > 0.995;

    return (
        <section
            id="work"
            ref={rootRef}
            data-testid="works-section"
            className="py-24 md:py-40 hairline-top"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-12">
                <div className="flex items-end justify-between mb-12 md:mb-16 reveal">
                    <div>
                        <span className="overline">— 01</span>
                        <h2 className="font-display text-4xl md:text-6xl mt-3 text-ink">
                            {t(SECTION_LABELS.work, lang)}
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <div className="font-display text-lg text-ink tabular-nums">
                            <span data-testid="works-active-index">
                                {String(active + 1).padStart(2, "0")}
                            </span>
                            <span className="text-mist mx-2">/</span>
                            <span className="text-mist">
                                {String(PROJECTS.length).padStart(2, "0")}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={prev}
                                disabled={atStart}
                                data-testid="works-prev"
                                aria-label="Previous project"
                                className="h-12 w-12 inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-bone disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink transition-colors duration-500"
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                disabled={atEnd}
                                data-testid="works-next"
                                aria-label="Next project"
                                className="h-12 w-12 inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-bone disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink transition-colors duration-500"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal track — uses snap-start with scroll-padding to align cards
                with the page gutter. No spacer hacks, no center math. */}
            <div
                ref={trackRef}
                data-testid="works-track"
                className="relative overflow-x-auto no-scrollbar snap-x snap-mandatory"
                style={{
                    scrollPaddingLeft: "1.5rem",
                    scrollPaddingRight: "1.5rem",
                }}
            >
                <ul className="flex gap-6 md:gap-10 px-6 md:px-12 pb-2 pt-4">
                    {PROJECTS.map((p) => (
                        <li
                            key={p.id}
                            data-card
                            data-testid={`project-card-${p.id}`}
                            className="reveal shrink-0 snap-start w-[78vw] sm:w-[58vw] md:w-[40vw] lg:w-[32vw] xl:w-[420px]"
                        >
                            <div className="project-image-wrap aspect-[4/5]">
                                <img
                                    src={p.cover}
                                    alt={t(p.title, lang)}
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-5 flex items-start justify-between gap-4">
                                <div>
                                    <div className="overline mb-2">
                                        {p.index} · {t(p.category, lang)}
                                    </div>
                                    <h3 className="font-display text-xl md:text-2xl text-ink">
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
                            <p className="mt-3 text-sm md:text-base text-graphite max-w-md">
                                {t(p.summary, lang)}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Progress bar */}
            <div className="mx-auto max-w-[1400px] px-6 md:px-12 mt-12">
                <div className="relative h-px w-full bg-hairline">
                    <div
                        data-testid="works-progress"
                        className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-300"
                        style={{
                            width: `${Math.max(6, progress * 100)}%`,
                        }}
                    />
                </div>
                <div className="md:hidden mt-6 flex items-center justify-between">
                    <div className="font-display text-base tabular-nums">
                        <span>{String(active + 1).padStart(2, "0")}</span>
                        <span className="text-mist mx-1.5">/</span>
                        <span className="text-mist">
                            {String(PROJECTS.length).padStart(2, "0")}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={prev}
                            disabled={atStart}
                            aria-label="Previous project"
                            className="h-11 w-11 inline-flex items-center justify-center border border-ink text-ink disabled:opacity-30"
                        >
                            <ArrowLeft size={16} />
                        </button>
                        <button
                            onClick={next}
                            disabled={atEnd}
                            aria-label="Next project"
                            className="h-11 w-11 inline-flex items-center justify-center border border-ink text-ink disabled:opacity-30"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedWorks;
