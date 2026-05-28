import React from "react";
import { useLang, t } from "../context/LanguageContext";
import { EXPERIENCE, SECTION_LABELS } from "../data/content";
import useReveal from "../hooks/useReveal";

const localizeCompany = (company, lang) =>
    typeof company === "string" ? company : t(company, lang);

const Experience = () => {
    const { lang } = useLang();
    const rootRef = useReveal([lang]);

    return (
        <section
            id="experience"
            ref={rootRef}
            data-testid="experience-section"
            className="px-6 md:px-12 py-24 md:py-40 hairline-top bg-bone"
        >
            <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-y-12 md:gap-12">
                <div className="col-span-12 md:col-span-3 reveal">
                    <span className="overline">— 04</span>
                    <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink">
                        {t(SECTION_LABELS.experience, lang)}
                    </h2>
                </div>

                <ol className="col-span-12 md:col-span-9 md:pl-8 divide-y divide-hairline border-y border-hairline">
                    {EXPERIENCE.map((e, i) => (
                        <li
                            key={i}
                            data-testid={`experience-item-${i}`}
                            className="reveal py-8 md:py-10 grid grid-cols-12 gap-4 items-baseline"
                        >
                            <span className="col-span-12 md:col-span-3 overline">
                                {lang === "PT" ? e.period : e.period_en}
                            </span>
                            <div className="col-span-12 md:col-span-6">
                                <h3 className="font-display text-2xl md:text-3xl text-ink">
                                    {t(e.role, lang)}
                                </h3>
                                <p className="mt-1 text-base md:text-lg text-graphite">
                                    {t(e.scope, lang)}
                                </p>
                            </div>
                            <span className="col-span-12 md:col-span-3 md:text-right text-base text-ink">
                                {localizeCompany(e.company, lang)}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
