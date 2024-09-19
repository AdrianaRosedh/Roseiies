'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useAnimate, stagger } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { ChevronRight, X, Check } from "lucide-react"

const navItems = ["About", "Features", "Pricing", "Contact"]

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ]

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ])
  }, [isOpen, animate])

  return scope
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const scope = useMenuAnimation(isMenuOpen)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E15123] via-[#FAA87A] to-[#0FB9B1] text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#0FB9B1] origin-left z-50"
        style={{ scaleX }}
      />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full z-40 bg-black/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-48 h-auto" viewBox="0 0 316.06 69.37" xmlns="http://www.w3.org/2000/svg">
                <g id="LOGOS">
                  <g>
                    <path fill="#FFFFFF" d="M24.02,19.77c-1.33,0-2.63.12-3.9.35-1.27.24-2.47.62-3.61,1.16-1.14.54-2.16,1.25-3.06,2.12-.9.88-1.65,1.94-2.25,3.19h-.26L0,19.13v48.44h12.69v-32.4c0-1.07.2-2.2.61-3.38.41-1.18.98-2.25,1.7-3.22.73-.97,1.6-1.77,2.61-2.42,1.01-.64,2.1-.97,3.26-.97s2.32.21,3.34.64c1.03.43,1.99.99,2.87,1.68.87.68,1.71,1.46,2.51,2.32s1.54,1.72,2.22,2.58v-11.66c-1.25-.39-2.52-.64-3.83-.77-1.3-.13-2.63-.19-3.96-.19Z"/>
                    <path fill="#FFFFFF" d="M75.79,26.67c-2.06-2.19-4.6-3.89-7.6-5.09-3.01-1.2-6.46-1.8-10.37-1.8s-7.38.59-10.4,1.77c-3.02,1.18-5.57,2.87-7.63,5.06-2.06,2.19-3.64,4.83-4.71,7.92-1.07,3.09-1.61,6.55-1.61,10.37s.56,7.04,1.68,10.05c1.11,3.01,2.73,5.57,4.83,7.7,2.11,2.12,4.66,3.77,7.67,4.93,3,1.16,6.4,1.74,10.18,1.74s7.09-.59,10.08-1.77c2.98-1.18,5.53-2.83,7.63-4.96,2.11-2.13,3.72-4.69,4.83-7.7,1.12-3.01,1.68-6.33,1.68-9.98s-.52-7.21-1.57-10.31c-1.06-3.09-2.61-5.73-4.67-7.92ZM68.42,51.08c-.24,2.32-.74,4.53-1.52,6.63-.77,2.11-1.88,3.88-3.32,5.32-1.44,1.44-3.36,2.16-5.76,2.16-1.55,0-2.89-.34-4.03-1.03-1.14-.68-2.13-1.59-2.97-2.71-.83-1.11-1.52-2.39-2.05-3.83-.54-1.44-.96-2.91-1.26-4.41-.3-1.5-.51-2.97-.64-4.41s-.2-2.74-.2-3.9.07-2.42.2-3.9c.13-1.48.35-3,.68-4.57.32-1.57.76-3.1,1.32-4.6.55-1.5,1.25-2.85,2.06-4.03s1.79-2.13,2.93-2.87c1.14-.73,2.46-1.09,3.96-1.09,1.62,0,3.02.35,4.18,1.06,1.16.71,2.15,1.64,2.97,2.8.82,1.16,1.47,2.49,1.96,3.99.5,1.5.88,3.03,1.16,4.57.28,1.54.47,3.07.55,4.57.08,1.5.12,2.86.12,4.06,0,1.8-.12,3.87-.35,6.18Z"/>
                    <path fill="#FFFFFF" d="M116.81,43.7c-1.76-1.48-3.66-2.81-5.7-3.99-2.04-1.18-3.94-2.33-5.71-3.45-1.76-1.11-3.23-2.28-4.41-3.48-1.18-1.2-1.77-2.55-1.77-4.05,0-.82.17-1.54.52-2.16.34-.62.79-1.15,1.35-1.58.56-.43,1.19-.76,1.9-1s1.43-.35,2.16-.35c1.38,0,2.81.29,4.31.87,1.51.58,2.97,1.32,4.38,2.22,1.42.9,2.75,1.9,3.99,3,1.25,1.09,2.3,2.16,3.16,3.19l-.45-10.69c-2.19-.86-4.54-1.49-7.05-1.9-2.51-.4-4.95-.61-7.32-.61-2.1,0-4.26.22-6.47.64-2.21.43-4.2,1.16-5.96,2.19-1.76,1.03-3.21,2.4-4.34,4.09-1.14,1.7-1.7,3.81-1.7,6.34s.57,4.69,1.7,6.47c1.14,1.78,2.56,3.36,4.28,4.74,1.71,1.37,3.56,2.61,5.54,3.7,1.97,1.1,3.82,2.19,5.54,3.29,1.72,1.09,3.15,2.28,4.28,3.54,1.14,1.27,1.7,2.78,1.7,4.54,0,1.98-.68,3.49-2.03,4.54-1.36,1.05-2.97,1.58-4.87,1.58-1.63,0-3.25-.31-4.86-.93-1.61-.62-3.17-1.43-4.67-2.42-1.5-.99-2.9-2.08-4.19-3.29-1.28-1.2-2.43-2.4-3.41-3.61l.45,10.43c1.29.56,2.67,1.07,4.15,1.54,1.48.47,2.99.87,4.54,1.19,1.54.32,3.08.57,4.6.74,1.52.17,2.97.26,4.35.26,2.14,0,4.31-.25,6.47-.74,2.17-.5,4.12-1.28,5.87-2.35,1.73-1.07,3.14-2.48,4.22-4.22,1.07-1.74,1.61-3.85,1.61-6.35,0-2.62-.59-4.89-1.77-6.83-1.19-1.93-2.65-3.64-4.42-5.12Z"/>
                    <path fill="#FFFFFF" d="M140.82,43.99h34.27c0-3.35-.47-6.49-1.41-9.44-.95-2.94-2.35-5.52-4.19-7.73-1.84-2.21-4.15-3.95-6.89-5.22-2.75-1.27-5.92-1.9-9.53-1.9-4.12,0-7.77.59-10.95,1.77-3.18,1.18-5.85,2.87-8.01,5.09-2.17,2.21-3.83,4.92-4.96,8.12-1.14,3.2-1.7,6.82-1.7,10.85,0,3.78.62,7.15,1.87,10.11,1.25,2.97,2.99,5.46,5.22,7.5,2.24,2.04,4.9,3.58,7.99,4.64,3.1,1.05,6.51,1.58,10.24,1.58,3.48,0,6.88-.41,10.21-1.22,3.32-.82,6.43-2.23,9.3-4.25.26-.21.65-.46,1.16-.74.52-.28.77-.61.77-1v-10.69c-.98,1.72-2.09,3.36-3.32,4.93-1.22,1.57-2.59,2.96-4.09,4.19-1.51,1.22-3.15,2.2-4.93,2.93-1.79.73-3.75,1.1-5.89,1.1-2.7,0-5.01-.56-6.92-1.68-1.92-1.11-3.48-2.59-4.71-4.41-1.22-1.83-2.12-3.87-2.7-6.15-.58-2.28-.87-4.57-.87-6.89,0-.26,0-.5.03-.74s.03-.48.03-.74ZM143.21,32.08c.98-2.45,2.64-4.57,4.95-6.38.73-.52,1.5-.97,2.32-1.36s1.68-.58,2.58-.58c1.72,0,3.15.59,4.31,1.77,1.16,1.18,2.1,2.62,2.81,4.32.71,1.7,1.22,3.48,1.54,5.34.32,1.87.48,3.47.48,4.8h-21.06c.39-2.83,1.07-5.47,2.06-7.92Z"/>
                    <rect fill="#FFFFFF" x="183.22" y="21.64" width="12.69" height="45.92"/>
                    <path fill="#FFFFFF" d="M312.65,58.74c-1.29,1.2-2.69,2.3-4.19,3.29s-3.06,1.79-4.67,2.42-3.23.93-4.86.93c-1.89,0-3.51-.52-4.87-1.58-1.35-1.05-2.03-2.56-2.03-4.54,0-1.76.57-3.27,1.7-4.54,1.14-1.26,2.56-2.45,4.28-3.54,1.72-1.1,3.56-2.19,5.54-3.29,1.97-1.09,3.83-2.33,5.54-3.7,1.72-1.38,3.15-2.95,4.28-4.74,1.14-1.78,1.7-3.94,1.7-6.47s-.57-4.64-1.7-6.34c-1.14-1.69-2.59-3.06-4.34-4.09-1.76-1.03-3.75-1.76-5.96-2.19-2.22-.43-4.37-.64-6.47-.64-2.37,0-4.8.21-7.32.61-2.51.41-4.86,1.04-7.05,1.9l-.45,10.69c.86-1.03,1.92-2.09,3.16-3.19,1.25-1.1,2.57-2.09,3.99-3,1.41-.9,2.87-1.64,4.38-2.22,1.5-.58,2.94-.87,4.31-.87.73,0,1.45.12,2.16.35s1.34.57,1.9,1c.55.43,1.01.96,1.35,1.58.35.62.52,1.34.52,2.16,0,1.5-.59,2.85-1.77,4.05s-2.65,2.36-4.41,3.48c-1.76,1.12-3.66,2.27-5.71,3.45-2.04,1.18-3.93,2.51-5.7,3.99-1.76,1.48-3.23,3.19-4.42,5.12-1.18,1.93-1.77,4.21-1.77,6.83s.54,4.6,1.61,6.35c1.08,1.74,2.48,3.14,4.22,4.22,1.74,1.07,3.69,1.85,5.87,2.35,2.16.49,4.33.74,6.47.74,1.38,0,2.83-.08,4.35-.26,1.52-.17,3.06-.42,4.6-.74,1.54-.32,3.06-.72,4.54-1.19,1.48-.47,2.86-.99,4.15-1.54l.45-10.43c-.98,1.2-2.13,2.4-3.41,3.61Z"/>
                    <path fill="#FFFFFF" d="M268.69,26.57c-2.16-2.21-4.84-3.91-8.01-5.09s-6.83-1.77-10.95-1.77c-3.61,0-6.78.63-9.53,1.9-2.75,1.27-5.05,3.01-6.89,5.22-1.84,2.21-3.24,4.79-4.19,7.73-.94,2.94-1.41,6.09-1.41,9.44h34.27c0,.26,0,.51.03.74s.03.48.03.74c0,2.32-.28,4.62-.87,6.89-.58,2.28-1.48,4.32-2.7,6.15-1.22,1.83-2.79,3.3-4.71,4.41-1.91,1.12-4.22,1.68-6.92,1.68-2.14,0-4.11-.36-5.89-1.1-1.78-.73-3.42-1.7-4.93-2.93-1.5-1.22-2.86-2.62-4.09-4.19-1.22-1.57-2.33-3.21-3.32-4.93v10.69c0,.39.26.72.77,1,.51.28.9.52,1.16.74,2.88,2.02,5.98,3.44,9.3,4.25,3.33.82,6.73,1.22,10.21,1.22,3.74,0,7.15-.52,10.24-1.58,3.09-1.05,5.75-2.6,7.99-4.64,2.23-2.04,3.97-4.54,5.22-7.5,1.25-2.96,1.87-6.33,1.87-10.11,0-4.04-.57-7.65-1.7-10.85-1.14-3.2-2.79-5.91-4.96-8.12ZM240.58,40c0-1.33.16-2.93.48-4.8.32-1.87.84-3.65,1.54-5.34.71-1.7,1.65-3.13,2.81-4.32,1.16-1.18,2.59-1.77,4.31-1.77.9,0,1.76.19,2.58.58s1.59.84,2.32,1.36c2.32,1.8,3.97,3.93,4.95,6.38.99,2.45,1.68,5.09,2.06,7.92h-21.06Z"/>
                    <rect fill="#FFFFFF" x="206.88" y="21.64" width="12.69" height="45.92"/>
                    <path fill="#FFFFFF" d="M218.29,1.96c-.68-.62-1.47-1.1-2.35-1.45-.87-.34-1.79-.51-2.73-.51s-1.85.17-2.71.51c-.85.35-1.62.83-2.28,1.45-.15.14-.42.42-.42.42,0,0-3.15,3.32-6.35,3.32h-.1c-3.2,0-6.35-3.32-6.35-3.32,0,0-.26-.28-.41-.42-.66-.62-1.43-1.1-2.28-1.45-.86-.34-1.76-.51-2.71-.51s-1.86.17-2.73.51c-.88.35-1.67.83-2.35,1.45-.68.62-1.22,1.35-1.61,2.19-.39.84-.58,1.75-.58,2.74s.2,1.91.58,2.77c.39.86.93,1.6,1.61,2.22s1.47,1.1,2.35,1.45c.87.34,1.79.51,2.73.51s1.85-.18,2.71-.55c.85-.36,1.62-.86,2.28-1.48.14-.13.41-.42.41-.42,2.93-3.41,6.35-3.26,6.35-3.26h.1s3.46-.18,6.35,3.26c0,0,.27.28.42.42.66.62,1.43,1.12,2.28,1.48.86.36,1.76.55,2.71.55s1.86-.17,2.73-.51c.88-.35,1.67-.83,2.35-1.45.68-.62,1.22-1.36,1.61-2.22s.58-1.78.58-2.77-.2-1.9-.58-2.74c-.39-.84-.93-1.57-1.61-2.19Z"/>
                  </g>
                </g>
              </svg>
            </motion.div>
            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button variant="ghost" className="text-white hover:text-[#0FB9B1] transition-colors duration-300">
                    {item}
                  </Button>
                </motion.div>
              ))}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="text-white"
                >
                  {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              )}
            </div>
            <div className="md:hidden">
              <MenuToggle toggle={toggleMenu} isOpen={isMenuOpen} />
            </div>
          </nav>
        </div>
      </motion.header>

      <div ref={scope}>
        <Menu isOpen={isMenuOpen} navItems={navItems} toggleMenu={toggleMenu} />
      </div>

      <main className="container mx-auto px-6 pt-32 pb-12">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

function Path({ variants, transition, d, ...props }) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
      variants={variants}
      transition={transition}
      d={d}
      {...props}
    />
  )
}

function MenuToggle({ toggle, isOpen }) {
  return (
    <Button variant="ghost" onClick={toggle} className="z-50 p-0">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </Button>
  )
}

function Menu({ isOpen, navItems, toggleMenu }) {
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed inset-0 z-40 bg-gradient-to-br from-[#E15123] to-[#0FB9B1]"
    >
      <motion.ul
        variants={{
          open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
          },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
          }
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        {navItems.map((item) => (
          <motion.li
            key={item}
            variants={{
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  y: { stiffness: 1000, velocity: -100 }
                }
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 }
                }
              }
            }}
            className="mb-8"
          >
            <Button variant="ghost" className="text-white text-3xl hover:text-[#FAA87A] transition-colors duration-300">
              {item}
            </Button>
          </motion.li>
        ))}
      </motion.ul>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white"
        onClick={toggleMenu}
      >
        <X size={24} />
      </Button>
    </motion.nav>
  )
}

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
        <img src="/placeholder.svg?height=400&width=400" alt="AI Skincare" className="rounded-lg shadow-2xl" />
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
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-white/75"
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
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
                style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-white/75"
                style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
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
            <p className="mb-4 italic">"{testimonial.quote}"</p>
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