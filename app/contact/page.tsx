"use client"
import Image from 'next/image';
import React from 'react';
import aboutUsImage from "../../public/hooks.jpg";
import ContactSection from '@/components/contact-section';
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
                                              <h1 className="text-2xl md:text-6xl font-bold mb-4 uppercase">Contact</h1>
                                            </div>
             
                                          </div>


                                              <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
                                                    <PulseEffect className="absolute top-1/4 right-1/4 opacity-10" />
                                                    <PulseEffect className="absolute bottom-1/4 left-1/4 opacity-10" />
                                          
                                                    <div className="container relative z-10">
                                                      <div className="text-center mb-16">
                                                        <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                                                          <span className="text-purple-500 mr-1">•</span> Contact Us
                                                        </div>
                                                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Get in Touch With Us</h2>
                                                        <p className="text-white/70 max-w-2xl mx-auto">
                                                          Have a question or want to discuss a project? We'd love to hear from you
                                                        </p>
                                                      </div>
                                          
                                                      <ContactSection />
                                                    </div>
                                                  </section>
        </div>
    );
};

export default page;