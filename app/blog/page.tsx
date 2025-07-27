"use client"
import Image from 'next/image';
import React from 'react';
import aboutUsImage from "../../public/hooks.jpg";
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogSection from '@/components/blog-section';
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
                                              <h1 className="text-2xl md:text-6xl font-bold mb-4 uppercase">Blog</h1>
                                            </div>
             
                                          </div>


             <section id="blog" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Latest News
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Our Latest Articles</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Stay up to date with the latest trends, insights, and news from our team
              </p>
            </div>

            <BlogSection />

            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 hover:bg-zinc-800 hover:text-purple-400"
                onClick={() => alert("More articles coming soon!")}
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>





        </div>
    );
};

export default page;