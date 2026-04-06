"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
         <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Let's Work <span className="text-[#2563eb]">Together</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl font-medium">
            Ready to build something impactful? Drop me a message or contact me directly at{" "}
            <a
              target="_blank"
              href={`mailto:${config.email}`}
              className="text-[#2563eb] hover:underline font-bold"
            >
               {config.email}
            </a>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto z-10 relative"
        >
          <Card className="w-full bg-white border-gray-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-shadow">
            <CardHeader className="p-8 pb-4 text-center">
              <CardTitle className="text-2xl font-black text-[#111827]">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
