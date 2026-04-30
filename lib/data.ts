import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Artificial Intellegence and Software Development",
    location: "Algonquin College",
    description:
      "I started studying Artificial Intellegence and Software Development at Algonquin College with Co-op. Graduation will be in September 2026.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Web Development and Internet Application",
    location: "Algonquin College",
    description:
      "I started studying Web development at Algonquin College with Co-op. Graduation will be in December 2024.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Technical Specialist Co-op",
    location: "Innovapost",
    description:
      "I worked as a technical specialist at Innovapost for 4 months started in January 8th, 2024.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Project 1",
    description: "https://musicplace.vercel.app",
    tags: [
      "typescript",
      "webhook",
      "postgresql",
      "tailwindcss",
      "trpc",
      "zod",
      "clerk",
      "bunjs",
      "drizzle-orm",
      "chadcn-ui",
      "nextjs15",
      "react19",
    ],
    imageUrl: project1,
  },
  {
    title: "Project 2",
    description: "https://wdia.vercel.app",
    tags: [
      "prisma",
      "tailwindcss",
      "react19",
      "arcjet",
      "betterauth",
      "chadcn-ui",
      "nextjs16-typescript",
    ],
    imageUrl: project2,
  },
] as const;

export const skillsData = [
  "Machine Learning",
  "Reinceforcement Learning",
  "Machine Vision",
  "Natural Language Processing",
  "React",
  "NextJS",
  "TailwindCSS",
  "Web Security",
  "Prisma",
  "BetterAuth",
  "TailwindCSS",
] as const;
