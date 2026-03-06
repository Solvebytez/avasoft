"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, Database, UserCheck, Bell, Globe, Mail } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl"
      >
        <div className="backdrop-blur-lg bg-gray-900/80 border border-gray-700 rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-[#25ABC4] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
                <path fill="currentColor" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">
              Advait<span className="text-[#25ABC4]">Softech</span>
            </span>
          </Link>
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <li>
              <Link href="/" className="cursor-pointer transition-all duration-300 hover:text-[#25ABC4]">Home</Link>
            </li>
            <li>
              <Link href="/services" className="cursor-pointer transition-all duration-300 hover:text-[#25ABC4]">Services</Link>
            </li>
            <li>
              <Link href="/about" className="cursor-pointer transition-all duration-300 hover:text-[#25ABC4]">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="cursor-pointer transition-all duration-300 hover:text-[#25ABC4]">Contact Us</Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button className="rounded-full border-2 border-[#25ABC4]/30 bg-transparent px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#25ABC4]/10 hover:border-[#25ABC4]/50">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,171,196,0.15)_0%,transparent_50%)]" />
        
        <div className="relative z-10 px-8 lg:px-16 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25ABC4]/10 border border-[#25ABC4]/20 mb-6">
              <Shield className="w-4 h-4 text-[#25ABC4]" />
              <span className="text-[#25ABC4] text-sm font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: March 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="px-8 lg:px-16 max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-gray-600 leading-relaxed">
                At Advait Softech, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </motion.div>

            {/* Sections */}
            {[
              {
                icon: Database,
                title: "1. Information We Collect",
                content: [
                  "Personal Information: Name, email address, phone number, company name, and job title when you fill out forms or contact us.",
                  "Technical Information: IP address, browser type, device information, operating system, and browsing behavior on our website.",
                  "Communication Data: Records of correspondence when you contact us via email, phone, or through our website.",
                  "Service Usage Data: Information about how you use our services, including project details and preferences."
                ]
              },
              {
                icon: Eye,
                title: "2. How We Use Your Information",
                content: [
                  "To provide, maintain, and improve our services and website functionality.",
                  "To communicate with you about projects, updates, and respond to your inquiries.",
                  "To send promotional materials and newsletters (with your consent).",
                  "To analyze usage patterns and optimize user experience.",
                  "To comply with legal obligations and protect our legal rights."
                ]
              },
              {
                icon: Lock,
                title: "3. Data Security",
                content: [
                  "We implement industry-standard security measures including SSL encryption, firewalls, and secure data storage.",
                  "Access to personal data is restricted to authorized personnel only.",
                  "We conduct regular security audits and vulnerability assessments.",
                  "All employees sign confidentiality agreements and undergo security training."
                ]
              },
              {
                icon: UserCheck,
                title: "4. Your Rights",
                content: [
                  "Right to Access: Request a copy of the personal data we hold about you.",
                  "Right to Rectification: Request correction of inaccurate or incomplete data.",
                  "Right to Erasure: Request deletion of your personal data under certain circumstances.",
                  "Right to Object: Object to processing of your personal data for direct marketing.",
                  "Right to Data Portability: Receive your data in a structured, machine-readable format."
                ]
              },
              {
                icon: Globe,
                title: "5. Third-Party Sharing",
                content: [
                  "We do not sell, trade, or rent your personal information to third parties.",
                  "We may share data with trusted service providers who assist in operating our website and services.",
                  "We may disclose information when required by law or to protect our rights.",
                  "In case of a business merger or acquisition, your data may be transferred to the new entity."
                ]
              },
              {
                icon: Bell,
                title: "6. Cookies and Tracking",
                content: [
                  "We use cookies to enhance your browsing experience and analyze website traffic.",
                  "You can control cookie preferences through your browser settings.",
                  "We use Google Analytics to understand how visitors interact with our website.",
                  "For more details, please refer to our Cookie Policy."
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25ABC4]/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-[#25ABC4]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25ABC4] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gray-900 rounded-2xl text-center"
            >
              <Mail className="w-10 h-10 text-[#25ABC4] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Questions About Privacy?</h3>
              <p className="text-gray-400 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <a href="mailto:privacy@advaitsoftech.com" className="text-[#25ABC4] hover:underline font-medium">
                privacy@advaitsoftech.com
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,171,196,0.05)_0%,transparent_50%)]" />
        <div className="relative z-10 px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2026 Advait Softech. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="text-[#25ABC4] text-sm">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-gray-500 hover:text-[#25ABC4] transition-colors duration-300 text-sm">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-gray-500 hover:text-[#25ABC4] transition-colors duration-300 text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
