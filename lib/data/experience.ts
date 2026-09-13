export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "work" | "education" | "leadership";
  description: string;
  highlights: string[];
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  highlight?: boolean;
}

export const workExperience: ExperienceItem[] = [
  {
    id: "wings-surya",
    role: "Supply Chain Management - Fulfillment Staff",
    organization: "PT Wings Surya",
    location: "Surabaya, Jawa Timur",
    period: "March 2025 - Present",
    type: "work",
    description:
      "Spearheading end-to-end order fulfillment operations, inventory balancing, and digital workflow automation for one of Indonesia's largest FMCG manufacturing corporations.",
    highlights: [
      "Managed the end-to-end order fulfillment process across extensive national distribution networks.",
      "Maintained optimal stock levels across all distribution centers, systematically preventing overstock and stock-out scenarios.",
      "Conducted root-cause analytics on bottlenecks impacting the Order Fulfillment Rate and deployed data-driven operational fixes.",
      "Engineered workflow automation scripts using LibreOffice BASIC Macros and VBA, eliminating hours of repetitive manual data entry.",
      "Developed an internal web portal for Inventory Control (IC) division.",
      "Integrated interactive Distribution Center maps, distance matrices, and transit time calculations to bolster IC decision-making.",
    ],
    skills: ["Supply Chain Optimization", "Inventory Control", "LibreOffice BASIC", "VBA", "Data Analytics", "Geospatial Analysis"],
  },
  {
    id: "astra-otoparts-db",
    role: "Database Specialist Internship",
    organization: "PT Astra Otoparts Tbk",
    location: "Jakarta Utara, Indonesia",
    period: "January - June 2024",
    type: "work",
    description:
      "Engineered automated data pipelines, automated candidate data intake, and real-time operational executive dashboards for the Human Resources division.",
    highlights: [
      "Architected and deployed new database schemas and ingestion pipelines to streamline HR operations.",
      "Automated and simplified prospective candidate application intake workflows, cutting data capture friction.",
      "Developed automated real-time reporting dashboards based on live HR datasets using Google Sheets and Google Apps Script.",
      "Built interactive data visualizations providing executive visibility into key recruitment KPIs.",
    ],
    skills: ["Database Architecture", "ETL Pipelines", "Google Sheets Automation", "Data Visualization", "Process Automation"],
  },
  {
    id: "astra-otoparts-it",
    role: "IT System Support Internship",
    organization: "PT Astra Otoparts Tbk",
    location: "Jakarta Utara, Indonesia",
    period: "January - June 2024",
    type: "work",
    description:
      "Maintained and enhanced enterprise recruitment web systems, resolving critical application bugs and writing automated backend utilities.",
    highlights: [
      "Diagnosed and resolved critical bugs across HR's enterprise recruitment web portal.",
      "Engineered custom backend functions using Visual Basic to optimize recruitment workflows.",
      "Managed and maintained high-integrity recruitment relational databases.",
    ],
    skills: ["Visual Basic", "Web Bug Fixing", "Relational Databases", "IT Support"],
  },
];

export const educationExperience: ExperienceItem[] = [
  {
    id: "petra-university",
    role: "Bachelor of Science in Data Science and Analytics",
    organization: "Petra Christian University",
    location: "Surabaya, Indonesia",
    period: "August 2021 - January 2025",
    type: "education",
    description:
      "Graduated with honors, achieving a cumulative GPA of 3.66/4.00 with specialized research in machine learning, statistical modeling, and algorithms.",
    highlights: [
      "Graduated with High Honors (GPA: 3.66 / 4.00).",
      "Rigorous coursework in Applied Statistics, Machine Learning, Data Structures, Predictive Modeling, and Distributed Computing.",
      "Led numerous student academic initiatives within the Informatics study program.",
    ],
    skills: ["Data Science", "Machine Learning", "Applied Statistics", "Algorithms", "Python", "R"],
  },
  {
    id: "bangkit-academy",
    role: "Machine Learning Cohort (Graduate with Distinction)",
    organization: "Bangkit Academy (led by Google, GoTo, and Traveloka)",
    location: "Indonesia",
    period: "August 2023 - January 2024",
    type: "education",
    description:
      "Selected among thousands of applicants for the prestigious Google-backed program. Graduated in the top percentile with Distinction.",
    highlights: [
      "Earned Graduate with Distinction honors.",
      "Mastered deep learning architectures, convolutional neural networks, natural language processing, and TensorFlow deployment pipelines.",
      "Collaborated in cross-functional capstone teams solving real-world Indonesian industry challenges.",
    ],
    skills: ["TensorFlow", "Deep Learning", "Computer Vision", "NLP", "Model Deployment"],
  },
];

export const leadershipExperience: ExperienceItem[] = [
  {
    id: "irgl-2023",
    role: "Head of Event - Informatics Rally Games and Logic (IRGL 2023)",
    organization: "Petra Christian University",
    location: "Surabaya, Indonesia",
    period: "February - November 2023",
    type: "leadership",
    description:
      "Directed the largest annual high-school informatics and logic competition in East Java, coordinating 55 committee members and 240+ participants across 5 provinces.",
    highlights: [
      "Led 55 committee members to execute a seamless, high-stakes academic competition.",
      "Managed the design and quality assurance of 25+ complex computational logic and programming games.",
      "Coordinated 240+ student participants from 30+ leading schools across 5 provinces.",
    ],
    skills: ["Project Management", "Team Leadership", "Cross-functional Coordination", "Logic & Game Design"],
  },
  {
    id: "django-workshop",
    role: "Head of Event - Django Workshop",
    organization: "Petra Christian University x Supertype",
    location: "Surabaya, Indonesia",
    period: "November 2022",
    type: "leadership",
    description:
      "Organized an intensive 3-day full-stack web development workshop introducing the Django framework to informatics students in partnership with Supertype.",
    highlights: [
      "Partnered with Supertype to bring professional industry speakers and trainers.",
      "Structured workshop curricula, evaluated participant projects, and delivered foundational web development training.",
    ],
    skills: ["Workshop Organization", "Industry Partnership", "Technical Training", "Django"],
  },
  {
    id: "himainfra",
    role: "Academic Department Officer",
    organization: "HIMAINFRA (Informatics Student Board)",
    location: "Surabaya, Indonesia",
    period: "August 2022 - July 2023",
    type: "leadership",
    description:
      "Curated academic support structures, peer-tutoring sessions, and examination preparation resources for informatics students.",
    highlights: [
      "Managed the official departmental question bank and exam preparation resources.",
      "Facilitated academic problem-solving workshops and mentoring programs.",
    ],
    skills: ["Mentorship", "Academic Coordination", "Curriculum Support"],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google / TensorFlow Certificate Program",
    credentialUrl: "https://www.credential.net/fcd90f06-edc4-41eb-adf1-c276f23a3cb6",
  },
  {
    title: "Natural Language Processing (NLP)",
    issuer: "DeepLearning.AI",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/STNXFVKJDPP6",
  },
  {
    title: "TensorFlow: Advanced Techniques Specialization",
    issuer: "DeepLearning.AI",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/65CT9HGVVAGW",
  },
  {
    title: "TensorFlow: Data and Deployment Specialization",
    issuer: "DeepLearning.AI",
    credentialUrl: "https://coursera.org/share/7579107f2731c762b39dcdb9a159e5d5",
  },
  {
    title: "TensorFlow Developer Specialization",
    issuer: "DeepLearning.AI",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/FDPMJ56UZP2D",
  },
  {
    title: "Google Data Analytics Specialization",
    issuer: "Google Career Certificates",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/CVA4MZRTQPHU",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    credentialUrl: "https://coursera.org/share/9b47910611dcc4dce8469fc8167dd92d",
  },
  {
    title: "Mathematics for Machine Learning and Data Science Specialization",
    issuer: "DeepLearning.AI",
    credentialUrl: "https://coursera.org/share/5fab0cb9a8c19c90e305d9122ef00c4f",
  },
  {
    title: "Google IT Automation with Python Specialization",
    issuer: "Google Career Certificates",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/AAV2EE2E2U92",
  },
];

export const skillsMatrix = {
  programming: ["Python", "JavaScript / TypeScript", "SQL (Postgres, MySQL)", "R", "Java", "LibreOffice BASIC", "VBA"],
  dataScienceML: ["TensorFlow", "Scikit-Learn", "Computer Vision", "Deep Neural Networks", "Time Series Forecasting", "NLP"],
  supplyChainOperations: ["FMCG Order Fulfillment", "Inventory Control (IC)", "Distribution Center Optimization", "Safety Stock Planning", "Stockout Prevention"],
  dataVizAnalytics: ["Power BI", "Tableau", "Matplotlib / Seaborn", "ggplot2", "altair-viz", "Google Sheets Automation"],
  webToolsDevOps: ["Next.js (App Router)", "React", "Tailwind CSS", "Streamlit", "Git / GitHub", "Vercel", "Docker"],
};
