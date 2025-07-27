 
import Image from "next/image";
import aboutUsImage from "../../public/hooks.jpg";
import ServiceCard from "@/components/service-card";
import { BugIcon, Code, Globe, Smartphone } from "lucide-react";
import PulseEffect from "@/components/pulse-effect";

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
          <h1 className="text-2xl md:text-6xl font-bold mb-4 uppercase">Services</h1>
        </div>
      </div>
<section id="services" className="py-16 md:py-24 relative overflow-hidden">
          <PulseEffect className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Comprehensive Software Solutions
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We offer a full spectrum of services to bring your digital vision to life, from concept to deployment
                and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Code className="h-10 w-10" />}
                title="Custom Software Development"
                description="Tailored solutions designed to address your specific business challenges and requirements."
                features={["Enterprise Applications", "SaaS Platforms", "Mobile Applications"]}
              />
              <ServiceCard
                icon={<Globe className="h-10 w-10" />}
                title="Web Development"
                description="Stunning, responsive websites and web applications that engage users and drive conversions."
                features={["Progressive Web Apps", "E-commerce Solutions", "Content Management"]}
              />
              {/* <ServiceCard
                icon={<Database className="h-10 w-10" />}
                title="Cloud Solutions"
                description="Scalable, secure cloud infrastructure and migration services for modern businesses."
                features={["Cloud Architecture", "DevOps Implementation", "Serverless Applications"]}
              /> */}
              <ServiceCard
  icon={<Smartphone className="h-10 w-10" />}
  title="App Development"
  description="Custom mobile and web application development tailored to your business goals."
  features={[
    "Cross-Platform Apps",
    "Progressive Web Apps (PWA)",
    "UI/UX Design Integration",
  ]}
/>

<ServiceCard
  icon={<BugIcon className="h-10 w-10" />}
  title="Software Testing & Debugging"
  description="Ensure software quality with in-depth testing, bug fixing, and performance optimization."
  features={[
    "Manual & Automated Testing",
    "Bug Tracking & Resolution",
    "Performance Optimization",
  ]}
/>
              {/* <ServiceCard
                icon={<Zap className="h-10 w-10" />}
                title="AI & Machine Learning"
                description="Intelligent solutions that learn and adapt to your business needs and challenges."
                features={["Predictive Analytics", "Natural Language Processing", "Computer Vision"]}
              />
              <ServiceCard
                icon={<Lock className="h-10 w-10" />}
                title="Cybersecurity"
                description="Protect your business with comprehensive security solutions and best practices."
                features={["Security Audits", "Penetration Testing", "Compliance Solutions"]}
              />
              <ServiceCard
                icon={<Layers className="h-10 w-10" />}
                title="Digital Transformation"
                description="Strategic guidance to maximize the impact of your digital investments and initiatives."
                features={["Process Automation", "Legacy Modernization", "Digital Strategy"]}
              /> */}
            </div>
          </div>
        </section>

      
        </div>
    );
};

export default page;