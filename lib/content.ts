export const profile = {
  name: "Moksh Shah",
  title: "Full Stack Developer",
  company: "Cultrd Growers LLP",
  email: "moksh.shah.mps@gmail.com",
  github: "https://github.com/MokshPShah",
  linkedin: "https://linkedin.com/in/me-moksh",
  // wa.me needs the full international number (91 = India). The text is pre-filled
  // in the visitor's chat box, so they only have to finish the sentence and send.
  whatsapp: `https://wa.me/919427390651?text=${encodeURIComponent(
    "Hi Moksh, I came across your portfolio (shahmoksh.dev) and would like to talk about ",
  )}`,
  resume: "/MOKSH_SHAH_RESUME.pdf",
};

export type Job = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  // Optional details. Anything left empty is simply not shown on the site.
  location?: string;
  summary?: string;
  highlights: string[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    company: "Cultrd Growers LLP",
    role: "Full Stack Developer",
    period: "Jun 2026 to now",
    current: true,
    location: "Surat, hybrid",
    summary:
      "Cultrd Growers is a jewelry business. I build the ERPs it runs on: one for production, one for stock, vendor work and accounting.",
    highlights: [
      "Work across two web ERPs in a shared TypeScript monorepo, with 550+ commits since June.",
      "Production ERP: the CAD queue with a 3D viewer, casting and setting jobs with vendors, a repairs flow and an order timeline.",
      "Accounting ERP: issuing diamonds to vendors, receiving goods from packing-list PDFs, ledger-driven accounts, and invoices priced from a rate card.",
      "Wrote shared packages both ERPs use, including a data-table engine with Excel-style filters and the packing-list parser.",
    ],
    stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Tailwind CSS", "Playwright", "Vitest"],
  },
];

export const training = {
  name: "Red & White Skill Education",
  course: "Full stack development (MERN)",
  period: "2024 to 2026",
  body: "Certified Full Stack Developer. Built 10+ end-to-end projects, from REST APIs to deployed React apps.",
};

export const recognition = [
  { title: "TechWar 2024 Hackathon", body: "Built a working prototype with a team inside a 24-hour deadline." },
  { title: "PhonePe UI Clone Challenge", body: "Recreated the PhonePe mobile UI in React and Tailwind CSS." },
  { title: "Certified Full Stack Developer", body: "Red & White Skill Education, MERN track." },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  context: "work" | "personal";
  period?: string;
  summary: string;
  stack: string[];
  // Work projects are confidential, so they have no screenshot or source link.
  image?: string;
  source?: string;
  live?: string;
  featured?: boolean;
  // Hidden projects stay in the file but are not shown or given a page.
  hidden?: boolean;
  results?: { value: string; label: string }[];
  highlights?: string[];
};

const allProjects: Project[] = [
  // Work at Cultrd Growers LLP. Overviews only: the systems are confidential,
  // so no client names, screenshots or code links.
  {
    slug: "production-erp",
    title: "Jewelry production ERP",
    kind: "Web ERP",
    context: "work",
    period: "Jun 2026 to now",
    summary:
      "The internal system that moves a custom jewelry order from intake through CAD, casting, stone setting, quality checks and shipping, including repairs and work sent to outside vendors. Each company's data is kept apart in the database with row-level security.",
    stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Tailwind CSS", "TanStack Table"],
    results: [
      { value: "110", label: "screens in the app" },
      { value: "89", label: "data models" },
      { value: "245", label: "of my commits" },
    ],
    highlights: [
      "Built the CAD queue, with a 3D model viewer, and kept it in sync with the design team's task board.",
      "Modelled combined casting and setting jobs with outside vendors, and a repairs flow that runs alongside new orders.",
      "Added an order timeline so anyone can see where a piece is and who has it.",
      "Gave every register Excel-style column filters and sorting, using a shared table package.",
    ],
  },
  {
    slug: "accounting-erp",
    title: "Production and accounting ERP",
    kind: "Web ERP",
    context: "work",
    period: "Jun 2026 to now",
    summary:
      "A second ERP that runs stock, vendor outsourcing, transfers between branches and invoicing on top of a double-entry accounting engine.",
    stack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "React PDF", "ExcelJS"],
    results: [
      { value: "120", label: "screens in the app" },
      { value: "106", label: "data models" },
      { value: "290+", label: "of my commits" },
    ],
    highlights: [
      "Built the flow for issuing diamonds to vendors, with bag and stock numbering and printed certificate stickers.",
      "Receive goods by reading the vendor's packing-list PDF instead of retyping it.",
      "Worked on the accounts module: parties driven by the ledger, precise gold balances, and memo and invoice PDFs.",
      "Added a rate card that prices invoices automatically, plus currency conversion and duties on branch transfers.",
      "Excel and photo exports for stock lists.",
    ],
  },
  {
    slug: "desktop-inventory",
    title: "Diamond inventory desktop app",
    kind: "Desktop app, side project",
    context: "personal",
    period: "2026",
    summary:
      "A Windows desktop app for a diamond manufacturing floor: rough parcels in, polished stones out, with sales and books alongside. Built on my own, from first commit to installer.",
    stack: ["Electron", "React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "PostgreSQL", "Playwright"],
    results: [
      { value: "29", label: "screens" },
      { value: "38", label: "Playwright test files" },
      { value: "290+", label: "commits, all mine" },
    ],
    highlights: [
      "Tracks stock from rough parcels through the production pipeline to polished diamonds, with custody at every stage.",
      "Works offline for inventory, production, dispatch slips and sales, then syncs when the network returns. Accounting stays online-only so no one sees figures built from half-synced data.",
      "Supports several companies on one install, with each company's books kept separate.",
      "Ships through a signed installer with machine activation and automatic updates.",
    ],
  },
  {
    slug: "rfid-stock-check",
    hidden: true,
    title: "RFID stock verification",
    kind: "Web tool",
    context: "work",
    period: "Jul 2026",
    summary:
      "A browser tool for physical stock counts. Sweep an RFID wand over a tray and the page shows, live, which stones matched, which are missing and which tags don't belong.",
    stack: ["Next.js", "TypeScript", "WebSockets", "ExcelJS"],
    highlights: [
      "Pulls the expected stone list on the server, so inventory-system credentials never reach the browser.",
      "Re-scan just the missing stones and watch the count go down.",
      "Exports an Excel file with matched, missing and unexpected stones on separate sheets, built in the browser.",
    ],
  },
  {
    slug: "erp-iphone-app",
    hidden: true,
    title: "ERP iPhone app",
    kind: "iOS app",
    context: "work",
    period: "Aug to Sep 2026",
    summary:
      "A read-only iPhone app for the production ERP: dashboard charts, the orders list and order detail with photos.",
    stack: ["SwiftUI", "Swift"],
    highlights: [
      "Dashboard charts and filters for orders in transit.",
      "Keeps order data off the disk and hidden in the app switcher.",
    ],
  },
  {
    slug: "headless-storefront",
    hidden: true,
    title: "Headless jewelry storefront",
    kind: "E-commerce, in development",
    context: "work",
    period: "Oct 2026",
    summary:
      "Moving a jewelry brand's Shopify theme to a headless React storefront, with every existing page covered before it goes live.",
    stack: ["Shopify Hydrogen", "React Router", "TypeScript", "GraphQL"],
    highlights: [
      "Ported the existing theme to Hydrogen, covering every route including accounts, cart and blogs.",
      "Custom form controls and validation, a mobile search sheet, and an accessibility and performance pass.",
    ],
  },
  // Personal side projects. Repositories are private, so no source links.
  {
    slug: "paper-trader",
    title: "Paper trading platform",
    kind: "Side project",
    context: "personal",
    summary:
      "Practice trading Indian stocks, US stocks and crypto with real prices and simulated fills. An API server with a live matching engine, and an Android app.",
    stack: ["TypeScript", "Fastify", "Drizzle ORM", "PostgreSQL", "Expo", "React Native"],
    highlights: [
      "The matching worker keeps open orders in memory and only touches the database when an order changes, fills or expires, so the hosted database can sleep when idle.",
      "Each account has one market and one currency, with margin, blocked funds and charges worked out the way a broker would.",
      "Invite-only sign-up, with owner and admin roles for managing users.",
    ],
  },
  {
    slug: "stock-screener",
    title: "Stock screener",
    kind: "Side project",
    context: "personal",
    summary:
      "Scans Indian stocks during market hours, scores each one for short, medium and long holds, and sends Telegram alerts with entry, stop-loss and targets.",
    stack: ["Python", "Telegram Bot API", "YAML"],
    highlights: [
      "Rules-based scoring across three time horizons, using public price data.",
      "Runs a momentum strategy modelled on a Nifty 200 momentum index, with separate paper and live portfolio books.",
      "Runs on macOS, Linux and Windows, once or on a loop.",
    ],
  },
  {
    slug: "attendance-app",
    title: "Attendance app",
    kind: "Side project",
    context: "personal",
    summary:
      "An Android app for logging each day as office, home, half day, leave or holiday, with in and out times and notes. Everything stays on the phone.",
    stack: ["Expo", "React Native", "TypeScript", "GitHub Actions"],
    highlights: [
      "Month view and day-by-day view, with backup to a file and restore.",
      "Every push to main builds a signed release APK through GitHub Actions, with no Expo account needed.",
    ],
  },
  {
    slug: "strenoxa",
    title: "Strenoxa",
    kind: "E-commerce store, personal project",
    context: "personal",
    summary:
      "An online store for a gym supplements brand, with a Redux cart, JWT accounts and a full Razorpay checkout.",
    stack: ["Next.js 14", "TypeScript", "Redux Toolkit", "MongoDB", "Razorpay", "Vercel"],
    image: "/hero.png",
    source: "https://github.com/MokshPShah/Strenoxa_E-Commerce",
    live: "https://strenoxa.vercel.app",
    featured: true,
    results: [
      { value: "<1.5s", label: "page load" },
      { value: "95+", label: "Lighthouse score" },
      { value: "4", label: "payment methods" },
    ],
    highlights: [
      "Built on the Next.js 14 App Router with TypeScript, splitting server and client components.",
      "Integrated Razorpay with signature verification for card, UPI, netbanking and cash on delivery.",
      "Cart state lives in Redux Toolkit; MongoDB schemas keep stock levels correct when several people buy at once.",
      "Wrote coupon validation, tax calculation and an address book for checkout.",
    ],
  },
  {
    slug: "inventory",
    title: "Inventory System",
    kind: "Inventory dashboard",
    context: "personal",
    summary:
      "A MERN dashboard for managing products and orders, with JWT-protected routes and product images on Cloudinary.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    image: "/inventory.png",
    source: "https://github.com/MokshPShah/Inventory_Management",
    live: "https://inventory-management-two-mu.vercel.app",
    featured: true,
    results: [
      { value: "8", label: "screens" },
      { value: "4", label: "data models" },
      { value: "5", label: "REST routes" },
    ],
    highlights: [
      "Eight front-end views backed by four MongoDB models.",
      "Five REST routes handle create, read, update and delete for products and orders.",
      "Product images upload to Cloudinary instead of the app server.",
      "Routes and sessions are protected with JSON Web Tokens on the backend.",
    ],
  },
  {
    slug: "chatbot",
    title: "Gemini Chatbot",
    kind: "API integration",
    context: "personal",
    summary:
      "A chat client for Google's Gemini API. Replies render as Markdown, code blocks included, and the window follows new messages.",
    stack: ["React", "Vite", "Gemini API", "react-markdown"],
    image: "/project-chatbot.png",
    source: "https://github.com/MokshPShah/Chatbot-AI",
    live: "https://mchatbot.netlify.app",
    featured: true,
    highlights: [
      "Sends the conversation to the Gemini API and keeps the history in React state.",
      "Renders replies with react-markdown so lists and code blocks stay readable.",
      "Scrolls to the newest message automatically while an answer comes in.",
    ],
  },
  {
    slug: "admin-panel",
    title: "Admin Panel",
    kind: "Server-rendered app",
    context: "personal",
    summary:
      "An admin dashboard in Express and EJS, structured as models, views and controllers, for managing users and categories.",
    stack: ["Node.js", "Express", "EJS", "MongoDB"],
    image: "/project-admin.jpg",
    source: "https://github.com/MokshPShah/Node-Js/tree/main/Admin-Panel",
  },
  {
    slug: "movie-portal",
    title: "Movie Portal",
    kind: "Server-rendered app",
    context: "personal",
    summary:
      "Browse films, open a detail page for each one, and add or edit entries through a small Express backend.",
    stack: ["Node.js", "Express", "EJS", "MongoDB"],
    image: "/movies.png",
    source: "https://github.com/MokshPShah/Node-Js/tree/main/Movie-Project",
  },
  {
    slug: "image-generator",
    title: "Image Generator",
    kind: "API integration",
    context: "personal",
    summary: "Type a prompt and get an image back from OpenAI's image API.",
    stack: ["React", "OpenAI API"],
    image: "/project-ai-image.png",
    source: "https://github.com/MokshPShah/AI-Image-Generator",
    live: "https://genximage.netlify.app/",
  },
  {
    slug: "react-exercises",
    title: "React exercises",
    kind: "Learning repository",
    context: "personal",
    summary: "The small apps I built while learning React: components, props, state and routing.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    image: "/project-react.png",
    source: "https://github.com/MokshPShah/React-Js",
  },
  {
    slug: "node-exercises",
    title: "Node exercises",
    kind: "Learning repository",
    context: "personal",
    summary: "Practice servers covering routing, middleware, REST endpoints and MongoDB connections.",
    stack: ["Node.js", "Express", "MongoDB"],
    image: "/project-node.png",
    source: "https://github.com/MokshPShah/Node-Js",
  },
];

export const projects = allProjects.filter((p) => !p.hidden);

export const skills = [
  { group: "Front end", items: "React, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, TanStack Table and Query" },
  { group: "Back end and data", items: "Node.js, Express, tRPC, Fastify, REST APIs, Prisma, Drizzle, PostgreSQL, MongoDB" },
  { group: "Desktop and mobile", items: "Electron, Expo, React Native" },
  { group: "Testing and tooling", items: "Playwright, Vitest, Git, GitHub Actions, Postman, Vercel" },
  { group: "Security and services", items: "JWT, bcrypt, Razorpay, Cloudinary, Gemini API" },
  { group: "Fundamentals", items: "Data structures and algorithms, object-oriented programming" },
];

export const education = [
  {
    period: "2024 to 2027",
    title: "B.Sc. Information Technology",
    place: "Vidhyadeep University",
    note: "Expected 2027. Studying alongside full-time work.",
  },
  {
    period: "2023 to 2024",
    title: "Higher Secondary (12th)",
    place: "Shri C.C. Shah English High School",
  },
  {
    period: "2021 to 2022",
    title: "Secondary (10th)",
    place: "Shri C.C. Shah English High School",
  },
];
