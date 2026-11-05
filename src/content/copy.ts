import type { Locale, PageKey } from "./config";

type Service = { id: string; title: string; short: string; homeTitle: string; homeDescription: string; detail: string; examples: string[]; outcomes: string[] };
type Copy = {
  nav: Record<PageKey, string>; langLabel: string; skip: string; menu: string; close: string;
  common: { eyebrow: string; explore: string; talk: string; learn: string; allServices: string; direction: string; about: string; start: string; contactCta: string; contactBody: string; footer: string; interest: string; possible: string };
  meta: Record<PageKey, { title: string; description: string }>;
  home: { eyebrow: string; hero: string; intro: string; servicesEyebrow: string; servicesCount: string; showcase: { label: string; previous: string; next: string; view: string; finalTitle: string; finalSubtitle: string }; whyEyebrow: string; whyHeading: string; why: { title: string; text: string }[]; approachHeading: string; approachIntro: string; ventureHeading: string; ventureText: string; aboutHeading: string; aboutText: string };
  services: { hero: string; intro: string; overview: string; detailHeading: string; detailIntro: string; examples: string; outcomes: string; processHeading: string; processText: string; modelsHeading: string; modelsIntro: string; models: { title: string; text: string }[] };
  serviceList: Service[];
  steps: { title: string; text: string }[];
  approach: { hero: string; intro: string; principlesHeading: string; principles: { title: string; text: string }[]; closingHeading: string; closingText: string };
  ventures: { hero: string; intro: string; whyHeading: string; whyText: string; interestsHeading: string; interestsIntro: string; interests: string[]; processHeading: string; processIntro: string; process: { title: string; text: string }[]; partnerHeading: string; partnerText: string };
  about: { hero: string; intro: string; philosophyHeading: string; philosophyText: string; whyHeading: string; whyText: string; teamHeading: string; teamText: string; teamNote: string; futureHeading: string; futureText: string };
  contact: { hero: string; intro: string; topicsHeading: string; topics: string[]; actionHeading: string; actionText: string; emailLabel: string; fallbackHeading: string; fallbackText: string; configNote: string };
};

export const copy: Record<Locale, Copy> = {
  en: {
    nav: { home: "Home", services: "Services", approach: "Approach", ventures: "Ventures", about: "About", contact: "Contact" },
    langLabel: "Language", skip: "Skip to content", menu: "Open menu", close: "Close menu",
    common: { eyebrow: "Independent Engineering & Innovation Studio", explore: "Explore Services", talk: "Let's Talk", learn: "Learn more", allServices: "All services", direction: "Explore our direction", about: "About Philodox", start: "Start a conversation", contactCta: "Have a challenge worth solving?", contactBody: "Whether you're exploring a technical solution, developing a new idea, or considering a partnership, we'd be glad to start a conversation.", footer: "Engineering meaningful solutions. Exploring what comes next.", interest: "Areas of interest", possible: "Potential deliverables" },
    meta: {
      home: { title: "Tailored Software, AI & Data Solutions — Philodox", description: "Philodox designs and implements software, AI integrations, data tools, and digital products tailored to each business challenge." },
      services: { title: "Engineering & Consulting Services — Philodox", description: "Explore software engineering, applied AI, data analytics, technology consulting, and product prototyping with Philodox." },
      approach: { title: "Our Approach — Philodox", description: "How Philodox thinks through problems: understand context, explore options, build with care, and refine through evidence." },
      ventures: { title: "Venture Exploration — Philodox", description: "Discover Philodox's direction for exploring ideas, prototyping possibilities, and validating potential new products." },
      about: { title: "About Philodox", description: "Meet Philodox, an independent engineering and innovation studio founded by Punnawit Silapasert and Thaingern Pinta." },
      contact: { title: "Contact Philodox", description: "Start a conversation about engineering services, AI and data, product collaboration, or venture exploration." },
    },
    home: {
      eyebrow: "Engineering · AI · Data · Product", hero: "Engineering shaped around your challenge.", intro: "We design and implement software, AI integrations, data tools, and digital products around your goals and workflows—from focused prototypes to integrated systems.",
      servicesEyebrow: "What we can help you build", servicesCount: "Our services / 01 — 05",
      showcase: { label: "Featured capabilities", previous: "Previous capability", next: "Next capability", view: "Explore this service", finalTitle: "Consulting & Product Development", finalSubtitle: "Architecture · Feasibility · Prototypes" },
      whyEyebrow: "Why work with Philodox", whyHeading: "Focused collaboration. Practical execution.", why: [
        { title: "Direct Communication", text: "Work closely with the people building your solution." },
        { title: "Lean Execution", text: "Clear priorities and practical steps, without unnecessary layers." },
        { title: "Flexible Thinking", text: "Solutions shaped around the problem, not a fixed technology." },
      ],
      approachHeading: "A thoughtful approach to building what matters.", approachIntro: "Our intended way of working keeps the problem in focus and makes room to learn along the way.",
      ventureHeading: "Beyond today's challenges.", ventureText: "We explore original ideas and emerging opportunities, testing feasibility before deciding what to develop.",
      aboutHeading: "Independent by design. Curious by nature.", aboutText: "Philodox brings engineering discipline and curiosity together to build useful solutions and explore what comes next.",
    },
    services: {
      hero: "Engineering for the problem in front of you.", intro: "Technical work should make complexity useful. We bring engineering, analysis, and product thinking together to shape solutions around real needs.",
      overview: "Where we can help", detailHeading: "From question to tangible outcome.", detailIntro: "Each engagement starts with the context. These capabilities can stand alone or come together around a broader challenge.", examples: "Relevant challenges", outcomes: "Potential deliverables",
      processHeading: "How a collaboration could begin", processText: "We start by clarifying the challenge and what success would mean. From there, we can assess feasibility, agree on a sensible scope, and begin with the smallest useful step.",
      modelsHeading: "Ways to work together", modelsIntro: "The right format depends on the question, the team, and the stage of the work.", models: [
        { title: "Project development", text: "Design and build a defined application, system, or integration." },
        { title: "Technical consulting", text: "Assess options, architecture, and technical risks before a decision." },
        { title: "Prototype or MVP", text: "Make an idea tangible enough to test its value and feasibility." },
        { title: "Exploratory collaboration", text: "Work through an open-ended opportunity together and decide what merits further development." },
      ],
    },
    serviceList: [
      { id: "software", title: "Software Engineering", short: "Purpose-built applications and systems that make work clearer and more effective.", homeTitle: "Software Development", homeDescription: "Web applications, business systems, and workflow automation.", detail: "We can design and develop web applications, internal tools, APIs, and workflow systems around the way your organization actually works.", examples: ["Fragmented workflows", "Disconnected systems", "Legacy processes"], outcomes: ["Web applications", "APIs and integrations", "Internal platforms", "Workflow automation"] },
      { id: "ai", title: "AI Solutions & Integration", short: "Applied AI where it has a useful role in a real workflow.", homeTitle: "AI Solutions", homeDescription: "AI integration, intelligent workflows, and applied AI applications.", detail: "We explore AI-assisted workflows, LLM features, retrieval-based systems, and integration opportunities, with feasibility and limitations made explicit.", examples: ["Knowledge retrieval", "Repetitive information tasks", "AI feature feasibility"], outcomes: ["AI-assisted workflows", "Retrieval prototypes", "Feature integrations", "Feasibility assessments"] },
      { id: "data", title: "Data Science & Analytics", short: "Turn available data into clearer signals and better decisions.", homeTitle: "Data & Analytics", homeDescription: "Data analysis, dashboards, and decision-support tools.", detail: "From preparation and exploration to visual reporting and appropriate modeling, we help make data understandable and actionable.", examples: ["Scattered data sources", "Unclear performance signals", "Manual reporting"], outcomes: ["Analysis and visualizations", "Reporting dashboards", "Decision-support tools", "Predictive models where appropriate"] },
      { id: "consulting", title: "Technology Consulting", short: "Independent technical thinking before major commitments.", homeTitle: "Technology Consulting", homeDescription: "Technical planning, solution architecture, and feasibility evaluation.", detail: "We help frame technical problems, evaluate options, identify risks, and recommend practical architectures and implementation paths.", examples: ["Technology selection", "Architecture decisions", "Implementation uncertainty"], outcomes: ["Discovery findings", "Architecture recommendations", "Feasibility reviews", "Implementation plans"] },
      { id: "product", title: "Product Development & Prototyping", short: "Move an early idea toward something people can experience and test.", homeTitle: "Product Development", homeDescription: "MVPs, prototypes, and early-stage product engineering.", detail: "We combine product discovery, experience design, and engineering to shape concepts, prototypes, and early-stage products.", examples: ["Unvalidated concepts", "New product opportunities", "Technical unknowns"], outcomes: ["Product prototypes", "MVP plans", "Proofs of concept", "Early-stage applications"] },
    ],
    steps: [
      { title: "Understand", text: "Identify the real problem, context, constraints, and desired outcomes." },
      { title: "Explore", text: "Evaluate approaches, feasibility, and trade-offs." },
      { title: "Build", text: "Design, prototype, and implement an appropriate solution." },
      { title: "Refine", text: "Test, validate, learn, and improve." },
    ],
    approach: {
      hero: "Good solutions begin with better questions.", intro: "We believe useful engineering starts by understanding what matters, then choosing the simplest sound path forward.", principlesHeading: "Principles for the work", principles: [
        { title: "Understand before implementing", text: "Clarify the problem, people, constraints, and desired outcome before selecting tools." },
        { title: "Simplicity with purpose", text: "Use enough structure to solve the problem well, without carrying complexity that adds no value." },
        { title: "Decisions informed by evidence", text: "Use research, experiments, and technical evaluation to challenge assumptions when the stakes warrant it." },
        { title: "Build, test, learn", text: "Make progress in useful increments and let feedback shape the next step." },
        { title: "Technology serves the outcome", text: "Choose tools for fit, maintainability, and context rather than novelty alone." },
      ], closingHeading: "A practical rhythm, not a rigid formula.", closingText: "Different challenges need different levels of discovery, experimentation, and implementation. Our proposed workflow gives those conversations a clear starting point.",
    },
    ventures: {
      hero: "Exploring ideas beyond the brief.", intro: "Client challenges are one part of our work. We are also interested in identifying opportunities, testing original ideas, and developing products when the evidence supports them.",
      whyHeading: "Why we explore", whyText: "Questions that emerge from changing technology and everyday needs can lead to useful new products. We want to give promising ideas room to be examined before treating them as ventures.",
      interestsHeading: "What catches our attention", interestsIntro: "These are areas of interest, not announced products or an active portfolio.", interests: ["Intelligent systems", "Education and learning technology", "Productivity and workflows", "Data-informed products", "Emerging digital experiences"],
      processHeading: "An intended path from idea to evidence", processIntro: "The aim is to reduce uncertainty one step at a time.", process: [
        { title: "Explore", text: "Frame an opportunity and question the assumptions behind it." },
        { title: "Prototype", text: "Make the idea concrete enough to examine and discuss." },
        { title: "Validate", text: "Seek evidence of usefulness, feasibility, and a viable path forward." },
        { title: "Develop", text: "Invest further only when the case becomes clearer." },
      ], partnerHeading: "Open to thoughtful partnerships", partnerText: "If you are exploring an opportunity where technical insight and product thinking could help, we would welcome a conversation.",
    },
    about: {
      hero: "Independent by design. Curious by nature.", intro: "Philodox is an emerging engineering and venture studio shaped by a small team and a conviction that good ideas deserve careful testing and capable execution.",
      philosophyHeading: "Ideas are beginnings, not conclusions.", philosophyText: "Our name invites a useful tension: to care about ideas while staying willing to challenge them. We value curiosity, first-principles thinking, experimentation, and the discipline to learn from evidence.",
      whyHeading: "Why we build", whyText: "We are drawn to work where technology can make a practical difference: clearer processes, more useful tools, and new possibilities that have been tested in the real world.",
      teamHeading: "Co-founders", teamText: "Philodox was founded by Punnawit Silapasert and Thaingern Pinta, with backgrounds in Data Science and Innovation and Computer Engineering.", teamNote: "Founder details are presented on the main page.",
      futureHeading: "Looking forward", futureText: "Our direction brings together engineering services and the exploration of original products. Both ask the same thing of us: stay curious, work rigorously, and make ideas useful.",
    },
    contact: {
      hero: "Let's begin with a conversation.", intro: "Tell us about a challenge, an idea, or an opportunity you are considering. A clear starting question is enough.", topicsHeading: "What we can discuss", topics: ["Engineering services", "AI and data consulting", "Product collaboration", "Venture partnership", "General inquiries"],
      actionHeading: "Reach Philodox", actionText: "Share the context, what you hope to achieve, and any constraints you already know about.", emailLabel: "Email us", fallbackHeading: "Reach Philodox", fallbackText: "Email us at contact@philodox.site.", configNote: "",
    },
  },
  th: {
    nav: { home: "หน้าแรก", services: "บริการ", approach: "แนวทาง", ventures: "การสร้างธุรกิจ", about: "เกี่ยวกับเรา", contact: "ติดต่อ" },
    langLabel: "ภาษา", skip: "ข้ามไปยังเนื้อหา", menu: "เปิดเมนู", close: "ปิดเมนู",
    common: { eyebrow: "สตูดิโอวิศวกรรมและนวัตกรรมอิสระ", explore: "สำรวจบริการ", talk: "พูดคุยกับเรา", learn: "อ่านเพิ่มเติม", allServices: "ดูบริการทั้งหมด", direction: "สำรวจแนวคิดของเรา", about: "รู้จัก Philodox", start: "เริ่มต้นพูดคุย", contactCta: "มีโจทย์ที่อยากแก้ไปด้วยกันไหม", contactBody: "ไม่ว่าคุณกำลังมองหาทางออกทางเทคนิค พัฒนาแนวคิดใหม่ หรือหาโอกาสร่วมมือ เรายินดีเริ่มต้นด้วยการพูดคุย", footer: "พัฒนาทางออกที่มีความหมาย พร้อมสำรวจความเป็นไปได้ใหม่", interest: "ประเด็นที่สนใจ", possible: "ผลงานที่อาจส่งมอบ" },
    meta: {
      home: { title: "โซลูชันซอฟต์แวร์ AI และข้อมูลที่ออกแบบตามโจทย์ — Philodox", description: "Philodox ออกแบบและพัฒนาซอฟต์แวร์ การผสาน AI เครื่องมือข้อมูล และผลิตภัณฑ์ดิจิทัลให้เหมาะกับโจทย์ของแต่ละธุรกิจ" },
      services: { title: "บริการวิศวกรรมและที่ปรึกษา — Philodox", description: "บริการด้านซอฟต์แวร์ AI การวิเคราะห์ข้อมูล ที่ปรึกษาเทคโนโลยี และการสร้างต้นแบบผลิตภัณฑ์จาก Philodox" },
      approach: { title: "แนวทางการทำงาน — Philodox", description: "แนวคิดการทำงานของ Philodox: เข้าใจปัญหา สำรวจทางเลือก ลงมือสร้าง และปรับปรุงจากสิ่งที่เรียนรู้" },
      ventures: { title: "การสำรวจโอกาสใหม่ — Philodox", description: "แนวทางของ Philodox ในการสำรวจความคิด สร้างต้นแบบ และตรวจสอบโอกาสพัฒนาผลิตภัณฑ์ใหม่" },
      about: { title: "เกี่ยวกับ Philodox", description: "ทำความรู้จักแนวคิดเบื้องหลัง Philodox สตูดิโอวิศวกรรมและพัฒนาธุรกิจอิสระที่เริ่มจากทีมขนาดเล็ก" },
      contact: { title: "ติดต่อ Philodox", description: "เริ่มพูดคุยเรื่องงานวิศวกรรม AI และข้อมูล การพัฒนาผลิตภัณฑ์ หรือโอกาสร่วมธุรกิจกับ Philodox" },
    },
    home: {
      eyebrow: "วิศวกรรม · AI · ข้อมูล · ผลิตภัณฑ์", hero: "ออกแบบและพัฒนาให้ตรงโจทย์ธุรกิจ", intro: "เราออกแบบและพัฒนาซอฟต์แวร์ การผสาน AI เครื่องมือข้อมูล และผลิตภัณฑ์ดิจิทัลให้เหมาะกับเป้าหมายและวิธีทำงานของคุณ ตั้งแต่ต้นแบบเฉพาะจุดไปจนถึงระบบที่เชื่อมกับงานจริง",
      servicesEyebrow: "สิ่งที่เราช่วยคุณสร้างได้", servicesCount: "บริการของเรา / 01 — 05",
      showcase: { label: "ความสามารถที่นำเสนอ", previous: "ดูก่อนหน้า", next: "ดูถัดไป", view: "สำรวจบริการนี้", finalTitle: "ที่ปรึกษาและพัฒนาผลิตภัณฑ์", finalSubtitle: "สถาปัตยกรรม · ความเป็นไปได้ · ต้นแบบ" },
      whyEyebrow: "ทำไมจึงร่วมงานกับ Philodox", whyHeading: "ร่วมงานอย่างชัดเจน ลงมืออย่างมีเป้าหมาย", why: [
        { title: "สื่อสารโดยตรง", text: "พูดคุยกับคนที่ลงมือสร้างทางออกให้คุณโดยตรง" },
        { title: "ลงมืออย่างคล่องตัว", text: "จัดลำดับสิ่งสำคัญและเดินหน้าอย่างเป็นขั้นตอน โดยลดความซับซ้อนที่ไม่จำเป็น" },
        { title: "คิดได้ยืดหยุ่น", text: "เลือกทางออกตามโจทย์ ไม่ยึดติดกับเทคโนโลยีชุดเดียว" },
      ],
      approachHeading: "คิดอย่างรอบคอบ สร้างสิ่งที่สำคัญ", approachIntro: "แนวทางที่เราตั้งใจใช้ในการทำงานช่วยให้มองเห็นโจทย์ชัด และเปิดพื้นที่ให้เรียนรู้ระหว่างทาง",
      ventureHeading: "มองไกลกว่าโจทย์วันนี้", ventureText: "เราสำรวจแนวคิดและโอกาสใหม่ ทดสอบความเป็นไปได้ก่อนตัดสินใจพัฒนาต่อ",
      aboutHeading: "อิสระในการคิด ใฝ่รู้โดยธรรมชาติ", aboutText: "Philodox ผสานความรอบคอบทางวิศวกรรมกับความใฝ่รู้ เพื่อสร้างทางออกที่ใช้ได้จริงและสำรวจความเป็นไปได้ใหม่",
    },
    services: {
      hero: "งานวิศวกรรมที่เริ่มจากโจทย์ของคุณ", intro: "งานเทคนิคที่ดีควรช่วยให้เรื่องซับซ้อนจัดการได้ เราผสานวิศวกรรม การวิเคราะห์ และมุมมองด้านผลิตภัณฑ์เพื่อออกแบบทางออกตามความต้องการจริง",
      overview: "สิ่งที่เราช่วยได้", detailHeading: "จากคำถามสู่ผลลัพธ์ที่จับต้องได้", detailIntro: "แต่ละงานเริ่มจากการเข้าใจบริบท ความสามารถเหล่านี้อาจใช้แยกกันหรือผสานกันเพื่อรับมือกับโจทย์ที่กว้างขึ้น", examples: "โจทย์ที่เกี่ยวข้อง", outcomes: "ผลงานที่อาจส่งมอบ",
      processHeading: "เริ่มร่วมงานกันอย่างไร", processText: "เราเริ่มจากทำความเข้าใจโจทย์และนิยามผลลัพธ์ที่ต้องการ แล้วประเมินความเป็นไปได้ กำหนดขอบเขตที่เหมาะสม และเริ่มจากขั้นเล็กที่สุดที่สร้างคุณค่าได้",
      modelsHeading: "รูปแบบการร่วมงาน", modelsIntro: "รูปแบบที่เหมาะขึ้นอยู่กับโจทย์ ทีม และระยะของงาน", models: [
        { title: "พัฒนาโครงการ", text: "ออกแบบและสร้างแอปพลิเคชัน ระบบ หรือการเชื่อมต่อที่มีขอบเขตชัดเจน" },
        { title: "ให้คำปรึกษาทางเทคนิค", text: "ประเมินทางเลือก สถาปัตยกรรม และความเสี่ยงก่อนตัดสินใจ" },
        { title: "ต้นแบบหรือ MVP", text: "ทำให้แนวคิดเป็นรูปธรรมพอที่จะทดสอบคุณค่าและความเป็นไปได้" },
        { title: "ร่วมสำรวจโอกาส", text: "ช่วยกันทำความเข้าใจโอกาสที่ยังเปิดกว้าง และตัดสินใจว่าสิ่งใดควรพัฒนาต่อ" },
      ],
    },
    serviceList: [
      { id: "software", title: "วิศวกรรมซอฟต์แวร์", short: "แอปพลิเคชันและระบบที่ออกแบบให้เหมาะกับงานจริง", homeTitle: "พัฒนาซอฟต์แวร์", homeDescription: "เว็บแอป ระบบธุรกิจ และงานอัตโนมัติสำหรับขั้นตอนการทำงาน", detail: "เราออกแบบและพัฒนาเว็บแอป เครื่องมือภายใน API และระบบงานให้สอดคล้องกับวิธีทำงานขององค์กร", examples: ["ขั้นตอนงานกระจัดกระจาย", "ระบบไม่เชื่อมต่อกัน", "กระบวนการเดิมที่ใช้แรงมาก"], outcomes: ["เว็บแอปพลิเคชัน", "API และการเชื่อมต่อ", "แพลตฟอร์มภายใน", "ระบบงานอัตโนมัติ"] },
      { id: "ai", title: "โซลูชันและการผสาน AI", short: "นำ AI มาใช้ในจุดที่ช่วยงานจริงได้", homeTitle: "โซลูชัน AI", homeDescription: "ผสาน AI เข้ากับระบบและขั้นตอนงาน พร้อมพัฒนาแอปพลิเคชันที่ใช้ AI", detail: "เราสำรวจเวิร์กโฟลว์ที่ใช้ AI ฟีเจอร์ LLM ระบบค้นคืนข้อมูล และโอกาสเชื่อม AI เข้ากับงาน พร้อมอธิบายข้อจำกัดและความเป็นไปได้อย่างตรงไปตรงมา", examples: ["ค้นหาความรู้ในองค์กร", "งานข้อมูลที่ทำซ้ำ", "ประเมินความเป็นไปได้ของฟีเจอร์ AI"], outcomes: ["เวิร์กโฟลว์ที่มี AI ช่วย", "ต้นแบบระบบค้นคืนข้อมูล", "ฟีเจอร์ AI ที่เชื่อมกับระบบ", "ผลประเมินความเป็นไปได้"] },
      { id: "data", title: "วิทยาการข้อมูลและการวิเคราะห์", short: "เปลี่ยนข้อมูลที่มีให้เป็นสัญญาณที่ชัดเจนขึ้น", homeTitle: "ข้อมูลและการวิเคราะห์", homeDescription: "วิเคราะห์ข้อมูล สร้างแดชบอร์ด และเครื่องมือช่วยตัดสินใจ", detail: "ตั้งแต่เตรียมและสำรวจข้อมูล ไปจนถึงรายงานภาพและแบบจำลองเมื่อเหมาะสม เราช่วยให้ข้อมูลเข้าใจง่ายและนำไปใช้ตัดสินใจได้", examples: ["ข้อมูลอยู่หลายแหล่ง", "ไม่เห็นสัญญาณสำคัญ", "รายงานที่ทำด้วยมือ"], outcomes: ["ผลวิเคราะห์และภาพข้อมูล", "แดชบอร์ดรายงาน", "เครื่องมือช่วยตัดสินใจ", "แบบจำลองคาดการณ์เมื่อเหมาะสม"] },
      { id: "consulting", title: "ที่ปรึกษาเทคโนโลยี", short: "มุมมองทางเทคนิคที่เป็นอิสระก่อนตัดสินใจเรื่องสำคัญ", homeTitle: "ที่ปรึกษาเทคโนโลยี", homeDescription: "วางแผนเทคนิค ออกแบบสถาปัตยกรรม และประเมินความเป็นไปได้", detail: "เราช่วยตั้งกรอบปัญหา ประเมินทางเลือก มองความเสี่ยง และแนะนำสถาปัตยกรรมกับแผนลงมือทำที่เป็นไปได้", examples: ["เลือกเทคโนโลยี", "ตัดสินใจเรื่องสถาปัตยกรรม", "ความไม่แน่นอนของแผนงาน"], outcomes: ["ข้อค้นพบจากการสำรวจ", "คำแนะนำด้านสถาปัตยกรรม", "ผลประเมินความเป็นไปได้", "แผนดำเนินงาน"] },
      { id: "product", title: "พัฒนาผลิตภัณฑ์และต้นแบบ", short: "พาแนวคิดระยะแรกไปสู่สิ่งที่ทดลองได้", homeTitle: "พัฒนาผลิตภัณฑ์", homeDescription: "สร้าง MVP ต้นแบบ และผลิตภัณฑ์ในระยะเริ่มต้น", detail: "เราผสานการค้นหาโจทย์ผลิตภัณฑ์ การออกแบบประสบการณ์ และวิศวกรรม เพื่อพัฒนาแนวคิด ต้นแบบ และผลิตภัณฑ์ระยะแรก", examples: ["แนวคิดที่ยังไม่ผ่านการทดสอบ", "โอกาสผลิตภัณฑ์ใหม่", "คำถามด้านเทคนิค"], outcomes: ["ต้นแบบผลิตภัณฑ์", "แผน MVP", "งานพิสูจน์แนวคิด", "แอปพลิเคชันระยะแรก"] },
    ],
    steps: [
      { title: "เข้าใจ", text: "หาโจทย์จริง บริบท ข้อจำกัด และผลลัพธ์ที่ต้องการ" },
      { title: "สำรวจ", text: "เปรียบเทียบแนวทาง ความเป็นไปได้ และข้อแลกเปลี่ยน" },
      { title: "สร้าง", text: "ออกแบบ ทำต้นแบบ และพัฒนาทางออกที่เหมาะสม" },
      { title: "ปรับปรุง", text: "ทดสอบ ตรวจสอบ เรียนรู้ และพัฒนาต่อ" },
    ],
    approach: {
      hero: "ทางออกที่ดีเริ่มจากคำถามที่ดีขึ้น", intro: "เราเชื่อว่างานวิศวกรรมที่มีประโยชน์เริ่มจากการเข้าใจสิ่งสำคัญ แล้วเลือกทางเดินที่เรียบง่ายและมั่นคงที่สุด", principlesHeading: "หลักคิดในการทำงาน", principles: [
        { title: "เข้าใจก่อนลงมือ", text: "ทำความเข้าใจปัญหา ผู้เกี่ยวข้อง ข้อจำกัด และผลลัพธ์ก่อนเลือกเครื่องมือ" },
        { title: "เรียบง่ายอย่างมีเหตุผล", text: "วางโครงสร้างเท่าที่จำเป็นเพื่อแก้โจทย์ โดยไม่เพิ่มความซับซ้อนที่ไม่สร้างคุณค่า" },
        { title: "ตัดสินใจจากหลักฐาน", text: "ใช้การค้นคว้า การทดลอง และการประเมินทางเทคนิคเพื่อทบทวนสมมติฐานเมื่อจำเป็น" },
        { title: "สร้าง ทดสอบ เรียนรู้", text: "เดินหน้าเป็นช่วงที่ใช้ประโยชน์ได้ และให้ผลตอบรับช่วยกำหนดขั้นต่อไป" },
        { title: "เทคโนโลยีรับใช้เป้าหมาย", text: "เลือกเครื่องมือจากความเหมาะสม การดูแลต่อ และบริบท ไม่ใช่ความใหม่เพียงอย่างเดียว" },
      ], closingHeading: "จังหวะการทำงานที่ปรับตามโจทย์", closingText: "แต่ละปัญหาต้องการระดับการสำรวจ ทดลอง และลงมือสร้างต่างกัน ขั้นตอนที่เราเสนอจึงเป็นจุดเริ่มต้นสำหรับการทำงานร่วมกัน ไม่ใช่สูตรตายตัว",
    },
    ventures: {
      hero: "สำรวจแนวคิดที่ไกลกว่าโจทย์ตรงหน้า", intro: "งานลูกค้าเป็นเพียงด้านหนึ่งของเรา เรายังสนใจมองหาโอกาส ทดสอบแนวคิดของตนเอง และพัฒนาผลิตภัณฑ์เมื่อมีหลักฐานรองรับ",
      whyHeading: "ทำไมเราจึงสำรวจ", whyText: "คำถามที่เกิดจากเทคโนโลยีและความต้องการในชีวิตประจำวันอาจนำไปสู่ผลิตภัณฑ์ที่มีประโยชน์ เราอยากเปิดพื้นที่ให้แนวคิดที่น่าสนใจผ่านการตรวจสอบก่อนเรียกว่าเป็นธุรกิจใหม่",
      interestsHeading: "เรื่องที่เราให้ความสนใจ", interestsIntro: "นี่คือประเด็นที่สนใจ ไม่ใช่ผลิตภัณฑ์ที่เปิดตัวแล้วหรือพอร์ตธุรกิจที่ดำเนินอยู่", interests: ["ระบบอัจฉริยะ", "เทคโนโลยีเพื่อการศึกษาและการเรียนรู้", "ผลิตภาพและขั้นตอนการทำงาน", "ผลิตภัณฑ์ที่ใช้ข้อมูลเป็นฐาน", "ประสบการณ์ดิจิทัลรูปแบบใหม่"],
      processHeading: "จากแนวคิดสู่หลักฐาน", processIntro: "เป้าหมายคือค่อย ๆ ลดความไม่แน่นอนทีละขั้น", process: [
        { title: "สำรวจ", text: "มองโอกาสและตั้งคำถามกับสมมติฐานเบื้องหลัง" },
        { title: "สร้างต้นแบบ", text: "ทำแนวคิดให้เป็นรูปธรรมพอที่จะพิจารณาและพูดคุย" },
        { title: "ตรวจสอบ", text: "หาหลักฐานเรื่องประโยชน์ ความเป็นไปได้ และทางเดินต่อ" },
        { title: "พัฒนา", text: "ลงทุนลงแรงต่อเมื่อภาพชัดเจนขึ้น" },
      ], partnerHeading: "เปิดรับการร่วมคิดอย่างจริงจัง", partnerText: "หากคุณกำลังสำรวจโอกาสที่มุมมองทางเทคนิคและผลิตภัณฑ์อาจช่วยได้ เรายินดีเริ่มพูดคุย",
    },
    about: {
      hero: "อิสระในการคิด ใฝ่รู้โดยธรรมชาติ", intro: "Philodox เป็นสตูดิโอวิศวกรรมและพัฒนาธุรกิจที่กำลังก่อตัวจากทีมเล็ก ๆ ด้วยความเชื่อว่าแนวคิดที่ดีควรผ่านการทดสอบอย่างรอบคอบและลงมือทำอย่างมีคุณภาพ",
      philosophyHeading: "ความคิดคือจุดเริ่มต้น ไม่ใช่ข้อสรุป", philosophyText: "ชื่อของเราชวนให้รักษาสมดุลระหว่างการเห็นคุณค่าในแนวคิดกับความพร้อมที่จะตั้งคำถาม เราให้ความสำคัญกับความใฝ่รู้ การคิดจากหลักการพื้นฐาน การทดลอง และการเรียนรู้จากหลักฐาน",
      whyHeading: "ทำไมเราจึงสร้าง", whyText: "เราสนใจงานที่เทคโนโลยีสร้างความต่างได้จริง ไม่ว่าจะเป็นกระบวนการที่ชัดขึ้น เครื่องมือที่ใช้ประโยชน์ได้มากขึ้น หรือความเป็นไปได้ใหม่ที่ผ่านการทดสอบในโลกจริง",
      teamHeading: "ผู้ร่วมก่อตั้ง", teamText: "Philodox ก่อตั้งโดย Punnawit Silapasert และ Thaingern Pinta ซึ่งมีพื้นฐานด้านวิทยาศาสตร์ข้อมูลและนวัตกรรม และวิศวกรรมคอมพิวเตอร์", teamNote: "ดูข้อมูลผู้ก่อตั้งได้ที่หน้าหลัก",
      futureHeading: "มองไปข้างหน้า", futureText: "ทิศทางของเราผสานงานบริการวิศวกรรมกับการสำรวจผลิตภัณฑ์ของตนเอง ทั้งสองด้านต้องอาศัยสิ่งเดียวกัน: ความใฝ่รู้ ความรอบคอบ และการทำให้ความคิดใช้ประโยชน์ได้",
    },
    contact: {
      hero: "เริ่มต้นด้วยการพูดคุย", intro: "เล่าโจทย์ แนวคิด หรือโอกาสที่คุณกำลังพิจารณาให้เราฟัง แค่คำถามตั้งต้นที่ชัดเจนก็เพียงพอ", topicsHeading: "หัวข้อที่พูดคุยได้", topics: ["บริการวิศวกรรม", "ที่ปรึกษา AI และข้อมูล", "ร่วมพัฒนาผลิตภัณฑ์", "ร่วมสำรวจธุรกิจใหม่", "เรื่องทั่วไป"],
      actionHeading: "ติดต่อ Philodox", actionText: "บอกบริบท สิ่งที่คุณอยากให้เกิดขึ้น และข้อจำกัดที่ทราบในตอนนี้", emailLabel: "ส่งอีเมลถึงเรา", fallbackHeading: "ติดต่อ Philodox", fallbackText: "ส่งอีเมลถึงเราที่ contact@philodox.site", configNote: "",
    },
  },
};
