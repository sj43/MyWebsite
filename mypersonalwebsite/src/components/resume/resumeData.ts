import type { ResumeData } from '../../types';

const resumeData = {
  "imagebaseurl": "https://sj43.github.io/MyWebsite/",
  "name": "Seung Hun Jang",
  "role": "Software Engineer II — Agentic AI & Release Engineering",
  "bio": "Software Engineer II at Microsoft driving agentic AI adoption for Windows release engineering through MCP tools, secure agent access, Azure AI Search, and Copilot-powered workflows.",
  "featuredInitiative": {
    "eyebrow": "Current focus at Microsoft",
    "title": "Driving agentic AI development for Windows release engineering",
    "summary": "I am building the agentic development environment for my team: MCP tools that expose release workflows to AI agents, secure Azure AD/RBAC access, Azure AI Search grounding over engineering knowledge, and Copilot patterns that help teammates investigate systems, automate repeat work, and ship with guardrails.",
    "highlights": [
      "Built an MCP server exposing 50+ release engineering tools to AI agents",
      "Set up repeatable agentic development workflows and Copilot-assisted onboarding paths for teammates",
      "Designed secure AI access with Azure AD/MISE, role-based authorization, and human-in-the-loop controls",
      "Created Azure AI Search indexing so agents answer from real code, docs, and release context"
    ],
    "metrics": [
      { "value": "50+", "label": "MCP tools" },
      { "value": "40+", "label": "release services" },
      { "value": "AI-first", "label": "team workflow" }
    ]
  },
  "address": "Kirkland, WA",
  "email": "seunghunjang956@gmail.com",
  "education": {
    "school": "Rice University",
    "major": "Bachelors in Computer Science",
    "year": "Senior",
    "date": "May 2021",
    "gpa": "3.76/4.0"
  },
  "experience": [
    {
      "organization": "Microsoft",
      "location": "Remote",
      "position": "Software Engineer II — Agentic AI & Release Engineering Enablement",
      "date": "Sep 2023 - Present",
      "caseStudySlug": "microsoft",
      "description": [
        "Driving the team's agentic AI initiative by turning release engineering workflows into secure, discoverable tools for AI agents and teammates",
        "Built an MCP (Model Context Protocol) server enabling AI agents to interact with release automation through 50+ discoverable tools",
        "Designed authentication (Azure AD/MISE), role-based authorization, and guardrails for secure AI agent access",
        "Created an Azure AI Search indexing pipeline so Copilot and agents answer questions grounded in real code, docs, and release context",
        "Set up Copilot-powered development and onboarding workflows that help teammates investigate systems and generate configuration changes faster",
        "[C# | .NET | Azure AD | Azure AI Search | MCP | GitHub Copilot]"
      ]
    },
    {
      "organization": "Microsoft",
      "location": "Redmond, Washington",
      "position": "Software Engineer — Release Automation Platform",
      "date": "Aug 2021 - Sep 2023",
      "caseStudySlug": "microsoft",
      "description": [
        "Develop and maintain a distributed microservices system on Azure Service Fabric (~40 services) that orchestrates touchless software releases for Windows updates at scale",
        "Designed automated product onboarding pipelines that generate PRs, create work items, and provision configuration — reducing manual onboarding effort significantly",
        "Built automated incident management, release scheduling improvements, and workflow orchestration features",
        "[C# | .NET | Azure Service Fabric | Azure DevOps | TypeScript]"
      ]
    },
    {
      "organization": "Expedia Group",
      "location": "(Remote Internship) Houston, Texas",
      "position": "Software Development Intern – Platform Architecture Team",
      "date": "Jun 2020 - Aug 2020",
      "caseStudySlug": "expedia",
      "description": [
        "Participated in Proof of Concept of constructing Expedia’s new cross-organizational platform on Backstage developer portal",
        "Implemented ‘docs-as-code’ plugin scalable to sustain +10k documentations for Expedia Organization applications and contributed to Spotify’s Backstage.io open source project",
        "Designed and built two microservices: 1) Automatic notification system to notify application owners of documentation change 2) Documentation search, filter functionality & CI pipeline updating index documentation fields on ElasticSearch",
        "[Go | JavaScript | Kotlin] & [AWS S3, CloudFormation, SNS, SQS, Lambda, ElasticSearch | Jenkins | Jira | Spring Boot]"
      ]
    },
    {
      "organization": "V-Silicon Inc.",
      "location": "Fremont, California",
      "position": "Software Engineering Intern",
      "date": "May 2019 - Aug 2019",
      "description": [
        "Built video casting applications for internal smart-TV testing (web / Android / iOS)",
        "Regularly built new patches on Ubuntu and deployed on Jenkins Server",
        "Fixed potential bugs on Platform Abstraction Layer (PAL) using Coverity static analysis tool, Gerrit Code Review, and JIRA issue tracking software",
        "Assisted SW and QE teams in demo setup, issue duplication, documentation, etc",
        "[ Java | JavaScript | HTML] & [ Jenkins | Jira | Coverity static analysis tool | Gerrit code review | Android Studio]"
      ]
    },
    {
      "organization": "Migeum Computer and Robotics",
      "location": "Yongin, South Korea",
      "position": "Programming Language Teaching Assistant",
      "date": "Apr 2018 - Aug 2018",
      "description": [
        "Prepared and delivered lectures to learning center students on topics such as syntax, container usage, object-oriented design, problem solving skills, and data structures",
        "Assisted in developing prototype of center’s student management tools",
        "[Java | Python | C++]"
      ]
    },
    {
      "organization": "U.S. Eighth Army | KATUSA",
      "location": "Camp Humphreys, South Korea",
      "position": "Head of Battalion Command Group Admin",
      "date": "Sep 2016 - Apr 2018",
      "description": [
        "Served in the Eighth Army, Headquarters, and Headquarters Battalion Command Group as KATUSA (Korean Augmentation to the United States Army)",
        "As the team leader, assisted Battalion Commander and Command Sergeant Major in missions",
        "Supervised Soldiers’ administrative action management process",
        "Supported and facilitated move of 8,000+ Soldiers from Camp Yongsan to Camp Humphreys",
        "Resolved technical issues such as ARMY GEARS system VPN, DoD CAC issuance, etc"
      ]
    }
  ],
  "resumeLink": "https://drive.google.com/file/d/14D7ZbdZ4QoRgwBKtYUZfiswGbZyu5-6D/view?usp=sharing",
  "socialLinks": [
    { "label": "LinkedIn", "url": "https://www.linkedin.com/in/shjang956/?locale=en_US", "icon": "fa fa-linkedin" },
    { "label": "GitHub", "url": "https://github.com/sj43", "icon": "fa fa-github" },
    { "label": "Devpost", "url": "https://devpost.com/sj43?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav", "icon": "fa fa-book" }
  ],
  "skills": {
    "languages": ["C#", "Python", "Go", "TypeScript", "JavaScript", "Java", "C", "C++", "SQL"],
    "frameworks": [".NET", "Azure Service Fabric", "Flask", "React", "Spring Boot", "Node.js"],
    "cloud": ["Azure Service Fabric", "Azure DevOps", "Azure AD", "Azure AI Search", "Azure Pipelines", "AWS S3", "AWS Lambda", "AWS SQS", "AWS SNS", "AWS CodePipeline"],
    "databases": ["MongoDB", "Redis", "ElasticSearch", "MySQL"],
    "tools": ["MCP", "GitHub Copilot", "Docker", "Git", "Jira", "Jenkins", "Gerrit", "Postman"]
  },
  "achievements": [
    {
      "icon": "fa fa-trophy",
      "title": "Rice Datathon 2020 — Winner",
      "description": "First place in Rice University's annual data science competition."
    },
    {
      "icon": "fa fa-trophy",
      "title": "HackRice 9 — Winner",
      "description": "Built ME.NU, an ingredient-based restaurant recommendation app."
    },
    {
      "icon": "fa fa-trophy",
      "title": "HackRice 8.5 — 1st Place, FinTech Track",
      "description": "First place in the financial technology track."
    },
    {
      "icon": "fa fa-trophy",
      "title": "PennApps XXI — Top 10",
      "description": "Built Roomy, a virtual hangout platform with shared music and interactive rooms."
    },
    {
      "icon": "fa fa-code",
      "title": "Top 20 — Two Sigma ICPC Challenge",
      "description": "Ranked in top 20 nationally in the Two Sigma-sponsored ICPC programming challenge."
    },
    {
      "icon": "fa fa-github",
      "title": "Open Source Contributor — Spotify Backstage",
      "description": "Contributed a documentation-as-code plugin to Spotify's open source Backstage platform during Expedia Group internship."
    }
  ]
} satisfies ResumeData;
export default resumeData
