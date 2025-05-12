"use client";

import React from "react";
import RevealOnScroll from "@/components/animations/reveal-on-scroll";
import AnimatedGradientText from "@/components/animations/animated-gradient-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "How can Data & Analytics benefit my business?",
    answer: "Data analytics services can provide valuable insights to improve decision-making, optimize operations, and enhance customer experiences. By leveraging your data, you can identify new revenue opportunities, reduce costs, and gain a competitive edge in your industry."
  },
  {
    id: "faq-2",
    question: "What types of Data & Analytics services do you offer?",
    answer: "We offer comprehensive data services, including data strategy development, data governance, big data solutions, data warehouse/lake implementation, business intelligence, data visualization, and data science services. Our team can assist you at any stage of your data journey, from initial strategy to advanced analytics implementation."
  },
  {
    id: "faq-3",
    question: "How do you ensure data security and compliance?",
    answer: "We implement robust data governance frameworks and follow industry best practices for data security. Our solutions are designed to comply with relevant regulations such as GDPR and CCPA, ensuring that your data is protected and used ethically throughout its lifecycle."
  },
  {
    id: "faq-4",
    question: "How long does it typically take to see results from Data & Analytics initiatives?",
    answer: "The timeline for seeing results can vary depending on the scope and complexity of the project. However, many of our clients start seeing initial insights and improvements within 3-6 months of implementation. We work closely with you to establish clear milestones and KPIs to track progress and demonstrate value throughout the project."
  },
  {
    id: "faq-5",
    question: "How do you approach data integration from multiple sources?",
    answer: "We employ a comprehensive approach to data integration, utilizing advanced ETL/ELT processes and modern integration platforms. Our team has experience working with diverse data sources, including legacy systems, cloud applications, IoT devices, and third-party APIs. We focus on creating reliable, scalable integration solutions that provide a unified view of your data."
  }
];

export default function FaqSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-navy/10 dark:bg-navy/20 text-navy dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-6">
              Frequently Asked <AnimatedGradientText text="Questions" />
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Find answers to common questions about our data analytics services and how they can benefit your business.
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 100}>
                <AccordionItem value={item.id}>
                  <AccordionTrigger className="text-left font-semibold text-navy dark:text-gray-200 hover:text-orange dark:hover:text-orange transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </RevealOnScroll>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
