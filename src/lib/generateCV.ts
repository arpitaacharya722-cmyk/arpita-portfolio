import jsPDF from "jspdf";

export function downloadCV() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const pageW = 210;
  const pageH = 297;
  const margin = 18;
  const contentW = pageW - margin * 2;

  // ── Colours ──────────────────────────────────────────────────────────────
  const ORANGE = [230, 120, 40] as [number, number, number];
  const DARK   = [18, 20, 30]  as [number, number, number];
  const MID    = [60, 65, 80]  as [number, number, number];
  const LIGHT  = [245, 245, 248] as [number, number, number];
  const WHITE  = [255, 255, 255] as [number, number, number];
  const DIVIDER = [220, 220, 228] as [number, number, number];

  let y = 0;

  // ── Header band ──────────────────────────────────────────────────────────
  doc.setFillColor(...DARK);
  doc.rect(0, 0, pageW, 46, "F");

  // Accent stripe
  doc.setFillColor(...ORANGE);
  doc.rect(0, 0, 5, 46, "F");

  doc.setTextColor(...WHITE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("ARPITA ACHARYA", margin + 4, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...ORANGE);
  doc.text("B.Tech  |  Information Technology  |  Batch 2027", margin + 4, 26);

  doc.setTextColor(200, 200, 210);
  doc.setFontSize(8.5);
  const contactLine =
    "+91 9064343993   •   arpitaacharya722@gmail.com   •   Asansol, West Bengal   •   linkedin.com/in/arpita-acharya-133a93358";
  doc.text(contactLine, margin + 4, 35);

  y = 54;

  // ── Helper functions ─────────────────────────────────────────────────────
  function checkPageBreak(needed: number) {
    if (y + needed > pageH - 14) {
      doc.addPage();
      y = 18;
    }
  }

  function sectionHeading(title: string) {
    checkPageBreak(14);
    y += 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...ORANGE);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(...ORANGE);
    doc.setLineWidth(0.5);
    doc.line(margin, y, margin + contentW, y);
    y += 5;
    doc.setTextColor(...DARK);
  }

  function bodyText(text: string, indent = 0, colour: [number, number, number] = DARK) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...colour);
    const lines = doc.splitTextToSize(text, contentW - indent);
    for (const line of lines) {
      checkPageBreak(5);
      doc.text(line, margin + indent, y);
      y += 4.5;
    }
  }

  function boldLabel(label: string, value: string, indent = 0) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    const labelW = doc.getTextWidth(label + "  ");
    doc.text(label, margin + indent, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...MID);
    doc.text(value, margin + indent + labelW, y);
    y += 4.8;
  }

  function bullet(text: string, indent = 4) {
    checkPageBreak(6);
    doc.setFillColor(...ORANGE);
    doc.circle(margin + indent - 1.5, y - 1.2, 0.8, "F");
    bodyText(text, indent, MID);
  }

  function tag(text: string, x: number, tagY: number): number {
    const pad = 2.5;
    doc.setFontSize(7.5);
    const tw = doc.getTextWidth(text) + pad * 2;
    doc.setFillColor(...LIGHT);
    doc.setDrawColor(...DIVIDER);
    doc.setLineWidth(0.3);
    doc.roundedRect(x, tagY - 3.5, tw, 5.5, 1, 1, "FD");
    doc.setTextColor(...MID);
    doc.text(text, x + pad, tagY);
    return tw + 2;
  }

  // ── Professional Objective ───────────────────────────────────────────────
  sectionHeading("Professional Objective");
  bodyText(
    "Motivated Information Technology undergraduate (6th Semester, Techno International New Town) with hands-on experience in Python, SQL, web technologies, and data analytics. Adept at building practical software solutions and eager to contribute in placement and off-campus opportunities. Passionate about continuous learning and developing scalable, real-world applications. Expected graduation: 2027.",
    0,
    MID
  );
  y += 1;

  // ── Education ────────────────────────────────────────────────────────────
  sectionHeading("Education");

  const eduData = [
    { degree: "B.Tech in Information Technology", inst: "Techno International New Town, Kolkata", period: "2024 – 2027 (Pursuing)" },
    { degree: "Diploma in Metallurgical Engineering", inst: "Engineering Institute For Junior Executives", period: "2021 – 2024 (Completed)" },
    { degree: "Higher Secondary (12th)", inst: "West Bengal Board", period: "Completed" },
    { degree: "Secondary (10th)", inst: "West Bengal Board", period: "Completed" },
  ];

  for (const edu of eduData) {
    checkPageBreak(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.text(edu.degree, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...ORANGE);
    const periodW = doc.getTextWidth(edu.period);
    doc.text(edu.period, margin + contentW - periodW, y);

    y += 4.5;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(...MID);
    doc.text(edu.inst, margin, y);
    y += 6;
  }

  // ── Technical Skills ─────────────────────────────────────────────────────
  sectionHeading("Technical Skills");

  const skills: { cat: string; list: string[] }[] = [
    { cat: "Languages", list: ["Python", "JavaScript", "HTML5", "CSS3"] },
    { cat: "Frameworks & Libraries", list: ["ReactJS", "Bootstrap", "Pandas", "NumPy", "Matplotlib"] },
    { cat: "Databases", list: ["MySQL", "SQLite", "Database Design", "Query Optimization"] },
    { cat: "Cloud & Tools", list: ["Microsoft Azure (Cognitive Services)", "Git", "GitHub", "VS Code"] },
    { cat: "Data & Analytics", list: ["Data Analysis", "Excel (Pivot Tables, VLOOKUP)", "Data Visualization", "Google Analytics Fundamentals"] },
    { cat: "Soft Skills", list: ["Analytical Thinking", "Problem Solving", "Team Collaboration", "Quick Learner", "Communication"] },
  ];

  for (const skill of skills) {
    checkPageBreak(10);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(...DARK);
    doc.text(skill.cat + ":", margin, y);
    const catW = doc.getTextWidth(skill.cat + ":  ");
    let tx = margin + catW;
    const rowY = y;
    for (const s of skill.list) {
      const tw = doc.getTextWidth(s) + 7;
      if (tx + tw > margin + contentW) {
        y += 5.5;
        tx = margin + catW;
      }
      tx += tag(s, tx, rowY + (tx === margin + catW ? 0 : y - rowY));
    }
    y += 6;
  }

  // ── Projects ─────────────────────────────────────────────────────────────
  sectionHeading("Projects");

  const projects = [
    {
      title: "Student Result Management System",
      stack: "Python  •  MySQL  •  Tkinter",
      bullets: [
        "Developed a desktop-based application to manage and display student academic results with CRUD operations.",
        "Designed a normalized relational database schema in MySQL to store student records, subjects, and grades.",
        "Built an intuitive GUI using Tkinter enabling administrators to search, add, update, and delete student entries.",
        "Implemented login authentication for admin access, ensuring data security.",
      ],
    },
    {
      title: "Personal Portfolio Website",
      stack: "HTML5  •  CSS3  •  JavaScript  •  ReactJS",
      bullets: [
        "Designed and developed a fully responsive personal portfolio website to showcase skills, projects, and certifications.",
        "Built reusable React components for Navbar, Hero section, Projects card, and Contact form.",
        "Implemented CSS animations and smooth scroll behaviour, improving user experience and engagement.",
        "Hosted on GitHub Pages and optimized for SEO using meta tags and structured content.",
      ],
    },
    {
      title: "COVID-19 Data Analysis Dashboard",
      stack: "Python  •  Pandas  •  Matplotlib  •  NumPy  •  Excel",
      bullets: [
        "Performed exploratory data analysis (EDA) on a publicly available COVID-19 dataset with 100,000+ records.",
        "Cleaned and transformed raw data using Pandas, handling missing values and outliers for accurate analysis.",
        "Visualized trends including case growth, recovery rates, and regional comparisons using Matplotlib and Excel charts.",
        "Generated automated summary reports with key insights, demonstrating data storytelling skills.",
      ],
    },
  ];

  for (const project of projects) {
    checkPageBreak(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...DARK);
    doc.text(project.title, margin, y);
    y += 4.5;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(...ORANGE);
    doc.text(project.stack, margin, y);
    y += 5;

    for (const b of project.bullets) {
      bullet(b);
    }
    y += 2;
  }

  // ── Certifications ───────────────────────────────────────────────────────
  sectionHeading("Certifications");

  const certs = [
    { title: "Foundations of Data Analytics: Data, Data Everywhere", issuer: "Google / Coursera" },
    { title: "Azure Cognitive Services – Computer Vision", issuer: "Microsoft Certified" },
    { title: "Microsoft Excel – Budget Creation & Data Management", issuer: "Coursera" },
    { title: "Microsoft Office Specialist (Word, Excel, PowerPoint)", issuer: "Coursera" },
  ];

  for (const cert of certs) {
    checkPageBreak(8);
    boldLabel(cert.issuer + "  —", cert.title);
    y += 0.5;
  }
  y += 2;

  // ── Activities ───────────────────────────────────────────────────────────
  sectionHeading("Co-Curricular Activities & Achievements");
  bullet("Participated in college-level technical workshops and seminars on emerging technologies.");
  bullet("Completed online problem-solving challenges improving logical reasoning and algorithmic thinking.");
  bullet("Active member of college IT club, contributing to events and technology-awareness sessions.");
  y += 2;

  // ── Languages & Interests ────────────────────────────────────────────────
  checkPageBreak(18);
  sectionHeading("Languages Known");
  bodyText("English (Professional)   •   Bengali (Native)   •   Hindi (Conversational)", 0, MID);
  y += 2;

  sectionHeading("Interests & Hobbies");
  bodyText("Exploring New Technologies  •  Logical Puzzles & Problem Solving  •  Pencil Sketching  •  Reading  •  Singing", 0, MID);
  y += 4;

  // ── Declaration ──────────────────────────────────────────────────────────
  checkPageBreak(14);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(...MID);
  doc.text(
    "I hereby declare that all the information provided above is true and correct to the best of my knowledge and belief.",
    margin,
    y
  );
  y += 7;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...DARK);
  doc.text("Arpita Acharya", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...MID);
  doc.text("Asansol, West Bengal", margin + 38, y);

  // ── Footer on every page ─────────────────────────────────────────────────
  const totalPages = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setDrawColor(...DIVIDER);
    doc.setLineWidth(0.3);
    doc.line(margin, pageH - 10, pageW - margin, pageH - 10);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(180, 180, 190);
    doc.text("Arpita Acharya  •  arpitaacharya722@gmail.com  •  +91 9064343993", margin, pageH - 6);
    doc.text(`${i} / ${totalPages}`, pageW - margin - 6, pageH - 6);
  }

  doc.save("Arpita_Acharya_CV.pdf");
}
