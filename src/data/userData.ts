import {
  Github,
  Linkedin,
  Mail,
  TrendingUp,
} from "lucide-react";

export const personalInfo = {
  name: "Muhammad Amaan",
  alias: "M.Amaan",
  shortAlias: "MA",
  location: "Karachi, Pakistan",
  role: "Data Analyst",
  roles: [
    "Data Analyst",
    "AI Student",
    "BI Enthusiast",
  ],
  college: "Dawood University of Engineering and Technology",
  collegeUrl: "https://duet.edu.pk",
  avatarUrl: "/assets/ME.jpg",
  status: "Open to opportunities",
  aboutText: "Aspiring Data Analyst turning raw data into clear, actionable insight through Python, SQL, Power BI, and Excel.",
  aboutText1: "I’m Muhammad Amaan, based in Karachi, Pakistan. I am pursuing a BS in Artificial Intelligence at ",
  aboutText2: ", building hands-on skills in data analytics — Python, SQL, Power BI, and Excel — to work as a Data Analyst. My long-term path leads toward Data Science and AI, but right now my focus is clear: turn data into insight and support real decisions.",
};

// removed react-icons
export const fetchData = [
  { label: "User", value: "amaan@dataanalyst" },
  { label: "Role", value: "Aspiring Data Analyst" },
  { label: "Education", value: "BSAI @ Dawood University" },
  { label: "Tools", value: "Power BI, Excel, Python, SQL" },
  { label: "Competitions", value: "DevDay 6th place, ProCom 9th place" },
  { label: "Status", value: "Open to opportunities" },
  { label: "Location", value: "Karachi, Pakistan" }
];

export const skills = [
  {
    category: "BI & Visualization",
    items: [
      { name: "Power BI", icon: "/assets/powerbi.svg" },
      { name: "Microsoft Excel", icon: "/assets/excel.svg" },
    ],
  },
  {
    category: "Languages & Query",
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "SQL Server", icon: "/assets/sqlserver.svg" },
      { name: "Oracle", icon: "/assets/oracle.svg" },
    ],
  },
  {
    category: "Data Analysis Libraries",
    items: [
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas" },
      { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
      { name: "Matplotlib", icon: "https://cdn.simpleicons.org/plotly" },
      { name: "Seaborn", icon: "/assets/seaborn.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Jupyter Notebook", icon: "https://cdn.simpleicons.org/jupyter" },
      { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github", invertDark: true },
      { name: "Kaggle", icon: "https://cdn.simpleicons.org/kaggle" },
    ],
  },
];

export const facts = [
  "Data Analyst",
  "AI Student",
  "Power BI",
  "SQL Competitor",
];

export const timeline = [
  {
    year: "Oct 2024 – Jun 2028",
    detail: "Started BS in Artificial Intelligence at Dawood University of Engineering and Technology.",
    more: "Currently pursuing a Bachelor's in AI, covering machine learning, data modeling, deep learning, and programming fundamentals. Relevant coursework: Programming Fundamentals, Object Oriented Programming, Data Structures, Database Systems, Programming for AI, Linear Algebra. Alongside coursework, building practical data analytics skills in Python, SQL, and Power BI."
  },
  {
    year: "2022",
    detail: "Completed Intermediate in Computer Science at PECHS Education Foundation Government Science Degree College.",
    more: "Aug 2022 – Jun 2024. Studied core fundamentals of mathematics, physics, and computer science systems — the foundation that led toward AI and data science."
  },
  {
    year: "2010",
    detail: "Completed Matriculation at Nasra School Malir Afternoon.",
    more: "Aug 2010 – May 2022. Early technical exposure included C++ basics, HTML basics, GW-BASIC, Scratch, and Microsoft Office (Excel, Word, PowerPoint)."
  }
];

export const contactItems = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/MuhammadAmaan178",
    href: "https://github.com/MuhammadAmaan178",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammad-amaan-01303b2bb",
    href: "https://www.linkedin.com/in/muhammad-amaan-01303b2bb/",
    color: "text-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mohammadamaanc178@gmail.com",
    href: "mailto:mohammadamaanc178@gmail.com",
    color: "text-foreground",
  },
  {
    icon: TrendingUp,
    label: "Kaggle",
    value: "kaggle.com/muhammadamaan123",
    href: "https://www.kaggle.com/muhammadamaan123",
    color: "text-blue-500",
  },
];

export const projectData = [
  {
    name: "Netflix Data Intelligence Dashboard",
    description: "A Power BI dashboard reimagined as a Netflix-style streaming app interface, analyzing 9,000+ titles with dynamic profile exploration and advanced Power Query data modeling.",
    tech: ["Power BI", "Power Query", "DAX"],
    live: "https://app.powerbi.com/view?r=eyJrIjoiOWUxNDVmZjktMmEwMi00YzBlLTlkNzgtNmRhNTM2OWI4NDhhIiwidCI6IjI0MWNlN2VlLTVjYmUtNDczNi1hYWM0LWZkOWZmM2NjMWRkMSIsImMiOjl9&pageName=959be2b96b335226c373",
    github: null,
    category: "BI",
    images: [
      "/assets/projects/netflix-dashboard-cover.jpg",
      "/assets/projects/netflix-dashboard-1.jpg",
      "/assets/projects/netflix-dashboard-2.jpg",
      "/assets/projects/netflix-dashboard-3.jpg",
      "/assets/projects/netflix-dashboard-4.jpg"
    ]
  },
  {
    name: "Retail Sales Performance Dashboard",
    description: "A 3-page interactive Power BI dashboard analyzing 10,000+ retail transactions across sales overview, product/category analysis, and customer behavior.",
    tech: ["Power BI", "Power Query", "Kaggle"],
    live: "https://app.powerbi.com/view?r=eyJrIjoiYjEwYzE0MGMtNTkzNi00OGY3LTk1ODktYTE2NGY1YmE0YzEwIiwidCI6IjI0MWNlN2VlLTVjYmUtNDczNi1hYWM0LWZkOWZmM2NjMWRkMSIsImMiOjl9",
    github: null,
    category: "BI",
    images: [
      "/assets/projects/sales-dashboard-1.jpg",
      "/assets/projects/sales-dashboard-2.jpg",
      "/assets/projects/sales-dashboard-3.jpg"
    ]
  },
  {
    name: "Store Sales Dashboard",
    description: "A fully interactive 3-page retail analytics dashboard built entirely in Microsoft Excel, using linked slicers and pivot tables across multiple branches.",
    tech: ["Excel", "Pivot Tables", "Data Modeling"],
    live: null,
    github: null,
    category: "BI",
    images: [
      "/assets/projects/excel-dashboard-1.jpg",
      "/assets/projects/excel-dashboard-2.jpg",
      "/assets/projects/excel-dashboard-3.jpg"
    ]
  },
  {
    name: "Adventure Works Interactive Portal",
    description: "An end-to-end BI portal with dynamic, click-to-filter navigation — from database restoration to a fully interactive Power BI reporting experience.",
    tech: ["Power BI", "SQL Server", "Power Query", "DAX"],
    live: "https://app.powerbi.com/view?r=eyJrIjoiNmYwNTU2MDQtZjZmMC00MjBmLWI1N2ItYWExM2U0OGM3NzEyIiwidCI6IjI0MWNlN2VlLTVjYmUtNDczNi1hYWM0LWZkOWZmM2NjMWRkMSIsImMiOjl9&pageName=398a043021f1b355409b",
    github: null,
    category: "BI",
    images: [
      "/assets/projects/adventureworks-cover.png",
      "/assets/projects/adventureworks-1.png",
      "/assets/projects/adventureworks-2.png",
      "/assets/projects/adventureworks-3.png",
      "/assets/projects/adventureworks-4.png",
      "/assets/projects/adventureworks-5.png",
      "/assets/projects/adventureworks-6.png"
    ],
    approach: "Restored the Microsoft AdventureWorks database from a .bak backup file in Microsoft SQL Server, performed deep relational lookups, and built extensive data cleaning and transformation pipelines using Power Query. Designed a custom-themed landing page where clicking a market flag (Australia, Canada, France, Germany, UK, US) or a product category (Bikes, Clothing, Accessories) dynamically filters and routes the entire report. Built synchronized analytical pages covering Business Overview, Product Analytics, Customer Insights with granular demographic trends, and a high-volume Sales Ledger — all tied together with optimized DAX measures, a unified search bar, and custom bookmark states powering a one-click 'Clear All Filters' reset.",
    highlights: "Full pipeline from raw SQL Server database to a polished, dynamically-routed reporting portal — combining database management, relational data modeling, and custom Power BI UI/UX design."
  }
];

export const resume = {
  "full-stack-developer": "/resume/Muhammad_Amaan_Resume.pdf",
};
