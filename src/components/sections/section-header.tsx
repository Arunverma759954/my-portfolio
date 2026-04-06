import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { ReactNode } from "react"

export const SectionHeader = ({ id, title, desc, className }: { id: string, title: string | ReactNode, desc?: string, className?: string }) => {
  return (

    <div className={cn("mb-12 md:mb-16", className)}>
      <Link href={`#${id}`}>
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center",
              "text-white/90"
            )}
          >
            {title}
          </h2>
        </BoxReveal>
      </Link>
      {desc && (
        <p className="mt-4 mx-auto line-clamp-4 max-w-2xl font-normal text-sm md:text-base text-center text-white/40 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  )
}
