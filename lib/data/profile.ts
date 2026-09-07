export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  preferredName: string;
  title: string;
  roleDescription: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  status: {
    available: boolean;
    text: string;
  };
  bioSummary: string;
  personalInterests: string[];
}

export const profileData: Profile = {
  name: "Jonathan Eka Saputra",
  preferredName: "Jon",
  title: "SCM Fulfillment Specialist & Aspiring Data Scientist",
  roleDescription:
    "Bridging industrial supply chain logistics, operations engineering, and modern data science with Python, Machine Learning, and Intelligent Automation.",
  tagline: "Live like there is no tomorrow",
  location: "Surabaya, Jawa Timur, Indonesia",
  email: "jonathansaputra03@gmail.com",
  phone: "+6287775080483",
  github: "https://github.com/jonekaa",
  linkedin: "https://linkedin.com/in/jonekaa",
  status: {
    available: true,
    text: "Open for Remote Opportunities (Global & Local)",
  },
  bioSummary:
    "With a foundational degree in Data Science & Analytics (GPA: 3.66) from Petra Christian University and training as a Graduate with Distinction from Bangkit Academy (Machine Learning), I specialize in turning complex industrial supply chain bottlenecks into automated, high-velocity workflows. Currently driving fulfillment optimization and inventory control at PT Wings Surya.",
  personalInterests: [
    "Hybrid Athletic Training & Endurance",
    "Global Travel & Itinerary Optimization",
    "Balinese Cultural Computing & NLP",
    "Autonomous Agent Workflows",
  ],
};
