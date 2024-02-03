import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import musicAppImg from "@/public/musicAppImg.png";
import aiAppImg from "@/public/aIAppImg.png";
import videoAppImg from "@/public/vidoeAppImg.png";

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
    title: "Music Application",
    description:
      "I worked as a full-stack developer on this startup project for 1 month. The styling of the frontend is using Tailwind CSS",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    imageUrl: musicAppImg,
  },
  {
    title: "AI Image Application",
    description:
      "This application can generate AI image from user prompt using DALL-E machine learning algorithm from OpenAI api.",
    tags: [
      "React",
      "Open AI",
      "Mongo DB",
      "Express",
      "Node.js",
      "Tailwind CSS",
    ],
    imageUrl: aiAppImg,
  },
  {
    title: "Video Application",
    description:
      "This application is a full-stack web application in Next.js, Typescript and Prisma",
    tags: ["Next.js", "Prisma", "Typescript", "Tailwind CSS"],
    imageUrl: videoAppImg,
  },
] as const;

export const skillsData = [
  "Outlook",
  "Microsoft Teams",
  "SAP BTP",
  "Collaboration",
  "HTML",
  "CSS",
  "JavaScript",
  "Figma",
  "Adobe Photoshop",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "Vercel",
  "C#",
] as const;
