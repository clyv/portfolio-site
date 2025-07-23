"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface JobProps {
  company: string;
  title: string;
  period: string;
  description: React.ReactNode;
}

function JobCard({ company, title, period, description }: JobProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold mb-1">{company}</h3>
      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
        {title}
      </p>
      <p className="text-sm text-gray-500 mb-4">{period}</p>
      <div className="space-y-2 text-gray-600 dark:text-gray-400">
        {description}
      </div>
    </motion.div>
  );
}

export default function Career() {
  return (
    <motion.section
      className="py-16"
      id="career"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="border-t pt-12">
        <h2 className="text-3xl font-bold mb-12 text-center">Career</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT - Work Experience */}
          <div className="w-full lg:w-7/12">
            <h3 className="text-2xl font-semibold mb-8">Let's dive in</h3>

            <JobCard
              company="JUCR"
              title="Senior Backend Engineer"
              period="Dec 2022 - Now"
              description={
                <>
                  <p>• Worked on payment, wallet, and banking systems.</p>
                  <p>• Built e-mobility charging systems across Europe.</p>
                  <p>• Used event-driven, DDD, and hexagonal architectures.</p>
                  <p>
                    • Technologies: TypeScript, Node.js, MongoDB, Kafka,
                    GraphQL.
                  </p>
                </>
              }
            />

            <JobCard
              company="Lunar-X"
              title="Mid-level Full-Stack Engineer"
              period="Oct 2021 - Nov 2022"
              description={
                <>
                  <p>• Built a CMS for media assets and insights.</p>
                  <p>• Created tools to empower the investment team.</p>
                  <p>• Managed AWS and CI/CD pipelines.</p>
                  <p>
                    • Technologies: TypeScript, Vue 3, Nuxt 3, Laravel,
                    PostgreSQL, Docker.
                  </p>
                </>
              }
            />

            <JobCard
              company="Google"
              title="Software Engineering Intern"
              period="Jul 2021 - Oct 2021"
              description={
                <>
                  <p>• Created MySQL lineage extractor for DataCatalog.</p>
                  <p>• Worked with Python, Java, and MySQL.</p>
                </>
              }
            />

            <JobCard
              company="Cotede"
              title="Junior Full-Stack Engineer"
              period="Dec 2020 - Jul 2021"
              description={
                <>
                  <p>• Contributed to Arabcard.net e-commerce platform.</p>
                  <p>
                    • Developed admin panel for item, access, and customer
                    management.
                  </p>
                  <p>
                    • Technologies: Angular, Java, Struts 2, AWS, PostgreSQL.
                  </p>
                </>
              }
            />
          </div>

          {/* RIGHT - Sidebar Callout */}
          <motion.div
            className="w-full lg:w-5/12 bg-[#fbcbd3] dark:bg-[#3c2f2f] rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold">
                Open our Charging stations for the world
              </h3>
            </div>
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden bg-white dark:bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-gray-400">
                Interactive charging app demo
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
