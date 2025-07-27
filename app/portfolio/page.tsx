"use client"

import Image from 'next/image';

import aboutUsImage from "../../public/hooks.jpg";
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PulseEffect from '@/components/pulse-effect';
const page = () => {
    return (
        <div>
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
                      <h1 className="text-2xl md:text-6xl font-bold mb-4 uppercase">Portfolio</h1>
                    </div>
                  </div>
                  <section id="portfolio" className="py-16 md:py-24 relative overflow-hidden">
          <PulseEffect className="absolute top-1/4 right-0 opacity-10" />
          <PulseEffect className="absolute bottom-1/4 left-0 opacity-10" />

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Our Portfolio
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Our Recent Projects</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Explore our portfolio of successful projects that have helped businesses transform and grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 1"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">Web Development</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Financial Dashboard
                  </h3>
                  <p className="text-white/70 text-sm">
                    A comprehensive financial analytics platform with real-time data visualization.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 2"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">Mobile App</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Health Tracker
                  </h3>
                  <p className="text-white/70 text-sm">
                    Mobile application for tracking health metrics with AI-powered recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 3"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">E-commerce</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Online Marketplace
                  </h3>
                  <p className="text-white/70 text-sm">
                    Scalable e-commerce solution with inventory management and payment processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 4"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">AI & Machine Learning</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Predictive Maintenance
                  </h3>
                  <p className="text-white/70 text-sm">
                    AI-powered system for predicting equipment failures and scheduling maintenance.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                    alt="Project 5"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">IoT</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Smart City Platform
                  </h3>
                  <p className="text-white/70 text-sm">
                    Integrated platform for managing urban infrastructure with real-time monitoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop"
                    alt="Project 6"
                    width={600}
                    height={400}
                    className="object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white"
                      onClick={() => alert("Project details coming soon!")}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5 bg-zinc-900">
                  <div className="text-sm text-purple-400 font-medium mb-2">Mobile App</div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    Delivery Tracking
                  </h3>
                  <p className="text-white/70 text-sm">
                    Mobile application for real-time package tracking and route optimization.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => alert("More projects coming soon!")}
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        </div>
    );
};

export default page;