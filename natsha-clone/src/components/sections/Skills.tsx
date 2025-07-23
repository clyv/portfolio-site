"use client";

import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: string[];
}

function SkillCategory({ title, description, skills }: SkillCategoryProps) {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.span
            key={`${title}-${skill}`}
            className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-sm font-medium rounded-full text-gray-800 dark:text-white/90 shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="border-t pt-12">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory
            title="Backend"
            description="I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions."
            skills={[
              "NodeJS",
              "MongoDB",
              "GraphQL",
              "JavaScript",
              "TypeScript",
              "Git",
            ]}
          />

          <SkillCategory
            title="Cloud & DevOps"
            description="I have deployed and managed various applications using tools such as AWS, GCP, and other cloud services."
            skills={[
              "Linux",
              "Kubernetes",
              "Terraform",
              "Redis",
              "Cloudflare",
              "AWS",
            ]}
          />

          <SkillCategory
            title="Frontend & Design"
            description="I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences."
            skills={[
              "Vue3",
              "Figma",
              "Capacitor",
              "PHP",
              "Playwright",
              "React",
            ]}
          />

          <SkillCategory
            title="Management"
            description="I have worked with multiple clients and stakeholders to define projects that suit their needs and have led these projects."
            skills={["Agile", "Scrum", "Jira", "Office"]}
          />
        </div>
      </div>
    </motion.section>
  );
}
