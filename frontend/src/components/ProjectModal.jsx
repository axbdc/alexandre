import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLang, t } from "../context/LanguageContext";

const localize = (v, lang) => (typeof v === "string" ? v : t(v, lang));

const COPY = {
    client: { PT: "Cliente", EN: "Client" },
    year: { PT: "Ano", EN: "Year" },
    role: { PT: "Função", EN: "Role" },
    category: { PT: "Categoria", EN: "Category" },
    overview: { PT: "Sobre o projeto", EN: "About the project" },
    gallery: { PT: "Galeria", EN: "Gallery" },
    tools: { PT: "Ferramentas", EN: "Tools" },
    link: { PT: "Ver projeto", EN: "View project" },
    prev: { PT: "Anterior", EN: "Previous" },
    next: { PT: "Seguinte", EN: "Next" },
    close: { PT: "Fechar", EN: "Close" },
    of: { PT: "de", EN: "of" },
};

const ProjectModal = ({ project, index, total, onClose, onPrev, onNext }) => {
    useEffect(() => {
        if (!project) return;
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [project, onClose, onPrev, onNext]);

    const lang = useLang().lang;

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-[100]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    data-testid="project-modal"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Sheet */}
                    <motion.div
                        key={project.id}
                        className="absolute inset-x-0 bottom-0 top-8 md:top-16 bg-bone overflow-y-auto"
                        initial={{ y: "8%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "8%", opacity: 0 }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Sticky top bar */}
                        <div className="sticky top-0 z-10 bg-bone/85 backdrop-blur-md hairline-bottom">
                            <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-14 md:h-16 flex items-center justify-between">
                                <span className="overline">
                                    {String(index + 1).padStart(2, "0")}{" "}
                                    <span className="text-mist">
                                        {t(COPY.of, lang)}{" "}
                                        {String(total).padStart(2, "0")}
                                    </span>
                                </span>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={onPrev}
                                        aria-label={t(COPY.prev, lang)}
                                        data-testid="modal-prev"
                                        className="h-10 w-10 inline-flex items-center justify-center border border-hairline text-ink hover:border-ink transition-colors"
                                    >
                                        <ArrowLeft size={16} />
                                    </button>
                                    <button
                                        onClick={onNext}
                                        aria-label={t(COPY.next, lang)}
                                        data-testid="modal-next"
                                        className="h-10 w-10 inline-flex items-center justify-center border border-hairline text-ink hover:border-ink transition-colors"
                                    >
                                        <ArrowRight size={16} />
                                    </button>
                                    <button
                                        onClick={onClose}
                                        aria-label={t(COPY.close, lang)}
                                        data-testid="modal-close"
                                        className="ml-2 h-10 px-4 inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-bone transition-colors"
                                    >
                                        <span className="text-xs tracking-[0.18em] uppercase">
                                            {t(COPY.close, lang)}
                                        </span>
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Hero */}
                        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-12 md:pt-20 pb-10 md:pb-16">
                            <div className="overline mb-4 md:mb-6">
                                {t(project.subtitle, lang)}
                            </div>
                            <h2
                                data-testid="modal-title"
                                className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-[0.92] text-ink"
                            >
                                {t(project.title, lang)}
                            </h2>
                        </div>

                        {/* Cover */}
                        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
                            <div className="project-image-wrap aspect-[16/10]">
                                <img
                                    src={project.cover}
                                    alt={t(project.title, lang)}
                                />
                            </div>
                        </div>

                        {/* Meta + overview */}
                        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 md:py-24 grid grid-cols-12 gap-8 md:gap-12">
                            <aside className="col-span-12 md:col-span-4 space-y-8">
                                <MetaRow
                                    label={t(COPY.client, lang)}
                                    value={localize(project.client, lang)}
                                />
                                <MetaRow
                                    label={t(COPY.year, lang)}
                                    value={project.year}
                                />
                                <MetaRow
                                    label={t(COPY.role, lang)}
                                    value={
                                        project.role
                                            ? localize(project.role, lang)
                                            : t(project.subtitle, lang)
                                    }
                                />
                                {project.tools?.length ? (
                                    <div>
                                        <div className="overline mb-3">
                                            {t(COPY.tools, lang)}
                                        </div>
                                        <ul className="flex flex-wrap gap-x-4 gap-y-1">
                                            {project.tools.map((tt) => (
                                                <li
                                                    key={tt}
                                                    className="text-base text-ink"
                                                >
                                                    {tt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                                {project.url ? (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="modal-external-link"
                                        className="group inline-flex items-center gap-2 text-ink"
                                    >
                                        <span className="link-underline">
                                            {t(COPY.link, lang)}
                                        </span>
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </a>
                                ) : null}
                            </aside>

                            <div className="col-span-12 md:col-span-8">
                                <div className="overline mb-4">
                                    {t(COPY.overview, lang)}
                                </div>
                                <div className="space-y-6 text-lg md:text-xl text-graphite leading-relaxed max-w-2xl">
                                    {(project.details
                                        ? localize(project.details, lang).split(
                                              /\n\n+/,
                                          )
                                        : [t(project.summary, lang)]
                                    ).map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Gallery */}
                        {project.gallery?.length ? (
                            <div className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24">
                                <div className="overline mb-6">
                                    {t(COPY.gallery, lang)}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                    {project.gallery.map((src, i) => (
                                        <div
                                            key={i}
                                            className={`project-image-wrap ${
                                                i % 3 === 0
                                                    ? "aspect-[4/5] md:col-span-2"
                                                    : "aspect-[4/5]"
                                            }`}
                                        >
                                            <img
                                                src={src}
                                                alt={`${t(project.title, lang)} — ${i + 1}`}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        {/* Bottom nav */}
                        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24 hairline-top pt-12 flex items-center justify-between">
                            <button
                                onClick={onPrev}
                                data-testid="modal-bottom-prev"
                                className="group inline-flex items-center gap-3 text-ink"
                            >
                                <ArrowLeft
                                    size={18}
                                    className="transition-transform duration-500 group-hover:-translate-x-1"
                                />
                                <span className="text-sm tracking-[0.18em] uppercase">
                                    {t(COPY.prev, lang)}
                                </span>
                            </button>
                            <button
                                onClick={onClose}
                                className="overline"
                            >
                                {t(COPY.close, lang)}
                            </button>
                            <button
                                onClick={onNext}
                                data-testid="modal-bottom-next"
                                className="group inline-flex items-center gap-3 text-ink"
                            >
                                <span className="text-sm tracking-[0.18em] uppercase">
                                    {t(COPY.next, lang)}
                                </span>
                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-500 group-hover:translate-x-1"
                                />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const MetaRow = ({ label, value }) => (
    <div>
        <div className="overline mb-1.5">{label}</div>
        <div className="text-base md:text-lg text-ink">{value}</div>
    </div>
);

export default ProjectModal;
