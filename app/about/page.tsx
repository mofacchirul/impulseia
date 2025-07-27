'use client'; // ✅ এটিই client component বানিয়েছে

import { Button } from "@/components/ui/button";
import aboutUsImage from "../../public/hooks.jpg";
import Image from 'next/image';
import React from 'react';
import { CheckCircle, ChevronRight } from "lucide-react";

type FeatureProps = {
  title: string;
  desc: string;
};









const About = () => {
  return (
    <div className="max-w-[1340px] mx-auto">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full z-40">
        {/* Background Image */}
        <Image
          src={aboutUsImage}
          alt="About Us Background"
          fill
          className="object-cover rounded-lg"
          priority
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-50" />

        {/* Text Content */}
        <div className="absolute inset-0 z-[60] flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl md:text-6xl font-bold mb-4 uppercase">about</h1>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-zinc-900/50 relative overflow-hidden">
        {/* Background Gradient Blurs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Box */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="About Impulse"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>

            {/* Text Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium">
                <span className="text-purple-500 mr-1">•</span> About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                We Create Digital Solutions With <span className="text-purple-500">Impulse</span>
              </h2>
              <p className="text-white/70">
                Impulse is a leading software development company dedicated to helping businesses leverage technology
                to achieve their goals. With over a decade of experience, we've helped hundreds of clients transform
                their operations and reach new heights.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Feature title="Innovative Solutions" desc="Cutting-edge technology for modern challenges" />
                <Feature title="Expert Team" desc="Skilled professionals with diverse expertise" />
                <Feature title="Client-Focused" desc="Your success is our top priority" />
                <Feature title="Agile Methodology" desc="Flexible, iterative approach to development" />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-zinc-700 hover:bg-zinc-800 hover:text-purple-400"
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const Feature = ({ title, desc }:FeatureProps) => (
  <div className="flex items-start gap-2">
    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
    <div>
      <h3 className="font-medium text-white">{title}</h3>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

export default About;
