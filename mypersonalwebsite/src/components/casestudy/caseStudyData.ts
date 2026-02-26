export interface CaseStudySection {
  heading: string;
  body: string | string[];
  diagramKey?: string;
}

export interface CaseStudyItem {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  techStack: string[];
  url?: string;
  github?: string;
  overview: string;
  sections: CaseStudySection[];
  outcomes: string[];
}

const caseStudies: CaseStudyItem[] = [
  {
    slug: 'microsoft',
    name: 'Microsoft — Release Automation & AI Integration',
    tagline: 'From distributed release orchestration to AI-powered engineering — 3+ years building Windows update infrastructure',
    category: 'Full-Time · SWE → SWE II',
    techStack: ['C#', '.NET', 'Azure Service Fabric', 'Azure AD', 'Azure AI Search', 'MCP', 'GitHub Copilot', 'TypeScript', 'Azure DevOps'],
    overview:
      'Over 3+ years at Microsoft, I\'ve worked across two phases: first building the distributed platform that orchestrates touchless Windows update releases at scale, then expanding its intelligence layer — exposing the system to AI agents via MCP, securing AI access with Azure AD, and integrating Copilot into developer workflows.',
    sections: [
      {
        heading: '📦 Phase 1 (SWE · Aug 2021–Sep 2023): Release Automation Platform',
        diagramKey: 'microsoft-release',
        body: [
          'The platform runs on Azure Service Fabric with ~40 microservices coordinating every stage of a software release: scheduling, validation, staged rollout, monitoring, and incident response. Service Fabric\'s stateful service primitives maintain durable release state across restarts and rolling upgrades — critical for workflows that span hours or days.',
          'Automated product onboarding pipelines: Designed pipelines that eliminate manual setup for teams joining the platform. When a new product onboards, the system automatically generates pull requests, creates Azure DevOps work items, and provisions configuration — reducing hours of manual work per team to near-zero.',
          'Automated incident management: Built features that detect release anomalies and trigger structured incident response workflows, reducing mean time to acknowledgment for release-blocking issues.',
          'Release scheduling improvements: Designed enhancements that improved throughput for concurrent release pipelines and reduced bottlenecks during high-traffic release windows.',
        ]
      },
      {
        heading: '🤖 Phase 2 (SWE II · Sep 2023–Present): AI & Agent Integration',
        diagramKey: 'microsoft-ai',
        body: [
          'MCP server with 50+ tools: Built a Model Context Protocol server that exposes the release automation platform to AI agents. The server surfaces 50+ discoverable tools — enabling agents to query release state, trigger workflows, and retrieve deployment context without human intermediaries.',
          'Authentication & authorization: Designed the auth layer for secure AI agent access using Azure AD (MISE). Implemented role-based authorization so different agents and users can access only the tools and data their role permits.',
          'Azure AI Search indexing pipeline: Created an indexing pipeline that ingests and semantically indexes the codebase, making it queryable for AI knowledge retrieval. Enables Copilot and other agents to answer questions grounded in the actual system\'s code and docs.',
          'GitHub Copilot integration: Integrated Copilot into the automated onboarding pipelines — new teams get AI-generated code scaffolding and configuration suggestions as part of the onboarding workflow, accelerating time-to-first-release.',
        ]
      },
      {
        heading: '⚡ Engineering Challenges',
        body: [
          'Scale and reliability: The system handles releases for products used by hundreds of millions of Windows users. A release delay — or a bad update reaching end users — is the cost of a bug.',
          'Trusting AI in production: Integrating AI agents into release workflows required carefully scoped tool permissions, audit logging, and human-in-the-loop gates for high-blast-radius actions. The auth design was as important as the MCP server itself.',
          'Distributed state management: Coordinating 40+ services while maintaining consistency in release state required careful use of Service Fabric\'s reliable collections and design around failure modes (network partitions, restarts, regional outages).',
        ]
      }
    ],
    outcomes: [
      '🚀 Orchestrates touchless Windows update releases for hundreds of millions of users',
      '⚙️ ~40 Azure Service Fabric microservices built and maintained',
      '🤖 MCP server with 50+ tools exposing release platform to AI agents',
      '🔐 Azure AD/MISE auth + RBAC for secure AI agent access',
      '🔍 Azure AI Search pipeline for codebase knowledge retrieval',
      '🧑‍💻 GitHub Copilot integrated into automated onboarding workflows',
    ]
  },
  {
    slug: 'menu',
    name: 'ME.NU',
    tagline: 'Ingredient-based restaurant recommendation engine for Houston diners',
    category: 'Full-Stack Web App',
    techStack: ['Python', 'Flask', 'MongoDB', 'Redis', 'Docker', 'AWS Elastic Beanstalk', 'AWS ECR', 'AWS S3', 'AWS CodePipeline', 'JWT'],
    url: 'https://www.eatwithmenu.com',
    github: '',
    overview:
      "ME.NU started as a 24-hour hackathon project at HackRice 9 (2019) and grew into a fully deployed product. It solves a real friction point: you know what ingredients you feel like eating, but you can't easily search menus across Houston restaurants for dishes that match. ME.NU lets you search by ingredient combinations and surfaces the highest-rated matching dishes from multiple platforms.",
    sections: [
      {
        heading: '🔍 Problem',
        body: [
          "Existing food delivery and review platforms let you browse restaurants or cuisines — but none let you search by specific ingredients. If you're craving salmon with avocado, you'd have to click through dozens of menus manually.",
          'ME.NU flips the model: start with what you want to eat, and find the best place to get it.'
        ]
      },
      {
        heading: '🏗️ Architecture',
        diagramKey: 'menu-arch',
        body: [
          'The backend is a RESTful API built with Python Flask, backed by MongoDB for storing restaurant and menu data. Redis acts as an in-memory cache layer for session management, token blacklisting, and high-frequency lookups — keeping response times low under load.',
          'Authentication uses JWT access and refresh tokens. On logout, tokens are pushed to a Redis blacklist to prevent replay attacks without the overhead of hitting the database on every request.',
          'The application is fully containerized with Docker. A CI/CD pipeline was set up using AWS CodePipeline: commits to the main branch trigger a CodeBuild step that builds the Docker image, pushes it to AWS ECR, and deploys the new container to Elastic Beanstalk. Static assets and user-uploaded content are served from AWS S3.'
        ]
      },
      {
        heading: '⚡ Key Engineering Decisions',
        body: [
          'MongoDB over SQL: Menu data is semi-structured and varies by restaurant platform. A document store gave flexibility to iterate on the schema quickly during hackathon hours and continue evolving it post-launch.',
          'Redis for token management: Rather than a stateful session store, JWT + Redis gave a stateless API that scales horizontally, while still allowing instant token revocation.',
          'Docker + CodePipeline: Containerizing the app meant the dev environment matched production exactly, eliminating "works on my machine" issues. CodePipeline automated the full deploy on every merge.'
        ]
      },
      {
        heading: '🚀 Outcome',
        body: "Won 1st place at HackRice 9 (2019) out of 400+ participants. The project was later developed into a live product at eatwithmenu.com, serving the Houston dining community with personalized dish discovery."
      }
    ],
    outcomes: [
      '🏆 HackRice 9 (2019) — 1st place winner',
      'Deployed to production at eatwithmenu.com',
      'Automated CI/CD: zero-downtime deploys on every git push',
      'JWT + Redis auth with sub-millisecond token validation',
    ]
  },
  {
    slug: 'hackathons',
    name: 'Hackathons',
    tagline: 'Four podium finishes across Rice, Penn, and national competitions',
    category: 'Competition Projects',
    techStack: ['Python', 'NLTK', 'Pandas', 'React', 'JavaScript', 'Data Analysis'],
    overview:
      'Competed in four major hackathons over two years, placing in all four — including two first-place wins at Rice University. Each project tackled a different domain: data analytics, restaurant tech, fintech, and IoT safety.',
    sections: [
      {
        heading: '🥇 Rice Datathon 2020 — Winner: Course Evaluation Analytics',
        body: [
          "Built a full data pipeline over Rice University's corpus of 500,000+ course evaluations. The goal: make course selection smarter for students, surface teaching patterns for instructors, and give the registrar actionable insights about professor performance.",
          'Used Python with Pandas and NLTK to clean, normalize, and analyze the dataset. Built an interactive dashboard so users could filter by department, professor, or keyword and visualize score distributions and sentiment trends over time.'
        ]
      },
      {
        heading: '🥇 HackRice 9 (2019) — Winner: ME.NU',
        body: 'Ingredient-based restaurant recommendation engine. See the ME.NU case study for the full technical deep-dive.'
      },
      {
        heading: '🥇 HackRice 8.5 (2018) — 1st Place, FinTech Track: Crypto Trading Manager',
        body: [
          'Built a cryptocurrency portfolio management and automated trading assistant during the FinTech-themed hackathon track. The app monitored live market prices, evaluated user-defined trading strategies, and executed paper trades.',
          'Focused on real-time data ingestion and a rules engine that could trigger buy/sell signals based on price thresholds, moving averages, or custom conditions.'
        ]
      },
      {
        heading: '🎖️ PennApps XX (2019) — Aware: Inter-Car Communication App',
        body: [
          "Built at the University of Pennsylvania's flagship hackathon. Aware is a safety application that enables short-range communication between nearby vehicles to share road hazard alerts — potholes, accidents, icy patches — in real time.",
          'Designed with a React frontend and a lightweight messaging protocol for peer-to-peer event broadcasting between phones acting as in-car devices.'
        ]
      }
    ],
    outcomes: [
      '🏆 Rice Datathon 2020 — 1st place',
      '🏆 HackRice 9 (2019) — 1st place',
      '🏆 HackRice 8.5 (2018) — 1st place, FinTech track',
      '🎖️ PennApps XX (2019) — finalist, safety track',
    ]
  },
  {
    slug: 'icpc',
    name: 'ICPC & Competitive Programming',
    tagline: 'Regional ICPC competitor and Top 20 in the Two Sigma national challenge',
    category: 'Competitive Programming',
    techStack: ['C++', 'Algorithms', 'Data Structures', 'Dynamic Programming', 'Graph Theory'],
    overview:
      'Competed in the ACM International Collegiate Programming Contest (ICPC) representing Rice University, and placed in the top 20 nationally in the Two Sigma ICPC Challenge — a selective online round open to university teams across the US.',
    sections: [
      {
        heading: '🌍 ICPC — 2018 USA South Central Regional',
        body: [
          'Represented Rice University at the 2018 ICPC South Central Regional contest. The contest is a team-based, 5-hour event where teams of three collaborate on up to 12 algorithm problems, sharing a single computer.',
          'Problems span a wide range of CS theory: dynamic programming, graph algorithms (shortest paths, flows, matching), number theory, computational geometry, and string processing. Competing at regionals requires both algorithmic knowledge and tight coordination under pressure.'
        ]
      },
      {
        heading: '🏅 Top 20 — Two Sigma ICPC Challenge',
        body: [
          'The Two Sigma ICPC Challenge is a competitive online round sponsored by Two Sigma as part of ICPC. Placed in the top 20 nationally among university competitors.',
          'The challenge tests both speed and correctness on advanced algorithm problems under time pressure — a format that maps directly to technical interview problem-solving under constraints.'
        ]
      },
      {
        heading: '📚 Problem-Solving Practice',
        body: [
          'Competitive programming sharpened skills that carry into production engineering: writing correct code fast, reasoning about time and space complexity before writing a single line, and debugging under pressure.',
          'Led to translating the textbook JMB (algorithmic problem-solving strategies, originally in C++) into Python as the Py-JMB project — making the resource accessible to Python programmers following PEP 8 standards.'
        ]
      }
    ],
    outcomes: [
      '🌍 Represented Rice University at 2018 ICPC South Central Regional',
      '🏅 Top 20 nationally — Two Sigma ICPC Challenge',
      '📖 Authored Py-JMB: C++ → Python translation of algorithmic strategies',
    ]
  },
  {
    slug: 'py-jmb',
    name: 'Py-JMB',
    tagline: 'C++ → Python translation of a Korean algorithmic problem-solving textbook',
    category: 'Open Source · Tool',
    techStack: ['Python', 'Algorithms', 'Data Structures', 'PEP 8'],
    github: 'https://github.com/sj43/py-jmb',
    overview:
      'Py-JMB is a Python translation of JMB (프로그래밍 대회에서 배우는 알고리즘 문제 해결 전략), a popular Korean textbook on algorithmic problem-solving strategies. The original book uses C++ for all examples. Many readers could not follow the code because they didn\'t know C++, so I received permission from the author to translate all examples into clean, PEP 8-compliant Python — with complete I/O sections so solutions can be submitted directly to online judges.',
    sections: [
      {
        heading: 'Motivation',
        body: [
          'JMB is one of the most widely recommended algorithm books in the Korean competitive programming community, but its C++-only examples created a barrier for Python programmers. Common feedback included: "I don\'t know C++ so the example code doesn\'t make sense" and "I wish I could submit the solutions directly to practice."',
          'After meeting the author and receiving permission, I started translating every chapter\'s example solutions into idiomatic Python 2.7, preserving the algorithmic logic while making the code Pythonic and PEP 8-compliant.'
        ]
      },
      {
        heading: 'Translation Approach',
        body: [
          'Each C++ solution was rewritten in Python with an emphasis on readability and Pythonic idioms — replacing raw pointer arithmetic with list slicing, using Python\'s built-in data structures where appropriate, and converting I/O patterns to work with online judge systems.',
          'Every translated solution includes complete input/output handling so the code can be copied and submitted directly to online judges without modification. This was a deliberate design choice: the original book omitted I/O sections, requiring readers to write boilerplate themselves.',
          'The project is organized chapter-by-chapter, mirroring the book\'s structure so readers can cross-reference the Python solution with the original C++ version side by side.'
        ]
      },
      {
        heading: 'Topics Covered',
        body: [
          'The book — and this translation — covers a comprehensive range of competitive programming topics: brute force, divide and conquer, dynamic programming, greedy algorithms, combinatorics, number theory, computational geometry, graph algorithms (BFS/DFS, shortest paths, network flow, matching), string processing, and advanced data structures (segment trees, Fenwick trees, union-find).',
        ]
      }
    ],
    outcomes: [
      '📖 Full Python translation of JMB algorithmic textbook with author\'s permission',
      '✅ All solutions include complete I/O — directly submittable to online judges',
      '🐍 PEP 8-compliant, idiomatic Python throughout',
      '📂 Chapter-by-chapter organization mirroring the original book',
    ]
  },
  {
    slug: 'expedia',
    name: 'Expedia Group — Platform Architecture',
    tagline: 'Docs-as-code platform for 10,000+ internal applications at Expedia',
    category: 'Internship',
    techStack: ['Go', 'JavaScript', 'Kotlin', 'AWS S3', 'AWS CloudFormation', 'AWS SNS', 'AWS SQS', 'AWS Lambda', 'ElasticSearch', 'Jenkins', 'Spring Boot'],
    overview:
      "Joined Expedia Group's Platform Architecture team as a remote intern in Summer 2020. The team's mission was to prove out a new cross-organizational developer portal built on Spotify's open-source Backstage platform — one single pane of glass for all internal engineering teams to discover, document, and manage their services.",
    sections: [
      {
        heading: '📋 Context',
        body: [
          'Expedia Group runs thousands of microservices across multiple travel brands. Keeping documentation consistent and up-to-date at that scale is a major challenge: docs drift, ownership becomes unclear, and engineers waste time searching across wikis and repos.',
          "Backstage, open-sourced by Spotify, provided the framework for a centralized internal developer portal. The team's PoC needed to show it could realistically scale to 10,000+ Expedia applications and automate the documentation lifecycle."
        ]
      },
      {
        heading: '🔧 What I Built',
        diagramKey: 'expedia-arch',
        body: [
          'Docs-as-code plugin: Designed and implemented a Backstage plugin that treats documentation like source code — stored in the repo, versioned with the service, and rendered in the portal. Built to scale across all Expedia Organization applications without per-team onboarding work.',
          'Automatic notification microservice: When an application\'s documentation changed (detected via GitHub webhook), the service published an event to AWS SNS, fanning out to SQS queues for downstream consumers. Application owners received notifications automatically, closing the feedback loop.',
          'Documentation search & filter microservice: Built a service that indexed documentation fields into ElasticSearch and maintained index freshness via a CI pipeline triggered on each doc change. The search/filter API powered the portal\'s discovery UI.'
        ]
      },
      {
        heading: '🌐 Open Source Contribution',
        body: "The docs-as-code plugin was contributed upstream to Spotify's Backstage.io open-source project, making the work available to the entire Backstage community beyond Expedia."
      },
      {
        heading: '⚡ Technical Highlights',
        body: [
          'Used Go for the notification service — low memory footprint and fast startup made it ideal for the event-driven Lambda + SNS/SQS topology.',
          'The ElasticSearch indexing pipeline was built to be idempotent: re-running it on any service would produce the correct index state without duplicates, making CI integration safe.',
          'All infrastructure was defined as code using AWS CloudFormation templates, enabling repeatable deploys across environments.'
        ]
      }
    ],
    outcomes: [
      '📦 Docs-as-code plugin designed to support 10,000+ Expedia services',
      '🌐 Contributed plugin to Spotify\'s open-source Backstage project',
      '🔔 Automated owner notification pipeline via SNS/SQS/Lambda',
      '🔍 Full-text search across internal docs via ElasticSearch + CI indexing',
    ]
  }
];

export default caseStudies;
