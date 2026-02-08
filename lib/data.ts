export interface Company {
    id: string;
    name: string;
    type: "Startup" | "MNC" | "Mid-Cap";
    domain: string;
    description: string;
    website: string;
    hidden_gem: boolean;
    logo_color: string;
    trending?: boolean;
}

export const COMPANIES: Company[] = [
    // ============ TRENDING MNCs ============
    {
        id: "c1",
        name: "Tesla",
        type: "MNC",
        domain: "EV / Energy / AI",
        description: "World leader in electric vehicles, energy storage, and AI-driven manufacturing. Known for cutting-edge automation.",
        website: "https://www.tesla.com/careers",
        hidden_gem: false,
        logo_color: "bg-red-600",
        trending: true,
    },
    {
        id: "c2",
        name: "SpaceX",
        type: "MNC",
        domain: "Aerospace / Space Tech",
        description: "Revolutionizing space technology with reusable rockets. Building Starship for Mars missions.",
        website: "https://www.spacex.com/careers",
        hidden_gem: false,
        logo_color: "bg-gray-800",
        trending: true,
    },
    {
        id: "c3",
        name: "Siemens",
        type: "MNC",
        domain: "Industrial Automation / Digital Twin",
        description: "Global leader in industrial automation, digital twins, and smart manufacturing solutions.",
        website: "https://www.siemens.com/careers",
        hidden_gem: false,
        logo_color: "bg-teal-600",
        trending: true,
    },
    {
        id: "c4",
        name: "Bosch",
        type: "MNC",
        domain: "Automotive / IoT / Robotics",
        description: "Leading supplier of automotive components, IoT solutions, and industrial robotics.",
        website: "https://www.bosch.com/careers",
        hidden_gem: false,
        logo_color: "bg-red-500",
    },
    {
        id: "c5",
        name: "ABB Robotics",
        type: "MNC",
        domain: "Industrial Robotics / Automation",
        description: "Pioneer in industrial robots and automation solutions for manufacturing worldwide.",
        website: "https://global.abb/careers",
        hidden_gem: false,
        logo_color: "bg-red-600",
    },
    {
        id: "c6",
        name: "NVIDIA",
        type: "MNC",
        domain: "AI / GPU / Autonomous Systems",
        description: "Leading AI chip manufacturer powering autonomous vehicles, robotics, and digital twins.",
        website: "https://www.nvidia.com/careers",
        hidden_gem: false,
        logo_color: "bg-green-600",
        trending: true,
    },
    {
        id: "c7",
        name: "Honeywell Aerospace",
        type: "MNC",
        domain: "Aerospace / Avionics",
        description: "Major aerospace manufacturer producing engines, avionics, and flight systems.",
        website: "https://careers.honeywell.com",
        hidden_gem: false,
        logo_color: "bg-orange-600",
    },
    {
        id: "c8",
        name: "General Electric (GE)",
        type: "MNC",
        domain: "Aviation / Energy / Healthcare",
        description: "Global conglomerate in aviation engines, power generation, and medical equipment.",
        website: "https://www.ge.com/careers",
        hidden_gem: false,
        logo_color: "bg-blue-600",
    },
    {
        id: "c9",
        name: "Tata Motors",
        type: "MNC",
        domain: "Automotive / EV",
        description: "India's largest auto manufacturer, leading the EV revolution with Nexon EV and Punch EV.",
        website: "https://www.tatamotors.com/careers",
        hidden_gem: false,
        logo_color: "bg-blue-700",
    },
    {
        id: "c10",
        name: "L&T Technology Services",
        type: "MNC",
        domain: "Engineering R&D / Defense",
        description: "Global engineering services company in defense, aerospace, and industrial products.",
        website: "https://www.ltts.com/careers",
        hidden_gem: false,
        logo_color: "bg-yellow-600",
    },

    // ============ TRENDING STARTUPS (Hidden Gems) ============
    {
        id: "c11",
        name: "Skyroot Aerospace",
        type: "Startup",
        domain: "Space Tech / Rockets",
        description: "First Indian private company to launch a rocket into space. Building Vikram series launchers.",
        website: "https://skyroot.in/careers",
        hidden_gem: true,
        logo_color: "bg-orange-500",
        trending: true,
    },
    {
        id: "c12",
        name: "Ather Energy",
        type: "Startup",
        domain: "EV / Smart Mobility",
        description: "Premium electric scooter maker with cutting-edge battery tech and connected features.",
        website: "https://www.atherenergy.com/careers",
        hidden_gem: true,
        logo_color: "bg-green-500",
        trending: true,
    },
    {
        id: "c13",
        name: "Ola Electric",
        type: "Startup",
        domain: "EV / Manufacturing",
        description: "World's largest e-scooter factory. Building India's EV ecosystem from battery to vehicle.",
        website: "https://olaelectric.com/careers",
        hidden_gem: false,
        logo_color: "bg-green-600",
        trending: true,
    },
    {
        id: "c14",
        name: "Agnikul Cosmos",
        type: "Startup",
        domain: "Space Tech / 3D Printed Rockets",
        description: "Revolutionary 3D-printed rocket engines. Making space affordable with Agnibaan launcher.",
        website: "https://agnikul.in/careers",
        hidden_gem: true,
        logo_color: "bg-purple-600",
        trending: true,
    },
    {
        id: "c15",
        name: "IdeaForge",
        type: "Startup",
        domain: "Drones / UAV / Defense",
        description: "India's largest drone manufacturer for defense and enterprise. IPO listed.",
        website: "https://ideaforgetech.com/careers",
        hidden_gem: true,
        logo_color: "bg-red-500",
    },
    {
        id: "c16",
        name: "GreyOrange",
        type: "Mid-Cap",
        domain: "Warehouse Robotics / AI",
        description: "AI-powered fulfillment robots transforming e-commerce logistics globally.",
        website: "https://www.greyorange.com/careers",
        hidden_gem: true,
        logo_color: "bg-gray-500",
    },
    {
        id: "c17",
        name: "Pixxel",
        type: "Startup",
        domain: "Space Tech / Earth Imaging",
        description: "Building constellation of hyperspectral satellites for climate and agriculture monitoring.",
        website: "https://www.pixxel.space/careers",
        hidden_gem: true,
        logo_color: "bg-indigo-600",
        trending: true,
    },
    {
        id: "c18",
        name: "Euler Motors",
        type: "Startup",
        domain: "Commercial EV / Logistics",
        description: "Electric cargo vehicles for last-mile delivery. Partnered with Amazon, Flipkart.",
        website: "https://eulermotors.com/careers",
        hidden_gem: true,
        logo_color: "bg-blue-500",
    },
    {
        id: "c19",
        name: "Addverb Technologies",
        type: "Startup",
        domain: "Warehouse Automation / Robotics",
        description: "India's leading robotics company for warehouse automation. Global expansion underway.",
        website: "https://addverb.com/careers",
        hidden_gem: true,
        logo_color: "bg-cyan-600",
        trending: true,
    },
    {
        id: "c20",
        name: "Rivian",
        type: "Startup",
        domain: "EV / Adventure Vehicles",
        description: "Electric adventure vehicle maker. Building trucks for Amazon delivery fleet.",
        website: "https://rivian.com/careers",
        hidden_gem: false,
        logo_color: "bg-yellow-500",
        trending: true,
    },
    {
        id: "c21",
        name: "Relativity Space",
        type: "Startup",
        domain: "Space Tech / 3D Printing",
        description: "3D-printing entire rockets. Terran R is the world's first fully 3D-printed rocket.",
        website: "https://www.relativityspace.com/careers",
        hidden_gem: true,
        logo_color: "bg-slate-600",
        trending: true,
    },
    {
        id: "c22",
        name: "Boston Dynamics",
        type: "Mid-Cap",
        domain: "Advanced Robotics / AI",
        description: "Creator of Spot and Atlas robots. Pushing boundaries of mobile robotics.",
        website: "https://bostondynamics.com/careers",
        hidden_gem: false,
        logo_color: "bg-yellow-600",
        trending: true,
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
    trend?: "rising" | "stable" | "falling";
}

// Initial State (Before Market Shift)
export const SKILLS: Skill[] = [
    // Core Technical Skills for Mechanical Engineers
    {
        id: "s1",
        name: "SolidWorks",
        category: "Technical",
        tier: 1,
        description: "Industry-standard 3D CAD software for mechanical design and simulation.",
        resources: [{ title: "SolidWorks Tutorials", url: "https://www.solidworks.com/tutorials" }],
        completed: true,
        trend: "stable",
    },
    {
        id: "s2",
        name: "AutoCAD",
        category: "Tools",
        tier: 1,
        description: "2D/3D drafting software essential for technical drawings and documentation.",
        resources: [{ title: "AutoCAD Learning", url: "https://www.autodesk.com/learning" }],
        completed: true,
        trend: "stable",
    },
    {
        id: "s3",
        name: "ANSYS / FEA",
        category: "Technical",
        tier: 1,
        description: "Finite Element Analysis for stress, thermal, and fluid simulations.",
        resources: [{ title: "ANSYS Learning Hub", url: "https://www.ansys.com/academic" }],
        completed: false,
        trend: "stable",
    },
    {
        id: "s4",
        name: "Python for Engineering",
        category: "Technical",
        tier: 1,
        description: "Automation, data analysis, and simulation scripting for engineers.",
        resources: [{ title: "Python for Engineers", url: "https://www.freecodecamp.org" }],
        completed: false,
        trend: "rising",
    },
    {
        id: "s5",
        name: "MATLAB / Simulink",
        category: "Tools",
        tier: 2,
        description: "Mathematical modeling and control systems simulation.",
        resources: [{ title: "MATLAB Onramp", url: "https://www.mathworks.com/learn" }],
        completed: false,
        trend: "stable",
    },
    {
        id: "s6",
        name: "C/C++ Embedded",
        category: "Technical",
        tier: 2,
        description: "Core programming for microcontrollers and embedded systems.",
        resources: [{ title: "Embedded C Course", url: "#" }],
        completed: false,
        trend: "stable",
    },
    {
        id: "s7",
        name: "ROS (Robot OS)",
        category: "Technical",
        tier: 2,
        description: "Robotics middleware for autonomous systems and industrial robots.",
        resources: [{ title: "ROS Tutorials", url: "https://www.ros.org/learn" }],
        completed: false,
        trend: "rising",
    },
    {
        id: "s8",
        name: "AWS Cloud Basics",
        category: "Tools",
        tier: 3,
        description: "Cloud infrastructure for IoT and connected manufacturing.",
        resources: [{ title: "AWS Training", url: "https://aws.amazon.com/training" }],
        completed: false,
        trend: "falling",
    },

    // Soft Skills
    {
        id: "s9",
        name: "Technical Communication",
        category: "Soft Skill",
        tier: 1,
        description: "Writing technical reports, documentation, and presenting designs.",
        resources: [{ title: "Technical Writing Course", url: "#" }],
        completed: true,
        trend: "stable",
    },
    {
        id: "s10",
        name: "Project Management",
        category: "Soft Skill",
        tier: 2,
        description: "Agile, Scrum, and traditional PM methodologies for engineering projects.",
        resources: [{ title: "PM Fundamentals", url: "#" }],
        completed: false,
        trend: "stable",
    },
];

// Updated State (After Market Shift - H1)
export const UPDATED_SKILLS: Skill[] = [
    ...SKILLS.filter(s => s.id !== 's8'), // Remove old AWS
    {
        id: "s8_updated",
        name: "Azure Digital Twins",
        category: "Tools",
        tier: 1, // Promoted to Tier 1!
        description: "🔥 Market Shift: Manufacturing moving to Azure for Digital Twin solutions.",
        resources: [{ title: "Microsoft Learn: Azure Digital Twins", url: "https://learn.microsoft.com" }],
        completed: false,
        trend: "rising",
    },
    {
        id: "s8_legacy",
        name: "AWS Cloud Basics",
        category: "Tools",
        tier: 3, // Demoted to Tier 3
        description: "Cloud infrastructure for IoT and connected manufacturing.",
        resources: [{ title: "AWS Training", url: "https://aws.amazon.com/training" }],
        completed: false,
        trend: "falling",
    },
];

// ============ RESUME MATCH FEATURE DATA (Additive) ============

export interface DemoResume {
    id: string;
    name: string;
    role: string;
    skills: string[];
    experience: string;
}

export interface CompanyRequirement {
    companyId: string;
    requiredSkills: string[];
    preferredSkills: string[];
}

// Demo Resumes for Resume Match Feature
export const DEMO_RESUMES: DemoResume[] = [
    {
        id: "r1",
        name: "Alex Kumar",
        role: "Mechanical Engineering Graduate",
        skills: ["SolidWorks", "AutoCAD", "ANSYS / FEA", "Technical Communication", "Python for Engineering"],
        experience: "2024 Graduate, IIT Delhi",
    },
    {
        id: "r2",
        name: "Priya Sharma",
        role: "Embedded Systems Enthusiast",
        skills: ["C/C++ Embedded", "MATLAB / Simulink", "SolidWorks", "ROS (Robot OS)", "Python for Engineering"],
        experience: "2023 Graduate, NIT Trichy",
    },
    {
        id: "r3",
        name: "Rahul Verma",
        role: "Automotive Design Engineer",
        skills: ["SolidWorks", "AutoCAD", "CATIA", "Technical Communication", "Project Management"],
        experience: "1 Year at Tata Motors",
    },
    {
        id: "r4",
        name: "Sneha Patel",
        role: "Robotics & Automation",
        skills: ["ROS (Robot OS)", "Python for Engineering", "C/C++ Embedded", "MATLAB / Simulink", "Azure Digital Twins"],
        experience: "Intern at ABB Robotics",
    },
];

// Company Skill Requirements for Resume Match
export const COMPANY_REQUIREMENTS: CompanyRequirement[] = [
    {
        companyId: "c1", // Tesla
        requiredSkills: ["SolidWorks", "Python for Engineering", "ANSYS / FEA"],
        preferredSkills: ["ROS (Robot OS)", "C/C++ Embedded", "Azure Digital Twins"],
    },
    {
        companyId: "c2", // SpaceX
        requiredSkills: ["SolidWorks", "ANSYS / FEA", "C/C++ Embedded"],
        preferredSkills: ["Python for Engineering", "MATLAB / Simulink", "Technical Communication"],
    },
    {
        companyId: "c3", // Siemens
        requiredSkills: ["SolidWorks", "AutoCAD", "Azure Digital Twins"],
        preferredSkills: ["Python for Engineering", "ANSYS / FEA", "Project Management"],
    },
    {
        companyId: "c4", // Bosch
        requiredSkills: ["SolidWorks", "C/C++ Embedded", "MATLAB / Simulink"],
        preferredSkills: ["ROS (Robot OS)", "Python for Engineering", "AutoCAD"],
    },
    {
        companyId: "c6", // NVIDIA
        requiredSkills: ["Python for Engineering", "C/C++ Embedded", "ROS (Robot OS)"],
        preferredSkills: ["MATLAB / Simulink", "Azure Digital Twins", "Technical Communication"],
    },
    {
        companyId: "c11", // Skyroot Aerospace
        requiredSkills: ["SolidWorks", "ANSYS / FEA", "Python for Engineering"],
        preferredSkills: ["MATLAB / Simulink", "C/C++ Embedded", "Technical Communication"],
    },
    {
        companyId: "c12", // Ather Energy
        requiredSkills: ["SolidWorks", "AutoCAD", "Python for Engineering"],
        preferredSkills: ["ANSYS / FEA", "C/C++ Embedded", "Project Management"],
    },
    {
        companyId: "c14", // Agnikul Cosmos
        requiredSkills: ["SolidWorks", "ANSYS / FEA", "Python for Engineering"],
        preferredSkills: ["MATLAB / Simulink", "AutoCAD", "Technical Communication"],
    },
    {
        companyId: "c19", // Addverb Technologies
        requiredSkills: ["ROS (Robot OS)", "Python for Engineering", "C/C++ Embedded"],
        preferredSkills: ["SolidWorks", "MATLAB / Simulink", "Azure Digital Twins"],
    },
    {
        companyId: "c22", // Boston Dynamics
        requiredSkills: ["ROS (Robot OS)", "C/C++ Embedded", "Python for Engineering"],
        preferredSkills: ["MATLAB / Simulink", "SolidWorks", "Technical Communication"],
    },
];

