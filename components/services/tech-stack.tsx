"use client";

import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/animations/reveal-on-scroll";
import AnimatedGradientText from "@/components/animations/animated-gradient-text";
import Image from "next/image";
import aws from "@/components/images/aws.png"
import azure from "@/components/images/azure.png"
import gcp from "@/components/images/gcp.png"
import snowflake from "@/components/images/snowflake.png"
import databricks from "@/components/images/databricks.png"
import tableau from "@/components/images/tableau.png"
import powerbi from "@/components/images/powerbi.jpg"
import airflow from "@/components/images/airflow.png"
import qlik from "@/components/images/qliklogo.jpg"
import kubernetes from "@/components/images/kubernetes.png"
import docker from "@/components/images/docker.webp"
import terraform from "@/components/images/terraform.png"
import Kafka from "@/components/images/kafka.png"
import spark from "@/components/images/spark.png"
import python from "@/components/images/python.webp"
import scala from "@/components/images/scala.png"
import dbt from "@/components/images/dbt.png"
import fivetran from "@/components/images/fivetran.webp"
import d3js from "@/components/images/d3.jpeg"
import looker from "@/components/images/looker.png"


const techCategories = [
  {
    id: "cloud-services",
    title: "Data & Analytics Cloud Services",
    technologies: [
      { name: "AWS", logo: aws },
      { name: "Azure", logo: azure },
      { name: "Google Cloud", logo: gcp },
      { name: "Snowflake", logo: snowflake },
      { name: "Databricks", logo: databricks },
    ],
  },
  {
    id: "cloud-platforms",
    title: "Modern Cloud Platforms",
    technologies: [
      { name: "Kubernetes", logo: kubernetes},
      { name: "Docker", logo: docker },
      { name: "Terraform", logo: terraform },
      { name: "Airflow", logo: airflow },
      { name: "Kafka", logo: Kafka },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    technologies: [
      { name: "Spark", logo: spark },
      { name: "Python", logo: python },
      { name: "Scala", logo: scala },
      { name: "dbt", logo: dbt },
      { name: "Fivetran", logo: fivetran },
    ],
  },
  {
    id: "data-visualization",
    title: "Data Visualization Tools",
    technologies: [
      { name: "Tableau", logo: tableau },
      { name: "Power BI", logo: powerbi },
      { name: "Looker", logo: looker },
      { name: "Qlik", logo: qlik },
      { name: "D3.js", logo: d3js },
    ],
  },
];

// Placeholder function for when actual logos aren't available
const LogoPlaceholder = ({ name }: { name: string }) => {
  const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
  
  return (
    <div className="w-16 h-16 bg-navy/10 dark:bg-navy/20 rounded-lg flex items-center justify-center text-navy dark:text-gray-200 font-bold">
      {initials}
    </div>
  );
};

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-navy/10 dark:bg-navy/20 text-navy dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Technology Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-6">
              Technologies We Work With from the Modern <AnimatedGradientText text="Data & Analytics" /> Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We leverage cutting-edge technologies to deliver scalable, efficient, and future-proof data solutions.
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={category.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-600">
              <RevealOnScroll delay={categoryIndex * 100}>
                <h3 className="text-2xl font-bold text-navy dark:text-gray-100 mb-8 text-center">{category.title}</h3>
              </RevealOnScroll>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="mb-3 w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow">
                      {tech.logo ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            fill
                            style={{ objectFit: "contain" }}
                            className="dark:brightness-110 dark:contrast-125"
                          />
                        </div>
                      ) : (
                        <LogoPlaceholder name={tech.name} />
                      )}
                    </div>
                    <span className="text-navy dark:text-gray-200 font-medium text-sm text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
