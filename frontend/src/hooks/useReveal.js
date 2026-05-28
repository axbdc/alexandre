import { useEffect, useRef } from "react";

/** IntersectionObserver-powered reveal hook. Adds `.in` to elements with `.reveal`. */
const useReveal = (deps = []) => {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current || document;
        const items = root.querySelectorAll(".reveal");
        if (!items.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );

        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return rootRef;
};

export default useReveal;
