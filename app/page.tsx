"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Bug, BugIcon, CheckCircle, ChevronRight, Code, Database, Globe, Layers, Lock, Smartphone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import PartnerSection from "@/components/partner-section"
import ServiceCard from "@/components/service-card"
import TestimonialSection from "@/components/testimonial-section"
import CounterSection from "@/components/counter-section"
import TeamSection from "@/components/team-section"
import PricingSection from "@/components/pricing-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import NewsletterSection from "@/components/newsletter-section"
import PulseEffect from "@/components/pulse-effect"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/shared/Navbar"

import Footer from "@/components/shared/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  text-white">
      <AnimatedBackground />

      {/* Header */}
      {/* <Navbar></Navbar> */}

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Partner Section */}
        <section id="partners" className="py-12 md:py-16 bg-zinc-900/50">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">Trusted by Industry Leaders</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                We're proud to partner with some of the world's most innovative companies
              </p>
            </div>
            <PartnerSection />
          </div>
        </section>

        {/* Services Section */}
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

        {/* About Section */}
     <section id="about" className="py-16 md:py-24 bg-zinc-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Innovative Solutions</h3>
                      <p className="text-sm text-white/70">Cutting-edge technology for modern challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Expert Team</h3>
                      <p className="text-sm text-white/70">Skilled professionals with diverse expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Client-Focused</h3>
                      <p className="text-sm text-white/70">Your success is our top priority</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Agile Methodology</h3>
                      <p className="text-sm text-white/70">Flexible, iterative approach to development</p>
                    </div>
                  </div>
                </div>
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

        {/* Counter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
          <div className="container">
            <CounterSection />
          </div>
        </section>

        {/* Portfolio Section */}
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

        {/* Testimonial Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-zinc-900/50">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">What Our Clients Say</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Don't just take our word for it. Hear from the businesses we've helped transform
              </p>
            </div>

            <TestimonialSection />
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 relative overflow-hidden">
          <PulseEffect className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10" />

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-zinc-800 px-4 py-1.5 text-sm font-medium mb-4">
                <span className="text-purple-500 mr-1">•</span> Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Meet Our Experts</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our talented team combines technical expertise with creative energy to deliver exceptional results
              </p>
            </div>

            <TeamSection />
          </div>
        </section>

        {/* Pricing Section */}
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

        {/* Blog Section */}
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

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
          <div className="container">
            <NewsletterSection />
          </div>
        </section>

        {/* Contact Section */}
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
      </main>

      {/* Footer */}
     <Footer />
    </div>
  )
}
