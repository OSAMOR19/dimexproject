"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Database, LineChart, ChevronLeft, ChevronRight } from "lucide-react";
import DataParticles from "@/components/animations/data-particles";
import RevealOnScroll from "@/components/animations/reveal-on-scroll";
import AnimatedGradientText from "@/components/animations/animated-gradient-text";
import RotatingCircle from "@/components/animations/rotating-circle";
import Link from "next/link";
import hero from "@/components/images/personhero.jpg";
import Img1 from "@/components/images/datapic1.jpg"
import Img2 from "@/components/images/datapic2.jpg"
import Img3 from "@/components/images/datapic4.jpeg"
import Img4 from "@/components/images/datapic3.jpeg"
import Img5 from "@/components/images/analytic.jpg"
import Img6 from "@/components/images/statistics1.png"
import Img7 from "@/components/images/statistics.jpeg"
import Img8 from "@/components/images/statistics2.jpg"

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transform Your Data Into Actionable Insights";
  const typingSpeed = 250;
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [hero, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-navy hero-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <DataParticles count={30} />
        <div className="absolute -top-20 -right-20 opacity-20">
          <RotatingCircle size={400} duration={30} />
        </div>
        <div className="absolute top-40 -left-40 opacity-10">
          <RotatingCircle size={300} duration={25} reverse />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll animation="fade-in-left">
            <div className="space-y-6">
              <div className="inline-block bg-white/20 text-white px-3 py-2 rounded-full text-sm font-medium">
                
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white leading-tight">
                {typedText}
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-lg text-white/80 max-w-lg">
                We helped businesses harness the power of data to drive growth, optimize operations, and make informed
                decisions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
                  Let&apos;s Talk Data <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-navy hover:bg-white hover:text-navy">
                  Our Services
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 pt-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <AnimatedGradientText text="100+" className="text-xl font-bold" />
                    <p className="text-sm text-white/80">Projects Completed</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <BarChart2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <AnimatedGradientText text="95%" className="text-xl font-bold" />
                    <p className="text-sm text-white/80">Client Satisfaction</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <LineChart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <AnimatedGradientText text="30+" className="text-xl font-bold" />
                    <p className="text-sm text-white/80">Industries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-in-right" delay={300}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 -right-10 -bottom-10 bg-gradient-to-br from-navy/5 to-orange/5 rounded-full animate-pulse-slow"></div>
              <div className="relative  rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy to-orange"></div>
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden relative h-[400px]">
                    {carouselImages.map((img, index) => (
                      <div 
                        key={index} 
                        className={`transition-all duration-500 absolute inset-0 ${
                          index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                        style={{ transform: index === currentSlide ? 'translateX(0)' : 'translateX(100%)' }}
                      >
                        <Image
                          src={img}
                          alt={`Data Analytics Image ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                    
                    {/* Navigation buttons */}
                    <button 
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full text-navy"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full text-navy"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    
                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentSlide ? "bg-orange" : "bg-white/50"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <div className="bg-orange text-white p-4 rounded-full shadow-lg animate-float">
                    <BarChart2 className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-navy/10 to-orange/10 blur-3xl opacity-30"></div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
