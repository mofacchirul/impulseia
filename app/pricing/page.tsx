import React from 'react';
import aboutUsImage from "../../public/hooks.jpg";
import Image from 'next/image';
import PricingSection from '@/components/pricing-section';
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
                                  <h1 className="text-2xl md:text-6xl font-bold mb-4 uppercase"> Pricing</h1>
                                </div>
 
                              </div>


 <section id="pricing" className="py-16 md:py-24 bg-zinc-900/50">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Pricing Plans
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Choose the Right Plan for Your Business
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We offer flexible pricing options to meet the needs of businesses of all sizes
              </p>
            </div>

            <PricingSection />
          </div>
        </section>




        </div>
    );
};

export default page;