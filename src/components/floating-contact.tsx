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

      <motion.div
        animate={!isOpen ? {
          y: [0, -10, 0],
        } : {}}
        transition={!isOpen ? {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
      >
        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-14 h-14 rounded-full shadow-2xl transition-all duration-300",
            isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-[#25D366] hover:bg-[#128C7E] hover:scale-110"
          )}
        >
          {isOpen ? <X className="w-6 h-6" /> : (
            <svg 
              viewBox="0 0 24 24" 
              className="w-7 h-7 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default FloatingContact;
