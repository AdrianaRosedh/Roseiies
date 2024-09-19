'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useAnimate, stagger } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { ChevronRight, X, Check } from "lucide-react"
import Image from 'next/image'

// ... (previous code remains unchanged)

function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-between mb-24 min-h-screen"
    >
      <motion.div
        style={{ y }}
        className="md:w-1/2 mb-12 md:mb-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          WHERE SKINCARE KNOWS NO BOUNDARIES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8"
        >
          AI-powered solutions for personalized skincare
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Input className="bg-white/20 text-white placeholder-white/75 border-none" placeholder="Enter your email" type="email" />
          <Button className="bg-[#0FB9B1] text-white hover:bg-[#0FB9B1]/90 transition-colors duration-300">
            Get Started <ChevronRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <Image src="/placeholder.svg" alt="AI Skincare" width={400} height={400} className="rounded-lg shadow-2xl" />
      </motion.div>
    </motion.section>
  )
}

function FeaturesSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const features = [
    { title: 'Personalized Analysis', description: 'Our AI analyzes your unique skin profile for tailored recommendations.' },
    { title: 'AI-Powered Recommendations', description: 'Get product suggestions based on your skin type, concerns, and goals.' },
    { title: 'Cutting-edge Formulations', description: 'Access innovative skincare solutions backed by the latest research.' }
  ]

  const featureY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Our AI-Powered Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
          >
            <motion.h3
              className="text-xl font-semibold mb-4"
              style={{ y: featureY }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-white/75"
              style={{ y: featureY }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function HowItWorksSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const steps = [
    { title: "Scan", description: "Upload a selfie for AI analysis" },
    { title: "Analyze", description: "Our AI examines your skin's unique characteristics" },
    { title: "Recommend", description: "Receive personalized skincare recommendations" },
    { title: "Transform", description: "Experience visible improvements in your skin" }
  ]

  const stepY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-[#0FB9B1] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                {index + 1}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2"
                style={{ y: stepY }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-white/75"
                style={{ y: stepY }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah L.", quote: "Roseiies has completely transformed my skincare routine. The personalized recommendations are spot-on!" },
    { name: "Michael T.", quote: "I've never felt more confident about my skin. The AI analysis is incredibly accurate." },
    { name: "Emma R.", quote: "The cutting-edge formulations have made a visible difference in my skin's texture and tone." }
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
          >
            <p className="mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="font-semibold">{testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#0FB9B1] rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Skincare Routine?</h2>
        <p className="text-xl mb-8 text-white/90">Join thousands of satisfied customers and experience the power of AI-driven skincare.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-white text-[#0FB9B1] hover:bg-white/90 text-lg px-8 py-3 transition-colors duration-300">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

function Footer() {
  const footerSections = [
    {
      title: "About Roseiies",
      content: "Revolutionizing skincare with AI-powered solutions for personalized beauty."
    },
    {
      title: "Quick Links",
      links: ["Home", "About", "Services", "Products", "Contact"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    },
    {
      title: "Connect",
      links: ["Facebook", "Twitter", "Instagram", "LinkedIn"]
    }
  ]

  return (
    <footer className="bg-black/30 backdrop-blur-lg py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              {section.content ? (
                <p className="text-sm opacity-75">{section.content}</p>
              ) : (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm opacity-75"
        >
          <p>&copy; {new Date().getFullYear()} Roseiies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}