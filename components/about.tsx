"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        🚀 <span className="font-medium">My Journey:</span> I embarked on my web
        development journey three years ago, and it has been an incredible ride
        filled with learning, challenges, and growth. From the fundamentals of
        HTML and CSS to the dynamic world of JavaScript, I&apos;ve immersed myself in
        the ever-evolving landscape of web technologies.
      </p>
      <p className="mb-3">
        💻 <span className="font-medium">Technical Expertise:</span> With a
        solid foundation in front-end and back-end development, I&apos;ve honed my
        skills in creating responsive and user-friendly web applications. My
        toolkit includes proficiency in{" "}
        <span className="italic">HTML, CSS, JavaScript</span>, and familiarity
        with popular frameworks and libraries.
      </p>
      <p className="mb-3">
        🎓 <span className="font-medium">Academic Pursuits:</span> Currently
        enrolled at <span className="underline">Algonquin College</span>, I am
        committed to expanding my knowledge and staying at the forefront of the
        latest industry trends. The dynamic curriculum has equipped me with a
        comprehensive understanding of web development principles, programming
        languages, and best practices. Beyond the classroom, I&apos;ve actively
        applied my skills to real-world projects. From crafting intuitive user
        interfaces to implementing robust backend functionalities, I take pride
        in creating web applications that not only meet but exceed user
        expectations.
      </p>
      <p className="mb-3">
        👨‍💻 <span className="font-medium">Continuous Learning:</span> In the
        ever-evolving world of technology, I believe in the importance of
        continuous learning. I stay curious and seek out opportunities to
        explore new tools, frameworks, and methodologies to enhance my skill
        set.
      </p>
      <p className="mb-3">
        🌟 <span className="font-medium">What Drives Me:</span> I am fueled by a
        genuine passion for problem-solving and the transformative power of
        technology. I thrive in collaborative environments, leveraging my skills
        to contribute meaningfully to projects that make a positive impact.
      </p>
      <p>
        📈 <span className="font-medium">Future Aspirations:</span> As I
        continue my academic journey, I aspire to delve deeper into specialized
        areas of web development, explore emerging technologies, and contribute
        to innovative projects that push the boundaries of what&apos;s possible on
        the web.
      </p>
    </motion.section>
  );
}
