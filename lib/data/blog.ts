export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "bridging-industrial-supply-chains-and-data-science",
    title: "Bridging Industrial Supply Chains and Modern Data Science: Lessons from the Fulfillment Frontline",
    excerpt:
      "Why real-world logistics bottlenecks cannot be solved by theoretical machine learning alone, and how frontline operational empathy drives true digital transformation.",
    publishedAt: "2026-02-15",
    readTime: "5 min read",
    category: "Supply Chain & Data",
    tags: ["Supply Chain", "Operations", "Data Science", "Optimization"],
    content: `
### The Gap Between Theory and The Factory Floor

When data scientists approach supply chain management, the standard instinct is to deploy complex forecasting models: ARIMA, Prophet, or transformer-based time series architectures. Yet on the fulfillment frontline of a massive FMCG manufacturer like PT Wings Surya, theoretical accuracy is often secondary to operational resilience.

Real-world fulfillment lives and dies on three unyielding constraints:
1. **Dynamic Lead Times**: Freight availability fluctuates due to regional weather, carrier capacity, and loading dock bottlenecks.
2. **Stock Imbalance vs. Capital Lockup**: Overstocking ties up working capital and warehouse footprint; understocking destroys the Order Fulfillment Rate (OFR).
3. **Operational Speed**: A planner needs answers in seconds, not hours of distributed cloud compute.

### Automating the Friction First

Before building deep learning models, the highest ROI often comes from eliminating manual data friction. In fulfillment operations, planners spend countless hours downloading ERP dumps, reformatting spreadsheets, and calculating cross-dock viability.

By introducing automated macros (via LibreOffice BASIC and Excel VBA) and lightweight internal dashboards, we reclaimed critical operational hours every single morning. This shift gave fulfillment specialists the bandwidth to focus on proactive rebalancing rather than reactive firefighting.

### The Hybrid Advantage

The most impactful solutions happen when domain expertise in logistics meets computational modeling. Understanding why a distribution center is experiencing a stockout (whether it is batch dispatch scheduling, transit delays, or erratic customer purchasing patterns) allows you to engineer features that actually matter to predictive models.
    `,
  },
  {
    slug: "spatial-optimization-in-distribution-center-logistics",
    title: "Spatial Optimization in Distribution Center Logistics: How DC-Searcher Speeds Up Fulfillment",
    excerpt:
      "A technical walkthrough of why straight-line distance fails in logistics networks and how geospatial routing reduces emergency inventory transfer times.",
    publishedAt: "2026-01-20",
    readTime: "4 min read",
    category: "Engineering & SCM",
    tags: ["Geospatial", "Algorithms", "DC-Searcher", "Logistics"],
    content: `
### The Flaw of Euclidean Distance in Physical Logistics

In geographical information systems (GIS), calculating the distance between two coordinates is mathematically trivial using the Haversine formula. However, in Indonesian supply chain networks (characterized by archipelagic geography, toll networks, and localized freight restrictions), as-the-crow-flies distance is deeply deceptive.

A distribution center located 40 kilometers away across a mountain pass or congested urban artery may take four times longer to reach than a facility 80 kilometers away along an open trans-provincial expressway.

### Designing DC-Searcher

To solve this for inventory control teams, I engineered **DC-Searcher**. The objective was simple: given any fulfillment center facing an emergency shortage, identify the optimal source facilities within a viable service radius based on actual transit practicality.

Key architectural pillars:
- **Instant Client-Side Filtering**: Spatial clustering and proximity queries execute with sub-200ms latency directly in the browser.
- **Visual Context**: Providing planners with clear geographical overlays helps them identify natural highway corridors rather than relying on abstract tables.
- **Operational Feasibility Scoring**: Integrating road travel estimates and inventory availability indicators into a single unified dashboard.

The result is a workflow that turns a 15-minute multi-tab research nightmare into a 3-click tactical decision.
    `,
  },
  {
    slug: "preserving-aksara-bali-with-computational-linguistics",
    title: "Preserving Aksara Bali: Computational Linguistics & Phonological Transliteration in Streamlit",
    excerpt:
      "How algorithmic syllable segmentation and phonetic mapping can safeguard endangered regional scripts through accessible web applications.",
    publishedAt: "2025-11-10",
    readTime: "6 min read",
    category: "NLP & Culture",
    tags: ["NLP", "Python", "Streamlit", "Cultural Tech"],
    content: `
### The Challenge of Endangered Indigenous Scripts

Balinese script (*Aksara Bali*) is an extraordinarily rich writing system derived from the ancient Brahmi script. Unlike alphabetic systems where each letter has an independent glyph, Aksara Bali is an abugida: consonants possess an inherent vowel (/a/), and additional vowels, dipthongs, and final consonants are represented through diacritical marks attached above, below, or beside the base glyph.

Standard off-the-shelf translation APIs fail completely when encountering these syllabic structures because:
1. Unicode normalization requires strict glyph order preservation.
2. Complex subjoined consonants (*gantungan* and *gempelan*) alter pronunciation and script morphology dynamically.
3. Lack of large labeled training corpora prevents brute-force LLM translation without extensive fine-tuning.

### The Algorithmic Approach

In developing our Balinese transliteration engine, I designed a deterministic rule-based tokenizer that performs phonotactic syllabification before applying phonetic character mapping.

By deploying this pipeline via a lightweight Streamlit interface, we enabled students, linguists, and cultural enthusiasts to input Latin phonetic phrases and receive real-time, syntactically correct Aksara Bali script, and vice versa.

Technology should not only optimize global industries; it should preserve the cultural keystones that anchor our human heritage.
    `,
  },
];
