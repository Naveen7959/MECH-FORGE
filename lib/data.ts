export interface Company {
    id: string;
    name: string;
    type: "Startup" | "MNC" | "Mid-Cap";
    domain: string;
    description: string;
    website: string;
    hidden_gem: boolean;
    logo_color: string;
}

export const COMPANIES: Company[] = [
    {
        id: "c1",
        name: "Ather Energy",
        type: "Startup",
        domain: "EV / Automotive",
        description: "Leading electric scooter manufacturer in India, focusing on intelligent vehicles.",
        website: "https://www.atherenergy.com",
        hidden_gem: false,
        logo_color: "bg-green-500",
    },
    {
        id: "c2",
        name: "Skyroot Aerospace",
        type: "Startup",
        domain: "Aerospace / Defense",
        description: "First private company in India to launch a rocket into space.",
        website: "https://skyroot.in",
        hidden_gem: true,
        logo_color: "bg-orange-500",
    },
    {
        id: "c3",
        name: "GreyOrange",
        type: "Mid-Cap",
        domain: "Robotics / Automation",
        description: "Global technology company optimizing supply chains with AI-driven robotics.",
        website: "https://www.greyorange.com",
        hidden_gem: true,
        logo_color: "bg-gray-500",
    },
    {
        id: "c4",
        name: "Tata Motors",
        type: "MNC",
        domain: "Automotive",
        description: "Leading global automobile manufacturer of cars, utility vehicles, buses, trucks and defense vehicles.",
        website: "https://www.tatamotors.com",
        hidden_gem: false,
        logo_color: "bg-blue-600",
    },
    {
        id: "c5",
        name: "L&T Defense",
        type: "MNC",
        domain: "Defense / Heavy Eng.",
        description: "Larsen & Toubro's defense arm, working on missiles, weapon systems, and submarines.",
        website: "https://www.lntdefencetech.com",
        hidden_gem: false,
        logo_color: "bg-yellow-600",
    },
    {
        id: "c6",
        name: "IdeaForge",
        type: "Startup",
        domain: "Drones / UAV",
        description: "Pioneer in drone manufacturing for defense and homeland security.",
        website: "https://www.ideaforge.co.in",
        hidden_gem: true,
        logo_color: "bg-red-500",
    },
    {
        id: "c7",
        name: "Altigreen",
        type: "Startup",
        domain: "EV / Last Mile",
        description: "Electric vehicle technology for last-mile transportation.",
        website: "https://altigreen.com",
        hidden_gem: true,
        logo_color: "bg-teal-500",
    },
    {
        id: "c8",
        name: "Fabheads",
        type: "Startup",
        domain: "Composite Manufacturing",
        description: "Automated manufacturing technologies for carbon fiber parts.",
        website: "https://fabheads.com",
        hidden_gem: true,
        logo_color: "bg-purple-500",
    },
];

export interface Skill {
    id: string;
    name: string;
    category: "Technical" | "Soft Skill" | "Tools";
    tier: 1 | 2 | 3;
    description: string;
    resources: { title: string; url: string }[];
    completed: boolean;
    trend?: "rising" | "stable" | "falling"; // H1 Feature
}

// Initial State (Before Market Shift)
export const SKILLS: Skill[] = [
    // Product Management
    {
        id: "s1",
        name: "SQL Basics",
        category: "Technical",
        tier: 1,
        description: "Fundamental for data-driven decision making.",
        resources: [{ title: "Khan Academy SQL", url: "#" }],
        completed: true,
        trend: "stable",
    },
    {
        id: "s2",
        name: "PRD Writing",
        category: "Technical",
        tier: 1,
        description: "Ability to write clear Product Requirement Documents.",
        resources: [{ title: "Atlassian PRD Template", url: "#" }],
        completed: true,
        trend: "stable",
    },
    {
        id: "s3",
        name: "AWS Sol. Architect",
        category: "Technical",
        tier: 2,
        description: "Designing scalable systems on Amazon Web Services.",
        resources: [{ title: "AWS Training", url: "#" }],
        completed: false,
        trend: "falling",
    },
    {
        id: "s4",
        name: "Stakeholder Mgmt",
        category: "Soft Skill",
        tier: 1,
        description: "Navigating complex organization structures.",
        resources: [{ title: "HBR Article", url: "#" }],
        completed: false,
        trend: "stable",
    },

    // Embedded Systems
    {
        id: "s6",
        name: "C/C++",
        category: "Technical",
        tier: 1,
        description: "Core language for embedded programming.",
        resources: [],
        completed: true,
        trend: "stable",
    },
];

// Updated State (After Market Shift - H1)
export const UPDATED_SKILLS: Skill[] = [
    ...SKILLS.filter(s => s.id !== 's3'), // Remove AWS
    {
        id: "s3_updated",
        name: "Azure DevOps",
        category: "Technical",
        tier: 1, // Promoted to Tier 1!
        description: "Market Shift: Companies are migrating to Azure Ecosystems.",
        resources: [{ title: "Microsoft Learn: Azure DevOps", url: "#" }],
        completed: false,
        trend: "rising", // Highlighted
    },
    {
        id: "s3_legacy",
        name: "AWS Sol. Architect",
        category: "Technical",
        tier: 3, // Demoted to Tier 3
        description: "Designing scalable systems on Amazon Web Services.",
        resources: [{ title: "AWS Training", url: "#" }],
        completed: false,
        trend: "falling",
    },
];
