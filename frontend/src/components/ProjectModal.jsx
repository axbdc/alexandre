import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ArrowUpRight, Box } from "lucide-react";
import { useLang, t } from "../context/LanguageContext";
import { launchAR, hasARAssets } from "../lib/ar";

const localize = (v, lang) => (typeof v === "string" ? v : t(v, lang));

const COPY = {
    client: { PT: "Cliente", EN: "Client" },
    year: { PT: "Ano", EN: "Year" },
    role: { PT: "Função", EN: "Role" },
    overview: { PT: "Sobre o projeto", EN: "About the project" },
    gallery: { PT: "Galeria", EN: "Gallery" },
    tools: { PT: "Ferramentas", EN: "Tools" },
    link: { PT: "Ver projeto", EN: "View project" },
    link_live: { PT: "Ver site ao vivo", EN: "Visit live site" },
    view_ar: { PT: "Ver em AR / 3D", EN: "View in AR / 3D" },
    prev: { PT: "Anterior", EN: "Previous" },
    next: { PT: "Seguinte", EN: "Next" },
    close: { PT: "Fechar", EN: "Close" },
    of: { PT: "de", EN: "of" },
};

// Moldura de browser para projetos web. Envolve um screenshot plano e faz com
// que pareça um site aberto. A barra de endereço mostra o domínio do `url`.
// Se passares `srcMobile`, aparece um telemóvel sobreposto (efeito responsivo).
const BrowserFrame = ({ src, srcMobile, alt, url }) => {
    let domain = "";
    try {
        domain = new URL(url || "").hostname.replace(/^www\./, "");
    } catch (e) {
        domain = "";
    }
    return (
        <div className="relative">
            {/* Janela desktop */}
            <div className="border border-hairline bg-white shadow-[0_20px_50px_-25px_rgba(28,27,26,0.45)]">
                {/* Barra do browser */}
                <div className="flex items-center gap-2 h-9 px-3 border-b border-hairline bg-bone">
                    <span className="flex items-center gap-1.5 shrink-0">
                        <span className="h-2.5 w-2.5 rounded-full border border-hairline" />
                        <span className="h-2.5 w-2.5 rounded-full border border-hairline" />
                        <span className="h-2.5 w-2.5 rounded-full border border-hairline" />
                    </span>
                    {domain ? (
                        <span className="mx-auto max-w-[62%] truncate rounded-full border border-hairline bg-white px-3 py-0.5 text-[11px] tracking-wide text-mist">
                            {domain}
                        </span>
                    ) : (
                        <span className="mx-auto" />
                    )}
                    <span className="shrink-0 w-[46px]" />
                </div>
                {/* Viewport */}
                <div className="aspect-[16/10] overflow-hidden bg-white">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Telemóvel sobreposto (opcional) */}
            {srcMobile ? (
                <div className="absolute -bottom-4 -right-1 md:-right-4 w-[22%] max-w-[120px]">
                    <div className="border border-hairline bg-white rounded-[16px] overflow-hidden shadow-[0_18px_40px_-18px_rgba(28,27,26,0.5)]">
                        <div className="aspect-[9/19] overflow-hidden bg-white">
                            <img
                                src={srcMobile}
                                alt={`${alt} — mobile`}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

const ProjectModal = ({ project, index, total, onClose, onPrev, onNext }) => {
    const lang = useLang().lang;

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

    const isWeb = project?.category === "web";

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    data-testid="project-modal"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Blurred backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-ink/30 backdrop-blur-md"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    />

                    {/* Centered card */}
                    <motion.div
                        key={project.id}
                        className="relative bg-bone w-full max-w-[940px] max-h-[88vh] flex flex-col shadow-[0_30px_80px_-20px_rgba(28,27,26,0.35)]"
                        initial={{ y: 24, opacity: 0, scale: 0.985 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 12, opacity: 0, scale: 0.99 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Top bar */}
                        <div className="shrink-0 hairline-bottom flex items-center justify-between px-5 md:px-7 h-12 md:h-14 bg-bone">
                            <span className="overline">
                                {String(index + 1).padStart(2, "0")}{" "}
                                <span className="text-mist">
                                    {t(COPY.of, lang)}{" "}
                                    {String(total).padStart(2, "0")}
                                </span>
                                <span className="text-mist mx-2">·</span>
                                <span className="text-mist">
                                    {t(project.subtitle, lang)}
                                </span>
                            </span>

                            <div className="flex items-center gap-1.5">
                                <button
                                    onClick={onPrev}
                                    aria-label={t(COPY.prev, lang)}
                                    data-testid="modal-prev"
                                    className="h-8 w-8 inline-flex items-center justify-center border border-hairline text-ink hover:border-ink transition-colors"
                                >
                                    <ArrowLeft size={14} />
                                </button>
                                <button
                                    onClick={onNext}
                                    aria-label={t(COPY.next, lang)}
                                    data-testid="modal-next"
                                    className="h-8 w-8 inline-flex items-center justify-center border border-hairline text-ink hover:border-ink transition-colors"
                                >
                                    <ArrowRight size={14} />
                                </button>
                                <button
                                    onClick={onClose}
                                    aria-label={t(COPY.close, lang)}
                                    data-testid="modal-close"
                                    className="ml-1 h-8 w-8 inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-bone transition-colors"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable content */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="px-5 md:px-8 pt-6 md:pt-8 pb-4">
                                <h2
                                    data-testid="modal-title"
                                    className="font-display text-2xl md:text-4xl leading-[1] text-ink"
                                >
                                    {t(project.title, lang)}
                                </h2>
                                <div className="mt-2 text-sm text-graphite">
                                    {localize(project.client, lang)}
                                    <span className="text-mist mx-2">·</span>
                                    {project.year}
                                </div>
                            </div>

                            {/* Cover */}
                            <div
                                className={
                                    isWeb && project.cover_mobile
                                        ? "px-5 md:px-8 pb-6"
                                        : "px-5 md:px-8"
                                }
                            >
                                {isWeb ? (
                                    <BrowserFrame
                                        src={project.cover}
                                        srcMobile={project.cover_mobile}
                                        alt={t(project.title, lang)}
                                        url={project.url}
                                    />
                                ) : (
                                    <div className="relative project-image-wrap aspect-[16/9]">
                                        <img
                                            src={project.cover}
                                            alt={t(project.title, lang)}
                                        />
                                        {hasARAssets(project) && (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    launchAR({
                                                        glb: project.model_glb,
                                                        usdz: project.model_usdz,
                                                        title: t(
                                                            project.title,
                                                            lang,
                                                        ),
                                                        image: project.cover,
                                                    })
                                                }
                                                data-testid="modal-ar-button"
                                                className="absolute bottom-3 right-3 md:bottom-4 md:right-4 inline-flex items-center gap-2 bg-ink text-bone hover:bg-terracotta transition-colors duration-500 px-4 py-2.5 shadow-lg"
                                            >
                                                <Box size={14} />
                                                <span className="text-xs tracking-[0.18em] uppercase">
                                                    {t(COPY.view_ar, lang)}
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Body */}
                            <div className="px-5 md:px-8 pt-8 pb-2 grid grid-cols-12 gap-6">
                                <aside className="col-span-12 md:col-span-4 space-y-5 text-sm">
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
                                            <div className="overline mb-2">
                                                {t(COPY.tools, lang)}
                                            </div>
                                            <ul className="flex flex-wrap gap-x-3 gap-y-1">
                                                {project.tools.map((tt) => (
                                                    <li
                                                        key={tt}
                                                        className="text-sm text-ink"
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
                                            className="group inline-flex items-center gap-2 text-ink text-sm"
                                        >
                                            <span className="link-underline">
                                                {isWeb
                                                    ? t(COPY.link_live, lang)
                                                    : t(COPY.link, lang)}
                                            </span>
                                            <ArrowUpRight
                                                size={14}
                                                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </a>
                                    ) : null}
                                </aside>

                                <div className="col-span-12 md:col-span-8">
                                    <div className="overline mb-3">
                                        {t(COPY.overview, lang)}
                                    </div>
                                    <div className="space-y-4 text-sm md:text-base text-graphite leading-relaxed">
                                        {(project.details
                                            ? localize(
                                                  project.details,
                                                  lang,
                                              ).split(/\n\n+/)
                                            : [t(project.summary, lang)]
                                        ).map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Gallery */}
                            {project.gallery?.length ? (
                                <div className="px-5 md:px-8 pt-8 pb-8">
                                    <div className="overline mb-4">
                                        {t(COPY.gallery, lang)}
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        {project.gallery.map((src, i) => (
                                            <div
                                                key={i}
                                                className="project-image-wrap aspect-[4/3]"
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
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const MetaRow = ({ label, value }) => (
    <div>
        <div className="overline mb-1">{label}</div>
        <div className="text-sm md:text-base text-ink">{value}</div>
    </div>
);

export default ProjectModal;
