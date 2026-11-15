/**
 * Sanket U Yadav · Portfolio Application Script
 * Design System: Obsidian · Chrome · Crimson
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     DATA DEFINITIONS
     ========================================================================== */

  const experiences = [
    {
      role: "Digital Transformation Intern",
      company: "KNAV India",
      period: "9th June 2025 – 9th Jan 2026 · 7 months",
      current: true,
      shortDesc:
        "Contributed to digital transformation initiatives at KNAV by applying data analytics, audit sampling, and process automation techniques. Gained hands-on experience in journal entry testing, large dataset analysis, and dashboard development using Power BI, Excel, Teammate Analytics, and DataSnipper.",
      extraHTML: `
        <ul>
          <li>Supported digital transformation initiatives by leveraging data analytics and automation to enhance audit and operational processes.</li>
          <li>Conducted journal entry testing using analytics tools to identify anomalies and strengthen audit procedures.</li>
          <li>Applied audit sampling techniques including MUS sampling, random sampling, and stratified sampling for data-driven testing.</li>
          <li>Extracted, cleaned, and analyzed large datasets using Teammate Analytics, Excel, and DataSnipper.</li>
          <li>Designed and implemented automation macros for email communication, report generation, and data summarization.</li>
          <li>Generated automated graphs and summary reports to streamline quarterly performance reporting.</li>
          <li>Built interactive dashboards and visualizations in Power BI to present insights effectively to stakeholders.</li>
          <li>Assisted in documentation and workflow optimization using Foxit, improving efficiency and accuracy.</li>
          <li>Collaborated with team members to understand business requirements and translate them into analytical solutions.</li>
        </ul>`,
      tags: [
        "Power BI",
        "SQL",
        "Excel",
        "Python",
        "KPI Reporting",
        "Teammate Analytics",
        "Prompt Engineering",
        "Context Engineering",
        "Project Management",
      ],
      icon: "fa-solid fa-chart-line",
    },
    {
      role: "Data Analyst Intern",
      company: "Trepechy Jewellers",
      period: "9th April – 9th June · 2 months",
      current: false,
      shortDesc:
        "Contributed to data analysis, reporting, and process automation initiatives by leveraging data-driven insights to improve operational efficiency, optimize business processes, and support strategic decision-making.",
      extraHTML: `
        <ul>
          <li>Performed data cleaning, validation, and maintenance to ensure data accuracy and integrity.</li>
          <li>Managed and analyzed Shopify product catalog data, ensuring consistency and accuracy.</li>
          <li>Collaborated with cross-functional teams to implement data-driven solutions and improve reporting processes.</li>
          <li>Developed dashboards and automated reports for KPI tracking and performance monitoring.</li>
          <li>Built automation solutions using Google Apps Script to streamline workflows and reduce manual effort.</li>
        </ul>`,
      tags: [
        "Excel",
        "Google Apps Script",
        "Power BI",
        "Process Automation",
        "VBA Macro",
      ],
      icon: "fa-solid fa-database",
    },
    {
      role: "Power BI Intern",
      company: "Forage (Virtual Internship)",
      period: "Nov 2023 – Dec 2023 · 1 month",
      current: false,
      shortDesc:
        "Completed a virtual Power BI internship via Forage, gaining practical experience in KPI tracking, data analysis, and interactive dashboard design using Excel, Access, Tableau, and Power BI.",
      extraHTML: `
        <ul>
          <li>Used Excel, Tableau, and Power BI to regularly track important KPIs and understand category performance.</li>
          <li>Analyzed data using Excel, Access, Tableau, and Power BI to identify patterns, trends, and useful business insights.</li>
          <li>Designed and developed interactive Power BI dashboards to present data clearly and support better decision making.</li>
        </ul>`,
      tags: ["Excel", "SQL", "Power BI", "Tableau", "VBA Macro"],
      icon: "fa-solid fa-laptop-code",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "SIES School of Business Studies, University of Mumbai",
      period: "2026 – 2028 (Pursuing)",
      current: true,
      icon: "fa-solid fa-graduation-cap",
      shortDesc:
        "Experienced in developing AI-powered applications, integrating Large Language Models (LLMs), and building intelligent solutions that automate complex workflows and solve real-world problems.",
      extraHTML: `
        <p>Experienced in developing AI-powered applications, integrating Large Language Models (LLMs), and building intelligent solutions that automate complex workflows and solve real-world problems.</p>
        <ul>
          <li>Skilled in developing Generative AI applications using Python, LLMs, Prompt Engineering, and Context Engineering.</li>
          <li>Strong understanding of Retrieval-Augmented Generation (RAG), document processing, embeddings, vector databases, and semantic search.</li>
          <li>Experienced in building AI agents and multi-agent workflows using Google ADK, LangChain, and LangGraph.</li>
          <li>Capable of integrating AI models with APIs, FastAPI, and Streamlit to develop scalable and interactive AI-powered applications.</li>
          <li>Knowledge of LLM evaluation, prompt optimization, testing, and response validation to improve AI application reliability.</li>
          <li>Skilled in automating business processes through intelligent AI workflows, data processing, and model integration.</li>
        </ul>`,
    },
    {
      degree: "Bachelor of Science in Information Technology",
      school: "SIES College of Commerce and Economics, Mumbai University",
      period: "2022 – 2025",
      current: false,
      icon: "fa-solid fa-graduation-cap",
      shortDesc:
        "Experienced in data cleaning, preprocessing, and data preparation to ensure data accuracy and quality.",
      extraHTML: `
        <p>Experienced in data cleaning, preprocessing, and data preparation to ensure data accuracy and quality.</p>
        <ul>
          <li>Skilled in data extraction, transformation, and loading (ETL) processes for handling large datasets.</li>
          <li>Strong knowledge of Exploratory Data Analysis (EDA) to identify trends, patterns, and insights from data.</li>
          <li>Experienced in creating interactive dashboards and data visualizations using business intelligence tools.</li>
          <li>Capable of preparing reports and analytical summaries to communicate insights effectively to stakeholders.</li>
        </ul>`,
    },
    {
      degree: "Higher Secondary Education (HSC)",
      school: "SIES College of Commerce and Economics",
      period: "2021 – 2022",
      current: false,
      icon: "fa-solid fa-certificate",
      shortDesc: "Achieved 74.50% in the Higher Secondary Certificate (HSC) examination.",
      extraHTML: `<p>Achieved 74.50% in the Higher Secondary Certificate (HSC) examination.</p>`,
    },
  ];

  const skillCategories = [
    {
      category: "AI Engineering",
      icon: "fa-solid fa-microchip",
      badge: "Foundation Models & Systems",
      skills: [
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "ML", icon: "fa-solid fa-chart-line" },
        { name: "Generative AI", icon: "fa-solid fa-wand-magic-sparkles" },
        { name: "FastAPI", icon: "fa-solid fa-bolt" },
        { name: "Streamlit", icon: "fa-solid fa-chart-simple" },
      ],
    },
    {
      category: "LLM & RAG Engineering",
      icon: "fa-solid fa-brain",
      badge: "Retrieval & Embeddings",
      skills: [
        { name: "LLMs", icon: "fa-solid fa-brain" },
        { name: "RAG", icon: "fa-solid fa-database" },
        { name: "LangChain", icon: "fa-solid fa-link" },
        { name: "Embeddings", icon: "fa-solid fa-vector-square" },
        { name: "Qdrant", icon: "fa-solid fa-cubes-stacked" },
      ],
    },
    {
      category: "Agentic AI Development",
      icon: "fa-solid fa-network-wired",
      badge: "Autonomous Agents",
      skills: [
        { name: "Google ADK", icon: "fa-brands fa-google" },
        { name: "LangGraph", icon: "fa-solid fa-diagram-project" },
        { name: "CrewAI", icon: "fa-solid fa-users-gear" },
        { name: "Tool Calling", icon: "fa-solid fa-wrench" },
        { name: "Multi-Agent Systems", icon: "fa-solid fa-robot" },
      ],
    },
    {
      category: "Data & Business Intelligence",
      icon: "fa-solid fa-chart-pie",
      badge: "Analytics & Automation",
      skills: [
        { name: "Power BI", icon: "fa-solid fa-chart-bar" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "Excel & VBA", icon: "fa-solid fa-file-excel" },
        { name: "Tableau", icon: "fa-solid fa-chart-pie" },
        { name: "DAX", icon: "fa-solid fa-calculator" },
        { name: "Pandas", icon: "fa-solid fa-code" },
        { name: "Teammate Analytics", icon: "fa-solid fa-magnifying-glass-chart" },
        { name: "Prompt Engineering", icon: "fa-solid fa-terminal" },
      ],
    },
  ];

  const skills = [
    { name: "Power BI", icon: "fa-solid fa-chart-bar", img: "images/tools/powerbi.png" },
    { name: "Excel", icon: "fa-solid fa-file-excel", img: "images/tools/excel.png" },
    { name: "SQL", icon: "fa-solid fa-database", img: "images/tools/sql.png" },
    { name: "Python", icon: "fa-brands fa-python", img: "images/tools/python.png" },
    { name: "Tableau", icon: "fa-solid fa-chart-pie", img: "images/tools/tableau.png" },
    { name: "DAX", icon: "fa-solid fa-calculator", img: "images/tools/dax.png" },
    { name: "Google Sheets", icon: "fa-solid fa-table", img: "images/tools/gsheets.png" },
    { name: "Apps Script", icon: "fa-brands fa-google", img: "images/tools/appsscript.png" },
    { name: "Pandas", icon: "fa-solid fa-code", img: "images/tools/pandas.png" },
    { name: "Data Studio", icon: "fa-solid fa-chart-column", img: "images/tools/datastudio.png" },
    { name: "Teammate Analytics", icon: "fa-solid fa-magnifying-glass-chart", img: "images/tools/teammate.png" },
    { name: "Prompt Engineering", icon: "fa-solid fa-brain", img: "images/tools/prompteng.png" },
  ];

  const projects = [


    {
      title: "Domain-Specific RAG Assistant",
      featured: true,
      video: "Domain-Specific RAG Assistant.mp4",
      shortDesc:
        "Advanced multimodal Retrieval-Augmented Generation (RAG) application leveraging NVIDIA NIM, Nemotron embeddings, and Qdrant to deliver context-aware, source-grounded answers from complex document collections.",
      extraHTML: `
    <p>Engineered an end-to-end Domain-Specific RAG Assistant that transforms unstructured documents into an intelligent knowledge retrieval system. The application combines multimodal document ingestion, section-aware processing, deterministic vector indexing, and context-grounded LLM generation to minimize hallucinations and improve answer traceability.</p>

    <ul>
      <li>Developed a multimodal document ingestion pipeline supporting digital PDFs, scanned documents, image-based pages, and mixed-content documents containing tables and charts.</li>

      <li>Integrated PyMuPDF and NVIDIA NIM Vision using the meta/llama-3.2-11b-vision-instruct model to extract information from complex document layouts and scanned pages.</li>

      <li>Implemented image preprocessing with contrast and sharpness enhancement retries, blank-page detection, and RapidOCR fallback for improved text extraction reliability.</li>

      <li>Designed a section-aware chunking strategy that preserves heading hierarchies, section identifiers, chunk positions, and document page relationships across multi-page content.</li>

     
    </ul>

    <div class="extra-highlights">
      <span class="extra-highlight"><i class="fa-solid fa-brain"></i> Advanced RAG Architecture</span>
      <span class="extra-highlight"><i class="fa-solid fa-eye"></i> Multimodal AI Vision</span>
      <span class="extra-highlight"><i class="fa-solid fa-database"></i> Qdrant Vector Database</span>
    </div>`,
      tags: [
        "AI Engineering",
        "RAG Development",
        "Python",
        "NVIDIA NIM",
        "Qdrant",
        "RapidOCR",
        "Vector Search",
        "Context Engineering",
        "LLM Integration",
      ],
      icon: "fa-solid fa-brain",
    },

    {
      title: "Streamlit Gemini AI Chat",
      featured: true,
      video: "gemini_generated_video.mp4",
      shortDesc:
        "AI-powered conversational chatbot built with Streamlit and Google's Gemini API, featuring real-time streaming, configurable model settings, conversation management, and resilient API error handling.",
      extraHTML: `
    <p>Developed a lightweight, interactive AI chatbot using Streamlit and Google's Gemini models, providing a configurable conversational interface with real-time response generation, intelligent request handling, and robust API integration.</p>
    <ul>
      <li>Built an interactive chatbot interface using Streamlit's native chat components for seamless user conversations.</li>
      <li>Integrated Google's Gemini API using the modern google-genai SDK, with automatic fallback support for the legacy google-generativeai SDK.</li>
      <li>Added customizable system instructions to control assistant behavior, response style, and conversational context.</li>
      <li>Implemented real-time streaming responses alongside an optional complete-response generation mode.</li>
      <li>Managed conversational history using Streamlit session state to maintain context across interactions.</li>
    </ul>
    <div class="extra-highlights">
      <span class="extra-highlight"><i class="fa-solid fa-robot"></i> Gemini AI Integration</span>
      <span class="extra-highlight"><i class="fa-solid fa-bolt"></i> Real-Time Streaming</span>
    </div>`,
      tags: [
        "AI Engineering",
        "Google Gemini API",
        "Python",
        "Streamlit",
        "LLM Integration",
        "Prompt Engineering",
      ],
      icon: "fa-solid fa-robot",
    },
    {
      title: "Survey Report Automation Dashboard",
      featured: true,
      video: "Reports upated .mp4",
      shortDesc:
        "Interactive Excel VBA & Power BI dashboard automating survey data analysis, quarterly trend tracking, and stakeholder KPI reports.",
      extraHTML: `
        <p>Built an end-to-end automated reporting solution connecting raw survey exports to visual dashboards with one-click refresh.</p>
        <ul>
          <li>An Excel VBA-based project designed to automate survey data analysis and quarterly reporting.</li>
          <li>Uses VBA macros to process raw data, classify responses by quarter, calculate counts, and generate charts automatically.</li>
          <li>Reads raw survey data, checks response dates, assigns records to the correct quarter, and calculates category totals.</li>
          <li>Enhances reporting speed, accuracy, and consistency while reducing manual effort and avoiding errors.</li>
          <li>Automated quarterly summaries, response analysis, chart generation, and dashboard creation.</li>
          <li>Prepares summary tables and visual charts for executive management reporting.</li>
        </ul>
        <div class="extra-highlights">
          <span class="extra-highlight"><i class="fa-solid fa-clock"></i> Reporting time cut by 90%</span>
        </div>`,
      tags: ["Data Visualization", "Excel Automation", "VBA Macro", "Power BI"],
      icon: "fa-solid fa-chart-bar",
    },
    {
      title: "Product Process Management System",
      featured: false,
      video: "Product Process Management System.mp4",
      shortDesc:
        "Centralized Streamlit platform digitizing product lifecycles, CAD specs, valuation, and inventory tracking without manual spreadsheets.",
      extraHTML: `
        <p>A comprehensive Product Process Management System that integrates product data management, valuation, inventory tracking, CAD information, reporting, and real-time collaboration.</p>
        <ul>
          <li>Enables organizations to manage product lifecycles efficiently while ensuring security, scalability, and operational visibility.</li>
          <li>Centralizes product-related activities within a unified system for streamlined management.</li>
          <li>Eliminates manual, Excel-based operations, reducing inefficiencies and errors.</li>
          <li>Improves transparency and efficiency, driving overall organizational effectiveness.</li>
          <li>Accelerates reporting and decision-making through structured insights.</li>
        </ul>
        <div class="extra-highlights">
          <span class="extra-highlight"><i class="fa-solid fa-brain"></i> Centralized Lifecycle Tracking</span>
          <span class="extra-highlight"><i class="fa-solid fa-users"></i> Unified Inventory & CAD</span>
        </div>`,
      tags: ["Python", "Streamlit", "Excel", "Pandas"],
      icon: "fa-solid fa-boxes-stacked",
    },
    {
      title: "Sales Dashboard Analysis",
      featured: false,
      video: "Sales Dashboard.mp4",
      shortDesc:
        "Comprehensive visualization of financial performance, inventory velocity, and regional revenue trends for strategic evaluation.",
      extraHTML: `
        <p>Designed an integrated audit analytics solution that consolidates revenue metrics, regional distribution, and inventory performance.</p>
        <ul>
          <li>Improved financial performance monitoring through centralized KPI tracking.</li>
          <li>Enhanced sales forecasting and budget planning capabilities.</li>
          <li>Enabled better inventory management and operational efficiency.</li>
          <li>Supported strategic decision-making with interactive and data-driven insights.</li>
        </ul>`,
      tags: ["Excel", "SQL", "Streamlit", "Python"],
      icon: "fa-solid fa-file-invoice",
    },
    {
      title: "Laptop Price Prediction System",
      featured: false,
      video: "Laptop Price Prediction Video.mp4",
      shortDesc:
        "Supervised regression machine learning model deployed via Streamlit estimating consumer laptop prices from hardware specifications.",
      extraHTML: `
        <p>Developed an end-to-end regression machine learning pipeline that accurately estimates laptop pricing based on component configurations.</p>
        <ul>
          <li>Developed a machine learning-based laptop price prediction system using supervised regression algorithms.</li>
          <li>Built the frontend interface using Streamlit for instant user interaction and real-time inference.</li>
          <li>Trained the model using laptop specifications: RAM, storage, processor, brand, resolution, OS, and GPU.</li>
          <li>Helped users estimate laptop prices based on configuration before buying or comparing devices.</li>
        </ul>`,
      tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      icon: "fa-solid fa-microchip",
    },
    {
      title: "Payment Gap & Collection Performance",
      featured: false,
      video: "Payment Gap & Collection.mp4",
      shortDesc:
        "Cash flow tracking system monitoring transaction values, payment due dates, actual settlement delays, and collection anomalies.",
      extraHTML: `
        <p>The dashboard tracks monthly totals, due dates, actual payment dates, payment delays, and collection variance.</p>
        <ul>
          <li>Monitored transaction settlement timelines to identify cash flow bottlenecks.</li>
          <li>Isolated delay outliers (>3 days) to flag risk exceptions for collections teams.</li>
          <li>Streamlined monthly reconciliation and credit term follow-up planning.</li>
        </ul>`,
      tags: ["Excel", "Power BI", "Data Modeling"],
      icon: "fa-solid fa-money-bill-trend-up",
    },
    {
      title: "Mastering Your Money: Personal Finance Dashboard",
      featured: false,
      img: "Finance Dashboard.jpeg",
      shortDesc:
        "Holistic wealth tracking dashboard organizing income streams, monthly expenses, savings ratios, debt, and net worth trajectory.",
      extraHTML: `
        <p>The project began with collecting and organizing personal finance data, including income, expenses, savings, assets, liabilities, and investments.</p>
        <ul>
          <li>Tracked major savings categories such as mutual funds, emergency funds, fixed deposits, and liquid cash.</li>
          <li>Provided a clear financial snapshot to help users manage money more effectively.</li>
          <li>Displayed key financial KPIs: All-Time Income ₹1.51M, Savings Rate 23%, and Net Worth Generated ₹109K.</li>
          <li>Assisted in planning future financial goals by monitoring income, expenses, savings, and debt.</li>
        </ul>`,
      tags: ["Excel", "SQL", "Power BI", "Financial Modeling"],
      icon: "fa-solid fa-wallet",
    },
  ];

  /* ==========================================================================
     HELPER FUNCTIONS
     ========================================================================== */

  function projThumb(icon, img, label, video) {
    if (video) {
      return `
        <i class="${icon} proj-thumb-icon"></i>
        <video class="proj-thumb-video"
               autoplay
               muted
               loop
               playsinline
               preload="metadata"
               ${img ? `poster="${img}"` : ""}>
          <source src="${video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="proj-video-fallback">
          <i class="${icon}" style="font-size:2rem;color:var(--chrome-500);"></i>
          <span>Interactive Preview<br><strong>${label}</strong></span>
        </div>
        <div class="proj-thumb-overlay"></div>`;
    }

    if (img) {
      return `
        <i class="${icon} proj-thumb-icon"></i>
        <img src="${img}" alt="${label}" class="proj-thumb-img"
             onerror="this.style.display='none';">
        <div class="proj-thumb-overlay"></div>`;
    }

    return `<i class="${icon} proj-thumb-icon"></i>`;
  }

  function skillIcon(icon, img) {
    if (img) {
      return `<img src="${img}" alt="" class="skill-tool-img"
                   onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
              <i class="${icon} skill-fa-icon" style="display:none;"></i>`;
    }
    return `<i class="${icon} skill-fa-icon"></i>`;
  }

  /* ==========================================================================
     RENDER EXPERIENCES (TIMELINE FORMAT)
     ========================================================================== */
  const expC = document.getElementById("expContainer");
  if (expC) {
    experiences.forEach((e, i) => {
      expC.insertAdjacentHTML(
        "beforeend",
        `
        <div class="exp-card reveal" style="transition-delay:${i * 0.1}s">
          <div class="timeline-node ${e.current ? "current" : ""}"></div>
          <div class="exp-header">
            <div>
              <h3 class="exp-role">${e.role}</h3>
              <div class="exp-company"><i class="${e.icon}"></i> ${e.company}</div>
            </div>
            <div class="exp-period"><i class="fa-regular fa-calendar"></i> ${e.period}</div>
          </div>
          <div class="exp-desc">${e.shortDesc}</div>
          <div class="exp-tags">${e.tags.map((t) => `<span class="exp-tag">${t}</span>`).join("")}</div>
          <button class="btn-read-more" onclick="toggleReadMore(this)">
            <i class="fa-solid fa-chevron-down"></i> Read More
          </button>
          <div class="extra-content">
            <div class="extra-content-inner">${e.extraHTML}</div>
          </div>
        </div>`
      );
    });
  }

  /* ==========================================================================
     RENDER EDUCATION (TIMELINE FORMAT)
     ========================================================================== */
  const eduC = document.getElementById("eduContainer");
  if (eduC) {
    education.forEach((e, i) => {
      eduC.insertAdjacentHTML(
        "beforeend",
        `
        <div class="edu-card reveal" style="transition-delay:${i * 0.1}s">
          <div class="timeline-node ${e.current ? "current" : ""}"></div>
          <div class="edu-header">
            <div>
              <h3 class="edu-degree">${e.degree}</h3>
              <div class="edu-school"><i class="${e.icon}"></i> ${e.school}</div>
            </div>
            <div class="edu-period"><i class="fa-regular fa-calendar"></i> ${e.period}</div>
          </div>
          ${e.shortDesc ? `<div class="edu-desc">${e.shortDesc}</div>` : ""}
          <button class="btn-read-more" onclick="toggleReadMore(this)">
            <i class="fa-solid fa-chevron-down"></i> Read More
          </button>
          <div class="extra-content">
            <div class="extra-content-inner">${e.extraHTML || ""}</div>
          </div>
        </div>`
      );
    });
  }

  /* ==========================================================================
     RENDER SKILLS (GROUPED TAG CHIPS BY DOMAIN)
     ========================================================================== */
  const skC = document.getElementById("skillsContainer");
  if (skC) {
    skillCategories.forEach((cat, i) => {
      skC.insertAdjacentHTML(
        "beforeend",
        `
        <div class="skill-category-card reveal" style="transition-delay:${i * 0.08}s">
          <div class="skill-cat-header">
            <div class="skill-cat-icon">
              <i class="${cat.icon}"></i>
            </div>
            <div>
              <h3 class="skill-cat-title">${cat.category}</h3>
              <span class="skill-cat-badge">${cat.badge}</span>
            </div>
          </div>
          <div class="skill-chips">
            ${cat.skills
          .map(
            (s) => `
              <span class="skill-chip">
                <i class="${s.icon}"></i>
                <span>${s.name}</span>
              </span>`
          )
          .join("")}
          </div>
        </div>`
      );
    });
  }

  /* ==========================================================================
     RENDER PROJECTS
     ========================================================================== */
  const prjC = document.getElementById("projContainer");
  if (prjC) {
    projects.forEach((p, i) => {
      prjC.insertAdjacentHTML(
        "beforeend",
        `
        <div class="proj-card ${p.featured ? "featured" : ""} reveal" style="transition-delay:${i * 0.08}s">
          <div class="proj-thumb">
            ${projThumb(p.icon, p.img, p.title, p.video || "")}
          </div>
          <div class="proj-body">
            <h3 class="proj-title">${p.title}</h3>
            <div class="proj-desc">${p.shortDesc}</div>
            <div class="proj-tags">${p.tags.map((t) => `<span class="proj-tag">${t}</span>`).join("")}</div>
            <div class="proj-actions">
              <button class="btn-read-more" onclick="toggleReadMore(this)">
                <i class="fa-solid fa-chevron-down"></i> Case Study Details
              </button>
            </div>
            <div class="extra-content">
              <div class="extra-content-inner">${p.extraHTML}</div>
            </div>
          </div>
        </div>`
      );
    });
  }

  /* ==========================================================================
     DRAWER ACCORDION TOGGLE
     ========================================================================== */
  window.toggleReadMore = function (btn) {
    const parent = btn.closest(".exp-card, .edu-card, .proj-body");
    if (!parent) return;
    const extra = parent.querySelector(".extra-content");
    if (!extra) return;

    const isOpen = extra.classList.toggle("expanded");
    btn.classList.toggle("open", isOpen);

    const isProject = btn.textContent.includes("Case Study");
    const label = isProject ? "Case Study Details" : "Read More";
    const labelClose = isProject ? "Close Details" : "Read Less";

    btn.innerHTML = isOpen
      ? `<i class="fa-solid fa-chevron-up"></i> ${labelClose}`
      : `<i class="fa-solid fa-chevron-down"></i> ${label}`;
  };

  /* ==========================================================================
     MOBILE NAVIGATION
     ========================================================================== */
  window.toggleNav = function () {
    const n = document.getElementById("mobNav");
    const b = document.getElementById("hamBtn");
    if (!n || !b) return;
    const isOpen = n.classList.toggle("open");
    b.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  window.closeNav = function () {
    const n = document.getElementById("mobNav");
    const b = document.getElementById("hamBtn");
    if (n) n.classList.remove("open");
    if (b) b.classList.remove("active");
    document.body.style.overflow = "";
  };

  /* ==========================================================================
     SCROLL & HEADER STATES
     ========================================================================== */
  const header = document.getElementById("siteHeader");
  const sections = document.querySelectorAll("section[id]");
  const pillLinks = document.querySelectorAll(".pill-nav a");
  const mobLinks = document.querySelectorAll(".mob-nav a");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      if (header) {
        header.classList.toggle("scrolled", scrollY > 30);
      }

      let currentSecId = "";
      sections.forEach((sec) => {
        if (scrollY >= sec.offsetTop - 140) {
          currentSecId = sec.id;
        }
      });

      pillLinks.forEach((link) => {
        const target = link.getAttribute("href");
        link.classList.toggle("active", target === "#" + currentSecId);
      });

      mobLinks.forEach((link) => {
        const target = link.getAttribute("href");
        link.classList.toggle("active", target === "#" + currentSecId);
      });
    },
    { passive: true }
  );

  /* ==========================================================================
     TYPEWRITER EFFECT (HERO)
     ========================================================================== */
  const roles = [
    "AI Engineer",
    "LLM Developer",
    "Claude Transformation Engineer",
    "Digital Transformation Enthusiast",
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typedEl = document.getElementById("typedText");

  function typeLoop() {
    if (!typedEl) return;
    const currentWord = roles[roleIdx];

    if (!isDeleting) {
      typedEl.textContent = currentWord.slice(0, ++charIdx);
      if (charIdx === currentWord.length) {
        isDeleting = true;
        setTimeout(typeLoop, 2200);
        return;
      }
      setTimeout(typeLoop, 75);
    } else {
      typedEl.textContent = currentWord.slice(0, --charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(typeLoop, 350);
        return;
      }
      setTimeout(typeLoop, 40);
    }
  }
  typeLoop();

  /* ==========================================================================
     ANIMATED STATS COUNTER
     ========================================================================== */
  const cntObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const targetNum = parseInt(el.dataset.target, 10);
        if (isNaN(targetNum)) return;

        let current = 0;
        const step = Math.max(1, Math.ceil(targetNum / 35));
        const timer = setInterval(() => {
          current = Math.min(current + step, targetNum);
          el.textContent = current + "+";
          if (current >= targetNum) clearInterval(timer);
        }, 40);
        cntObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".stat-num").forEach((num) => cntObserver.observe(num));

  /* ==========================================================================
     INTERSECTION OBSERVER (FADE-UP REVEAL)
     ========================================================================== */
  const revObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revObserver.observe(el));

  /* ==========================================================================
     PROJECT VIDEO AUTOPLAY & RESILIENCE
     ========================================================================== */
  function initProjectVideos() {
    document.querySelectorAll(".proj-thumb-video").forEach((video) => {
      const thumb = video.closest(".proj-thumb");

      function handleVideoError() {
        if (thumb) thumb.classList.add("video-error");
      }

      video.addEventListener("error", handleVideoError);
      video.querySelectorAll("source").forEach((source) => {
        source.addEventListener("error", handleVideoError);
      });

      video.addEventListener("loadeddata", () => {
        if (thumb) thumb.classList.remove("video-error");
      });

      const promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
          video.controls = true;
        });
      }
    });
  }
  initProjectVideos();
});

