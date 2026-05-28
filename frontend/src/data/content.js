// Content for Alexandre Cosme's portfolio. PT and EN versions.
// Placeholders for projects — substitute later with real case studies.

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
    work: { PT: "Trabalhos selecionados", EN: "Selected work" },
    about: { PT: "Sobre", EN: "About" },
    services: { PT: "Serviços", EN: "Services" },
    experience: { PT: "Percurso", EN: "Experience" },
    contact: { PT: "Vamos trabalhar juntos", EN: "Let's work together" },
};

export const PROJECTS = [
    {
        id: "ar-campaign",
        index: "01",
        title: { PT: "Camada Aumentada", EN: "Augmented Layer" },
        category: { PT: "AR / Campanha", EN: "AR / Campaign" },
        client: { PT: "YDigital Media", EN: "YDigital Media" },
        year: "2025",
        cover: "https://static.prod-images.emergentagent.com/jobs/70fc049d-38ef-4031-895b-4ae45bbdcd28/images/53e00eff551a39f250734a1fab64ab0846a35961911b6c40105b82e8c0b39173.png",
        summary: {
            PT: "Experiência interativa em realidade aumentada para uma campanha de produto, ligando câmara, gesto e mensagem.",
            EN: "Interactive augmented reality experience for a product campaign, connecting camera, gesture and message.",
        },
        aspect: "tall",
    },
    {
        id: "3d-system",
        index: "02",
        title: { PT: "Sistema Concêntrico", EN: "Concentric System" },
        category: { PT: "3D / Direção de Arte", EN: "3D / Art Direction" },
        client: { PT: "Estudo pessoal", EN: "Personal study" },
        year: "2024",
        cover: "https://images.pexels.com/photos/13907756/pexels-photo-13907756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        summary: {
            PT: "Estudo em modelação 3D e composição: arcos sobrepostos, paleta quente, luz controlada — uma exploração de ritmo e profundidade.",
            EN: "3D modelling and composition study: stacked arches, warm palette, controlled light — an exploration of rhythm and depth.",
        },
        aspect: "wide",
    },
    {
        id: "sport-photo",
        index: "03",
        title: { PT: "Atlântico Norte", EN: "North Atlantic" },
        category: { PT: "Fotografia desportiva", EN: "Sports photography" },
        client: { PT: "Freelance — Ericeira", EN: "Freelance — Ericeira" },
        year: "2023",
        cover: "https://images.pexels.com/photos/5578703/pexels-photo-5578703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        summary: {
            PT: "Série fotográfica em torno do surf na Ericeira — pranchas, hora dourada e a textura do oceano como linguagem.",
            EN: "Photographic series around surfing in Ericeira — boards, golden hour and the texture of the ocean as language.",
        },
        aspect: "wide",
    },
    {
        id: "branding",
        index: "04",
        title: { PT: "Identidade em Branco", EN: "Identity in Blank" },
        category: { PT: "Identidade visual", EN: "Brand identity" },
        client: { PT: "GCI Media Group", EN: "GCI Media Group" },
        year: "2024",
        cover: "https://images.pexels.com/photos/5706015/pexels-photo-5706015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        summary: {
            PT: "Sistema de identidade minimal — papelaria, packaging e direção fotográfica para um estúdio independente.",
            EN: "Minimal identity system — stationery, packaging and photographic direction for an independent studio.",
        },
        aspect: "tall",
    },
    {
        id: "web-design",
        index: "05",
        title: { PT: "Forma & Função", EN: "Form & Function" },
        category: { PT: "Web Design", EN: "Web Design" },
        client: { PT: "Projeto cliente", EN: "Client project" },
        year: "2024",
        cover: "https://images.pexels.com/photos/9874642/pexels-photo-9874642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        summary: {
            PT: "Website editorial com tipografia expressiva e composição assimétrica — um experiment em ritmo e cor.",
            EN: "Editorial website with expressive typography and asymmetric composition — an experiment in rhythm and colour.",
        },
        aspect: "wide",
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
        period: "2025 — " + "Hoje",
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
        period: "2022 — " + "Hoje",
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
