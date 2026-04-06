"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { usePreloader } from "./preloader";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading } = usePreloader();

  if (isLoading) return null;

  const contactOptions = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      href: `https://wa.me/${config.phone.replace(/\D/g, "")}`,
      color: "bg-[#25D366] hover:bg-[#128C7E]",
      label: "Instant Chat"
    },
    {
      name: "Call Me",
      icon: <Phone className="w-5 h-5" />,
      href: `tel:${config.phone}`,
      color: "bg-blue-600 hover:bg-blue-700",
      label: "Direct Call"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${config.email}`,
      color: "bg-zinc-800 dark:bg-zinc-200 dark:text-zinc-900 text-white hover:opacity-90",
      label: "Send Inquiry"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[5000] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-3 mb-2"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.name}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "flex items-center justify-end gap-3 group px-4 py-2 rounded-full shadow-lg transition-all",
                  option.color,
                  "text-white"
                )}
              >
                <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {option.label}
                </span>
                {option.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-2xl transition-all duration-300",
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-[#2563eb] hover:bg-blue-700 hover:scale-110"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </Button>
    </div>
  );
};

export default FloatingContact;
