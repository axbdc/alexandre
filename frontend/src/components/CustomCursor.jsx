import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
    const dotRef = useRef(null);

    useEffect(() => {
        const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!isFinePointer) return;

        document.body.classList.add("has-custom-cursor");
        const dot = dotRef.current;
        let raf = 0;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let tx = x;
        let ty = y;

        const onMove = (e) => {
            tx = e.clientX;
            ty = e.clientY;
        };

        const tick = () => {
            x += (tx - x) * 0.22;
            y += (ty - y) * 0.22;
            if (dot) dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            raf = requestAnimationFrame(tick);
        };

        const onOver = (e) => {
            const el = e.target.closest("a, button, [data-cursor='hover'], input, textarea, label");
            if (el && dot) dot.classList.add("hover");
        };
        const onOut = (e) => {
            const el = e.target.closest("a, button, [data-cursor='hover'], input, textarea, label");
            if (el && dot) dot.classList.remove("hover");
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseover", onOver);
        window.addEventListener("mouseout", onOut);
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseover", onOver);
            window.removeEventListener("mouseout", onOut);
            document.body.classList.remove("has-custom-cursor");
        };
    }, []);

    return <div ref={dotRef} className="cursor-dot" aria-hidden="true" data-testid="custom-cursor" />;
};

export default CustomCursor;
