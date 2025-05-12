"use client";

import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/animations/reveal-on-scroll";
import AnimatedGradientText from "@/components/animations/animated-gradient-text";

const roadmapSteps = [
  {
    id: 1,
    title: "Discovery & Assessment",
    description: "We evaluate your current data landscape and identify opportunities for improvement.",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Strategy Development",
    description: "We create a tailored data strategy aligned with your business objectives.",
    icon: "📝",
  },
  {
    id: 3,
    title: "Solution Design",
    description: "Our experts design scalable data solutions to meet your specific needs.",
    icon: "✏️",
  },
  {
    id: 4,
    title: "Implementation",
    description: "We deploy solutions with minimal disruption to your business operations.",
    icon: "🚀",
  },
  {
    id: 5,
    title: "Optimization & Support",
    description: "Continuous improvement and support to maximize the value of your data assets.",
    icon: "⚙️",
  },
];

export default function DataJourneyRoadmap() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-navy/10 dark:bg-navy/20 text-navy dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-6">
              Navigating your <AnimatedGradientText text="Data & Analytics" /> journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              At Dimex, we approach data analytics services with a structured, client-centric
              process that focuses on your business objectives and operational requirements.
              We don't just implement data solutions; we create tailored data strategies that
              deliver tangible value, ensuring they align with each client's unique business needs.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-orange-500 transform -translate-x-1/2 hidden md:block" />

          {/* Roadmap steps */}
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Step number with icon */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold mb-4 md:mb-0">
                <span>{step.icon}</span>
              </div>

              {/* Content card */}
              <div 
                className={`flex-grow md:w-5/12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 md:mx-8 ${
                  index % 2 === 0 ? "md:ml-8 md:mr-auto" : "md:mr-8 md:ml-auto"
                }`}
              >
                <h3 className="text-xl font-bold text-navy dark:text-gray-200 mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
