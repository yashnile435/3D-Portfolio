import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    id: "travelease",
    title: "TravelEase",
    subtitle: "Native Android Travel & Tour Booking App",
    tagline:
      "Android mobile application engineered with Java and Firebase for exploring and booking curated travel packages.",
    description:
      "A native Android application developed using Android Studio, Java, and Firebase. Features travel package browsing, real-time booking reservations, interactive trip itineraries, and cloud synchronization.",
    overview:
      "TravelEase streamlines the mobile travel experience by providing vacationers with an intuitive Android interface to explore curated holiday packages, check schedules, and submit bookings with instant confirmation.",
    problem:
      "Travelers often find traditional booking websites clumsy on mobile screens and lack instant notifications or offline reference capabilities during journeys.",
    solution:
      "Engineered a native Android client using Java with structured Activity/Fragment components, integrating Firebase Authentication and Firestore for reliable mobile state synchronization.",
    keyFeatures: [
      "Native Android UI built with Java adhering to Google Material Design guidelines",
      "Firebase Firestore integration for dynamic package listings and real-time reservation processing",
      "Secure user authentication and personalized booking history management",
      "Interactive itinerary detail screens with itemized trip schedules and inclusions",
      "Local data caching ensuring smooth navigation even under intermittent network connectivity",
    ],
    technologies: [
      "Android SDK",
      "Java",
      "Firebase Firestore",
      "Firebase Auth",
      "Android Studio",
      "Material Design",
    ],
    category: "Android & Mobile",
    status: "Completed",
    isAndroidProject: true,
    githubUrl: "", // Editable placeholder
    liveDemoUrl: "", // Editable placeholder
    imagePlaceholder: "/assets/projects/travelease.svg",
  },
  {
    id: "android-ott-manager",
    title: "Android OTT Manager",
    subtitle: "Streaming Subscription & Watch-Status Tracker",
    tagline:
      "Mobile application built with Flutter, Dart, and Firebase for managing streaming subscriptions and shared accounts.",
    description:
      "A mobile application engineered with Flutter, Dart, and Firebase to track multiple OTT streaming services, subscription billing cycles, group-split shared expenses, and active watch-statuses.",
    overview:
      "Android OTT Manager simplifies modern media consumption by consolidating subscriptions into a unified mobile dashboard with renewal notifications and group sharing tools.",
    problem:
      "Users frequently subscribe to multiple streaming platforms, losing track of renewal dates, splitting costs manually across groups, and forgetting what episode they were watching.",
    solution:
      "Built a reactive cross-platform mobile client for Android using Flutter and Dart, backed by Firebase Cloud Firestore, enabling shared cost calculations, renewal reminders, and viewing progress logs.",
    keyFeatures: [
      "Consolidated subscription dashboard tracking billing dates, monthly costs, and renewal alerts",
      "Group-share cost splitting tool calculating individual member dues for family and shared plans",
      "Watching-status tracker organizing watchlist items, completed seasons, and currently active shows",
      "Firebase Cloud Firestore backend ensuring real-time multi-device synchronization",
      "Responsive mobile interface with intuitive dark mode theme tailored for entertainment content",
    ],
    technologies: [
      "Kotlin",
      "Firebase",
      "Cloud Firestore",
      "Android",
      "State Management",
    ],
    category: "Android & Mobile",
    status: "Completed",
    isAndroidProject: true,
    githubUrl: "", // Editable placeholder
    liveDemoUrl: "", // Editable placeholder
    imagePlaceholder: "/assets/projects/ott-manager.svg",
  },
  {
    id: "smart-expense-analysis",
    title: "Smart Financial Expense Analysis",
    subtitle: "Deterministic Financial Management & Reporting System",
    tagline:
      "Spring Boot REST backend with MySQL schema for transactional expense management and reporting.",
    description:
      "A deterministic financial expense analysis and tracking platform built with Java 21 and Spring Boot. Provides structured expense tracking, category-based budget thresholds, transactional data integrity, dashboard reporting, and PDF export.",
    overview:
      "Smart Financial Expense Analysis is an enterprise-grade personal and business expense tracking application. The system strictly executes deterministic mathematical algorithms to aggregate spending, track recurring budgets, and highlight budget variance with absolute precision.",
    problem:
      "Users and small businesses often struggle with fragmented expenditure tracking across multiple categories, lacking deterministic breakdown reports and reliable transaction-level records.",
    solution:
      "Engineered a modular Spring Boot REST service with relational MySQL tables to handle expense ingestion, categorization, budget limit warnings, aggregated reporting dashboards, and statement PDF exports.",
    keyFeatures: [
      "Deterministic calculation engine ensuring complete numerical consistency and zero budget deviations",
      "Structured Spring Boot REST API layer with validation, DTO mapping, and exception handling",
      "Relational database architecture in MySQL optimized for rapid categorization and monthly range queries",
      "Comprehensive reporting dashboard with automated PDF export for periodic expenditure statements",
      "Configurable budget caps with threshold notifications for individual expenditure categories",
    ],
    technologies: [
      "Java 21",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Spring Data JPA",
      "PDF Export",
      "Maven",
    ],
    category: "Backend & Systems",
    status: "Completed",
    isAndroidProject: false,
    githubUrl: "", // Editable placeholder
    liveDemoUrl: "", // Editable placeholder
    imagePlaceholder: "/assets/projects/smart-expense.svg",
  },
  {
    id: "student-learning-platform",
    title: "Student Learning Platform (STP)",
    subtitle: "Multi-Role Educational & Booking Platform",
    tagline:
      "React and Cloud Firestore platform enabling role-based access for students, teachers, and admins.",
    description:
      "A full-featured educational management platform built with ReactJS and Firebase Cloud Firestore. Implements fine-grained role-based access control for students, teachers, and administrative staff with real-time class booking and progress reporting.",
    overview:
      "The Student Learning Platform (STP) centralizes instructional workflows, schedule booking, and academic reporting into a single responsive web interface. Designed for seamless interactions between learners and educators.",
    problem:
      "Educational institutions require distinct access privileges and real-time coordination between faculty scheduling, student enrollments, and administrative oversight without cumbersome manual workflows.",
    solution:
      "Built a reactive web client using ReactJS connected to Firebase Cloud Firestore for real-time state synchronization, secure role-based rules, and responsive schedule booking dashboards.",
    keyFeatures: [
      "Role-based permission architecture supporting Students, Teachers, and Administrative Staff",
      "Real-time Firestore synchronization for course schedules, session bookings, and updates",
      "Teacher dashboards for session management, attendance tracking, and student evaluations",
      "Student portal for discovering learning modules, booking slots, and tracking completion",
      "Admin console for managing user accounts, permissions, and system-wide activity logs",
    ],
    technologies: [
      "ReactJS",
      "Firebase Firestore",
      "Firebase Auth",
      "JavaScript",
      "CSS3 / Modern UI",
    ],
    category: "Web Applications",
    status: "Completed",
    isAndroidProject: false,
    githubUrl: "https://github.com/yashnile435/student-learing-platform.git", // Editable placeholder
    liveDemoUrl: "https://studentlearningplatform.netlify.app/", // Editable placeholder
    imagePlaceholder: "/assets/projects/stp-learning.svg",
  },
  {
    id: "virtual-blood-bank",
    title: "Virtual Blood Bank",
    subtitle: "Emergency Donor & Blood Stock Management System",
    tagline:
      "React web application connecting donors, blood banks, and emergency recipients.",
    description:
      "A digital blood bank coordination system developed with React and Firebase. Provides live blood group inventory tracking, urgent blood request routing, location-aware search, and donor registration workflows.",
    overview:
      "Virtual Blood Bank addresses critical emergency response latency by providing a unified digital portal where blood banks publish certified stock levels and patients can instantly query availability.",
    problem:
      "During medical emergencies, finding verified blood units and registered compatible donors quickly is often delayed by fragmented hospital phone trees and unverified information.",
    solution:
      "Designed a dedicated three-tier portal allowing Blood Bank Owners to manage stock in real time, recipients to filter by blood group and location, and administrators to audit requests.",
    keyFeatures: [
      "Multi-stakeholder system: Blood Bank Owners, General Users/Recipients, and Platform Admins",
      "Real-time blood group inventory tracking (A+, A-, B+, B-, O+, O-, AB+, AB-)",
      "Emergency search and filtration engine by blood type, unit urgency, and district",
      "Digital blood booking and reservation system to expedite hospital handoffs",
      "Secure donor registration system with eligibility checks",
    ],
    technologies: [
      "ReactJS",
      "Firebase Firestore",
      "Firebase Auth",
      "JavaScript",
      "Tailwind CSS",
    ],
    category: "Web Applications",
    status: "Completed",
    isAndroidProject: false,
    githubUrl: "", // Editable placeholder
    liveDemoUrl: "https://virtual-blood-bank.netlify.app/", // Editable placeholder
    imagePlaceholder: "/assets/projects/blood-bank.svg",
  },
  {
    id: "bappa-taxi-services",
    title: "Bappa Taxi Services",
    subtitle: "Travel & Taxi Booking Management Portal",
    tagline:
      "Full-stack commercial portal built with React, PHP, and MySQL for taxi fleet bookings.",
    description:
      "A full-stack taxi booking and fleet reservation website created with a React frontend and PHP/MySQL backend services. Enables customers to browse vehicles, compute trip tariffs, and book travel taxi services seamlessly.",
    overview:
      "Bappa Taxi Services provides a modern digital presence for a regional taxi and travel operator, automating customer booking inquiries, dynamic tariff estimation, and vehicle fleet management.",
    problem:
      "Traditional travel operators manage inquiries through manual phone logs, leading to miscalculated tariffs, double-booked vehicles, and missed customer opportunities.",
    solution:
      "Implemented an interactive client portal with transparent vehicle specifications, automated trip tariff calculation, and a PHP/MySQL reservation processing backend.",
    keyFeatures: [
      "Vehicle fleet showcase categorized by seating capacity, baggage allowance, and AC amenities",
      "Dynamic tariff estimator based on travel distance and vehicle category",
      "PHP REST service layer handling reservation validation and database insertions",
      "MySQL database schema for tracking customer bookings, trip schedules, and vehicle assignments",
      "Mobile-responsive layout optimized for travelers booking on smartphones",
    ],
    technologies: [
      "ReactJS",
      "PHP",
      "MySQL",
      "REST Integration",
      "CSS3",
      "XAMPP",
    ],
    category: "Web Applications",
    status: "Completed",
    isAndroidProject: false,      
    githubUrl: "", // Editable placeholder
    liveDemoUrl: "https://bappatravels.online/", // Editable placeholder
    imagePlaceholder: "/assets/projects/bappa-taxi.svg",
  },
  {
    id: "personal-blog",
    title: "Personal Blog",
    subtitle: "Clean Content & Technical Article Platform",
    tagline:
      "High-performance web publishing platform built with core web technologies and MySQL.",
    description:
      "A streamlined personal publishing platform engineered using semantic HTML, modern CSS, vanilla JavaScript, and MySQL. Focuses on reader typography, fast load times, and structured content indexing.",
    overview:
      "Created as a fast, accessible digital space for technical writing, documentation notes, and computer science study insights.",
    problem:
      "Heavy content management frameworks introduce unnecessary bloat, sluggish page transitions, and excessive script bundles for straightforward technical articles.",
    solution:
      "Developed a clean, lightweight architecture using foundational web standards and a relational MySQL database to achieve near-instantaneous load times and clear typography.",
    keyFeatures: [
      "Semantic HTML5 structure optimized for readability and accessibility",
      "Clean typography hierarchy with high-contrast text styling in modern CSS",
      "Structured database schema in MySQL for articles, tags, and category taxonomies",
      "Zero external runtime framework overhead for maximum browser rendering speed",
      "Responsive design adapting flawlessly across desktops, tablets, and phones",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "Responsive Web Design",
    ],
    category: "Web Applications",
    status: "Completed",
    isAndroidProject: false,
    githubUrl: "", // Editable placeholder
    liveDemoUrl: "", // Editable placeholder
    imagePlaceholder: "/assets/projects/personal-blog.svg",
  },
];
