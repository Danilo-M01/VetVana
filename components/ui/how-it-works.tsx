"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme?: "forest" | "coral" | "sage" | "amber";
  className?: string;
  rotate?: string;
  colors?: {
    bg: string;
    text: string;
    border: string;
    badgeBg?: string;
  };
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  colorTheme = "forest",
  className,
  rotate,
  colors: customColors,
}: CardProps) => {
  const defaultBgColors = {
    forest: "bg-[#E8EFEB] border-[#C6D8CE]",
    coral: "bg-[#FDF1EF] border-[#F6C1B8]",
    sage: "bg-[#F5F8F6] border-[#DCE8DF]",
    amber: "bg-[#FFF9EB] border-[#FDE68A]",
  };
  
  const defaultTextColors = {
    forest: "text-[#183A34]",
    coral: "text-[#E56B5D]",
    sage: "text-[#325C4D]",
    amber: "text-[#D97706]",
  };

  const defaultBorderColors = {
    forest: "border-[#C6D8CE]",
    coral: "border-[#F6C1B8]",
    sage: "border-[#C2D5C8]",
    amber: "border-[#FCD34D]",
  };

  const defaultBadgeBg = {
    forest: "bg-forest/10 text-forest",
    coral: "bg-coral/10 text-coral",
    sage: "bg-sage-400/20 text-forest",
    amber: "bg-amber-100 text-amber-800",
  };

  const bgColor = customColors?.bg || defaultBgColors[colorTheme] || defaultBgColors.forest;
  const textColor = customColors?.text || defaultTextColors[colorTheme] || defaultTextColors.forest;
  const borderColor = customColors?.border || defaultBorderColors[colorTheme] || defaultBorderColors.forest;
  const badgeStyle = defaultBadgeBg[colorTheme] || defaultBadgeBg.forest;

  return (
    <div
      className={cn(
        "relative w-full md:w-[310px] transition-all duration-300 hover:z-30 hover:scale-105 group cursor-default",
        rotate,
        className
      )}
    >
      <div className="bg-white p-3 rounded-[28px] shadow-[0px_10px_30px_0px_rgba(24,58,52,0.08)] border border-forest/10 relative transition-shadow group-hover:shadow-elevated">
        {/* Pin on top */}
        <Pin className={cn("w-7 h-7 z-20 mb-4 mx-auto drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1", textColor)} />
        
        {/* Inner Card Content */}
        <div
          className={cn(
            bgColor,
            "border rounded-[20px] p-5 sm:p-6 h-full flex flex-col relative overflow-hidden",
            borderColor
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className={cn(
                textColor,
                "text-4xl font-extrabold tracking-tighter"
              )}
            >
              {number}
            </span>
            <span className={cn("text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider", badgeStyle)}>
              Korak {number}
            </span>
          </div>

          <h3 className="text-xl font-bold text-forest leading-snug mb-2.5">
            {title}
          </h3>

          <p className="text-charcoal/80 text-sm leading-relaxed">
            {description}
          </p>

          <div className="mt-4 pt-3 border-t border-forest/10 flex items-center gap-1.5 text-xs font-semibold text-forest/70">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Prijateljski i bez stresa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colorTheme?: "forest" | "coral" | "sage" | "amber";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[10%]", rotate: "rotate-3" },
  {
    className: "md:absolute md:top-[140px] md:right-[10%]",
    rotate: "-rotate-3",
  },
  { className: "md:absolute md:top-[430px] md:left-[10%]", rotate: "rotate-3" },
  {
    className: "md:absolute md:top-[570px] md:right-[10%]",
    rotate: "-rotate-3",
  },
];

export default function HowItWorksComponent({
  features,
  className,
  stepPositions,
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      title: "Pregled & Upoznavanje",
      description:
        "Upoznajemo ljubimca i pažljivo razgovaramo sa vlasnikom u mirnoj i nestresnoj atmosferi bez žurbe.",
      colorTheme: "forest",
    },
    {
      title: "Dijagnostika & Analize",
      description:
        "Po potrebi radimo laboratorijske analize, ultrazvuk ili ciljane specijalističke preglede na licu mesta.",
      colorTheme: "coral",
    },
    {
      title: "Plan terapije & Dogovor",
      description:
        "Jasno i detaljno objašnjavamo svaki nalaz vlasniku i dogovaramo najoptimalnije korake bez skrivenih troškova.",
      colorTheme: "sage",
    },
    {
      title: "Praćenje & Podrška",
      description:
        "Ne završava se sve izlaskom iz ordinacije. Pratimo tok oporavka i uvek stojimo na raspolaganju za savet.",
      colorTheme: "amber",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  let height = 980;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 480;
  else if (data.length === 3) height = 750;
  else if (data.length === 4) height = 920;
  else height = 1150;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn(
          "bg-white py-16 md:py-24 px-4 sm:px-8 relative overflow-hidden",
          className
        )}
      >
        {/* Subtle patterned grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#183A34 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[960px] mx-auto flex flex-col space-y-3 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 960 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  let pathD = "";
                  if (data.length === 4) {
                    // Optimized curved path connecting 4 cards smoothly
                    pathD = "M 380 130 C 600 130, 600 240, 650 240 C 720 240, 680 430, 380 530 C 260 590, 520 660, 650 670";
                  } else {
                    pathD = data.reduce((acc, _, index) => {
                      if (index >= data.length - 1) return acc;
                      if (index === 0)
                        return "M 320 140 C 500 140, 550 260, 680 260";
                      if (index === 1)
                        return acc + " C 800 260, 500 360, 320 480";
                      if (index === 2)
                        return acc + " C 320 600, 550 700, 680 700";
                      return acc;
                    }, "");
                  }

                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-forest/20"
                      strokeWidth="2.5"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140,
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];

              return (
                <React.Fragment key={step.title}>
                  <Card
                    number={`0${index + 1}`}
                    title={step.title}
                    description={step.description}
                    colorTheme={step.colorTheme || "forest"}
                    colors={step.colors}
                    rotate={position.rotate}
                    className={position.className}
                  />

                  {/* Mobile Connecting Flow Line between cards - Seamless Winding Through Cards */}
                  {index < data.length - 1 && (
                    <div className="md:hidden flex flex-col items-center justify-center -my-3 z-0 relative pointer-events-none w-full">
                      <div className="relative w-full max-w-[280px] h-[95px] flex items-center justify-center">
                        <svg
                          width="280"
                          height="95"
                          viewBox="0 0 280 95"
                          fill="none"
                          className="w-full h-full overflow-visible"
                        >
                          {/* Soft background halo track */}
                          <path
                            d={
                              index % 2 === 0
                                ? "M 140 -8 C 260 8, 260 45, 140 45 C 20 45, 20 82, 140 98"
                                : "M 140 -8 C 20 8, 20 45, 140 45 C 260 45, 260 82, 140 98"
                            }
                            stroke="#C6D8CE"
                            strokeWidth="5"
                            strokeOpacity="0.5"
                            strokeLinecap="round"
                            fill="none"
                          />

                          {/* Animated dashed line winding continuously through cards */}
                          <m.path
                            d={
                              index % 2 === 0
                                ? "M 140 -8 C 260 8, 260 45, 140 45 C 20 45, 20 82, 140 98"
                                : "M 140 -8 C 20 8, 20 45, 140 45 C 260 45, 260 82, 140 98"
                            }
                            stroke="#183A34"
                            strokeWidth="3"
                            strokeDasharray="9 7"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -32 }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
