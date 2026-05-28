// Content for Alexandre Cosme's portfolio. PT and EN versions.
// 5 categories × 5 placeholder projects = 25 cards.
// Replace cover images and copy with the real work later.

export const NAV = {
    work: { PT: "Trabalhos", EN: "Work" },
    about: { PT: "Sobre", EN: "About" },
    services: { PT: "Serviços", EN: "Services" },
    experience: { PT: "Percurso", EN: "Experience" },
    contact: { PT: "Contacto", EN: "Contact" },
};

export const HERO = {
    overline: {
        PT: "Portfólio — Disponível para projetos 2026",
        EN: "Portfolio — Available for 2026 projects",
    },
    role: { PT: "Multimedia & AR Specialist", EN: "Multimedia & AR Specialist" },
    location: { PT: "Ericeira, Portugal", EN: "Ericeira, Portugal" },
    intro: {
        PT: "Design, AR e imagem para marcas que recusam o óbvio. Trabalho na fronteira entre o gráfico, o tridimensional e o que ainda não tem nome.",
        EN: "Design, AR and image for brands that refuse the obvious. I work on the edge between graphic, three-dimensional, and what has yet to be named.",
    },
    cta: { PT: "Ver trabalhos", EN: "See work" },
    cta_secondary: { PT: "Falar comigo", EN: "Get in touch" },
    floating_note: {
        PT: "Selecionados — 2022 / 2025",
        EN: "Selected — 2022 / 2025",
    },
};

export const SECTION_LABELS = {
    work: { PT: "Trabalhos", EN: "Work" },
    about: { PT: "Sobre", EN: "About" },
    services: { PT: "Serviços", EN: "Services" },
    experience: { PT: "Percurso", EN: "Experience" },
    contact: { PT: "Vamos trabalhar juntos", EN: "Let's work together" },
};

// -------- Categories --------
export const CATEGORIES = [
    { id: "all", label: { PT: "Todos", EN: "All" } },
    { id: "ar3d", label: { PT: "AR & 3D", EN: "AR & 3D" } },
    { id: "graphic", label: { PT: "Design Gráfico", EN: "Graphic Design" } },
    { id: "photo", label: { PT: "Fotografia", EN: "Photography" } },
    { id: "web", label: { PT: "Web", EN: "Web" } },
    { id: "motion", label: { PT: "Motion", EN: "Motion" } },
];

// -------- Projects --------
// 5 placeholders per category. Replace cover/title/summary with real work.
export const PROJECTS = [
    // ===== AR & 3D =====
    {
        id: "ar3d-01",
        category: "ar3d",
        title: { PT: "Camada Aumentada", EN: "Augmented Layer" },
        subtitle: { PT: "AR / Campanha", EN: "AR / Campaign" },
        client: "YDigital Media",
        year: "2025",
        cover: "https://static.prod-images.emergentagent.com/jobs/70fc049d-38ef-4031-895b-4ae45bbdcd28/images/53e00eff551a39f250734a1fab64ab0846a35961911b6c40105b82e8c0b39173.png",
        summary: {
            PT: "Experiência interativa em AR para uma campanha de produto.",
            EN: "Interactive AR experience for a product campaign.",
        },
    },
    {
        id: "ar3d-02",
        category: "ar3d",
        title: { PT: "Sistema Concêntrico", EN: "Concentric System" },
        subtitle: { PT: "3D / Direção de Arte", EN: "3D / Art Direction" },
        client: { PT: "Estudo pessoal", EN: "Personal study" },
        year: "2024",
        cover: "https://images.pexels.com/photos/13907756/pexels-photo-13907756.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Estudo em modelação 3D e composição de luz.",
            EN: "Study in 3D modelling and light composition.",
        },
    },
    {
        id: "ar3d-03",
        category: "ar3d",
        title: { PT: "Filtro de Marca", EN: "Brand Filter" },
        subtitle: { PT: "AR / Social", EN: "AR / Social" },
        client: { PT: "Cliente — confidencial", EN: "Client — confidential" },
        year: "2025",
        cover: "https://images.pexels.com/photos/9874642/pexels-photo-9874642.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Filtro AR para Instagram e TikTok, integrado com a identidade visual.",
            EN: "AR filter for Instagram and TikTok, integrated with the brand identity.",
        },
    },
    {
        id: "ar3d-04",
        category: "ar3d",
        title: { PT: "Vaso Maquette", EN: "Maquette Vessel" },
        subtitle: { PT: "3D / Produto", EN: "3D / Product" },
        client: { PT: "Estudo pessoal", EN: "Personal study" },
        year: "2024",
        cover: "https://images.pexels.com/photos/4040601/pexels-photo-4040601.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Render de produto cerâmico, ensaio de materiais e iluminação.",
            EN: "Ceramic product render, materials and lighting study.",
        },
    },
    {
        id: "ar3d-05",
        category: "ar3d",
        title: { PT: "Stand Imersivo", EN: "Immersive Booth" },
        subtitle: { PT: "AR / Evento", EN: "AR / Event" },
        client: "YDigital Media",
        year: "2025",
        cover: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Ativação AR para um stand de feira — câmara, gesto e marca.",
            EN: "AR activation for a trade fair booth — camera, gesture and brand.",
        },
    },

    // ===== Design Gráfico =====
    {
        id: "graphic-01",
        category: "graphic",
        title: { PT: "Identidade em Branco", EN: "Identity in Blank" },
        subtitle: { PT: "Identidade", EN: "Identity" },
        client: "GCI Media Group",
        year: "2024",
        cover: "https://images.pexels.com/photos/5706015/pexels-photo-5706015.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Papelaria, packaging e direção fotográfica para um estúdio.",
            EN: "Stationery, packaging and photographic direction for a studio.",
        },
    },
    {
        id: "graphic-02",
        category: "graphic",
        title: { PT: "Campanha Tipográfica", EN: "Typographic Campaign" },
        subtitle: { PT: "Editorial / Cartaz", EN: "Editorial / Poster" },
        client: { PT: "Cliente agência", EN: "Agency client" },
        year: "2024",
        cover: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Série de cartazes baseada em composição tipográfica monocromática.",
            EN: "Poster series based on monochromatic typographic composition.",
        },
    },
    {
        id: "graphic-03",
        category: "graphic",
        title: { PT: "Packaging Concept", EN: "Packaging Concept" },
        subtitle: { PT: "Packaging", EN: "Packaging" },
        client: "GCI Media Group",
        year: "2024",
        cover: "https://images.pexels.com/photos/3850515/pexels-photo-3850515.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Sistema de packaging para uma linha de produtos artesanais.",
            EN: "Packaging system for an artisanal product line.",
        },
    },
    {
        id: "graphic-04",
        category: "graphic",
        title: { PT: "Anuário Editorial", EN: "Annual Editorial" },
        subtitle: { PT: "Editorial / Print", EN: "Editorial / Print" },
        client: { PT: "Cliente agência", EN: "Agency client" },
        year: "2023",
        cover: "https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Direção de arte e paginação de um anuário corporativo.",
            EN: "Art direction and layout for a corporate annual report.",
        },
    },
    {
        id: "graphic-05",
        category: "graphic",
        title: { PT: "Identidade Local", EN: "Local Identity" },
        subtitle: { PT: "Identidade / Logo", EN: "Identity / Logo" },
        client: { PT: "Projeto cliente", EN: "Client project" },
        year: "2023",
        cover: "https://images.pexels.com/photos/8829247/pexels-photo-8829247.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Identidade visual para uma marca de moda independente.",
            EN: "Visual identity for an independent fashion brand.",
        },
    },

    // ===== Fotografia =====
    {
        id: "photo-01",
        category: "photo",
        title: { PT: "Atlântico Norte", EN: "North Atlantic" },
        subtitle: { PT: "Fotografia / Surf", EN: "Photography / Surf" },
        client: { PT: "Freelance — Ericeira", EN: "Freelance — Ericeira" },
        year: "2023",
        cover: "https://images.pexels.com/photos/5578703/pexels-photo-5578703.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Série em torno do surf na Ericeira — pranchas, hora dourada, oceano.",
            EN: "Series around surfing in Ericeira — boards, golden hour, ocean.",
        },
    },
    {
        id: "photo-02",
        category: "photo",
        title: { PT: "Retrato em Estúdio", EN: "Studio Portrait" },
        subtitle: { PT: "Sessão privada", EN: "Private session" },
        client: { PT: "Cliente particular", EN: "Private client" },
        year: "2024",
        cover: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Sessão em estúdio com luz controlada e direção de pose.",
            EN: "Studio session with controlled light and pose direction.",
        },
    },
    {
        id: "photo-03",
        category: "photo",
        title: { PT: "Linha de Costa", EN: "Coastline" },
        subtitle: { PT: "Paisagem", EN: "Landscape" },
        client: { PT: "Projeto pessoal", EN: "Personal project" },
        year: "2023",
        cover: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Ensaio sobre o litoral oeste — luz, vento e textura.",
            EN: "Essay on the west coast — light, wind and texture.",
        },
    },
    {
        id: "photo-04",
        category: "photo",
        title: { PT: "Prova de Velocidade", EN: "Speed Trial" },
        subtitle: { PT: "Evento desportivo", EN: "Sports event" },
        client: { PT: "Cliente desportivo", EN: "Sports client" },
        year: "2024",
        cover: "https://images.pexels.com/photos/2519780/pexels-photo-2519780.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Cobertura fotográfica de uma prova local de automobilismo.",
            EN: "Photographic coverage of a local motorsport race.",
        },
    },
    {
        id: "photo-05",
        category: "photo",
        title: { PT: "Sessão de Marca", EN: "Brand Shoot" },
        subtitle: { PT: "Lifestyle / Marca", EN: "Lifestyle / Brand" },
        client: { PT: "Cliente agência", EN: "Agency client" },
        year: "2024",
        cover: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Direção e fotografia para uma campanha lifestyle.",
            EN: "Direction and photography for a lifestyle campaign.",
        },
    },

    // ===== Web =====
    {
        id: "web-01",
        category: "web",
        title: { PT: "Forma & Função", EN: "Form & Function" },
        subtitle: { PT: "Website / Editorial", EN: "Website / Editorial" },
        client: { PT: "Projeto cliente", EN: "Client project" },
        year: "2024",
        cover: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Website editorial com tipografia expressiva e composição assimétrica.",
            EN: "Editorial website with expressive typography and asymmetric composition.",
        },
    },
    {
        id: "web-02",
        category: "web",
        title: { PT: "Landing de Lançamento", EN: "Launch Landing" },
        subtitle: { PT: "Landing page", EN: "Landing page" },
        client: { PT: "Cliente agência", EN: "Agency client" },
        year: "2024",
        cover: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Landing page para o lançamento de um produto digital.",
            EN: "Landing page for the launch of a digital product.",
        },
    },
    {
        id: "web-03",
        category: "web",
        title: { PT: "Sistema de UI", EN: "UI System" },
        subtitle: { PT: "UI / Design System", EN: "UI / Design System" },
        client: { PT: "Cliente agência", EN: "Agency client" },
        year: "2025",
        cover: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Componentes, tokens e guidelines para um produto SaaS.",
            EN: "Components, tokens and guidelines for a SaaS product.",
        },
    },
    {
        id: "web-04",
        category: "web",
        title: { PT: "Portfolio Estúdio", EN: "Studio Portfolio" },
        subtitle: { PT: "Website / Estúdio", EN: "Website / Studio" },
        client: { PT: "Estúdio criativo", EN: "Creative studio" },
        year: "2023",
        cover: "https://images.pexels.com/photos/265125/pexels-photo-265125.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Website portfolio para um estúdio criativo independente.",
            EN: "Portfolio website for an independent creative studio.",
        },
    },
    {
        id: "web-05",
        category: "web",
        title: { PT: "E-commerce Boutique", EN: "Boutique E-commerce" },
        subtitle: { PT: "E-commerce", EN: "E-commerce" },
        client: { PT: "Cliente boutique", EN: "Boutique client" },
        year: "2024",
        cover: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Loja online minimal para uma marca de moda boutique.",
            EN: "Minimal online store for a boutique fashion brand.",
        },
    },

    // ===== Motion =====
    {
        id: "motion-01",
        category: "motion",
        title: { PT: "Logo em Movimento", EN: "Logo in Motion" },
        subtitle: { PT: "Motion / Branding", EN: "Motion / Branding" },
        client: { PT: "Cliente agência", EN: "Agency client" },
        year: "2024",
        cover: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Animação de um logótipo para apresentação institucional.",
            EN: "Logo animation for institutional presentation.",
        },
    },
    {
        id: "motion-02",
        category: "motion",
        title: { PT: "Bumper de Lançamento", EN: "Launch Bumper" },
        subtitle: { PT: "Motion / Vídeo", EN: "Motion / Video" },
        client: { PT: "Cliente agência", EN: "Agency client" },
        year: "2024",
        cover: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Bumper de abertura para um produto digital.",
            EN: "Opening bumper for a digital product.",
        },
    },
    {
        id: "motion-03",
        category: "motion",
        title: { PT: "Social Cut", EN: "Social Cut" },
        subtitle: { PT: "Edição social", EN: "Social editing" },
        client: { PT: "Cliente agência", EN: "Agency client" },
        year: "2025",
        cover: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1",
        summary: {
            PT: "Conjunto de edições verticais para campanhas em Reels e TikTok.",
            EN: "Vertical edit set for Reels and TikTok campaigns.",
        },
    },
    {
        id: "motion-04",
        category: "motion",
        title: { PT: "Reel Showreel", EN: "Reel Showreel" },
        subtitle: { PT: "Reel anual", EN: "Annual reel" },
        client: { PT: "Projeto pessoal", EN: "Personal project" },
        year: "2024",
        cover: "https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Showreel anual reunindo os melhores momentos em motion e vídeo.",
            EN: "Annual showreel gathering the best moments in motion and video.",
        },
    },
    {
        id: "motion-05",
        category: "motion",
        title: { PT: "Teaser de Evento", EN: "Event Teaser" },
        subtitle: { PT: "Motion / Evento", EN: "Motion / Event" },
        client: "PALCO 22",
        year: "2023",
        cover: "https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=1200",
        summary: {
            PT: "Teaser audiovisual para a divulgação de um evento.",
            EN: "Audiovisual teaser for the promotion of an event.",
        },
    },
];

export const ABOUT = {
    heading: {
        PT: "Designer multidisciplinar, 22 anos, baseado entre a Ericeira e Lisboa.",
        EN: "Multidisciplinary designer, 22, based between Ericeira and Lisbon.",
    },
    body: [
        {
            PT: "Formado em Engenharia Multimédia pelo ISTEC. Trabalho atualmente como Multimedia & AR Specialist na YDigital Media, depois de uma passagem pelo GCI Media Group enquanto designer gráfico.",
            EN: "Multimedia Engineering graduate from ISTEC. Currently Multimedia & AR Specialist at YDigital Media after an internship at GCI Media Group as graphic designer.",
        },
        {
            PT: "Movo-me confortavelmente entre o estático e o interativo, entre uma campanha impressa e uma experiência em AR. Encaro cada brief como um problema de composição — e o resto resolve-se com gosto e disciplina.",
            EN: "I move comfortably between the static and the interactive, between a print campaign and an AR experience. I treat each brief as a composition problem — the rest is solved with taste and discipline.",
        },
    ],
    pull: {
        PT: "Aprender depressa, errar com calma, entregar com clareza.",
        EN: "Learn fast, fail calmly, deliver with clarity.",
    },
};

export const SERVICES = [
    {
        no: "01",
        title: { PT: "Realidade Aumentada", EN: "Augmented Reality" },
        body: {
            PT: "Experiências AR para marcas, campanhas e eventos. Conceito, modelação e implementação.",
            EN: "AR experiences for brands, campaigns and events. Concept, modelling and implementation.",
        },
    },
    {
        no: "02",
        title: { PT: "Design Gráfico", EN: "Graphic Design" },
        body: {
            PT: "Identidade visual, campanhas, editorial e packaging com sensibilidade tipográfica.",
            EN: "Visual identity, campaigns, editorial and packaging with typographic sensibility.",
        },
    },
    {
        no: "03",
        title: { PT: "3D & Direção de Arte", EN: "3D & Art Direction" },
        body: {
            PT: "Modelação, render e composição em Blender — para web, social, AR ou impressão.",
            EN: "Modelling, render and composition in Blender — for web, social, AR or print.",
        },
    },
    {
        no: "04",
        title: { PT: "Web Design", EN: "Web Design" },
        body: {
            PT: "Sites editoriais e portfólios com tipografia cuidada, HTML/CSS limpo e Figma como base.",
            EN: "Editorial websites and portfolios with careful typography, clean HTML/CSS and Figma as base.",
        },
    },
    {
        no: "05",
        title: { PT: "Fotografia", EN: "Photography" },
        body: {
            PT: "Eventos desportivos, sessões privadas e direção de imagem para marcas.",
            EN: "Sporting events, private sessions and image direction for brands.",
        },
    },
    {
        no: "06",
        title: { PT: "Vídeo & Pós-produção", EN: "Video & Post-production" },
        body: {
            PT: "Edição em Premiere e motion em After Effects — peças curtas, social cuts, teasers.",
            EN: "Premiere editing and After Effects motion — shorts, social cuts, teasers.",
        },
    },
];

export const TOOLS = [
    "Photoshop",
    "Illustrator",
    "Lightroom",
    "Blender",
    "After Effects",
    "Premiere Pro",
    "Figma",
    "HTML / CSS",
];

export const EXPERIENCE = [
    {
        period: "2025 — Hoje",
        period_en: "2025 — Present",
        role: { PT: "Multimedia & AR Specialist", EN: "Multimedia & AR Specialist" },
        company: "YDigital Media",
        scope: {
            PT: "AR, design gráfico, 3D, web design, produção gráfica.",
            EN: "AR, graphic design, 3D, web design, graphic production.",
        },
    },
    {
        period: "2024",
        period_en: "2024",
        role: { PT: "Designer Gráfico (Estágio)", EN: "Graphic Designer (Internship)" },
        company: "GCI Media Group",
        scope: {
            PT: "Campanhas publicitárias, web design, packaging, expositores.",
            EN: "Advertising campaigns, web design, packaging, stands.",
        },
    },
    {
        period: "2022 — Hoje",
        period_en: "2022 — Present",
        role: { PT: "Fotógrafo Freelancer", EN: "Freelance Photographer" },
        company: { PT: "Independente", EN: "Independent" },
        scope: {
            PT: "Eventos desportivos e sessões privadas.",
            EN: "Sporting events and private sessions.",
        },
    },
    {
        period: "2022 — 2023",
        period_en: "2022 — 2023",
        role: { PT: "Técnico de Montagem Audiovisual", EN: "Audiovisual Technician" },
        company: "PALCO 22",
        scope: {
            PT: "Instalação de sinal de vídeo e áudio, operação de câmara, organização de eventos.",
            EN: "Video and audio signal install, camera operation, event organisation.",
        },
    },
];

export const CONTACT = {
    heading: {
        PT: "Tem um projeto. Vamos\nfazê-lo bem.",
        EN: "Got a project. Let's\nmake it well.",
    },
    sub: {
        PT: "Para propostas, colaborações ou apenas para dizer olá — envie uma mensagem. Respondo geralmente em 48h.",
        EN: "For briefs, collaborations or just to say hi — send a message. I usually reply within 48h.",
    },
    fields: {
        name: { PT: "Nome", EN: "Name" },
        email: { PT: "Email", EN: "Email" },
        subject: { PT: "Assunto (opcional)", EN: "Subject (optional)" },
        message: { PT: "A tua mensagem", EN: "Your message" },
        submit: { PT: "Enviar mensagem", EN: "Send message" },
        sending: { PT: "A enviar…", EN: "Sending…" },
        success: {
            PT: "Mensagem enviada. Falamos em breve.",
            EN: "Message sent. Talk soon.",
        },
        error: {
            PT: "Algo correu mal. Tenta novamente ou escreve diretamente.",
            EN: "Something went wrong. Try again or write directly.",
        },
    },
};

export const FOOTER = {
    rights: {
        PT: "Todos os direitos reservados",
        EN: "All rights reserved",
    },
    colophon: {
        PT: "Cabinet Grotesk · Satoshi · Newsreader",
        EN: "Cabinet Grotesk · Satoshi · Newsreader",
    },
    available: {
        PT: "Disponível para projetos",
        EN: "Available for projects",
    },
};

export const SOCIAL = {
    email: "alexandrexbdcosme@gmail.com",
    phone: "+351 933 059 987",
    linkedin: "https://www.linkedin.com/in/alexandre-cosme-857a59198/",
    location: "Ribamar, Ericeira",
};

// ---- Enrich each project with placeholder long details, gallery and tools ----
// You can override any of these fields directly on a project above.

const TOOLS_BY_CATEGORY = {
    ar3d: ["Blender", "Spark AR", "Photoshop", "After Effects"],
    graphic: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    photo: ["Lightroom", "Photoshop", "Sony Alpha"],
    web: ["Figma", "HTML / CSS", "React", "Framer"],
    motion: ["After Effects", "Premiere Pro", "Blender"],
};

const DEFAULT_DETAILS = {
    PT: (p) =>
        `Este projeto explora ${p.subtitle.PT.toLowerCase()} num contexto de ${p.client && typeof p.client === "object" ? p.client.PT : p.client || "cliente"}. O ponto de partida foi um brief claro: encontrar uma linguagem visual que conjugasse ritmo, contraste e elegância — sem nunca cair no óbvio.

A abordagem assentou em três fases — pesquisa, exploração e refinamento. Comecei por mapear referências, materiais e paletas; depois construí uma série de variações para testar direção; por fim, consolidei o sistema final com atenção a cada detalhe tipográfico, fotográfico e de composição.

O resultado é um conjunto de peças coerente, com personalidade própria e pronto para escalar entre suportes — print, digital, AR e vídeo. (Esta descrição é um placeholder — substitui pelo case study real.)`,
    EN: (p) =>
        `This project explores ${p.subtitle.EN.toLowerCase()} in the context of ${p.client && typeof p.client === "object" ? p.client.EN : p.client || "client"}. The starting point was a clear brief: find a visual language that combines rhythm, contrast and elegance — without ever falling into the obvious.

The approach was built on three phases — research, exploration and refinement. I first mapped references, materials and palettes; then built a series of variations to test direction; finally, consolidated the final system with attention to every typographic, photographic and compositional detail.

The result is a coherent set of pieces with a personality of their own, ready to scale across media — print, digital, AR and video. (This is placeholder copy — replace with the real case study.)`,
};

const GALLERY_BY_CATEGORY = {
    ar3d: [
        "https://images.pexels.com/photos/4040601/pexels-photo-4040601.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/13907756/pexels-photo-13907756.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/9874642/pexels-photo-9874642.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    graphic: [
        "https://images.pexels.com/photos/5706015/pexels-photo-5706015.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/3850515/pexels-photo-3850515.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    photo: [
        "https://images.pexels.com/photos/5578703/pexels-photo-5578703.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    web: [
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/265125/pexels-photo-265125.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
    motion: [
        "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
};

PROJECTS.forEach((p) => {
    if (!p.details) {
        p.details = {
            PT: DEFAULT_DETAILS.PT(p),
            EN: DEFAULT_DETAILS.EN(p),
        };
    }
    if (!p.gallery) {
        const base = GALLERY_BY_CATEGORY[p.category] || [];
        // Use cover + 3 placeholders. Replace with real images later.
        p.gallery = [p.cover, ...base];
    }
    if (!p.tools) {
        p.tools = TOOLS_BY_CATEGORY[p.category] || [];
    }
});
