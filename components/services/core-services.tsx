"use client";

import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/animations/reveal-on-scroll";
import AnimatedGradientText from "@/components/animations/animated-gradient-text";
import { 
  Database, 
  Layers, 
  BarChart2, 
  LineChart, 
  PieChart, 
  Server, 
  Cpu, 
  FileText,
  Code,
  Globe,
  Laptop
} from "lucide-react";

const coreServices = [
  {
    id: "data-strategy",
    title: "Data Strategy",
    description: "Develop a comprehensive roadmap aligned with your business goals to maximize the value of your data assets.",
    icon: <Database className="h-10 w-10 text-orange" />,
  },
  {
    id: "data-governance",
    title: "Data Governance",
    description: "Establish robust frameworks to ensure data quality, security, and compliance with regulations.",
    icon: <Layers className="h-10 w-10 text-orange" />,
  },
  {
    id: "bi-analytics",
    title: "BI & Analytics",
    description: "Transform raw data into actionable insights with powerful visualization and reporting tools.",
    icon: <BarChart2 className="h-10 w-10 text-orange" />,
  },
  {
    id: "data-platform",
    title: "Data Platform Modernization",
    description: "Upgrade your data infrastructure to leverage cloud-native technologies and modern architectures.",
    icon: <LineChart className="h-10 w-10 text-orange" />,
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Implement advanced algorithms to uncover patterns, make predictions, and automate decision-making.",
    icon: <PieChart className="h-10 w-10 text-orange" />,
  },
  {
    id: "data-software",
    title: "Data Analytics Software",
    description: "Custom software solutions designed specifically for data processing, analysis, and visualization needs.",
    icon: <Code className="h-10 w-10 text-orange" />,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Data-driven web applications with interactive dashboards and visualizations for better decision making.",
    icon: <Globe className="h-10 w-10 text-orange" />,
  },
  {
    id: "fullstack-development",
    title: "Full Stack Development",
    description: "End-to-end solutions connecting robust data backends with intuitive frontends for seamless data experiences.",
    icon: <Laptop className="h-10 w-10 text-orange" />,
  },
  {
    id: "data-integration",
    title: "Data Integration",
    description: "Connect and unify data from multiple sources to create a single source of truth for your organization.",
    icon: <Server className="h-10 w-10 text-orange" />,
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Build robust pipelines and infrastructure to collect, process, and store data efficiently.",
    icon: <Cpu className="h-10 w-10 text-orange" />,
  },
  {
    id: "data-migration",
    title: "Data Migration",
    description: "Seamlessly transfer your data between systems, platforms, or environments with minimal disruption.",
    icon: <FileText className="h-10 w-10 text-orange" />,
  },
];

export default function CoreServices() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-navy/10 dark:bg-navy/20 text-navy dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-6">
              Our Core <AnimatedGradientText text="Data & Analytics" /> Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We offer a comprehensive suite of data and analytics services to help you harness the full potential of your data assets.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-orange/30 dark:hover:border-orange/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="mb-4 bg-navy/5 dark:bg-navy/20 w-16 h-16 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">{service.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <a href={`#${service.id}`} className="text-orange dark:text-orange-400 font-medium hover:text-orange-600 dark:hover:text-orange-600 transition-colors flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
