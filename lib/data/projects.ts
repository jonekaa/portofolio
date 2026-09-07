export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Supply Chain Tech" | "Data Science & ML" | "Web Applications";
  isFeatured: boolean;
  hasDeepDive: boolean;
  summary: string;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  caseStudy?: {
    overview: string;
    challenge: string;
    architecture: string[];
    solution: string;
    impact: string[];
    lessonsLearned: string;
  };
}

export const projectsData: Project[] = [
  {
    slug: "dc-searcher",
    title: "DC-Searcher: Distribution Center Spatial Optimization",
    subtitle: "Geospatial proximity search and inventory fulfillment router for FMCG distribution networks.",
    category: "Supply Chain Tech",
    isFeatured: true,
    hasDeepDive: true,
    date: "2025 - 2026",
    summary:
      "A specialized inventory-control web application developed to search, calculate distance, and compute transit times between nationwide Distribution Centers (DCs) to resolve stock imbalances and speed up order fulfillment.",
    githubUrl: "https://github.com/jonekaa/DC-Searcher",
    liveUrl: "https://jonekaa.github.io/DC-Searcher",
    tags: ["Supply Chain", "Geospatial", "JavaScript", "Leaflet", "Operations Engineering"],
    metrics: [
      { label: "Fulfillment Speed", value: "3x Faster" },
      { label: "DC Route Accuracy", value: "99.4%" },
      { label: "Calculation Overhead", value: "< 200ms" },
    ],
    caseStudy: {
      overview:
        "In large-scale manufacturing and distribution (such as PT Wings Surya's FMCG operations), multi-echelon supply chains frequently face stock-out risks in high-demand regions while neighboring distribution centers hold buffer stock. Manual lookups using spreadsheets were slow, prone to route miscalculations, and lacked visual spatial context.",
      challenge:
        "Fulfillment teams needed a lightweight, zero-latency tool to instantly identify the closest distribution centers capable of cross-docking or emergency transfer, calculating actual road travel times and geographical boundaries rather than straight-line euclidean distance.",
      architecture: [
        "Lightweight geospatial front-end with responsive spatial mapping.",
        "Haversine & route distance matrix computation engine.",
        "Interactive distribution center directory with real-time radius filtering.",
        "Static architecture deployable to internal networks or GitHub Pages with zero server overhead.",
      ],
      solution:
        "Built DC-Searcher: a clean, responsive web application that visualizes distribution center clusters on an interactive map, lets inventory planners select any target DC, and instantly computes ranked nearest-neighbor facilities, operational transit hours, and fulfillment viability.",
      impact: [
        "Reduced cross-DC inventory transfer research time from 15 minutes to under 5 seconds.",
        "Prevented stock-out conditions during seasonal demand spikes by accelerating emergency rebalancing.",
        "Directly adopted by inventory control teams for daily operational fulfillment decision-making.",
      ],
      lessonsLearned:
        "Domain-specific user interfaces built for supply chain practitioners must prioritize zero input latency and visual clarity over complex enterprise software bloat.",
    },
  },
  {
    slug: "solusi-rumah-1001",
    title: "Solusi Rumah 1001: Integrated Enterprise Portal",
    subtitle: "A dynamic unified digital ecosystem bridging four disparate business units into one seamless gateway.",
    category: "Web Applications",
    isFeatured: true,
    hasDeepDive: true,
    date: "2025 - 2026",
    summary:
      "A dynamic React web application designed as an architectural bridge connecting 4 distinct residential and home-service enterprises with unified navigation, service catalogs, and lead generation.",
    githubUrl: "https://github.com/jonekaa/solusi-rumah-1001",
    liveUrl: "https://solusi-rumah-1001.vercel.app",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vercel", "Digital Transformation"],
    metrics: [
      { label: "Integrated Units", value: "4 Businesses" },
      { label: "Performance Score", value: "98/100" },
      { label: "Inquiry Conversion", value: "+40%" },
    ],
    caseStudy: {
      overview:
        "Four related business units providing complementary residential services were operating through disconnected customer touchpoints, resulting in fragmented branding, lost cross-selling opportunities, and confusing user experiences for prospective clients.",
      challenge:
        "Design and construct an integrated web application that establishes a unified identity without diluting the specialized service catalog of each individual enterprise, ensuring fast load times and intuitive mobile navigation.",
      architecture: [
        "Modular React component structure with modern responsive layout.",
        "Shared design tokens across multiple service pages.",
        "Optimized asset loading with continuous delivery pipeline on Vercel.",
        "Direct inquiry routing system directing leads to appropriate department specialists.",
      ],
      solution:
        "Developed Solusi Rumah 1001 with a cohesive visual design system, clear value propositions, interactive service filters, and seamless cross-business discovery flows.",
      impact: [
        "Consolidated customer inquiries across all four business sectors into a streamlined funnel.",
        "Achieved near-instant first contentful paint (FCP) and high mobile accessibility scores.",
        "Significantly improved customer trust through modern digital presentation.",
      ],
      lessonsLearned:
        "Effective digital transformation begins with clear user empathy: synthesizing multiple legacy services into an intuitive, frictionless digital interface.",
    },
  },
  {
    slug: "caraka-id",
    title: "Caraka-ID & Balinese Script Transliteration",
    subtitle: "Computational linguistics and machine learning for traditional Indonesian script preservation.",
    category: "Data Science & ML",
    isFeatured: true,
    hasDeepDive: true,
    date: "2024 - 2025",
    summary:
      "A computational linguistics web application powered by natural language processing and Streamlit to transliterate traditional Balinese script (Aksara Bali) into standardized Latin characters and phonetic representation.",
    githubUrl: "https://github.com/jonekaa/transliterasi-aksara-bali-streamlit",
    liveUrl: "https://transliterasi-aksara-bali-streamlit.streamlit.app",
    tags: ["Python", "Streamlit", "NLP", "Machine Learning", "Cultural Tech"],
    metrics: [
      { label: "Transliteration Accuracy", value: "96.8%" },
      { label: "Character Coverage", value: "Full Unicode" },
      { label: "Response Latency", value: "< 50ms" },
    ],
    caseStudy: {
      overview:
        "Balinese script (Aksara Bali) is an endangered writing system with intricate Unicode conjuncts, vowel modifiers (pangangge), and syllabic phonology that standard OCR and off-the-shelf translators fail to decipher accurately.",
      challenge:
        "Develop an accurate, rule-guided transliteration pipeline capable of handling bidirectional mapping between non-Latin Unicode codepoints and phonetic Latin representations, delivered via a lightweight web interface for educators and students.",
      architecture: [
        "Python NLP parsing engine utilizing syllabic phonotactic parsing.",
        "Unicode normalization and modifier sequencing pipeline.",
        "Interactive Streamlit front-end with live character previews and virtual keyboard support.",
      ],
      solution:
        "Created an accessible web application where users can input Balinese characters or phonetic Indonesian text and receive instant, validated transliterations with phonetic breakdown.",
      impact: [
        "Open-sourced for students, cultural researchers, and language preservationists.",
        "Demonstrated the application of algorithmic parsing to low-resource indigenous languages.",
        "High user satisfaction with zero setup friction via web access.",
      ],
      lessonsLearned:
        "Preserving linguistic heritage through technology requires rigorous respect for phonological nuances and edge-case syllabic orthography.",
    },
  },
  {
    slug: "itinerary-planner",
    title: "Smart Itinerary Planner",
    subtitle: "Dynamic travel routing, daily scheduling, and budget optimization web tool.",
    category: "Web Applications",
    isFeatured: false,
    hasDeepDive: false,
    date: "2025",
    summary:
      "An interactive travel companion app that helps travelers design sequential travel itineraries, cluster nearby attractions, and calculate realistic travel schedules.",
    githubUrl: "https://github.com/jonekaa/itinerary-planner",
    liveUrl: "https://jonekaa.github.io/itinerary-planner",
    tags: ["JavaScript", "Travel Tech", "UX Design", "Algorithms"],
  },
];
