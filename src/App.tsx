/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Check, 
  Globe, 
  Calendar, 
  Clock, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  ChevronRight, 
  ChevronDown, 
  BookOpen, 
  Sliders, 
  Plus, 
  X, 
  CheckCircle2,
  Lock,
  Building,
  Menu,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Camera,
  Target,
  Scale,
  GitFork,
  Compass,
  FileText,
  Layers,
  Zap
} from "lucide-react";
import { content, Language, Article } from "./types";
import GruenderstrukturCheck from "./components/GruenderstrukturCheck";
import VardaNavigator from "./components/VardaNavigator";

import contractIntelligenceImage from "./assets/images/contractintelligence2.png"
import contractIntelligenceImageEng from "./assets/images/contractintelligence2eng.png"
import execFigmaImage from "./assets/images/figma.png"

import munichImage from "./assets/images/vardalegal_munich.png"

import vardalegalEndframe from "./assets/images/vardalegal_endframe.png"
import vardalegalEndframeEng from "./assets/images/vardalegal_endframeeng.png"

import konstiArch from "./assets/images/konsti2024_arch.png"
import konstiImage from "./assets/images/konsti.png"
import konstineuImage from "./assets/images/konstineu.png"
import konstiClarity from "./assets/images/konsticlarity.png"
import linkedinImage from "./assets/images/linkedin.png"

import coffeeImage from "./assets/images/vardalegal_coffeetable.png"
import tokenRecoveryImage from "./assets/images/tokenrecovery.png.png"
import tokenRecoveryImageEng from "./assets/images/tokenrecoveryeng.png"
import unternehmensverkaufImage from "./assets/images/unternehmensverkauf.png"
import unternehmensverkaufImageEng from "./assets/images/unternehmensverkaufeng.png"
import vertraegeImage from "./assets/images/vertraege.png"
import vertraegeImageEng from "./assets/images/vertraegeeng-1.png"
import vertragsanalyseImage from "./assets/images/vertragsanalyse.png"
import vertragsanalyseImageEng from "./assets/images/vertragsanalyseeng-1.png"

// Dedicated environment/variable configuration for recipient email
const CONTACT_FORM_RECIPIENT = import.meta.env.VITE_CONTACT_FORM_RECIPIENT || "info@vardalegal.com";

function DecisionArchitectureBlueprint({ lang }: { lang: Language }) {
  const [activeInput, setActiveInput] = useState<number | null>(null);

  const isDe = lang === "DE";

  const altText = isDe
    ? "Varda bewertet das wirtschaftliche Ziel, die Rechtslage, die wirtschaftlichen Folgen und die realistischen Optionen und leitet daraus eine klare Empfehlung und den nächsten Schritt ab."
    : "Varda assesses the business objective, legal position, commercial consequences and realistic options before providing a clear recommendation and next step.";

  const inputs = isDe
    ? [
        "Wirtschaftliches Ziel",
        "Rechtslage",
        "Wirtschaftliche Folgen",
        "Realistische Optionen"
      ]
    : [
        "Business objective",
        "Legal position",
        "Commercial consequences",
        "Realistic options"
      ];

  const outputs = isDe
    ? ["Klare Empfehlung", "Nächster Schritt"]
    : ["Clear recommendation", "Next step"];

  return (
    <div 
      className="relative w-full h-full bg-[#FAF8F4] border border-charcoal/15 p-6 md:p-8 select-none flex flex-col justify-between group shadow-2xs min-h-[380px]"
      aria-label={altText}
      role="img"
    >
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-[#FAF8F4]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,27,25,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,25,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Blueprint Header */}
      <div className="relative z-10 flex justify-between items-center pb-4 border-b border-charcoal/10 font-mono text-[9px] text-charcoal/50 uppercase tracking-widest font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#C0823E]" />
          <span>{isDe ? "VARDA ENTSCHEIDUNGSMETHODIK" : "VARDA ADVISORY METHODOLOGY"}</span>
        </div>
        <div className="text-[#C0823E] font-bold">
          {isDe ? "4 ELEMENTE → 1 ERGEBNIS" : "4 INPUTS → 1 OUTPUT"}
        </div>
      </div>

      {/* Blueprint SVG Canvas */}
      <div className="relative z-10 my-auto py-4 flex items-center justify-center">
        <svg className="w-full h-auto overflow-visible max-w-[560px]" viewBox="0 0 540 220" fill="none">
          {/* LEFT INPUT NODES */}
          {inputs.map((label, idx) => {
            const y = 35 + idx * 48;
            const isActive = activeInput === idx;
            return (
              <g
                key={idx}
                className="cursor-pointer"
                onMouseEnter={() => setActiveInput(idx)}
                onMouseLeave={() => setActiveInput(null)}
              >
                {/* Connecting Line to Center Focal Hub (250, 107) */}
                <path
                  d={`M 165 ${y} C 210 ${y}, 215 107, 250 107`}
                  stroke={isActive ? "#C0823E" : "rgba(44, 44, 44, 0.2)"}
                  strokeWidth={isActive ? "1.8" : "1"}
                  strokeDasharray={isActive ? "none" : "3 3"}
                  className="transition-all duration-300"
                  fill="none"
                />
                
                {/* Input Rect Container */}
                <rect
                  x="10"
                  y={y - 15}
                  width="155"
                  height="30"
                  rx="2"
                  fill="#FAF8F4"
                  stroke={isActive ? "#C0823E" : "rgba(44, 44, 44, 0.25)"}
                  strokeWidth={isActive ? "1.5" : "1"}
                  className="transition-all duration-300"
                />
                <circle cx="22" cy={y} r="2.5" fill={isActive ? "#C0823E" : "rgba(44,44,44,0.4)"} />
                <text
                  x="32"
                  y={y + 3.5}
                  className={`font-sans text-[11px] font-medium transition-colors ${
                    isActive ? "fill-[#C0823E] font-semibold" : "fill-charcoal/85"
                  }`}
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* CENTER DISTILLATION HUB (250, 107) */}
          <g transform="translate(250, 107)">
            <circle cx="0" cy="0" r="22" fill="#FAF8F4" stroke="#C0823E" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="14" fill="#FAF8F4" stroke="rgba(44,44,44,0.2)" strokeWidth="0.8" strokeDasharray="3 2" />
            <circle cx="0" cy="0" r="4" fill="#1B2A4A" />
            <text x="0" y="3.5" textAnchor="middle" className="font-mono text-[10px] fill-charcoal/70 font-bold">
              ↓
            </text>
          </g>

          {/* RIGHT VECTOR TO FOCAL OUTPUT */}
          <path
            d="M 272 107 L 360 107"
            stroke="#1B2A4A"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <polygon points="360,103 368,107 360,111" fill="#1B2A4A" />

          {/* RIGHT OUTPUT NODES (Clear recommendation & Next step) */}
          {outputs.map((label, idx) => {
            const y = 80 + idx * 54;
            const isRec = idx === 0;
            return (
              <g key={idx}>
                {/* Branch from focal point (368, 107) to output node */}
                <path
                  d={`M 368 107 C 390 107, 395 ${y}, 410 ${y}`}
                  stroke="#1B2A4A"
                  strokeWidth="1.2"
                  fill="none"
                />
                <rect
                  x="410"
                  y={y - 18}
                  width="125"
                  height="36"
                  rx="2"
                  fill={isRec ? "#1B2A4A" : "#FAF8F4"}
                  stroke={isRec ? "#1B2A4A" : "#C0823E"}
                  strokeWidth="1.2"
                />
                <text
                  x="472"
                  y={y + 3.5}
                  textAnchor="middle"
                  className={`font-sans text-[11px] font-semibold tracking-tight ${
                    isRec ? "fill-white" : "fill-charcoal"
                  }`}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Blueprint Footnote / Accessible Summary Line */}
      <div className="relative z-10 border-t border-charcoal/10 pt-3 flex justify-between items-center font-mono text-[9px] text-charcoal/50">
        <div>{isDe ? "ERGEBNIS: KLARHEIT & UMSETZUNG" : "RESULT: CLARITY & EXECUTION"}</div>
        <div className="text-[#C0823E] font-semibold">{isDe ? "Varda Legal Analyse" : "Varda Legal Analysis"}</div>
      </div>
    </div>
  );
}

function MnaDecisionArchitecture({ lang }: { lang: Language }) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const t = (de: string, en: string) => (lang === "DE" ? de : en);

  // Define static data with type safety
  const nodes = {
    s1: {
      id: "s1",
      title: t("Umsatz ist stabil", "Revenue is stable"),
      desc: t("Jährliche Umsätze belegt durch lückenlose betriebswirtschaftliche Auswertungen (BWA) und geprüfte Jahresabschlüsse.", "Annual revenues proven by complete business assessments (BWA) and audited annual accounts."),
      status: "verified"
    },
    s2: {
      id: "s2",
      title: t("Kunden bleiben", "Customers will stay"),
      desc: t("Kundenbasis ist loyal, Verträge wurden in der Vergangenheit jedoch nur mündlich verlängert. Die Werthaltigkeit ist für den Käufer mangels Dokumentation nicht nachweisbar.", "Customer base is loyal, but contracts have historically only been extended verbally. Retention is unprovable to the buyer due to a lack of documentation."),
      status: "broken",
      breakLabel: t("LÜCKENHAFTE BELEGE", "INCOMPLETE RECORDS"),
      breakReason: t("Unterbrochen: Mündliche Absprachen schaffen kein verifizierbares Vertrauen.", "Interrupted: Verbal agreements do not create verifiable trust.")
    },
    s3: {
      id: "s3",
      title: t("IP gehört der Gesellschaft", "IP belongs to the company"),
      desc: t("Software wurde zum Teil durch Freelancer entwickelt, ohne dass die Rechteübertragung jemals schriftlich dokumentiert oder gegengezeichnet wurde.", "Software was partly developed by freelancers without the transfer of rights ever being documented in writing or counter-signed."),
      status: "broken",
      breakLabel: t("UNKLARHEIT RECHTSKETTE", "UNRESOLVED RIGHTS"),
      breakReason: t("Unterbrochen: Dokumentär unklare Rechtekette entwertet das Technologie-Asset.", "Interrupted: Documentarily unclear chain of rights devalues the tech asset.")
    },
    s4: {
      id: "s4",
      title: t("Schlüsselpersonen bleiben", "Key personnel will stay"),
      desc: t("Sämtliche Schlüsselmitarbeiter haben schriftliche, für den Käufer verifizierbare Lock-Up- und Retention-Agreements unterzeichnet.", "All key personnel have signed written lock-up and retention agreements that are verifiable for the buyer."),
      status: "verified"
    },
    t1: {
      id: "t1",
      title: t("weniger Rückfragen", "fewer inquiries"),
      desc: t("Präzise, sofort zugängliche Dokumentation im Datenraum eliminiert zeitaufwendige Q&A-Loops.", "Precise, immediately accessible data room documentation eliminates time-consuming Q&A loops.")
    },
    t2: {
      id: "t2",
      title: t("höhere Transaktionssicherheit", "higher transaction security"),
      desc: t("Vollständig belegbare Behauptungen verringern die Wahrscheinlichkeit eines Deal-Abbruchs im späten Prozessstadium.", "Fully verifiable assertions decrease the probability of transaction termination in late process stages.")
    },
    t3: {
      id: "t3",
      title: t("bessere Verhandlungsposition", "better negotiation position"),
      desc: t("Beseitigung von Unklarheiten verhindert nachträgliche Risikoabschläge oder Kaufpreiseinbehalte durch den Käufer.", "Elimination of ambiguities prevents retroactive risk discounts or purchase price holdbacks by the buyer.")
    },
    t4: {
      id: "t4",
      title: t("schnellerer Prozess", "faster process"),
      desc: t("Eine strukturierte und geprüfte Vorbereitung verkürzt die Due Diligence Phase um wertvolle Wochen.", "Structured and pre-audited preparation shortens the due diligence phase by valuable weeks.")
    }
  };

  return (
    <div className="relative w-full bg-[#FAF8F4] border border-charcoal/10 rounded-sm p-8 select-none flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      {/* Background blueprint grid overlay for a warm draft-paper feeling */}
      <div className="absolute inset-0 bg-[#FAF8F4]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,21,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,21,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Top Editorial Labeling & Title */}
      <div className="relative z-10 flex flex-col space-y-2 pb-6 border-b border-charcoal/[0.06] mb-8">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#947444] font-semibold">
          {t("VARDA DECISION ARCHITECTURE NO. 02", "VARDA DECISION ARCHITECTURE NO. 02")}
        </span>
        <h4 className="font-serif text-2xl text-charcoal font-medium tracking-tight">
          {t("Der Unternehmensverkauf", "The Company Sale")}
        </h4>
        <p className="font-sans text-[11px] sm:text-[12px] italic text-charcoal/60 font-light max-w-2xl">
          {t("Ein Unternehmenskauf beginnt mit Dokumenten. Er endet mit Vertrauen. Das Modell visualisiert die weichenstellende Funktion der Verifizierbarkeit.",
              "A company sale begins with documents. It ends with trust. The model visualizes the path-defining role of verifiability.")}
        </p>
      </div>

      {/* Main Diagram Canvas Area (Responsive Swipe Container for Mobile UX) */}
      <div className="relative z-10 w-full overflow-x-auto scrollbar-thin">
        <div className="min-w-[760px] relative px-2 py-4">
          
          {/* Section Headers for LHS/RHS Columns */}
          <div className="flex justify-between px-4 mb-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50 font-semibold select-text">
              01 / {t("Aussagen", "Statements")}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#947444] font-semibold select-text">
              02 / {t("Zentrum des Vertrauens", "Core of Trust")}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/50 font-semibold select-text">
              03 / {t("Vertrauen", "Trust Outcomes")}
            </span>
          </div>

          <svg className="w-full h-[360px] overflow-visible" viewBox="0 0 800 360" fill="none">
            <defs>
              <filter id="subtleGlowHub" x="-15%" y="-15%" width="130%" height="130%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* --- PATHS SECTION (LHS -> HUB -> RHS) --- */}
            
            {/* Path 1: s1 -> Hub (Verified, Solid) */}
            <path
              d="M 230 70 C 310 70, 340 180, 400 180"
              stroke={activeNode === "s1" || activeNode === "center" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s1" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Animated Flow Dot for Path 1 */}
            {(activeNode === "s1" || activeNode === "center") && (
              <circle r="3" fill="#947444">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M 230 70 C 310 70, 340 180, 400 180"
                />
              </circle>
            )}

            {/* Path 2: s2 -> Hub (Broken - Intended portion) */}
            <path
              d="M 230 140 H 290"
              stroke={activeNode === "s2" ? "#C0823E" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s2" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Path 2: Dashed remainder (faded, broken) */}
            <path
              d="M 290 140 C 330 140, 350 180, 400 180"
              stroke="rgba(17,17,21,0.06)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              fill="none"
            />
            {/* Break Indicator Lines (Double Slash) at x=290 */}
            <line x1="288" y1="135" x2="292" y2="145" stroke="#C0823E" strokeWidth="1.2" />
            <line x1="292" y1="135" x2="296" y2="145" stroke="#C0823E" strokeWidth="1.2" />
            
            {/* Label for break 2 */}
            <text x="304" y="137" className="font-mono text-[8px] fill-charcoal/40 tracking-wider">
              {nodes.s2.breakLabel}
            </text>


            {/* Path 3: s3 -> Hub (Broken - Intended portion) */}
            <path
              d="M 230 220 H 290"
              stroke={activeNode === "s3" ? "#C0823E" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s3" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Path 3: Dashed remainder (faded, broken) */}
            <path
              d="M 290 220 C 330 220, 350 180, 400 180"
              stroke="rgba(17,17,21,0.06)"
              strokeWidth="0.8"
              strokeDasharray="3 3"
              fill="none"
            />
            {/* Break Indicator Lines (Double Slash) at x=290 */}
            <line x1="288" y1="215" x2="292" y2="225" stroke="#C0823E" strokeWidth="1.2" />
            <line x1="292" y1="215" x2="296" y2="225" stroke="#C0823E" strokeWidth="1.2" />
            
            {/* Label for break 3 */}
            <text x="304" y="217" className="font-mono text-[8px] fill-charcoal/40 tracking-wider">
              {nodes.s3.breakLabel}
            </text>


            {/* Path 4: s4 -> Hub (Verified, Solid) */}
            <path
              d="M 230 290 C 310 290, 340 180, 400 180"
              stroke={activeNode === "s4" || activeNode === "center" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "s4" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {/* Animated Flow Dot for Path 4 */}
            {(activeNode === "s4" || activeNode === "center") && (
              <circle r="3" fill="#947444">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M 230 290 C 310 290, 340 180, 400 180"
                />
              </circle>
            )}


            {/* --- Hub OUTWARD Paths (Center -> Trust Outcomes) --- */}
            
            {/* Path Hub -> t1 */}
            <path
              d="M 400 180 C 460 180, 500 70, 570 70"
              stroke={activeNode === "t1" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t1" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 70, 570 70"
                />
              </circle>
            )}

            {/* Path Hub -> t2 */}
            <path
              d="M 400 180 C 460 180, 500 140, 570 140"
              stroke={activeNode === "t2" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t2" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.2s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 140, 570 140"
                />
              </circle>
            )}

            {/* Path Hub -> t3 */}
            <path
              d="M 400 180 C 460 180, 500 220, 570 220"
              stroke={activeNode === "t3" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t3" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0.7s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 220, 570 220"
                />
              </circle>
            )}

            {/* Path Hub -> t4 */}
            <path
              d="M 400 180 C 460 180, 500 290, 570 290"
              stroke={activeNode === "t4" || activeNode === "center" || activeNode === "s1" || activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.14)"}
              strokeWidth={activeNode === "t4" ? "1.8" : "1"}
              className="transition-all duration-300"
              fill="none"
            />
            {(activeNode === "center" || activeNode === "s1" || activeNode === "s4") && (
              <circle r="2.5" fill="#947444" opacity="0.8">
                <animateMotion
                  dur="2.5s"
                  begin="0s"
                  repeatCount="indefinite"
                  path="M 400 180 C 460 180, 500 290, 570 290"
                />
              </circle>
            )}


            {/* --- NODES (LEFT ZONE: STATEMENTS) --- */}
            
            {/* Left Node 1: Umsatz ist stabil */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s1")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="48"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s1" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s1" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="74" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s1.title}
              </text>
              {/* Verification status dot */}
              <circle cx="218" cy="70" r="4.5" fill="#FAF8F4" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              <circle cx="218" cy="70" r="2" fill="#10b981" />
            </g>

            {/* Left Node 2: Kunden bleiben */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s2")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="118"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s2" ? "#C0823E" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s2" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="144" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s2.title}
              </text>
              {/* Interruption status dot */}
              <circle cx="218" cy="140" r="4.5" fill="#FAF8F4" stroke="rgba(192,130,62,0.3)" strokeWidth="1" />
              <circle cx="218" cy="140" r="2" fill="#C0823E" />
            </g>

            {/* Left Node 3: IP gehört der Gesellschaft */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s3")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="198"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s3" ? "#C0823E" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s3" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="224" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s3.title}
              </text>
              {/* Interruption status dot */}
              <circle cx="218" cy="220" r="4.5" fill="#FAF8F4" stroke="rgba(192,130,62,0.3)" strokeWidth="1" />
              <circle cx="218" cy="220" r="2" fill="#C0823E" />
            </g>

            {/* Left Node 4: Schlüsselpersonen bleiben */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("s4")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="30"
                y="268"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "s4" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "s4" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="45" y="294" className="font-serif text-[12px] fill-charcoal/90 font-medium">
                {nodes.s4.title}
              </text>
              {/* Verification status dot */}
              <circle cx="218" cy="290" r="4.5" fill="#FAF8F4" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              <circle cx="218" cy="290" r="2" fill="#10b981" />
            </g>


            {/* --- CENTER HUB: VERIFIZIERBARKEIT --- */}
            
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("center")}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Exterior fine rotating reference circle */}
              <circle
                cx="400"
                cy="180"
                r="64"
                fill="none"
                stroke="rgba(148,116,68,0.15)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                className="animate-[spin_45s_linear_infinite]"
              />
              {/* Inner physical node core */}
              <circle
                cx="400"
                cy="180"
                r="56"
                fill="#FAF8F4"
                stroke={activeNode === "center" ? "#947444" : "rgba(17,17,21,0.22)"}
                strokeWidth={activeNode === "center" ? "2" : "1.2"}
                filter={activeNode === "center" ? "url(#subtleGlowHub)" : undefined}
                className="transition-all duration-300"
              />
              {/* Grid marks on hub for technical/precision blueprint style */}
              <line x1="400" y1="116" x2="400" y2="122" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="400" y1="238" x2="400" y2="244" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="336" y1="180" x2="342" y2="180" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />
              <line x1="458" y1="180" x2="464" y2="180" stroke="rgba(17,17,21,0.2)" strokeWidth="1" />

              {/* Inscriptions */}
              <text x="400" y="171" textAnchor="middle" className="font-sans text-[10px] font-bold tracking-[0.16em] fill-charcoal">
                {t("VERIFIZIERBARKEIT", "VERIFIABILITY")}
              </text>
              <text x="400" y="196" textAnchor="middle" className="font-serif text-[9px] italic fill-charcoal/50 leading-tight">
                {t("Kann die Aussage", "Can the statement")}
              </text>
              <text x="400" y="206" textAnchor="middle" className="font-serif text-[9px] italic fill-charcoal/50 leading-tight">
                {t("belegt werden?", "be verified?")}
              </text>
            </g>


            {/* --- NODES (RIGHT ZONE: TRUST OUTCOMES) --- */}
            
            {/* Right Node 1: weniger Rückfragen */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t1")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="48"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t1" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t1" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="74" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t1.title}
              </text>
            </g>

            {/* Right Node 2: höhere Transaktionssicherheit */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t2")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="118"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t2" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t2" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="144" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t2.title}
              </text>
            </g>

            {/* Right Node 3: bessere Verhandlungsposition */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t3")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="198"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t3" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t3" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="224" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t3.title}
              </text>
            </g>

            {/* Right Node 4: schnellerer Prozess */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("t4")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="570"
                y="268"
                width="200"
                height="44"
                rx="2"
                fill="#FAF8F4"
                stroke={activeNode === "t4" ? "#947444" : "rgba(17,17,21,0.12)"}
                strokeWidth={activeNode === "t4" ? "1.5" : "1"}
                className="transition-all duration-200"
              />
              <text x="585" y="294" className="font-mono text-[10px] uppercase tracking-wider fill-charcoal/95 font-medium">
                {nodes.t4.title}
              </text>
            </g>

          </svg>
        </div>
      </div>

      {/* Interactive Tooltip Card at the Bottom of the Widget to provide strategy-firm depth */}
      <div className="relative z-10 mt-6 p-5 bg-[#FAF8F4] border border-charcoal/10 rounded-sm min-h-[100px] flex flex-col justify-center transition-all duration-300">
        {activeNode ? (
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#947444] font-semibold">
                {activeNode.startsWith("s") 
                  ? t("Aussage / Verifikation", "Statement / Verification State") 
                  : activeNode === "center" 
                    ? t("Zentrale Verifikation", "Central Verification Hub") 
                    : t("Effekt auf den Prozess", "Impact on Process")}
              </span>
              
              {activeNode.startsWith("s") && (
                <span className={`px-2 py-0.5 rounded-full font-mono text-[8px] uppercase font-bold tracking-wider ${
                  activeNode === "s1" || activeNode === "s4"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-100/50" 
                    : "bg-amber-50 text-amber-800 border border-amber-100/50"
                }`}>
                  {activeNode === "s1" || activeNode === "s4"
                    ? t("Belegbar / Solide", "Verifiable / Sound") 
                    : t("Unterbrochen / Risiko", "Interrupted / Risk Factor")}
                </span>
              )}

              {activeNode.startsWith("t") && (
                <span className="px-2 py-0.5 rounded-full font-mono text-[8px] uppercase font-bold tracking-wider bg-blue-50 text-blue-800 border border-blue-100/50">
                  {t("Resultierender Wert", "Resulting Value")}
                </span>
              )}
            </div>

            <h5 className="font-serif text-sm font-bold text-charcoal">
              {activeNode === "center" ? t("Der Filter der Due Diligence", "The Due Diligence Grid") : (nodes as any)[activeNode]?.title}
            </h5>

            <p className="font-sans text-[12px] text-charcoal/70 leading-relaxed font-light">
              {activeNode === "center" 
                ? t("Das verifiziert vorliegende Dokumentenwerk bildet das unerschütterliche Fundament. Behauptungen, die hier mangels Unterlagen scheitern, zerstören das Vertrauen, bevor Verträge entstehen können.", 
                    "The factual, audited documentation forms an unshakable foundation. Statements that fail here due to lack of records dissolve trust before agreements can be finalized.")
                : activeNode === "s2" 
                  ? t("Die Aussage 'Kunden bleiben' ist dealkritisch, bricht jedoch ab. Ohne schriftlich fixierte, übertragbare Verträge wertet der Käufer die Kundenbasis als ungesichertes Risiko und fordert massive Abschläge auf den Kaufpreis.", 
                      "The assertion 'Customers will stay' is critical, but fails here. Without written, transferable customer agreements, the buyer reviews the revenues as unsecured risk and demands substantial discounts.")
                  : activeNode === "s3"
                    ? t("Software-Assets ohne saubere, ununterbrochene Rechtekette durch schriftliche Vereinbarungen mit allen Freelancern und Entwicklern stellen eine existenzielle Rechtsunsicherheit dar. Die Verifikation bricht ab.", 
                        "Software assets without a clear, unbroken chain of title by written agreements with all freelancers and developers pose an existential legal liability. Verification fails.")
                    : (nodes as any)[activeNode]?.desc}
            </p>
          </div>
        ) : (
          <div className="text-center py-2 text-charcoal/40 italic font-serif text-[12px]">
            {t("Bewegen Sie den Cursor über ein Architekturelement, um die verfahrensrechtlichen Zusammenhänge zu analysieren.", 
               "Hover over any architectural node to analyze the strategic and structural outcomes.")}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const [currentView, setCurrentView] = useState<"website" | "navigator">("website");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isKompendiumOpen, setIsKompendiumOpen] = useState(false);
  
  // Interactive Simulator State
  const [preMoney, setPreMoney] = useState<number>(3000000);
  const [newInvestment, setNewInvestment] = useState<number>(500000);
  const [optionPool, setOptionPool] = useState<number>(10); // in %

  // Fee calculation state
  const [selectedFeeAddons, setSelectedFeeAddons] = useState<string[]>([]);
  
  // Custom Scheduler State
  const [bookingStep, setBookingStep] = useState<"intake" | "success">("intake");
  const [selectedMeetingType, setSelectedMeetingType] = useState<"15min" | "45min">("15min");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    challenge: "",
    message: "",
    preferredContact: "call" // "call" | "videocall" | "email"
  });

  const handleNavigateToConsult = (msg: string) => {
    setBookingForm(prev => ({
      ...prev,
      challenge: msg
    }));
    document.getElementById("letsgo")?.scrollIntoView({ behavior: "smooth" });
  };
  const [optionalScheduled, setOptionalScheduled] = useState(false);

  // Unique layout states requested by USER
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [activeLegalModal, setActiveLegalModal] = useState<"impressum" | "datenschutz" | null>(null);
  const [showShortProfile, setShowShortProfile] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [activeClause, setActiveClause] = useState<string | null>(null);

  // Simulated ProRes Living Video state
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoTime, setVideoTime] = useState(2.4);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [showMetadataHud, setShowMetadataHud] = useState(true);

  // Interactive Typewriter state under the Fokus (Expertise) section
  const [fokusCodeText, setFokusCodeText] = useState("");
  const [fokusSuccessVisible, setFokusSuccessVisible] = useState(false);
  const targetCodeString = "company sale: structure founder exit & lock-up phase";

  useEffect(() => {
    let typeIndex = 0;
    let timer: any;
    
    const runTypingLoop = () => {
      setFokusSuccessVisible(false);
      setFokusCodeText("");
      typeIndex = 0;
      
      const typeNextChar = () => {
        if (typeIndex < targetCodeString.length) {
          setFokusCodeText(targetCodeString.slice(0, typeIndex + 1));
          typeIndex++;
          timer = setTimeout(typeNextChar, 70); 
        } else {
          timer = setTimeout(() => {
            setFokusSuccessVisible(true);
          }, 800);
          
          timer = setTimeout(runTypingLoop, 14000); // loops every 14s
        }
      };
      
      timer = setTimeout(typeNextChar, 1200);
    };

    runTypingLoop();
    return () => clearTimeout(timer);
  }, []);

  // Dynamic ticker for the Simulated Video progress playhead (Loops over 12 seconds)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updatePlayhead = () => {
      const now = performance.now();
      if (isVideoPlaying) {
        const delta = (now - lastTime) / 1000;
        setVideoTime((prevTime) => {
          let nextTime = prevTime + delta;
          if (nextTime >= 12.0) {
            return 0.0; // Loop exactly after 12 seconds
          }
          return nextTime;
        });
      }
      lastTime = now;
      animationFrameId = requestAnimationFrame(updatePlayhead);
    };

    animationFrameId = requestAnimationFrame(updatePlayhead);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVideoPlaying]);

  // Animation state for the 17-second custom structural video under Firm Follows Function
  const [fffAnimTime, setFffAnimTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    
    const updateFffPlayhead = () => {
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      setFffAnimTime((prevTime) => {
        let nextTime = prevTime + delta;
        if (nextTime >= 17.0) {
          return 0.0; // Loop exactly after 17 seconds
        }
        return nextTime;
      });
      lastTime = now;
      animationFrameId = requestAnimationFrame(updateFffPlayhead);
    };

    animationFrameId = requestAnimationFrame(updateFffPlayhead);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Automatic transition for text Carousel on Left (6 seconds interval)
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(carouselTimer);
  }, []);

  // Standalone linkability and language sync routing for "Gründerstruktur Check" and Varda Legal Navigator
  useEffect(() => {
    const handleRouting = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (hash === "#navigator") {
        setCurrentView("navigator");
        setLang("DE");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#en/navigator" || hash === "#navigator/en" || hash === "#en-navigator") {
        setCurrentView("navigator");
        setLang("EN");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#founder-structure-check" || path.includes("/en")) {
        setLang("EN");
        setCurrentView("website");
        setTimeout(() => {
          const element = document.getElementById("founder-structure-check");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      } else if (hash === "#gruenderstruktur-check") {
        setLang("DE");
        setCurrentView("website");
        setTimeout(() => {
          const element = document.getElementById("gruenderstruktur-check");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      } else {
        const anchors = ["#home", "#wir", "#fokus", "#produkte", "#denkwerk", "#verguetung", "#letsgo"];
        if (anchors.includes(hash)) {
          setCurrentView("website");
          setTimeout(() => {
            const element = document.getElementById(hash.slice(1));
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 150);
        }
      }
    };

    // Run on initial mount
    handleRouting();

    // Listen to hash/history changes for shared links or navigation
    window.addEventListener("hashchange", handleRouting);
    return () => window.removeEventListener("hashchange", handleRouting);
  }, []);

  // Enforce correct HTML browser title & Meta / Open Graph / Canonical & JSON-LD schema injection dynamically for GEO/AEO optimization
  useEffect(() => {
    // 1. Determine active page content parameters
    const origin = typeof window !== "undefined" ? window.location.origin : "https://www.vardalegal.com";
    const canonicalUrl = typeof window !== "undefined"
      ? ("https://www.vardalegal.com" + window.location.pathname + (window.location.hash ? window.location.hash : ""))
      : "https://www.vardalegal.com";

    let pageTitle = "Varda Legal | Rechtsberatung für klare Entscheidungen";
    let pageDescription = "Varda Legal ist eine Kanzlei für unternehmerische Entscheidungen. Wir beraten zu Corporate, Commercial, M&A und Tech — und übersetzen rechtliche Komplexität in klare Handlungsempfehlungen.";
    let pageImage = `${origin}${execFigmaImage}`;
    let pageType = "website";

    if (currentView === "navigator") {
      pageTitle = lang === "DE" ? "Varda Legal Navigator | Executive Checks" : "Varda Legal Navigator | Executive Checks";
      pageDescription = lang === "DE"
        ? "Unser interaktives Kanzlei-Prüfungs-Toolkit bietet unmittelbare Orientierung für Corporate- und Handelsrecht. Executive Checks für Gesellschaftsstrukturen und Commercial-Risk-Faktoren."
        : "Our interactive legal assessment toolkit brings immediate governance precision to your browser. Checks for share structures, corporate compliance and commercial contracts.";
      pageImage = `${origin}${execFigmaImage}`;
    } else if (selectedArticle) {
      pageTitle = `${selectedArticle.title} | Varda Legal`;
      pageDescription = selectedArticle.abstract || selectedArticle.excerpt || pageDescription;
      pageType = "article";
    }

    // 2. Set title isomorphically
    document.title = pageTitle;

    // 3. Dynamic Canonical Link injection
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 4. Set Standard and Open Graph meta-tags
    const updateMetaTag = (attrName: "name" | "property", attrVal: string, contentVal: string) => {
      let tag = document.querySelector(`meta[${attrName}='${attrVal}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", contentVal);
    };

    updateMetaTag("name", "title", pageTitle);
    updateMetaTag("name", "description", pageDescription);
    updateMetaTag("property", "og:title", pageTitle);
    updateMetaTag("property", "og:description", pageDescription);
    updateMetaTag("property", "og:image", pageImage);
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "og:type", pageType);
    updateMetaTag("property", "og:site_name", "Varda Legal");
    updateMetaTag("property", "twitter:card", "summary_large_image");
    updateMetaTag("property", "twitter:title", pageTitle);
    updateMetaTag("property", "twitter:description", pageDescription);

    // 5. Build structured JSON-LD data
    const graph: any[] = [
      {
        "@type": "WebSite",
        "@id": "https://www.vardalegal.com/#website",
        "url": "https://www.vardalegal.com",
        "name": "Varda Legal",
        "alternateName": "Varda",
        "inLanguage": "de-DE"
      },
      {
        "@type": "LegalService",
        "@id": "https://www.vardalegal.com/#legalservice",
        "name": "Varda Legal",
        "url": "https://www.vardalegal.com",
        "description": "Varda Legal ist eine Kanzlei für unternehmerische Entscheidungen. Wir beraten zu Corporate, Commercial, M&A und Tech.",
        "areaServed": "DE",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "München",
          "addressCountry": "DE"
        },
        "founder": {
          "@type": "Person",
          "name": "Dr. Konstantin Filbinger"
        }
      }
    ];

    // If on Varda Navigator view, inject WebPage and Service JSON-LD schemas
    if (currentView === "navigator") {
      graph.push({
        "@type": "WebPage",
        "@id": "https://www.vardalegal.com/#navigator-page",
        "name": "Varda Legal Navigator",
        "description": "Interactive Executive Assessment tools for Corporate, Shareholders, Share structures and Commercial issues.",
        "url": "https://www.vardalegal.com/#navigator"
      });
      graph.push({
        "@type": "Service",
        "@id": "https://www.vardalegal.com/#navigator-service",
        "name": "Varda Legal Navigator",
        "serviceType": "Legal Checkup and Interactive Analysis",
        "provider": {
          "@id": "https://www.vardalegal.com/#legalservice"
        },
        "description": "Structured digital assessment tools providing decision support for founder agreements, corporate risk, and financial preparations."
      });
    }

    // If reading an article, inject BlogPosting and FAQPage if FAQ questions exist
    if (selectedArticle) {
      graph.push({
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#entry`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "headline": selectedArticle.title,
        "datePublished": selectedArticle.date,
        "description": selectedArticle.excerpt || selectedArticle.abstract,
        "author": {
          "@type": "Person",
          "name": "Dr. Konstantin Filbinger"
        },
        "publisher": {
          "@id": "https://www.vardalegal.com/#legalservice"
        }
      });

      if (selectedArticle.faq && selectedArticle.faq.length > 0) {
        graph.push({
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          "mainEntity": selectedArticle.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        });
      }
    }

    // Add blogs schema to keep reference of standard content
    graph.push({
      "@type": "Blog",
      "@id": "https://www.vardalegal.com/#blog",
      "name": "Denkwerk",
      "publisher": {
        "@id": "https://www.vardalegal.com/#legalservice"
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Die Series A-Runde in Deutschland: Anatomie des Term Sheets",
          "datePublished": "2026-05-14",
          "abstract": "Liquidationspräferenzen, Vesting-Klauseln und Anti-Dilution: Ein pragmatischer Navigator durch die wichtigsten Deal-Terms deutscher VCs im Jahr 2026."
        },
        {
          "@type": "BlogPosting",
          "headline": "VSOP vs. ESOP: Was bringt Schlüsselmitarbeiter wirklich zum Bleiben?",
          "datePublished": "2026-04-03",
          "abstract": "Virtuelle Mitarbeiterbeteiligungsprogramme (VSOP) sind der deutsche Standard. Doch wie gestaltet man sie steuerlich optimal und motivationsfördernd?"
        },
        {
          "@type": "BlogPosting",
          "headline": "Fintech & BaFin: Lizenzierungsgrenzen klug navigieren",
          "datePublished": "2026-03-12",
          "abstract": "Wann greift das KWG oder ZAG? Wie junge Fintech-Scaleups regulatorische Fallstricke umgehen und Partnerschaften rechtssicher strukturieren."
        }
      ]
    });

    const consolidatedSchema = {
      "@context": "https://schema.org",
      "@graph": graph
    };

    // Remove any previously injected script
    const existingScript = document.getElementById("ld-json-schema");
    if (existingScript) {
      existingScript.remove();
    }

    // Inject the final consolidated script
    const script = document.createElement("script");
    script.id = "ld-json-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(consolidatedSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("ld-json-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [lang, currentView, selectedArticle]);

  // Calculate simulated cap table percentages
  const postMoney = preMoney + newInvestment;
  const investorShare = (newInvestment / postMoney) * 100;
  const optionPoolShare = optionPool;
  const founderShare = 100 - investorShare - optionPoolShare;

  // Active section spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "wir", "fokus", "denkwerk", "verguetung", "letsgo"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const d = content[lang];

  // Helper mock calendar days (starts on Monday 25th May 2026 based on metadata)
  const mockDays = [
    { day: 25, label: "Mo", dateString: "25. Mai 2026", slots: ["09:00", "11:30", "14:00"] },
    { day: 26, label: "Di", dateString: "26. Mai 2026", slots: ["10:00", "13:30", "15:00", "16:30"] },
    { day: 27, label: "Mi", dateString: "27. Mai 2026", slots: ["09:30", "11:00", "15:30"] },
    { day: 28, label: "Do", dateString: "28. Mai 2026", slots: ["13:00", "14:30", "16:00"] },
    { day: 29, label: "Fr", dateString: "29. Mai 2026", slots: ["09:00", "10:30", "12:00"] },
  ];

  const toggleFeeAddon = (addonKey: string) => {
    if (selectedFeeAddons.includes(addonKey)) {
      setSelectedFeeAddons(selectedFeeAddons.filter(a => a !== addonKey));
    } else {
      setSelectedFeeAddons([...selectedFeeAddons, addonKey]);
    }
  };

  const getAddonPrice = (key: string) => {
    switch (key) {
      case "esop": return 1500;
      case "convertible": return 950;
      case "saas": return 1200;
      case "gdpr": return 850;
      default: return 0;
    }
  };

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.email) {
      const contactMethodLabel = 
        bookingForm.preferredContact === "call" ? (lang === "DE" ? "Rückruf" : "Phone Call") : 
        bookingForm.preferredContact === "videocall" ? (lang === "DE" ? "Videocall" : "Video Call") : 
        (lang === "DE" ? "E-Mail" : "Email");

      const subject = encodeURIComponent(
        lang === "DE" 
          ? `Mandatsanfrage: Varda Legal - ${bookingForm.name}` 
          : `Inquiry: Varda Legal - ${bookingForm.name}`
      );
      const emailBody = encodeURIComponent(
        lang === "DE"
          ? `Sehr geehrter Herr Dr. Filbinger,\n\nhier ist eine neue Beratungsanfrage:\n\n` +
            `• Name: ${bookingForm.name}\n` +
            `• E-Mail: ${bookingForm.email}\n` +
            `• Telefonnummer: ${bookingForm.phone || "Nicht angegeben"}\n` +
            `• Unternehmen: ${bookingForm.company || "Nicht angegeben"}\n` +
            `• Bevorzugter Kontaktweg: ${contactMethodLabel}\n` +
            `• Anliegen: ${bookingForm.challenge || "Nicht angegeben"}\n\n` +
            `Nachricht/Details:\n${bookingForm.message || "Keine zusätzlichen Details angegeben"}\n\n` +
            `Mit freundlichen Grüßen\n${bookingForm.name}`
          : `Dear Dr. Filbinger,\n\nHere is a new client inquiry:\n\n` +
            `• Name: ${bookingForm.name}\n` +
            `• Email: ${bookingForm.email}\n` +
            `• Phone Number: ${bookingForm.phone || "Not specified"}\n` +
            `• Company: ${bookingForm.company || "Not specified"}\n` +
            `• Preferred Connection: ${contactMethodLabel}\n` +
            `• Challenge: ${bookingForm.challenge || "Not specified"}\n\n` +
            `Details/Notes:\n${bookingForm.message || "No additional details provided"}\n\n` +
            `Best regards,\n${bookingForm.name}`
      );
      window.location.href = `mailto:${CONTACT_FORM_RECIPIENT}?subject=${subject}&body=${emailBody}&reply-to=${encodeURIComponent(bookingForm.email)}`;
      setBookingStep("success");
    }
  };

  const handleScheduleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (selectedDay && selectedTimeSlot) {
      const subject = encodeURIComponent(
        lang === "DE" 
          ? `Terminreservierung (Optional): Varda Legal - ${selectedMeetingType === "15min" ? "15 Min" : "45 Min"} für ${bookingForm.name}` 
          : `Time Slot Booking (Optional): Varda Legal - ${selectedMeetingType === "15min" ? "15 Min" : "45 Min"} for ${bookingForm.name}`
      );
      const emailBody = encodeURIComponent(
        lang === "DE"
          ? `Sehr geehrter Herr Dr. Filbinger,\n\nich möchte meinen Termin zusätzlich reservieren:\n\n` +
            `• Typ: ${selectedMeetingType === "15min" ? "15 Min. Fast Check" : "45 Min. Strategy Box"}\n` +
            `• Datum: 2026-05-${selectedDay} um ${selectedTimeSlot} Uhr (Europe/Berlin)\n` +
            `• Name: ${bookingForm.name}\n` +
            `• E-Mail: ${bookingForm.email}\n\n` +
            `Bitte bestätigen Sie diesen Termin.`
          : `Dear Dr. Filbinger,\n\nI would like to additionally reserve my selected time slot:\n\n` +
            `• Type: ${selectedMeetingType === "15min" ? "15-Min Fast Check" : "45-Min Strategy Box"}\n` +
            `• Date: 2026-05-${selectedDay} at ${selectedTimeSlot} (Europe/Berlin)\n` +
            `• Name: ${bookingForm.name}\n` +
            `• Email: ${bookingForm.email}\n\n` +
            `Please confirm this appointment.`
      );
      window.location.href = `mailto:${CONTACT_FORM_RECIPIENT}?subject=${subject}&body=${emailBody}&reply-to=${encodeURIComponent(bookingForm.email)}`;
      setOptionalScheduled(true);
    }
  };

  // Luxury Wendelstein Editorial slide definitions (Language aware)
  const heroSlides = [
    {
      index: "01",
      tag: lang === "DE" ? "EXECUTION EXCELLENCE" : "EXECUTION EXCELLENCE",
      headline: lang === "DE" 
        ? "Ausgezeichnete Beratung, Mut zu klaren Aussagen. Persönlich. Präzise. Pragmatisch." 
        : "Excellent advice, courage to speak clearly. Personal. Precise. Pragmatic.",
      paragraph: lang === "DE" 
        ? "Mut zu Klarheit. Short and simple statt long and complicated. Risikobewertung und konkrete Handlungsempfehlung statt langen Texten ohne Aussage."
        : "Courage to be clear. Short and simple instead of long and complicated. Risk assessment and concrete recommended action instead of long texts with no substance."
    },
    {
      index: "02",
      tag: lang === "DE" ? "UNTERNEHMERISCHES VERSTÄNDNIS" : "ENTREPRENEURIAL INSIGHT",
      headline: lang === "DE" 
        ? "Leidenschaft und radikale Entschlossenheit. Für unsere Mandanten." 
        : "Passion and radical determination. For our clients.",
      paragraph: lang === "DE" 
        ? "Wachstum braucht sichere Leitplanken statt starrer juristischer Hindernisse. Wir analysieren rechtliche Risiken im echten ökonomischen Kontext und liefern einen gangbaren Weg zu Ihrem Ziel."
        : "Scaling mandates durable protections, not bureaucratic speedbumps. We evaluate legal risks relative to micro-economic opportunities and deliver an executable path directly to your next milestone."
    },
    {
      index: "03",
      tag: lang === "DE" ? "FORM FOLLOWS FUNCTION" : "FORM FOLLOWS FUNCTION",
      headline: lang === "DE" 
        ? "Vollständig integrierte Beratung. Ihre agile Rechtsabteilung." 
        : "Radically streamlined delivery. Your outsourced general counsel.",
      paragraph: lang === "DE" 
        ? "Wir arbeiten digital auf Ihren Kanälen, passen uns Ihren Entwicklungs-Zyklen nahtlos an und bieten transparente Flat-Pauschalen ohne versteckte Honorarfallen."
        : "We operate digitally within your own communication toolchains, seamlessly integrated into funding rounds, with clear upfront modules."
    }
  ];

  // Over-the-shoulder watchmaking simulation coordinates
  // Phase 1 (0.0s to 5.5s): Hand sets the chunkier bronze gear
  // Phase 2 (5.5s to 11.0s): Hand sets the tiny silver gear with tweezers
  // Phase 3 (11.0s to 12.0s): System spins harmoniously together

  // Chunky gear: target place is (330, 315), starting at hover (190, 150)
  let chunkyX = 190;
  let chunkyY = 150;
  let chunkyOpacity = 0.2;
  let handChunkyX = 120;
  let handChunkyY = 100;
  let chunkyScale = 0.85;

  if (videoTime < 5.0) {
    const t = videoTime / 5.0; // normalized 0 to 1
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    chunkyX = 190 + (330 - 190) * ease;
    chunkyY = 150 + (315 - 150) * ease;
    chunkyOpacity = 1.0;
    chunkyScale = 0.85 + (0.15 * ease); // scales up as it goes into focal range
    handChunkyX = chunkyX - 45;
    handChunkyY = chunkyY - 55;
  } else {
    chunkyX = 330;
    chunkyY = 315;
    chunkyOpacity = 1.0;
    chunkyScale = 1.0;
    // hand withdraws gracefully
    const t2 = Math.min(1.0, (videoTime - 5.0) / 1.5);
    const ease2 = t2 * t2;
    handChunkyX = (330 - 45) - (200 * ease2);
    handChunkyY = (315 - 55) - (180 * ease2);
  }

  // Tiny gear: target place is (387, 345), starting at hover (440, 210)
  let tinyX = 440;
  let tinyY = 210;
  let tinyOpacity = 0.0;
  let tweezersX = 500;
  let tweezersY = 120;
  let tweezersRot = -20;

  if (videoTime >= 5.5 && videoTime < 10.5) {
    const t = (videoTime - 5.5) / 5.0; // normalized 0 to 1
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    tinyX = 440 + (387 - 440) * ease;
    tinyY = 210 + (345 - 210) * ease;
    tinyOpacity = 1.0;
    tweezersX = tinyX;
    tweezersY = tinyY;
    tweezersRot = -20 + (10 * ease); // straightens slightly as it aims
  } else if (videoTime >= 10.5) {
    tinyX = 387;
    tinyY = 345;
    tinyOpacity = 1.0;
    // tweezers withdraw gracefully
    const t2 = Math.min(1.0, (videoTime - 10.5) / 1.5);
    const ease2 = t2 * t2;
    tweezersX = 387 + (220 * ease2);
    tweezersY = 345 - (200 * ease2);
    tweezersRot = -10 + (15 * ease2);
  }

  // Speed and Rotation angles of all gears in the clockwork engine
  let bigGearRotation = 0;
  let chunkyGearRotation = 0;
  let tinyGearRotation = 0;
  let secondaryGear1Rotation = 0;
  let secondaryGear2Rotation = 0;

  if (videoTime >= 11.0) {
    const rotTime = videoTime - 11.0;
    bigGearRotation = rotTime * 360; // spins
    chunkyGearRotation = -rotTime * 480; // interlocks and spins fast opposite direction
    tinyGearRotation = rotTime * 960; // interlocks and spins super fast
    secondaryGear1Rotation = rotTime * 720;
    secondaryGear2Rotation = -rotTime * 640;
  }

  return (
    <div className="relative min-h-screen bg-paper-light text-charcoal selection:bg-brand-red selection:text-white">
      {/* Structural Varda Grid Lines - Background overlay (Subtle margins/columns mimic) */}
      <div className="pointer-events-none fixed inset-y-0 left-1/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />
      <div className="pointer-events-none fixed inset-y-0 left-2/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />
      <div className="pointer-events-none fixed inset-y-0 left-3/4 z-0 w-[1px] bg-charcoal/5 hidden md:block" />

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 w-full border-b border-charcoal/10 bg-paper-light/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
          {/* Logo Stacked in Premium Sans-Serif */}
          <a 
            href="#home" 
            onClick={() => {
              setCurrentView("website");
              window.location.hash = "#home";
            }}
            className="flex flex-col select-none leading-none group shrink-0"
          >
            <span className="font-display text-lg font-bold tracking-[0.22em] text-charcoal leading-none">VARDA</span>
            <span className="font-sans text-[10px] font-semibold tracking-[0.42em] text-charcoal/70 leading-none mt-1">LEGAL</span>
          </a>

          {/* Desktop Visible Editorial Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono text-xs uppercase tracking-widest text-charcoal/80">
            <a 
              href="#fokus" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              {d.nav.fokus}
            </a>
            <a 
              href="#produkte" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              {d.nav.produkte}
            </a>
            <a 
              href="#denkwerk" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              {d.nav.denkwerk}
            </a>
            <a 
              href="#wir" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              {d.nav.wir}
            </a>
            <a 
              href="#letsgo" 
              onClick={() => setCurrentView("website")}
              className="hover:text-[#C0823E] transition-colors py-1 font-semibold"
            >
              {d.nav.letsgo}
            </a>
          </nav>

          {/* Top Right Controls (Language Switch, Primary CTA, Circular Menu Button) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Switch */}
            <div className="flex items-center border border-charcoal/15 px-2.5 py-1 font-mono text-[10px] tracking-wider bg-white/60 shadow-2xs">
              <button
                id="lang-de-btn"
                onClick={() => setLang("DE")}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  lang === "DE" ? "bg-charcoal text-paper-light font-bold" : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                DE
              </button>
              <span className="text-charcoal/25 px-1 select-none">|</span>
              <button
                id="lang-en-btn"
                onClick={() => setLang("EN")}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  lang === "EN" ? "bg-charcoal text-paper-light font-bold" : "text-charcoal/60 hover:text-charcoal"
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary CTA Button */}
            <a
              href="#letsgo"
              onClick={() => setCurrentView("website")}
              className="bg-charcoal text-white hover:bg-[#C0823E] text-[11px] font-mono uppercase tracking-wider px-3.5 py-2 sm:px-4 sm:py-2.5 transition-colors duration-300 font-bold shrink-0 inline-flex items-center"
            >
              {d.nav.cta}
            </a>

            {/* Circular Editorial Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-charcoal/25 hover:border-charcoal flex flex-col items-center justify-center gap-1 hover:bg-charcoal hover:text-white transition-all duration-300 focus:outline-none shrink-0 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="h-[1.5px] w-4 bg-current block" />
              <span className="h-[1.5px] w-4 bg-current block" />
            </button>
          </div>
        </div>
      </header>

      {/* LUXURIOUS SLIDE-DOWN DRAWER OVERLAY MENU (Inspired by premium European boutique law firms & blueprint aesthetics) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#FAF8F4] text-charcoal flex flex-col overflow-y-auto border-b border-charcoal/15"
          >
            {/* Elegant micro-grid & abstract strategic legal blueprint overlay in background + Fine Archival Paper Grain Filter */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.22] transition-opacity duration-1000 z-0">
              <svg width="100%" height="100%" className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="varda-paper-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0" />
                  </filter>
                  <pattern id="menu-grid-arch" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2C2C2C" strokeWidth="0.4" strokeOpacity="0.08" />
                  </pattern>
                </defs>
                {/* Apply Tactile Paper Grain Noise */}
                <rect width="100%" height="100%" filter="url(#varda-paper-grain)" />
                {/* Blueprint Elements styled in matching Ivory/Charcoal hue */}
                <rect width="100%" height="100%" fill="url(#menu-grid-arch)" />
                <circle cx="75%" cy="45%" r="280" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeDasharray="4 8" strokeOpacity="0.05" />
                <circle cx="75%" cy="45%" r="180" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.04" />
                <circle cx="75%" cy="45%" r="80" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeOpacity="0.07" />
                <path d="M 120 220 L 420 220 L 520 320 L 920 320" stroke="#2C2C2C" strokeWidth="0.75" fill="none" strokeDasharray="3 3" strokeOpacity="0.05" />
                <path d="M 320 120 L 320 570" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.03" />
                <path d="M 520 270 L 520 720" stroke="#2C2C2C" strokeWidth="0.5" fill="none" strokeOpacity="0.03" />
                <text x="140" y="200" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">STRATEGIC CAPITAL STRUCTURE LAYER_A</text>
                <text x="540" y="300" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">CORPORATE ENTITY REORGANIZATION PROTOCOL : V.L_GEN_04</text>
                <text x="740" y="405" fill="#2C2C2C" fillOpacity="0.07" className="font-mono text-[9px] tracking-[0.2em]">MUC_HQ / 48.1351 N | 11.5820 E</text>
                <path d="M 30 30 L 60 30 M 30 30 L 30 60" stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeOpacity="0.1" />
                <path d="M 97% 30 L 94% 30 M 97% 30 L 97% 60" stroke="#2C2C2C" strokeWidth="1.5" fill="none" strokeOpacity="0.1" />
              </svg>
            </div>

            {/* Inner frame containing elegant alignments */}
            <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12 flex-1 flex flex-col justify-between relative z-10">
              
              {/* Header inside the dropdown */}
              <div className="flex justify-between items-center pb-8 border-b border-charcoal/10">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 font-display text-lg font-bold tracking-widest text-[#2C2C2C]">
                  <span>VARDA</span>
                  <span className="text-brand-red font-sans text-xl font-black">•</span>
                  <span className="font-serif italic font-normal tracking-normal text-base text-charcoal/85">Legal</span>
                </a>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="group inline-flex items-center space-x-3 text-charcoal/60 hover:text-[#C0823E] font-mono text-xs uppercase tracking-widest cursor-pointer transition-all duration-300"
                >
                  <span className="font-mono font-medium">{lang === "DE" ? "SCHLIESSEN" : "CLOSE"}</span>
                  <div className="w-8 h-8 rounded-full border border-charcoal/15 flex items-center justify-center bg-transparent group-hover:border-[#C0823E] transition-all duration-300">
                    <X className="h-3.5 w-3.5 text-charcoal/70 group-hover:text-[#C0823E] transition-colors duration-300" />
                  </div>
                </button>
              </div>

              {/* Menu content - Architectural layout splits (Left Column Directory Index | Right Column Core Strategic Navigation) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-12 md:py-16 flex-1 items-center">
                
                {/* Left Column: Premium Bureau Directory Archive Index */}
                <div className="lg:col-span-4 lg:border-r border-charcoal/10 lg:pr-12 flex flex-col justify-between h-auto lg:h-[480px]">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="font-mono text-[9px] tracking-widest text-[#C0823E] uppercase">[ INTEGRATED COUNSEL ]</div>
                      <h4 className="font-serif text-2xl font-light text-charcoal tracking-tight leading-snug">
                        {lang === "DE" ? "Präzision & Diskrete Kompetenz." : "Precision & Pure Discretion."}
                      </h4>
                    </div>
                    <p className="text-charcoal/70 font-sans text-xs md:text-sm leading-relaxed max-w-sm">
                      {lang === "DE" 
                        ? "Varda Legal steht für die Synthese von intellektuellem Anspruch, unternehmerischem Pragmatismus und zeitloser Unabhängigkeit."
                        : "Varda Legal stands for the ultimate synthesis of intellectual rigour, entrepreneurial pragmatism, and timeless independence."}
                    </p>
                  </div>

                  <div className="space-y-4 pt-8 border-t border-charcoal/10 font-mono text-[9px] text-charcoal/50 uppercase tracking-widest mt-8 lg:mt-0">
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ GRÜNDER / PARTNER ]</span>
                      <span className="text-charcoal/85 text-right font-medium">Dr. Konstantin Filbinger</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ HAUPTSITZ / HQ ]</span>
                      <span className="text-charcoal/85 text-right font-medium">München • Germany</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-charcoal/40">[ SPEZIALISIERUNG ]</span>
                      <span className="text-charcoal/85 text-right font-medium">{lang === "DE" ? "Transaktionen • Strategische Verträge • Governance" : "Transactions • Strategic Contracts • Governance"}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#C0823E]/70">[ BERATUNGSSTIL ]</span>
                      <span className="text-charcoal/85 text-right font-medium">{lang === "DE" ? "Entscheidungsorientiert • Radikal Funktional" : "Decision-led • Radically Functional"}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Architectural, calm and understated navigation anchors */}
                <div className="lg:col-span-8 flex flex-col justify-center w-full">
                  <div className="space-y-3 md:space-y-4 w-full">
                    {[
                      { 
                        label: lang === "DE" ? "Expertise" : "Expertise", 
                        target: "#fokus", 
                        subtitle: lang === "DE" ? "01 / Kernbereiche" : "01 / Core Practice Areas",
                        sec: "01",
                        desc: lang === "DE" ? "Spezialisierte Beratungsschwerpunkte" : "Specialized strategic practice fields"
                      },
                      { 
                        label: lang === "DE" ? "Leistungen" : "Work Products", 
                        target: "#produkte", 
                        subtitle: lang === "DE" ? "02 / Strukturierte Lösungen" : "02 / Structured Solutions",
                        sec: "02",
                        desc: lang === "DE" ? "Reale Work Products & Entscheidungssysteme" : "Real legal work products & decision systems"
                      },
                      { 
                        label: lang === "DE" ? "Einblicke" : "Insights", 
                        target: "#denkwerk", 
                        subtitle: lang === "DE" ? "03 / Schriften & Leitfäden" : "03 / Publications & Briefings",
                        sec: "03",
                        desc: lang === "DE" ? "Schriftenreihe & Praxiseinblicke" : "Intellectual publications & briefings"
                      },
                      { 
                        label: lang === "DE" ? "Über Varda" : "About Varda", 
                        target: "#wir", 
                        subtitle: lang === "DE" ? "04 / Profil & Haltung" : "04 / Profile & Principles",
                        sec: "04",
                        desc: lang === "DE" ? "Selbstverständnis & Profil des Gründers" : "Executive summary & founder portrait"
                      },
                      { 
                        label: "Varda Navigator", 
                        target: lang === "DE" ? "#navigator" : "#en/navigator", 
                        subtitle: lang === "DE" ? "05 / Interactive Suite" : "05 / Interactive Suite",
                        sec: "05",
                        desc: lang === "DE" ? "Executive Checks für Corporate- & Handelsrecht" : "Executive Checks for corporate & commercial issues"
                      },
                      { 
                        label: lang === "DE" ? "Vergütung" : "Fees", 
                        target: "#verguetung", 
                        subtitle: lang === "DE" ? "06 / Vergütungsmodelle" : "06 / Fee Structures",
                        sec: "06",
                        desc: lang === "DE" ? "Strikte Preistransparenz & Flatrates" : "Predictable transaction fee modules"
                      },
                      { 
                        label: lang === "DE" ? "Kontakt" : "Contact", 
                        target: "#letsgo", 
                        subtitle: lang === "DE" ? "07 / Erstgespräch" : "07 / Consultation",
                        sec: "07",
                        desc: lang === "DE" ? "Direkter digitaler Beratungstermin" : "Immediate secure booking scheduler"
                      }
                    ].map((menuItem, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ x: 6 }}
                        className="border-b border-charcoal/10 pb-2.5 group transition-all duration-300"
                      >
                        <a
                          href={menuItem.target}
                          onClick={() => {
                            setIsMenuOpen(false);
                            if (menuItem.target.includes("navigator")) {
                              setCurrentView("navigator");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            } else {
                              setCurrentView("website");
                            }
                          }}
                          className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1"
                        >
                          <div className="flex items-center space-x-3.5">
                            <span className="font-mono text-[10px] text-charcoal/40 tracking-wider select-none font-medium">
                              {menuItem.sec}
                            </span>
                            <span className="font-sans text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-charcoal/90 group-hover:text-[#C0823E] transition-colors duration-200">
                              {menuItem.label}
                            </span>
                          </div>
                          <div className="flex flex-col items-start sm:items-end pt-0.5 sm:pt-0">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0823E] group-hover:text-charcoal font-bold transition-colors">
                              {menuItem.subtitle}
                            </span>
                            <span className="text-[10px] text-charcoal/50 font-sans mt-0.5 group-hover:text-charcoal/70 transition-colors hidden sm:block">
                              {menuItem.desc}
                            </span>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom footer index */}
              <div className="pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs font-mono text-charcoal/40 gap-4">
                <div className="tracking-wide">© 2026 DR. KONSTANTIN FILBINGER • VARDA LEGAL • MUNICH</div>
                <div className="flex space-x-6 text-[10px]">
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActiveLegalModal("impressum"); }} 
                    className="hover:text-charcoal transition-colors cursor-pointer uppercase bg-transparent border-none p-0 tracking-widest font-semibold"
                  >
                    IMPRESSUM
                  </button>
                  <span>•</span>
                  <button 
                    onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActiveLegalModal("datenschutz"); }} 
                    className="hover:text-charcoal transition-colors cursor-pointer uppercase bg-transparent border-none p-0 tracking-widest font-semibold"
                  >
                    DATENSCHUTZ
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        
        {currentView === "navigator" ? (
          <VardaNavigator 
            lang={lang} 
            onNavigateToConsult={(data) => {
              // Smooth scroll to the scheduler section #letsgo
              setCurrentView("website");
              const el = document.getElementById("letsgo");
              if (el) {
                setTimeout(() => {
                  el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }} 
            onGoBack={() => {
              setCurrentView("website");
              window.location.hash = "#home";
            }}
          />
        ) : (
          <>
            {/* SECTION 1: HOMEPAGE (HERO REFINEMENT) */}
            <section id="home" className="py-12 md:py-20 border-b border-charcoal/10 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Left Column: Category, Headline, Supporting Copy, Direct Work, CTAs, Trust Cue */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category Line */}
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#C0823E] uppercase font-bold">
                    <span className="w-1.5 h-1.5 bg-[#C0823E]" />
                    <span>{d.hero.badge}</span>
                  </div>

                  {/* Headline (H1 Anchor) */}
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-charcoal leading-[1.08] tracking-tight select-none">
                    {d.hero.title}
                  </h1>

                  {/* Supporting Copy */}
                  <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-[540px]">
                    {d.hero.subtitle}
                  </p>

                  {/* Direct-work Sentence */}
                  {d.hero.directSentence && (
                    <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-[540px] pt-1 border-t border-charcoal/10">
                      {d.hero.directSentence}
                    </p>
                  )}

                  {/* Action CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-3">
                    <a
                      href="#letsgo"
                      className="inline-flex items-center justify-center bg-charcoal text-white hover:bg-[#C0823E] text-xs font-mono uppercase tracking-widest px-7 py-4 transition-colors duration-300 font-bold shadow-2xs"
                    >
                      <span>{d.hero.cta}</span>
                    </a>
                    
                    <a
                      href="#beispiel-output"
                      className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.15em] font-bold text-charcoal hover:text-[#C0823E] border-b border-charcoal/40 hover:border-[#C0823E] pb-1 py-3 transition-colors"
                    >
                      <span>{d.hero.secCta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Discreet Trust Cue */}
                  {d.hero.trustCue && (
                    <div className="pt-2">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal/60 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C0823E]" />
                        <span>{d.hero.trustCue}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column: Konstantin Filbinger Portrait Card & Simplified Decision Graphic */}
                <div className="lg:col-span-5 space-y-8">
                  {/* Founder / Portrait Card */}
                  <div className="bg-[#FAF8F4] border border-charcoal/15 p-5 sm:p-6 flex flex-col justify-between group shadow-2xs">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-stone-100 border border-charcoal/15 overflow-hidden">
                      <img
                        src={konstineuImage}
                        alt="Dr. Konstantin Filbinger"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-4 space-y-1">
                      <div className="font-mono text-[9px] text-[#C0823E] uppercase tracking-widest font-bold">
                        {lang === "DE" ? "GRÜNDER · RECHTSANWALT" : "FOUNDER · LAWYER"}
                      </div>
                      <div className="font-serif text-lg font-medium tracking-wide text-charcoal">
                        {lang === "DE" ? "Dr. Konstantin Filbinger" : "Dr Konstantin Filbinger"}
                      </div>
                      <p className="font-sans text-xs text-charcoal/70 pt-0.5 leading-normal">
                        {lang === "DE"
                          ? "Direkte Beratung, wirtschaftliches Urteilsvermögen und persönliche Verantwortung."
                          : "Direct advice, commercial judgment and personal responsibility."}
                      </p>
                    </div>
                  </div>

                  {/* Simplified Decision Architecture Graphic */}
                  <div className="w-full">
                    <DecisionArchitectureBlueprint lang={lang} />
                  </div>
                </div>

              </div>
            </section>

        {/* SECTION 2: WHEN VARDA IS USEFUL (WANN VARDA BESONDERS HILFT) */}
        <section id="situations" className="py-20 md:py-28 border-b border-charcoal/10">
          <div className="space-y-4 mb-16 max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold">
              01 / {lang === "DE" ? "WANN VARDA BESONDERS HILFT" : "WHEN VARDA IS USEFUL"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE" 
                ? "Wenn die Rechtsfrage nur ein Teil der Entscheidung ist." 
                : "When the legal question is only part of the decision."}
            </h2>
            <p className="font-sans text-charcoal/80 text-base sm:text-lg max-w-3xl leading-relaxed pt-2">
              {lang === "DE" 
                ? "Varda ist besonders dann hilfreich, wenn sich ein Vertrag, eine Gesellschaftsstruktur oder eine Transaktion nicht isoliert rechtlich bewerten lässt. In diesen Situationen müssen Rechtslage, wirtschaftliches Ziel, operative Realität und realistische Handlungsoptionen gemeinsam betrachtet werden."
                : "Varda is most useful when a contract, corporate structure or transaction cannot be assessed in isolation. These are typical situations in which the legal position must be considered together with the commercial objective, operational reality and available options."}
            </p>
          </div>

          {/* 6 Scenario Modules Grid: 2 columns x 3 rows */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                label: lang === "DE" ? "01 · WIRTSCHAFTSVERTRAG" : "01 · COMMERCIAL CONTRACT",
                title: lang === "DE" 
                  ? "Ein wichtiger Kunde hat einen schwierigen Vertrag geschickt." 
                  : "A major customer has sent a difficult agreement.",
                situation: lang === "DE" 
                  ? "Die wirtschaftliche Chance ist relevant. Gleichzeitig werfen Haftung, geistiges Eigentum, Abnahme oder Kündigungsrechte echte Fragen auf."
                  : "The commercial opportunity matters, but liability, intellectual property, acceptance procedures or termination rights create genuine concerns.",
                contribution: lang === "DE" 
                  ? "Varda identifiziert die wirtschaftlich relevanten Regelungen, entwickelt eine klare Verhandlungsposition und empfiehlt, welche Risiken geändert, akzeptiert oder operativ gesteuert werden sollten."
                  : "Varda identifies the provisions that matter commercially, develops a clear negotiation position and recommends which risks should be changed, accepted or managed operationally."
              },
              {
                num: "02",
                label: lang === "DE" ? "02 · GRÜNDER & GOVERNANCE" : "02 · FOUNDERS & GOVERNANCE",
                title: lang === "DE" 
                  ? "Mehrere Gründer brauchen eine Struktur, die auch in drei Jahren noch funktioniert." 
                  : "Several founders need a structure that will still work in three years.",
                situation: lang === "DE" 
                  ? "Beteiligungen, Rollen, Vesting, Entscheidungsrechte und Exit-Szenarien müssen zusammenpassen – vor dem ersten Konflikt oder der ersten Finanzierungsrunde."
                  : "Shares, roles, vesting, decision rights and exit scenarios must fit together before the first disagreement or financing round.",
                contribution: lang === "DE" 
                  ? "Varda übersetzt das wirtschaftliche Verständnis der Gründer in eine stimmige gesellschaftsrechtliche und vertragliche Struktur."
                  : "Varda translates the founders’ commercial understanding into a coherent corporate and contractual structure."
              },
              {
                num: "03",
                label: lang === "DE" ? "03 · TRANSAKTION" : "03 · TRANSACTION",
                title: lang === "DE" 
                  ? "Eine Finanzierung, ein Unternehmenskauf oder ein Verkauf steht bevor." 
                  : "An investment, acquisition or sale is approaching.",
                situation: lang === "DE" 
                  ? "Das Unternehmen muss transaktionsfähig werden. Wesentliche Risiken müssen verstanden und die Struktur auf das angestrebte Ergebnis ausgerichtet werden."
                  : "The company must become transaction-ready, key risks must be understood and the structure must support the intended outcome.",
                contribution: lang === "DE" 
                  ? "Varda bereitet den Prozess mit dem Management vor, löst strukturelle Fragen frühzeitig und richtet die Verhandlung auf die Punkte aus, die den Erfolg der Transaktion tatsächlich beeinflussen."
                  : "Varda helps management prepare the process, resolve structural issues early and focus negotiations on the points that actually affect the transaction."
              },
              {
                num: "04",
                label: lang === "DE" ? "04 · RISIKOENTSCHEIDUNG" : "04 · RISK DECISION",
                title: lang === "DE" 
                  ? "Der rechtlich sicherste Weg würde die wirtschaftliche Chance gefährden." 
                  : "The legally safest answer would undermine the commercial opportunity.",
                situation: lang === "DE" 
                  ? "Entscheidend ist nicht nur, ob ein Risiko besteht. Entscheidend ist, ob es bepreist, versichert, begrenzt, operativ gesteuert oder bewusst akzeptiert werden kann."
                  : "The issue is not whether a risk exists. The issue is whether it can be priced, insured, limited, controlled or consciously accepted.",
                contribution: lang === "DE" 
                  ? "Varda ordnet das rechtliche Risiko wirtschaftlich ein und entwickelt eine umsetzbare Empfehlung, statt automatisch die defensivste Position einzunehmen."
                  : "Varda places the legal exposure in its commercial context and develops a workable recommendation rather than defaulting to the most defensive position."
              },
              {
                num: "05",
                label: lang === "DE" ? "05 · TECHNOLOGIE & DATEN" : "05 · TECHNOLOGY & DATA",
                title: lang === "DE" 
                  ? "Ein neues digitales Geschäftsmodell wirft rechtliche Fragen auf." 
                  : "A new digital business model raises legal uncertainty.",
                situation: lang === "DE" 
                  ? "Produktgestaltung, Datennutzung, geistiges Eigentum, Verantwortlichkeiten und Regulierung müssen das Geschäftsmodell unterstützen, statt getrennt davon entwickelt zu werden."
                  : "Product design, data use, intellectual property, customer responsibilities and regulation must support the commercial model rather than evolve separately from it.",
                contribution: lang === "DE" 
                  ? "Varda übersetzt das Geschäftsmodell in klare rechtliche Beziehungen, Verantwortlichkeiten und Umsetzungsprioritäten."
                  : "Varda helps translate the business model into clear legal relationships, responsibilities and implementation priorities."
              },
              {
                num: "06",
                label: lang === "DE" ? "06 · GESELLSCHAFTSRECHTLICHE VERÄNDERUNG" : "06 · CORPORATE CHANGE",
                title: lang === "DE" 
                  ? "Die bestehende Struktur passt nicht mehr zum Unternehmen." 
                  : "The existing structure no longer fits the business.",
                situation: lang === "DE" 
                  ? "Wachstum, neue Gesellschafter, zusätzliche Geschäftsbereiche oder internationale Expansion können unklare Verantwortlichkeiten und ineffiziente Strukturen sichtbar machen."
                  : "Growth, new shareholders, additional business lines or international expansion may expose unclear responsibilities and inefficient legal structures.",
                contribution: lang === "DE" 
                  ? "Varda zeigt auf, was geändert werden sollte, vergleicht realistische Optionen und entwickelt einen praktikablen Weg von der bestehenden zur gewünschten Struktur."
                  : "Varda identifies what must change, compares realistic options and develops a practical path from the current structure to the intended one."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="border border-charcoal/15 bg-[#FAF8F4] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-charcoal/30 shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="font-mono text-[10px] text-[#C0823E] font-bold uppercase tracking-widest border-b border-charcoal/10 pb-3">
                    {item.label}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug">
                    {item.title}
                  </h3>
                  <div className="space-y-4 pt-1 font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40 font-bold block">
                        {lang === "DE" ? "Situation" : "Situation"}
                      </span>
                      <p className="text-charcoal/85">
                        {item.situation}
                      </p>
                    </div>
                    <div className="space-y-1 pt-3 border-t border-charcoal/10">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#C0823E] font-bold block">
                        {lang === "DE" ? "Vardas Beitrag" : "What Varda adds"}
                      </span>
                      <p className="text-charcoal font-medium">
                        {item.contribution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Statement & Section CTA */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-charcoal/10 flex flex-col items-start space-y-6 max-w-4xl">
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-charcoal leading-snug tracking-tight">
              {lang === "DE"
                ? "Varda schafft den größten Mehrwert nicht dort, wo das Recht eine offensichtliche Antwort liefert, sondern dort, wo die Antwort für das Unternehmen funktionieren muss."
                : "Varda is not most valuable when the law provides an obvious answer. It is most valuable when the answer must work for the business."}
            </blockquote>

            <div className="pt-2">
              <a 
                href="#fokus"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-charcoal hover:text-[#C0823E] border-b border-charcoal/40 hover:border-[#C0823E] pb-1 transition-colors"
              >
                <span>{lang === "DE" ? "Vardas Beratungsbereiche ansehen" : "See Varda’s areas of expertise"}</span>
                <span className="font-sans font-normal">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: EXECUTIVE CLARITY (BEISPIEL-ARBEITSERGEBNIS) */}
        <section id="beispiel-output" className="py-20 md:py-28 border-b border-charcoal/10 bg-[#FAF8F4]/50">
          <div className="space-y-4 mb-16 max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold">
              02 / EXECUTIVE CLARITY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE"
                ? "So macht Varda aus rechtlicher Komplexität eine klare Handlungsempfehlung."
                : "See how Varda turns legal complexity into a clear recommendation."}
            </h2>
            <div className="space-y-3 font-sans text-charcoal/80 text-base sm:text-lg max-w-3xl leading-relaxed pt-2">
              <p>
                {lang === "DE"
                  ? "Unternehmen scheitern selten daran, dass das Recht keine Antwort gibt. Schwieriger ist die Entscheidung zwischen mehreren rechtlich möglichen Wegen mit sehr unterschiedlichen wirtschaftlichen Folgen."
                  : "Clients rarely struggle because the law is unavailable. They struggle because several legally possible options lead to very different commercial outcomes."}
              </p>
              <p className="font-medium text-charcoal">
                {lang === "DE"
                  ? "Executive Clarity verdichtet Rechtslage, wirtschaftliche Auswirkungen und realistische Handlungsoptionen zu einer klaren Empfehlung für das Management."
                  : "Executive Clarity distils the legal position, commercial implications and practical options into one recommendation that management can act upon."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left/Main Visual (60-70% width: col-span-8) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Restrained Annotations Bar */}
              <div className="hidden sm:grid grid-cols-5 gap-2 font-mono text-[9px] uppercase tracking-wider text-charcoal/60 border-b border-charcoal/10 pb-3">
                <div className="flex items-center gap-1">
                  <span className="text-[#C0823E]">↓</span>
                  <span>{lang === "DE" ? "Business-Frage" : "Business question"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#C0823E]">↓</span>
                  <span>{lang === "DE" ? "Wirtschaftl. Kontext" : "Commercial context"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#C0823E]">↓</span>
                  <span>{lang === "DE" ? "Rechtl. Bewertung" : "Legal assessment"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#C0823E]">↓</span>
                  <span>{lang === "DE" ? "Empfehlung" : "Recommendation"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#C0823E]">↓</span>
                  <span>{lang === "DE" ? "Nächster Schritt" : "Next step"}</span>
                </div>
              </div>

              {/* Board-Ready Document Preview Container */}
              <div 
                className="select-none group/mockup relative border border-charcoal/20 bg-white p-3 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              >
                {/* Header Banner on Document */}
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-2.5 mb-3 font-mono text-[9px] uppercase tracking-widest text-charcoal/50">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1B2A4A]" />
                    <span className="font-bold text-[#1B2A4A]">VARDA LEGAL · EXECUTIVE CLARITY</span>
                  </div>
                  <span>{lang === "DE" ? "BOARD BRIEFING (MUSTER)" : "BOARD BRIEFING (SAMPLE)"}</span>
                </div>

                <div className="relative aspect-[1600/2280] w-full overflow-hidden bg-[#FAF8F4] border border-charcoal/10">
                  <img 
                    src={execFigmaImage}
                    alt={lang === "DE" 
                      ? "Zweiseitiges fiktives Executive-Clarity-Beispiel mit strukturierter rechtlicher Analyse und Empfehlung zur Gestaltung einer deutschen GmbH und einer Gesellschaftervereinbarung."
                      : "Two-page fictional Executive Clarity example showing Varda’s structured legal analysis and recommendation for a German GmbH and shareholders’ agreement."}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain block transition-transform duration-500 group-hover/mockup:scale-[1.01]"
                  />
                  
                  {/* Zoom overlay badge */}
                  <div className="absolute bottom-4 right-4 bg-charcoal/90 hover:bg-charcoal text-white font-mono text-[10px] uppercase tracking-wider py-2 px-3 flex items-center gap-1.5 shadow transition-all">
                    <Plus className="h-3 w-3" />
                    <span>{lang === "DE" ? "Beispiel vergrößern" : "Enlarge example"}</span>
                  </div>
                </div>

                {/* Example Scenario Flow Illustration */}
                <div className="mt-4 pt-3 border-t border-charcoal/10 bg-[#FAF8F4] p-3 text-xs font-mono text-charcoal/75 space-y-2">
                  <div className="text-[10px] font-bold text-[#C0823E] uppercase tracking-wider">
                    {lang === "DE" ? "Szenario-Beispiel: Software-Einkaufsvertrag mit unbeschränkter Haftung & IP-Klauseln" : "Illustrative Scenario: Software procurement agreement with unlimited liability & IP transfer"}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-charcoal/70">
                    <span className="bg-white px-2 py-0.5 border border-charcoal/10 font-semibold">{lang === "DE" ? "Relevanz" : "Importance"}</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-0.5 border border-charcoal/10 font-semibold">{lang === "DE" ? "Durchsetzbarkeit" : "Enforceability"}</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-0.5 border border-charcoal/10 font-semibold">{lang === "DE" ? "Verhandlungshebel" : "Negotiation leverage"}</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-0.5 border border-charcoal/10 font-semibold">{lang === "DE" ? "Lösungsoptionen" : "Alternative options"}</span>
                    <span>→</span>
                    <span className="bg-brand-red/10 text-brand-red px-2 py-0.5 border border-brand-red/20 font-bold">{lang === "DE" ? "Empfehlung" : "Recommendation"}</span>
                    <span>→</span>
                    <span className="bg-white px-2 py-0.5 border border-charcoal/10 font-semibold">{lang === "DE" ? "Umsetzung" : "Implementation"}</span>
                  </div>
                </div>
              </div>

              {/* Microcopy beneath preview */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-charcoal/60 gap-2">
                <p>
                  {lang === "DE"
                    ? "Jedes Executive-Clarity-Dokument wird individuell auf die jeweilige unternehmerische Entscheidung zugeschnitten."
                    : "Every Executive Clarity document is tailored to the specific commercial decision."}
                </p>
                <p className="italic text-[10px] text-charcoal/40 flex-shrink-0">
                  {lang === "DE" ? "Beispiel zur Veranschaulichung." : "Example for illustration purposes."}
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => setIsImageModalOpen(true)}
                  className="px-6 py-3 bg-brand-red text-white hover:bg-[#72201d] text-xs font-mono uppercase tracking-wider font-semibold transition-all text-center cursor-pointer shadow-2xs"
                >
                  {lang === "DE" ? "Weiteres Beispiel ansehen" : "View another example"}
                </button>
                <a
                  href="#letsgo"
                  className="px-4 py-2 font-mono text-xs uppercase tracking-widest font-bold text-charcoal hover:text-[#C0823E] border-b border-charcoal/30 hover:border-[#C0823E] transition-colors"
                >
                  {lang === "DE" ? "Anliegen besprechen" : "Discuss your matter"}
                </a>
              </div>
            </div>

            {/* Right Column Explanation (max ~360px on desktop) */}
            <div className="lg:col-span-4 lg:max-w-[360px] bg-white border border-charcoal/15 p-6 sm:p-8 space-y-8 shadow-2xs">
              <div className="space-y-2 border-b border-charcoal/10 pb-6">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0823E] font-bold block">01 / {lang === "DE" ? "DIE FRAGE" : "THE QUESTION"}</span>
                <h3 className="font-serif text-lg font-semibold text-charcoal leading-snug">
                  {lang === "DE"
                    ? "Welche Entscheidung muss die Geschäftsführung tatsächlich treffen?"
                    : "What decision does management actually need to make?"}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed pt-1">
                  {lang === "DE"
                    ? "Identifikation der tatsächlichen unternehmerischen Wahl vor dem Verhandeln von Detailklauseln."
                    : "Identifying the core commercial choice before getting lost in complex contractual wording."}
                </p>
              </div>

              <div className="space-y-2 border-b border-charcoal/10 pb-6">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0823E] font-bold block">02 / {lang === "DE" ? "DIE BEWERTUNG" : "THE ASSESSMENT"}</span>
                <h3 className="font-serif text-lg font-semibold text-charcoal leading-snug">
                  {lang === "DE"
                    ? "Was ist rechtlich und wirtschaftlich wirklich relevant?"
                    : "What matters legally and commercially?"}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed pt-1">
                  {lang === "DE"
                    ? "Abwägen rechtlicher Haftungsrisiken gegen kommerzielle Erträge, Preismechanismen und operative Steuerung."
                    : "Weighing legal exposure against commercial value, pricing models, and operational risk controls."}
                </p>
              </div>

              <div className="space-y-2 border-b border-charcoal/10 pb-6">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0823E] font-bold block">03 / {lang === "DE" ? "DIE EMPFEHLUNG" : "THE RECOMMENDATION"}</span>
                <h3 className="font-serif text-lg font-semibold text-charcoal leading-snug">
                  {lang === "DE"
                    ? "Welche Option sollte realistisch gewählt werden – und warum?"
                    : "Which option should realistically be chosen—and why?"}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed pt-1">
                  {lang === "DE"
                    ? "Entwicklung eines klaren, umsetzbaren Weges statt defensiver Bedenkenträgerei oder vager Risikoaufzählungen."
                    : "Developing a clear, actionable path instead of defaulting to defensive legal hedging or vague risk lists."}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C0823E] font-bold block">04 / {lang === "DE" ? "DAS ERGEBNIS" : "THE OUTCOME"}</span>
                <h3 className="font-serif text-lg font-semibold text-charcoal leading-snug">
                  {lang === "DE"
                    ? "Ein entscheidungstragendes Dokument, das das Management direkt nutzen kann."
                    : "A decision-ready document that management can use immediately."}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed pt-1">
                  {lang === "DE"
                    ? "Ein prägnantes, strukturiertes Dokument, aufbereitet für Geschäftsführung, Beirat oder Investment Committee."
                    : "A concise, structured executive document formatted specifically for leadership, boards, or investment committees."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: "FOKUS" (AREAS OF EXPERTISE) */}
        <section id="fokus" className="py-16 md:py-24 border-b border-charcoal/10">
          <div className="space-y-4 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold">03 / {d.fokus.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.fokus.subtitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.fokus.items.map((item, i) => (
              <div 
                key={i} 
                className="group border border-charcoal/15 bg-white p-6 md:p-8 flex flex-col justify-between transition-all hover:border-brand-red hover:shadow-sm"
              >
                <div className="space-y-4">
                  {/* Giant Number Label */}
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-charcoal/20 group-hover:text-brand-red/35 transition-colors">
                      {item.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-charcoal/20 group-hover:bg-brand-red" />
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Sublist mapping with clean grids */}
                <div className="mt-6 pt-6 border-t border-charcoal/10">
                  <ul className="grid grid-cols-1 gap-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start text-xs font-mono text-charcoal/80 space-x-2">
                        <Check className="h-3 w-3 text-brand-red mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Varda Legal Simulation */}
          <div className="mt-16 border-t border-charcoal/10 pt-16 max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <span className="font-display text-xs font-bold tracking-[0.3em] text-[#1B2A4A] uppercase">VARDA LEGAL</span>
            </div>
            
            <div className="border border-charcoal/15 bg-white p-6 md:p-8 shadow-sm rounded-none">
              <div className="overflow-hidden relative bg-[#faf8f4] border border-charcoal/15 rounded-none">
                {/* 17-Second Custom Simulation Player Header */}
                <div className="absolute top-0 inset-x-0 p-3 flex justify-between items-center z-20 bg-[#faf8f4]/90 backdrop-blur-sm border-b border-charcoal/10 text-charcoal/70 font-mono text-[8px] uppercase tracking-widest select-none">
                  <div className="flex items-center space-x-1.5 flex-row">
                    <span className="w-1.5 h-1.5 bg-[#1B2A4A]" />
                    <span>VARDA LEGAL</span>
                  </div>
                  <div>SEC 0:{(Math.floor(fffAnimTime)).toString().padStart(2, "0")} / 0:17</div>
                </div>
 
                 {/* Main Render Area */}
                <div className="aspect-[4/3] w-full flex items-center justify-center relative bg-[#faf8f4]">
                  
                  {/* Subtle technical background grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,27,25,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,27,25,0.025)_1px,transparent_1px)] bg-[size:11px_11px] pointer-events-none" />
 
                  {/* Render elements based on fffAnimTime */}
                  <svg className="w-full h-full absolute inset-0" viewBox="0 0 600 450" fill="none">
                    <defs>
                      <linearGradient id="montBlack-port" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#252c38" />
                        <stop offset="25%" stopColor="#0a0f18" />
                        <stop offset="50%" stopColor="#020408" />
                        <stop offset="85%" stopColor="#1e222b" />
                        <stop offset="100%" stopColor="#05070a" />
                      </linearGradient>

                      <linearGradient id="platinumTrim-port" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f1f5f9" />
                        <stop offset="30%" stopColor="#94a3b8" />
                        <stop offset="70%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>

                      <linearGradient id="goldTip-port" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#ca8a04" />
                        <stop offset="100%" stopColor="#8d6205" />
                      </linearGradient>

                      <linearGradient id="goldGrad-port" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#8d6205" />
                      </linearGradient>

                      <radialGradient id="greenGlow-port" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="orangeGlow-port" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* ANIMATED SECTION 1 */}
                    {fffAnimTime < 7.7 && (
                      <g>
                        {(() => {
                          const cx = 300;
                          const cy = 200;
                          const t = fffAnimTime;
                          let nodeScale = 1.0;
                          if (t >= 6.1 && t < 6.9) {
                            nodeScale = Math.max(0, 1.0 - (t - 6.1) / 0.8);
                          } else if (t >= 6.9) {
                            nodeScale = 0.0;
                          }
                          
                          const ptsConfig = [
                            { label: "IP Conflict", color: "#1B2A4A" },
                            { label: "Tax Liability", color: "#1B2A4A" },
                            { label: "VSOP Friction", color: "#C0823E" },
                            { label: "Dilution Risk", color: "#C0823E" },
                            { label: "Veto Clause", color: "#7F8287" },
                            { label: "Bad Vesting", color: "#7F8287" },
                            { label: "Asset Flaw", color: "#7F8287" },
                          ];

                          const neurons = ptsConfig.map((pt, i) => {
                            const baseAngle = (i * 2 * Math.PI) / 7;
                            const chaoticJitterX = Math.sin(t * (4.2 + i * 0.6) + i * 1.8) * 18;
                            const chaoticJitterY = Math.cos(t * (4.8 - i * 0.5) - i * 1.2) * 15;
                            const angle = baseAngle + t * 0.32;
                            const baseRadius = 120;
                            const rad = (baseRadius + Math.sin(t * 3.5 + i) * 10) * nodeScale;
                            
                            return {
                             x: cx + Math.cos(angle) * rad + chaoticJitterX * nodeScale,
                             y: cy + Math.sin(angle) * rad + chaoticJitterY * nodeScale,
                             label: pt.label,
                             color: pt.color,
                            };
                          });

                          const microJunctions = Array.from({ length: 11 }).map((_, j) => {
                            const microAngleBase = (j * 2 * Math.PI) / 11;
                            const angle = microAngleBase - t * 0.24;
                            const rJitterX = Math.cos(t * (3.1 + j * 0.4) + j) * 20;
                            const rJitterY = Math.sin(t * (2.8 - j * 0.4) - j) * 18;
                            const baseRadius = 65 + (j % 3) * 35;
                            const rad = (baseRadius + Math.sin(t * 4 + j) * 8) * nodeScale;
                            return {
                              x: cx + Math.cos(angle) * rad + rJitterX * nodeScale,
                              y: cy + Math.sin(angle) * rad + rJitterY * nodeScale,
                              color: j % 2 === 0 ? "rgba(27, 42, 74, 0.15)" : "rgba(127, 130, 135, 0.12)"
                            };
                          });

                          return (
                            <g>
                              <circle cx={cx} cy={cy} r={140 * nodeScale} stroke="rgba(28, 27, 25, 0.05)" strokeWidth="0.5" strokeDasharray="1, 4" />
                              <circle cx={cx} cy={cy} r={100 * nodeScale} stroke="rgba(28, 27, 25, 0.04)" strokeWidth="0.5" strokeDasharray="2, 2" />
                              <circle cx={cx} cy={cy} r={60 * nodeScale} stroke="rgba(28, 27, 25, 0.03)" strokeWidth="0.5" />

                              {/* DENSE CONNECTIVE MESH LINES */}
                              {neurons.map((n1, i) => {
                                const connections = [(i + 1) % 7, (i + 2) % 7, (i + 3) % 7, (i + 4) % 7];
                                return connections.map((nextIdx, cKey) => {
                                  const n2 = neurons[nextIdx];
                                  return (
                                    <line
                                      key={`ln-${i}-${cKey}`}
                                      x1={n1.x}
                                      y1={n1.y}
                                      x2={n2.x}
                                      y2={n2.y}
                                      stroke={nodeScale > 0.4 ? "rgba(27, 42, 74, 0.06)" : "rgba(27, 42, 74, 0.12)"}
                                      strokeWidth="0.5"
                                    />
                                  );
                                });
                              })}

                              {microJunctions.map((mj1, j) => {
                                const microConns = [(j + 1) % 11, (j + 3) % 11];
                                return microConns.map((nextIdx, cKey) => {
                                  const mj2 = microJunctions[nextIdx];
                                  return (
                                    <line
                                      key={`mj-${j}-${cKey}`}
                                      x1={mj1.x}
                                      y1={mj1.y}
                                      x2={mj2.x}
                                      y2={mj2.y}
                                      stroke={nodeScale > 0.4 ? "rgba(127, 130, 135, 0.04)" : "rgba(127, 130, 135, 0.08)"}
                                      strokeWidth="0.4"
                                    />
                                  );
                                });
                              })}

                              {neurons.map((n, i) => {
                                const crossConns = [i % 11, (i + 4) % 11, (i + 7) % 11];
                                return crossConns.map((mjIdx, cKey) => {
                                  const mj = microJunctions[mjIdx];
                                  return (
                                    <line
                                      key={`cross-${i}-${cKey}`}
                                      x1={n.x}
                                      y1={n.y}
                                      x2={mj.x}
                                      y2={mj.y}
                                      stroke={nodeScale > 0.4 ? "rgba(27, 42, 74, 0.04)" : "rgba(27, 42, 74, 0.08)"}
                                      strokeWidth="0.4"
                                    />
                                  );
                                });
                              })}

                              {microJunctions.map((mj, j) => {
                                if (nodeScale <= 0.02) return null;
                                return (
                                  <circle
                                    key={`mj-dot-${j}`}
                                    cx={mj.x}
                                    cy={mj.y}
                                    r="1.5"
                                    fill={mj.color}
                                    opacity={nodeScale * 0.4}
                                  />
                                );
                              })}

                              {neurons.map((n, i) => {
                                const opacity = nodeScale;
                                if (opacity <= 0.02) return null;

                                return (
                                  <g key={i} transform={`translate(${n.x}, ${n.y})`} style={{ opacity }}>
                                    <rect x="-26" y="-8" width="52" height="16" fill="#faf8f4" stroke={n.color} strokeWidth="0.5" />
                                    <rect x="-26" y="-8" width="2" height="16" fill={n.color} />
                                    <text x="2" y="2" fill="#111115" fontSize="4.5" fontFamily="var(--font-mono)" letterSpacing="0.2px" fontWeight="600" textAnchor="middle">{n.label}</text>
                                  </g>
                                );
                              })}

                              <circle cx={cx} cy={cy} r={28} stroke={t >= 6.1 ? "#1B2A4A" : "#C0823E"} strokeWidth="0.5" strokeDasharray="2, 2" fill="none" />
                              <circle cx={cx} cy={cy} r={6.5} fill={t >= 6.1 ? "#1B2A4A" : "#C0823E"} stroke="#faf8f4" strokeWidth="1" />
                            </g>
                          );
                        })()}
                      </g>
                    )}

                    {/* ANIMATED SECTION 2 */}
                    {fffAnimTime >= 3.5 && fffAnimTime < 7.7 && (
                      (() => {
                        const t = fffAnimTime;
                        let px = -240;
                        const py = 200;

                        if (t >= 3.5 && t < 6.1) {
                          const pct = (t - 3.5) / 2.6;
                          px = -240 + (300 - (-240)) * pct;
                        } else {
                          px = 300;
                        }

                        return (
                          <g transform={`translate(${px}, ${py}) rotate(0)`}>
                            <rect x="-6" y="-0.3" width="6" height="0.6" fill="#0f172a" />
                            <polygon points="-16,-1.3 -6,-0.4 -6,0.4 -16,1.4" fill="url(#platinumTrim-port)" stroke="#1e293b" strokeWidth="0.2" />
                            <rect x="-19" y="-1.5" width="3" height="3" fill="url(#platinumTrim-port)" stroke="#1e293b" strokeWidth="0.2" />
                            <rect x="-56" y="-1.5" width="37" height="3" fill="#334155" stroke="#1e293b" strokeWidth="0.2" />
                            <line x1="-51" y1="-1.5" x2="-51" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-46" y1="-1.5" x2="-46" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-41" y1="-1.5" x2="-41" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-36" y1="-1.5" x2="-36" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-31" y1="-1.5" x2="-31" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <line x1="-26" y1="-1.5" x2="-26" y2="1.5" stroke="#94a3b8" strokeWidth="0.25" />
                            <rect x="-58.5" y="-1.6" width="2.5" height="3.2" fill="url(#goldTip-port)" stroke="#8d6205" strokeWidth="0.15" />
                            <rect x="-225" y="-1.5" width="166" height="3" fill="url(#platinumTrim-port)" stroke="#475569" strokeWidth="0.2" />
                            <rect x="-220" y="-2.3" width="45" height="0.6" rx="0.1" fill="#1e293b" stroke="#334155" strokeWidth="0.1" />
                            <rect x="-231" y="-1.5" width="6" height="3" fill="#1e293b" rx="0.2" />
                            <rect x="-233" y="-1" width="2" height="2" rx="0.1" fill="url(#platinumTrim-port)" />
                            <rect x="-227" y="-1.6" width="1" height="3.2" fill="url(#goldTip-port)" />
                          </g>
                        );
                      })()
                    )}

                    {/* ANIMATED SECTION 3 */}
                    {fffAnimTime >= 7.7 && (
                      (() => {
                        const t = fffAnimTime;
                        const lines = [
                          "Complexity demands action.",
                          "Action requires decisions.",
                          "We turn risk into decision intelligence.",
                          "Quiet confidence. Strategic judgment."
                        ];

                        const targetStr = lines.join(" ");
                        const progress = Math.min(1.0, Math.max(0, (t - 7.9) / 3.5));
                        const charsTotal = targetStr.length;
                        const charsToShow = Math.floor(progress * charsTotal);
                        
                        return (
                          <g>
                            <rect x="50" y="80" width="500" height="240" rx="0" fill="#ffffff" fillOpacity="0.98" stroke="rgba(28, 27, 25, 0.12)" strokeWidth="1" className="shadow-sm" />
                            <text x="80" y="115" fill="#1B2A4A" fontSize="8" fontFamily="var(--font-display)" fontWeight="700" letterSpacing="2.5px">
                              VARDA LEGAL | DECISION ARCHITECTURE
                            </text>
                            <line x1="80" y1="130" x2="520" y2="130" stroke="rgba(28, 27, 25, 0.08)" strokeWidth="0.8" />

                            <g transform="translate(80, 168)">
                              {(() => {
                                let charsLeftToType = charsToShow;
                                return lines.map((line, lIdx) => {
                                  if (charsLeftToType <= 0 && progress < 0.99) return null;
                                  const textToDisplay = progress >= 0.99 ? line : line.slice(0, charsLeftToType);
                                  charsLeftToType -= line.length;
                                  const isLastHighlightLine = lIdx === 3;
                                  const isSolutionLine = lIdx === 2;

                                  return (
                                    <text
                                      key={lIdx}
                                      x="0"
                                      y={lIdx * 34}
                                      fill={isLastHighlightLine ? "#1B2A4A" : isSolutionLine ? "#111115" : "rgba(28,27,25,0.7)"}
                                      fontSize={isLastHighlightLine ? "14" : "12.5"}
                                      fontFamily={isLastHighlightLine ? "var(--font-display)" : "var(--font-sans)"}
                                      fontWeight={isLastHighlightLine ? "700" : "500"}
                                      letterSpacing={isLastHighlightLine ? "0.3px" : "0.1px"}
                                      fontStyle={lIdx === 1 ? "italic" : "normal"}
                                    >
                                      {textToDisplay}
                                      {charsLeftToType + line.length > 0 && charsLeftToType + line.length <= line.length && progress < 0.99 && (
                                        <tspan fill="#1B2A4A" className="animate-pulse">_</tspan>
                                      )}
                                    </text>
                                  );
                                });
                              })()}
                            </g>

                            <text x="80" y="295" fill="rgba(28,27,25,0.4)" fontSize="7" fontFamily="var(--font-mono)" letterSpacing="1px">
                              © 2026 VARDA LEGAL • PRIVAT-EXPERTENBRIEFING • MÜNCHEN
                            </text>
                          </g>
                        );
                      })()
                    )}
                  </svg>
                </div>

                {/* Tracker Progress Indicator */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-charcoal/5 relative z-10">
                  <div className="absolute top-0 left-0 h-full bg-[#1B2A4A] transition-all duration-75" style={{ width: `${(fffAnimTime / 17) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: AREAS OF EXPERTISE / BERATUNGSBEREICHE */}
        <section id="fokus" className="py-20 md:py-28 border-b border-charcoal/10 bg-[#FAF8F4] relative">
          <div id="beratungsbereiche" className="scroll-mt-24" />
          
          {/* Header & Intro */}
          <div className="space-y-4 mb-16 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
              <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C0823E] font-semibold">{lang === "DE" ? "Beratungsbereiche" : "Areas of Expertise"}</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold">
              03 / {lang === "DE" ? "BERATUNGSBEREICHE" : "AREAS OF EXPERTISE"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE"
                ? "Wirtschaftsrecht für Entscheidungen, die ein Unternehmen prägen."
                : "Business law for the decisions that shape a company."}
            </h2>
            <p className="font-sans text-charcoal/80 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
              {lang === "DE"
                ? "Varda berät zu Gesellschaftsstrukturen, Wirtschaftsverträgen, Transaktionen und technologiegeprägten Geschäftsmodellen. Der Anspruch ist nicht, jedes Rechtsgebiet abzudecken, sondern die Fragen zu lösen, die Aufbau, Betrieb und Entwicklung eines Unternehmens bestimmen."
                : "Varda advises on corporate structures, commercial agreements, transactions and technology-based business models. The focus is not on covering every legal discipline, but on resolving the issues that determine how a business is built, operated and developed."}
            </p>
          </div>

          {/* 2x2 Grid of Editorial Expertise Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {[
              {
                id: "corporate",
                label: lang === "DE" ? "01 · GESELLSCHAFTSRECHT & GOVERNANCE" : "01 · CORPORATE & GOVERNANCE",
                title: lang === "DE"
                  ? "Gesellschaftsstrukturen, die auch mit dem Unternehmen weiter funktionieren."
                  : "Corporate structures that remain workable as the business develops.",
                description: lang === "DE"
                  ? "Varda berät Gründer, Gesellschafter und Geschäftsleitungen bei der rechtlichen Struktur des Unternehmens, der Verteilung von Rechten und Verantwortlichkeiten und den Regeln für wesentliche Entscheidungen."
                  : "Varda advises founders, shareholders and management on the legal structure of the company, the allocation of rights and responsibilities and the rules governing important decisions.",
                representativeWork: lang === "DE"
                  ? [
                      "Gesellschaftsgründungen und Strukturentscheidungen",
                      "Satzungen und Gesellschaftervereinbarungen",
                      "Founder Vesting und Leaver-Regelungen",
                      "Gesellschafterbeschlüsse und Corporate Housekeeping",
                      "Geschäftsführungsbefugnisse und Zustimmungsvorbehalte",
                      "Anteilsübertragungen, Kapitalmaßnahmen und Veränderungen im Gesellschafterkreis",
                      "Holdingstrukturen und gesellschaftsrechtliche Reorganisationen",
                      "Governance-Vorbereitung für Investoren, Wachstum oder Nachfolge"
                    ]
                  : [
                      "company formations and structural choices",
                      "articles of association and shareholders’ agreements",
                      "founder vesting and leaver arrangements",
                      "shareholder resolutions and corporate housekeeping",
                      "management authority and reserved matters",
                      "share transfers, capital measures and changes in ownership",
                      "holding structures and corporate reorganisations",
                      "governance preparation for investors, growth or succession"
                    ],
                typicalQuestion: lang === "DE"
                  ? "Wie sollten Beteiligung, Entscheidungsrechte und Verantwortlichkeiten geregelt sein, damit das Unternehmen auch bei unterschiedlichen Interessen handlungsfähig bleibt?"
                  : "How should ownership, decision rights and responsibilities be structured so that the company can still act when interests diverge?",
                textLink: lang === "DE" ? "Gesellschaftsrecht & Governance ansehen" : "Explore Corporate & Governance"
              },
              {
                id: "commercial",
                label: lang === "DE" ? "02 · WIRTSCHAFTSVERTRÄGE" : "02 · COMMERCIAL CONTRACTS",
                title: lang === "DE"
                  ? "Verträge, die das wirtschaftliche Geschäft abbilden und Risiken bewusst verteilen."
                  : "Agreements that reflect the commercial deal and allocate risk deliberately.",
                description: lang === "DE"
                  ? "Varda entwirft, prüft und verhandelt die Verträge, auf denen das Geschäft des Mandanten beruht. Im Mittelpunkt stehen rechtliche Wirksamkeit, wirtschaftliche Folgen und praktische Umsetzung."
                  : "Varda drafts, reviews and negotiates the agreements on which the client’s business depends. The analysis focuses on legal enforceability, commercial consequences and practical implementation.",
                representativeWork: lang === "DE"
                  ? [
                      "Kunden- und Lieferantenverträge",
                      "Software-, SaaS- und Technologieverträge",
                      "Entwicklungs-, Lizenz- und Kooperationsverträge",
                      "Rahmenverträge und Allgemeine Geschäftsbedingungen",
                      "Vertriebs-, Reseller- und Partnerstrukturen",
                      "Einkaufsverträge und Vertragswerke großer Kunden",
                      "Haftungs-, Freistellungs- und Versicherungskonzepte",
                      "Contract Governance und operative Risikosteuerung"
                    ]
                  : [
                      "customer and supplier agreements",
                      "software, SaaS and technology contracts",
                      "development, licensing and cooperation agreements",
                      "framework agreements and terms and conditions",
                      "distribution, reseller and partnership structures",
                      "procurement agreements and customer paper",
                      "liability, indemnity and insurance structures",
                      "contract governance, implementation and operational risk controls"
                    ],
                typicalQuestion: lang === "DE"
                  ? "Welche Regelungen beeinflussen die wirtschaftliche Position tatsächlich, und welche Risiken sollten verhandelt, akzeptiert oder auf anderem Weg gesteuert werden?"
                  : "Which provisions genuinely affect the commercial position, and which risks should be negotiated, accepted or managed in another way?",
                textLink: lang === "DE" ? "Wirtschaftsverträge ansehen" : "Explore Commercial Contracts"
              },
              {
                id: "transactions",
                label: lang === "DE" ? "03 · TRANSAKTIONEN & M&A" : "03 · TRANSACTIONS & M&A",
                title: lang === "DE"
                  ? "Transaktionsberatung mit Fokus auf Struktur, Vorbereitung und die Punkte, die das Ergebnis beeinflussen."
                  : "Transaction support focused on structure, preparation and the points that affect the outcome.",
                description: lang === "DE"
                  ? "Varda begleitet Unternehmenskäufe, Verkäufe, Beteiligungen und gesellschaftsrechtliche Transaktionen von der frühen Strukturierung bis zur Verhandlung und Umsetzung."
                  : "Varda supports acquisitions, sales, investments and corporate transactions from early structuring through negotiation and implementation.",
                representativeWork: lang === "DE"
                  ? [
                      "Share Deals und Asset Deals",
                      "Unternehmensverkäufe und Gründer-Exits",
                      "Venture- und strategische Beteiligungen",
                      "Strukturierung und Vorbereitung von Transaktionen",
                      "Legal Due Diligence und Priorisierung wesentlicher Risiken",
                      "Term Sheets, Letters of Intent und Transaktionsdokumentation",
                      "Disclosure-Prozesse und Verhandlungsbegleitung",
                      "Signing, Closing und Post-Closing-Umsetzung",
                      "Koordination mit Steuerberatern, Notaren und Spezialberatern"
                    ]
                  : [
                      "share and asset acquisitions",
                      "company sales and founder exits",
                      "venture and strategic investments",
                      "transaction structuring and preparation",
                      "legal due diligence and risk prioritisation",
                      "term sheets, letters of intent and transaction documents",
                      "disclosure processes and negotiation support",
                      "signing, closing and post-closing implementation",
                      "coordination with tax advisers, notaries and specialist counsel"
                    ],
                typicalQuestion: lang === "DE"
                  ? "Welche Themen können Wert, Durchführbarkeit oder Zeitplan der Transaktion verändern, und was sollte das Management klären, bevor die Verhandlung teuer wird?"
                  : "Which issues can change the value, feasibility or timing of the transaction, and which points should management resolve before negotiations become expensive?",
                textLink: lang === "DE" ? "Transaktionen & M&A ansehen" : "Explore Transactions & M&A"
              },
              {
                id: "tech-data",
                label: lang === "DE" ? "04 · TECHNOLOGIE, DATEN & DIGITALE GESCHÄFTSMODELLE" : "04 · TECHNOLOGY, DATA & DIGITAL BUSINESS MODELS",
                title: lang === "DE"
                  ? "Rechtliche Strukturen für Produkte und Geschäftsmodelle, die von Technologie und Daten geprägt sind."
                  : "Legal structures for products and business models shaped by technology and data.",
                description: lang === "DE"
                  ? "Varda hilft Technologieunternehmen dabei, Produkte, Datenflüsse und kommerzielle Modelle in klare Vertragsbeziehungen, Verantwortlichkeiten und Umsetzungsprioritäten zu übersetzen."
                  : "Varda helps technology companies translate products, data flows and commercial models into clear contractual relationships, responsibilities and implementation priorities.",
                representativeWork: lang === "DE"
                  ? [
                      "Software-, Plattform- und digitale Servicemodelle",
                      "Datenzugang, Datenteilung und Data-Space-Strukturen",
                      "KI-gestützte Produkte und Technologieeinkauf",
                      "IP-Zuordnung und Lizenzstrukturen",
                      "Produktrollen und vertragliche Verantwortungsmodelle",
                      "Technologiepartnerschaften und Entwicklungsprojekte",
                      "vertragliche Regelung datenbezogener Verantwortlichkeiten",
                      "rechtliche Gestaltung skalierbarer B2B-Angebote",
                      "Koordination spezialisierter regulatorischer oder datenschutzrechtlicher Beratung, soweit erforderlich"
                    ]
                  : [
                      "software, platform and digital-service models",
                      "data access, data sharing and data-space arrangements",
                      "AI-enabled products and technology procurement",
                      "intellectual-property ownership and licensing structures",
                      "product roles and contractual responsibility models",
                      "technology partnerships and development projects",
                      "data-related contractual allocation and implementation",
                      "legal design for scalable B2B offerings",
                      "coordination of specialist regulatory or data-protection advice where required"
                    ],
                typicalQuestion: lang === "DE"
                  ? "Wie müssen rechtliche Struktur, Verträge und Verantwortlichkeiten gestaltet sein, damit das Produkt wie geplant eingeführt, verkauft und skaliert werden kann?"
                  : "How must the legal structure, contracts and responsibilities be designed so that the product can be launched, sold and scaled as intended?",
                textLink: lang === "DE" ? "Technologie & Daten ansehen" : "Explore Technology & Data"
              }
            ].map((module, mIdx) => (
              <div 
                key={mIdx}
                className="border border-charcoal/15 bg-white/70 p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:border-charcoal/35 shadow-2xs group"
              >
                <div className="space-y-6">
                  {/* Module Label Header */}
                  <div className="border-b border-charcoal/10 pb-3 flex justify-between items-center">
                    <span className="font-mono text-[10px] sm:text-xs text-[#C0823E] font-bold uppercase tracking-widest">
                      {module.label}
                    </span>
                  </div>

                  {/* Module Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug">
                    {module.title}
                  </h3>

                  {/* Positioning Sentence / Description */}
                  <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Representative Work List */}
                  <div className="pt-4 border-t border-charcoal/10 space-y-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/50 font-bold block">
                      {lang === "DE" ? "Repräsentative Mandate & Gegenstände" : "Representative Work & Scope"}
                    </span>
                    <ul className="space-y-2 pt-0.5">
                      {module.representativeWork.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-charcoal/85 leading-snug">
                          <span className="text-[#C0823E] font-semibold select-none text-xs flex-shrink-0 mt-0.5">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Question Box */}
                  <div className="pt-4 mt-4 border-t border-charcoal/10 bg-[#FAF8F4] p-4 border-l-2 border-[#C0823E] space-y-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#C0823E] font-bold block">
                      {lang === "DE" ? "Typische Fragestellung" : "Typical Question"}
                    </span>
                    <p className="font-serif italic text-xs sm:text-sm text-charcoal/90 leading-relaxed">
                      "{module.typicalQuestion}"
                    </p>
                  </div>
                </div>

                {/* Restrained Text Link */}
                <div className="pt-6 mt-6 border-t border-charcoal/10">
                  <a
                    href="#letsgo"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-[#C0823E] transition-colors"
                  >
                    <span>{module.textLink}</span>
                    <span className="font-sans font-normal group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Synthesis Statement & Section CTA */}
          <div className="mt-16 sm:mt-20 pt-10 border-t border-charcoal/15 max-w-4xl space-y-6">
            <p className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-charcoal/90 leading-relaxed">
              {lang === "DE"
                ? "Die vier Bereiche greifen häufig ineinander. Eine Transaktion kann eine gesellschaftsrechtliche Neuordnung erfordern, ein Technologieprodukt von einem präzise gestalteten Vertrag abhängen und eine Gründerstruktur darüber entscheiden, ob eine spätere Finanzierung reibungslos möglich ist. Varda verbindet diese Fragen rund um die Entscheidung, die der Mandant tatsächlich treffen muss."
                : "The four areas frequently overlap. A transaction may require corporate restructuring, a technology product may depend on a carefully designed contract, and a founder arrangement may determine whether a later financing can proceed smoothly. Varda connects these issues around the decision the client actually needs to make."}
            </p>

            <div className="pt-2">
              <a
                href="#so-arbeitet-varda"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-charcoal hover:text-[#C0823E] border-b border-charcoal/40 hover:border-[#C0823E] pb-1 transition-colors"
              >
                <span>{lang === "DE" ? "Arbeitsweise von Varda ansehen" : "See how Varda works"}</span>
                <span className="font-sans font-normal">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW VARDA WORKS / SO ARBEITET VARDA */}
        <section id="methode" className="py-20 md:py-28 border-b border-charcoal/10 bg-white relative">
          <div id="so-arbeitet-varda" className="scroll-mt-24" />
          <div id="how-varda-works" className="scroll-mt-24" />

          {/* Section Header */}
          <div className="space-y-4 mb-16 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
              <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C0823E] font-semibold">{lang === "DE" ? "Arbeitsweise" : "How Varda Works"}</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold">
              03 / {lang === "DE" ? "SO ARBEITET VARDA" : "HOW VARDA WORKS"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE"
                ? "Klare Rechtsberatung beginnt mit dem Verständnis der unternehmerischen Entscheidung."
                : "Clear advice begins with understanding the business decision."}
            </h2>
            <p className="font-sans text-charcoal/80 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
              {lang === "DE"
                ? "Jedes Mandat ist anders. Ziel ist nicht, möglichst viel Recht zu analysieren. Ziel ist eine bessere unternehmerische Entscheidung. Deshalb beginnt Varda mit dem wirtschaftlichen Kontext und entwickelt darauf aufbauend die rechtliche Empfehlung."
                : "Every mandate is different. The objective is not to maximise legal analysis. The objective is to help management make a better decision. Varda therefore starts with the commercial context before developing the legal recommendation."}
            </p>
          </div>

          {/* Four Editorial Process Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 items-stretch">
            {[
              {
                num: "01",
                icon: <Target className="w-5 h-5 text-[#C0823E]" strokeWidth={1.5} />,
                title: lang === "DE" ? "Die Entscheidung verstehen" : "Understand the decision",
                text: lang === "DE"
                  ? "Bevor rechtliche Fragen analysiert werden, identifiziert Varda das wirtschaftliche Ziel, die relevanten Beteiligten und die eigentliche Managemententscheidung."
                  : "Before analysing legal rules, Varda identifies the commercial objective, the relevant stakeholders and the decision management actually needs to make."
              },
              {
                num: "02",
                icon: <Scale className="w-5 h-5 text-[#C0823E]" strokeWidth={1.5} />,
                title: lang === "DE" ? "Rechtslage und wirtschaftlichen Kontext bewerten" : "Assess the legal and commercial position",
                text: lang === "DE"
                  ? "Rechtliche Risiken, wirtschaftliche Folgen, operative Realität und Umsetzbarkeit werden gemeinsam bewertet."
                  : "Legal risks, commercial consequences, operational realities and implementation constraints are assessed together—not separately."
              },
              {
                num: "03",
                icon: <GitFork className="w-5 h-5 text-[#C0823E]" strokeWidth={1.5} />,
                title: lang === "DE" ? "Realistische Optionen entwickeln" : "Develop realistic options",
                text: lang === "DE"
                  ? "Nicht jede rechtlich mögliche Lösung ist wirtschaftlich sinnvoll. Varda entwickelt realistische Handlungsoptionen und erklärt ihre Folgen."
                  : "Not every legally possible solution is commercially sensible. Varda develops realistic alternatives and explains their consequences."
              },
              {
                num: "04",
                icon: <CheckCircle2 className="w-5 h-5 text-[#C0823E]" strokeWidth={1.5} />,
                title: lang === "DE" ? "Den nächsten Schritt empfehlen" : "Recommend the next step",
                text: lang === "DE"
                  ? "Jedes Mandat endet mit einer Empfehlung, die sich praktisch umsetzen lässt."
                  : "Every mandate concludes with a recommendation that management can actually implement."
              }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="border-t border-charcoal/20 pt-6 flex flex-col justify-between space-y-4 group hover:border-[#C0823E] transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-[#C0823E] uppercase tracking-wider">
                      {step.num}
                    </span>
                    <div className="p-1.5 bg-[#FAF8F4] border border-charcoal/10">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-charcoal leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Continuous Thin Divider */}
          <div className="w-full h-[1px] bg-charcoal/15 my-14 sm:my-18" />

          {/* Supporting Observation (Memorable Serif Quote) */}
          <div className="max-w-4xl py-2 my-2">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-charcoal leading-[1.25]">
              {lang === "DE"
                ? "Gute Rechtsberatung endet nicht mit der Risikoanalyse. Sie endet mit einer Empfehlung."
                : "Good legal advice does not end with identifying the risk. It ends with a recommendation."}
            </p>
          </div>

          {/* What Varda Does Not Do — Restrained Comparison */}
          <div className="mt-14 pt-10 border-t border-charcoal/15 space-y-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 font-semibold">
              [ {lang === "DE" ? "DIFFERENZIERUNG IM ANSATZ" : "DISTINCTION IN APPROACH"} ]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Left Column: Traditional Legal Advice */}
              <div className="border border-charcoal/15 bg-[#FAF8F4] p-6 sm:p-8 space-y-5">
                <div className="font-mono text-xs font-bold text-charcoal/50 uppercase tracking-wider pb-3 border-b border-charcoal/10">
                  {lang === "DE" ? "Klassische Rechtsberatung" : "Traditional legal advice"}
                </div>
                <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30 flex-shrink-0 mt-1.5" />
                    <span>{lang === "DE" ? "Lange Memos" : "Long memo"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30 flex-shrink-0 mt-1.5" />
                    <span>{lang === "DE" ? "Jedes Risiko wird gleich gewichtet" : "Every risk receives equal attention"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30 flex-shrink-0 mt-1.5" />
                    <span>{lang === "DE" ? "Empfehlung bleibt oft offen" : "Recommendation often remains open"}</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Varda */}
              <div className="border border-[#C0823E]/40 bg-white p-6 sm:p-8 space-y-5 shadow-2xs">
                <div className="font-mono text-xs font-bold text-[#C0823E] uppercase tracking-wider pb-3 border-b border-charcoal/10 flex justify-between items-center">
                  <span>Varda</span>
                  <span className="text-[9px] bg-[#C0823E]/10 text-[#C0823E] px-2 py-0.5 font-mono uppercase tracking-widest font-semibold">
                    {lang === "DE" ? "FOKUS" : "FOCUS"}
                  </span>
                </div>
                <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-charcoal/90 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0823E] flex-shrink-0 mt-1.5" />
                    <span>{lang === "DE" ? "Entscheidungsorientiert" : "Decision-oriented"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0823E] flex-shrink-0 mt-1.5" />
                    <span>{lang === "DE" ? "Wirtschaftliche Priorisierung" : "Commercial prioritisation"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0823E] flex-shrink-0 mt-1.5" />
                    <span>{lang === "DE" ? "Klare Empfehlung" : "Clear recommendation"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0823E] flex-shrink-0 mt-1.5" />
                    <span>{lang === "DE" ? "Konkreter nächster Schritt" : "Concrete next step"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section CTA Leading into What Varda Helps You Do */}
          <div className="mt-14 pt-8 border-t border-charcoal/15">
            <a
              href="#wobei-varda-unterstuetzt"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-charcoal hover:text-[#C0823E] border-b border-charcoal/40 hover:border-[#C0823E] pb-1 transition-colors"
            >
              <span>{lang === "DE" ? "Wobei Varda Sie unterstützt" : "See what Varda helps you do"}</span>
              <span className="font-sans font-normal">→</span>
            </a>
          </div>
        </section>

        {/* SECTION 5: WHAT VARDA HELPS YOU DO / WOBEI VARDA SIE UNTERSTÜTZT */}
        <section id="unterstuetzung" className="py-20 md:py-28 border-b border-charcoal/10 bg-white relative">
          <div id="wobei-varda-unterstuetzt" className="scroll-mt-24" />
          <div id="what-varda-helps-you-do" className="scroll-mt-24" />
          <div id="produkte" className="scroll-mt-24" />
          <div id="work-products" className="scroll-mt-24" />

          {/* Section Header */}
          <div className="space-y-4 mb-16 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
              <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C0823E] font-semibold">
                {lang === "DE" ? "Unterstützung" : "What We Do"}
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold">
              04 / {lang === "DE" ? "WOBEI VARDA SIE UNTERSTÜTZT" : "WHAT VARDA HELPS YOU DO"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE"
                ? "Vom Vertragsentwurf bis zur nächsten unternehmerischen Entscheidung."
                : "From drafting the agreement to recommending the next decision."}
            </h2>
            <p className="font-sans text-charcoal/80 text-base sm:text-lg leading-relaxed max-w-3xl pt-2">
              {lang === "DE"
                ? "Manche Mandate beginnen mit einem Vertragsentwurf. Andere mit einer schwierigen Entscheidung, bevor überhaupt ein Dokument entsteht. Varda begleitet Unternehmen entlang dieses gesamten Prozesses – von der rechtlichen Grundlage bis zur klaren Handlungsempfehlung."
                : "Some mandates require carefully drafted legal documents. Others require commercially informed recommendations before anything is drafted. Varda supports businesses throughout this process—from creating the legal foundation to helping management make the next decision."}
            </p>
          </div>

          {/* Four Substantial Editorial Modules (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            {/* MODULE 01: Drafting & Negotiating Contracts */}
            <div className="border border-charcoal/15 bg-white p-8 md:p-10 flex flex-col justify-between space-y-8 hover:border-charcoal/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <span className="font-mono text-xs font-bold text-[#C0823E] uppercase tracking-wider">
                    01 / {lang === "DE" ? "Vertragsrecht" : "Contracts"}
                  </span>
                  <div className="p-1.5 bg-[#FAF8F4] border border-charcoal/10">
                    <FileText className="w-4 h-4 text-[#C0823E]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                    {lang === "DE" ? "Verträge entwerfen & verhandeln" : "Drafting & Negotiating Contracts"}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                    {lang === "DE"
                      ? "Verträge bestimmen, wie Unternehmen zusammenarbeiten. Varda entwirft, prüft und verhandelt Verträge, die das wirtschaftliche Ziel abbilden und rechtliche Risiken bewusst verteilen."
                      : "Contracts define how businesses work together. Varda drafts, reviews and negotiates agreements that reflect the commercial objective while allocating legal risk consciously."}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                    [ {lang === "DE" ? "BEISPIELE" : "REPRESENTATIVE MATTERS"} ]
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs sm:text-sm text-charcoal/85">
                    {(lang === "DE" ? [
                      "SaaS-Verträge",
                      "Softwarelizenzverträge",
                      "Kundenverträge",
                      "Lieferantenverträge",
                      "Technologieverträge",
                      "Kooperationsverträge",
                      "Rahmenverträge",
                      "Allgemeine Geschäftsbedingungen",
                      "Einkaufsverträge"
                    ] : [
                      "SaaS Agreements",
                      "Software Licences",
                      "Customer Agreements",
                      "Supplier Agreements",
                      "Technology Agreements",
                      "Cooperation Agreements",
                      "Framework Agreements",
                      "General Terms & Conditions",
                      "Procurement Documentation"
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0823E] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-4 mt-auto">
                <p className="font-serif italic text-charcoal/90 text-sm sm:text-base">
                  {lang === "DE"
                    ? "Ein guter Vertrag unterstützt das Geschäft – nicht nur die Rechtsposition."
                    : "Every contract should support the business—not merely document it."}
                </p>
              </div>
            </div>

            {/* MODULE 02: Building Corporate Structures */}
            <div className="border border-charcoal/15 bg-white p-8 md:p-10 flex flex-col justify-between space-y-8 hover:border-charcoal/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <span className="font-mono text-xs font-bold text-[#C0823E] uppercase tracking-wider">
                    02 / {lang === "DE" ? "Gesellschaftsrecht" : "Corporate"}
                  </span>
                  <div className="p-1.5 bg-[#FAF8F4] border border-charcoal/10">
                    <Building className="w-4 h-4 text-[#C0823E]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                    {lang === "DE" ? "Gesellschaftsstrukturen gestalten" : "Building Corporate Structures"}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                    {lang === "DE"
                      ? "Unternehmen brauchen Strukturen, die auch bei Wachstum, neuen Gesellschaftern und veränderten Prioritäten funktionieren."
                      : "Companies require structures that continue to work as ownership, management and commercial priorities evolve."}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                    [ {lang === "DE" ? "BEISPIELE" : "REPRESENTATIVE WORK"} ]
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs sm:text-sm text-charcoal/85">
                    {(lang === "DE" ? [
                      "Gründungen",
                      "Satzungen",
                      "Gesellschaftervereinbarungen",
                      "Founder Vesting",
                      "VSOP",
                      "Kapitalmaßnahmen",
                      "Holdingstrukturen",
                      "Anteilsübertragungen",
                      "Reorganisationen"
                    ] : [
                      "Company Formation",
                      "Articles of Association",
                      "Shareholders' Agreements",
                      "Founder Vesting",
                      "VSOP",
                      "Capital Measures",
                      "Holding Structures",
                      "Share Transfers",
                      "Corporate Reorganisations"
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0823E] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-4 mt-auto">
                <p className="font-serif italic text-charcoal/90 text-sm sm:text-base">
                  {lang === "DE"
                    ? "Gute Strukturen erleichtern spätere Entscheidungen."
                    : "Good structures make future decisions easier."}
                </p>
              </div>
            </div>

            {/* MODULE 03: Contract Intelligence */}
            <div className="border border-charcoal/15 bg-white p-8 md:p-10 flex flex-col justify-between space-y-8 hover:border-charcoal/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <span className="font-mono text-xs font-bold text-[#C0823E] uppercase tracking-wider">
                    03 / Contract Intelligence
                  </span>
                  <div className="p-1.5 bg-[#FAF8F4] border border-charcoal/10">
                    <Layers className="w-4 h-4 text-[#C0823E]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                    Contract Intelligence
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                    {lang === "DE"
                      ? "Wichtige Verträge verdienen mehr als eine rein juristische Prüfung. Contract Intelligence verbindet rechtliche Analyse mit wirtschaftlicher Priorisierung."
                      : "Important contracts deserve more than a legal review. Contract Intelligence combines legal analysis with commercial prioritisation."}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                    [ {lang === "DE" ? "TYPISCHER INHALT" : "TYPICAL OUTPUT"} ]
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs sm:text-sm text-charcoal/85">
                    {(lang === "DE" ? [
                      "rechtliche Bewertung",
                      "wirtschaftliche Folgen",
                      "Verhandlungsschwerpunkte",
                      "Risikoeinstufung",
                      "Handlungsempfehlungen",
                      "operative Alternativen",
                      "Executive Summary"
                    ] : [
                      "Legal assessment",
                      "Commercial implications",
                      "Negotiation priorities",
                      "Risk classification",
                      "Recommended changes",
                      "Operational alternatives",
                      "Executive summary"
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0823E] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-4 mt-auto">
                <p className="font-serif italic text-charcoal/90 text-sm sm:text-base">
                  {lang === "DE"
                    ? "Das Management erkennt sofort, was wirklich entscheidend ist."
                    : "Management sees what matters—not just what is legally possible."}
                </p>
              </div>
            </div>

            {/* MODULE 04: Executive Clarity */}
            <div className="border border-charcoal/15 bg-white p-8 md:p-10 flex flex-col justify-between space-y-8 hover:border-charcoal/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-charcoal/10 pb-4">
                  <span className="font-mono text-xs font-bold text-[#C0823E] uppercase tracking-wider">
                    04 / Executive Clarity
                  </span>
                  <div className="p-1.5 bg-[#FAF8F4] border border-charcoal/10">
                    <Zap className="w-4 h-4 text-[#C0823E]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                    Executive Clarity
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                    {lang === "DE"
                      ? "Manche Situationen erfordern zunächst eine klare Empfehlung – bevor Verträge entstehen. Executive Clarity verdichtet Rechtslage, wirtschaftliche Folgen und realistische Handlungsoptionen zu einer entscheidungsreifen Empfehlung."
                      : "Some situations require a recommendation before documents are drafted. Executive Clarity condenses legal analysis, commercial consequences and realistic options into one decision-ready recommendation."}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                    [ {lang === "DE" ? "TYPISCHER INHALT" : "TYPICAL OUTPUT"} ]
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs sm:text-sm text-charcoal/85">
                    {(lang === "DE" ? [
                      "Fragestellung",
                      "wirtschaftlicher Kontext",
                      "Rechtslage",
                      "Optionen",
                      "Empfehlung",
                      "Nächste Schritte"
                    ] : [
                      "Business question",
                      "Commercial context",
                      "Legal assessment",
                      "Options",
                      "Recommendation",
                      "Next steps"
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0823E] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-4 mt-auto">
                <p className="font-serif italic text-charcoal/90 text-sm sm:text-base">
                  {lang === "DE"
                    ? "Beratung, die unmittelbar umgesetzt werden kann."
                    : "Advice that management can act upon immediately."}
                </p>
              </div>
            </div>
          </div>

          {/* Section Conclusion (Serif quote statement) */}
          <div className="w-full h-[1px] bg-charcoal/15 my-14" />

          <div className="max-w-4xl py-2">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-charcoal leading-[1.25]">
              {lang === "DE"
                ? "Verträge schaffen Sicherheit. Gute Empfehlungen schaffen Handlungsfähigkeit."
                : "Legal documents create certainty. Good recommendations create momentum."}
            </p>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="mt-10 pt-8 border-t border-charcoal/15 flex flex-wrap items-center gap-6">
            <button
              onClick={() => handleNavigateToConsult(lang === "DE" ? "Erstgespräch Anliegen" : "Discuss Matter")}
              className="px-6 py-3.5 bg-[#1C1B19] text-[#FAF8F4] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#C0823E] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>{lang === "DE" ? "Anliegen besprechen" : "Discuss your matter"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsImageModalOpen(true)}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-charcoal hover:text-[#C0823E] border-b border-charcoal/40 hover:border-[#C0823E] pb-1 transition-colors cursor-pointer"
            >
              <span>{lang === "DE" ? "Executive Clarity ansehen" : "See Executive Clarity"}</span>
              <span className="font-sans font-normal">→</span>
            </button>
          </div>

          {/* Small Navigator Teaser Panel */}
          <div className="bg-[#FAF8F4] border-t-2 border-[#C0823E] border-x border-b border-charcoal/15 p-6 sm:p-8 mt-16 max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold">
                  <Compass className="w-4 h-4 text-[#C0823E]" />
                  <span>[ {lang === "DE" ? "KOSTENLOSES TOOL" : "FREE TOOL"} ]</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                  {lang === "DE" ? "Sie wissen noch nicht, wo Sie anfangen sollen?" : "Not sure where to start?"}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {lang === "DE"
                    ? "Der Varda Navigator hilft Ihnen dabei, typische gesellschaftsrechtliche und vertragsrechtliche Fragestellungen systematisch einzuordnen. Er ersetzt keine Rechtsberatung, kann Ihnen aber helfen, sich vorzubereiten und die richtigen Fragen für das Gespräch zu identifizieren."
                    : "Explore the Varda Navigator to work through common corporate and commercial questions before speaking with us. It won't replace legal advice, but it may help you understand the issues, prepare for a conversation and identify the questions that matter most."}
                </p>
              </div>
              <div className="flex-shrink-0 pt-2 md:pt-0">
                <button
                  onClick={() => {
                    setCurrentView("navigator");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-5 py-3 border border-charcoal/30 bg-white hover:border-[#C0823E] hover:text-[#C0823E] font-mono text-xs uppercase tracking-widest font-bold text-charcoal transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
                >
                  <span>{lang === "DE" ? "Varda Navigator öffnen" : "Open Varda Navigator"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: "ÜBER VARDA" / ABOUT (PHILOSOPHY & KONSTANTIN FILBINGER) */}
        <section id="wir" className="py-20 md:py-28 border-b border-charcoal/10 bg-white relative">
          <div id="uber-varda" className="scroll-mt-24" />
          <div id="about" className="scroll-mt-24" />

          {/* Understated Section Header */}
          <div className="space-y-4 mb-16 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
              <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C0823E] font-semibold">
                {lang === "DE" ? "Über Varda" : "About"}
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold">
              05 / {lang === "DE" ? "ÜBER VARDA" : "ABOUT"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE"
                ? "Recht sollte Menschen helfen, voranzukommen."
                : "Law should help people move forward."}
            </h2>
          </div>

          {/* Asymmetrical Editorial Grid: Left Portrait (~35-40%), Right Text (~60-65%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Natural, approachable portrait (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#FAF8F4] border border-charcoal/15 p-2 sm:p-3 overflow-hidden">
                <div className="relative w-full aspect-[3/4] bg-stone-100 overflow-hidden">
                  <img
                    src={konstiClarity}
                    alt="Dr. Konstantin Filbinger"
                    className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-charcoal/50 flex items-center justify-between pt-1 px-1">
                <span>Dr. Konstantin Filbinger</span>
                <span>Munich, Germany</span>
              </div>
            </div>

            {/* Right Column: Editorial Text & Philosophy (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Opening Block: Philosophy First */}
              <div className="space-y-4 text-charcoal/85 font-sans text-base sm:text-lg leading-relaxed">
                <p className="font-serif text-xl sm:text-2xl text-charcoal font-medium leading-snug">
                  {lang === "DE"
                    ? "Varda entstand aus einer einfachen Beobachtung."
                    : "Varda was founded on a simple observation."}
                </p>
                <p>
                  {lang === "DE"
                    ? "Unternehmen scheitern selten daran, dass rechtliche Informationen fehlen. Schwierige Entscheidungen entstehen vielmehr dort, wo rechtliche, wirtschaftliche und operative Fragen gleichzeitig beantwortet werden müssen."
                    : "Businesses rarely struggle because legal information is unavailable. They struggle because important decisions involve legal, commercial and operational questions at the same time."}
                </p>
                <p className="font-medium text-charcoal">
                  {lang === "DE"
                    ? "Deshalb verbindet Varda juristische Präzision mit wirtschaftlichem Verständnis und konkreten Handlungsempfehlungen."
                    : "That is why Varda combines legal precision with commercial thinking and practical recommendations."}
                </p>
              </div>

              <div className="w-full h-[1px] bg-charcoal/10" />

              {/* Second Block: Introducing Konstantin */}
              <div className="space-y-3 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                  [ {lang === "DE" ? "DIE KANZLEI" : "THE PRACTICE"} ]
                </span>
                <p>
                  {lang === "DE"
                    ? "Konstantin Filbinger hat Varda gegründet, um die Art von Kanzlei aufzubauen, mit der er selbst als Unternehmer arbeiten möchte: wirtschaftlich denkend, direkt, neugierig und darauf fokussiert, bessere Entscheidungen zu ermöglichen statt lediglich Risiken zu analysieren."
                    : "Konstantin Filbinger founded Varda to build the kind of legal practice he would want to work with himself: commercially minded, direct, intellectually curious and focused on helping clients make better decisions rather than simply analysing legal risks."}
                </p>
              </div>

              <div className="w-full h-[1px] bg-charcoal/10" />

              {/* Four Editorial Principles */}
              <div className="space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                  [ {lang === "DE" ? "PRINZIPIEN" : "PRINCIPLES"} ]
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Principle 1 */}
                  <div className="space-y-1.5 border-l border-charcoal/15 pl-4 py-1">
                    <h4 className="font-serif text-lg font-semibold text-charcoal">
                      {lang === "DE" ? "Wirtschaftliches Verständnis" : "Commercial understanding"}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                      {lang === "DE"
                        ? "Rechtsberatung muss zum Geschäft passen – nicht umgekehrt."
                        : "Legal advice should fit the business—not the other way around."}
                    </p>
                  </div>

                  {/* Principle 2 */}
                  <div className="space-y-1.5 border-l border-charcoal/15 pl-4 py-1">
                    <h4 className="font-serif text-lg font-semibold text-charcoal">
                      {lang === "DE" ? "Klarheit" : "Clarity"}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                      {lang === "DE"
                        ? "Komplexe Themen sind erst dann hilfreich, wenn sie verständlich werden."
                        : "Complex issues become useful only when they become understandable."}
                    </p>
                  </div>

                  {/* Principle 3 */}
                  <div className="space-y-1.5 border-l border-charcoal/15 pl-4 py-1">
                    <h4 className="font-serif text-lg font-semibold text-charcoal">
                      {lang === "DE" ? "Urteilsvermögen" : "Judgment"}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                      {lang === "DE"
                        ? "Nicht jede rechtlich mögliche Lösung ist auch die beste unternehmerische Entscheidung."
                        : "Not every legal possibility is a good business decision."}
                    </p>
                  </div>

                  {/* Principle 4 */}
                  <div className="space-y-1.5 border-l border-charcoal/15 pl-4 py-1">
                    <h4 className="font-serif text-lg font-semibold text-charcoal">
                      {lang === "DE" ? "Zusammenarbeit" : "Collaboration"}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                      {lang === "DE"
                        ? "Die beste Beratung entsteht gemeinsam mit dem Mandanten – nicht aus der Distanz."
                        : "The best advice is developed together with the client—not delivered from a distance."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-charcoal/10" />

              {/* Personal Note */}
              <div className="border-l-2 border-[#C0823E] pl-5 py-2 bg-[#FAF8F4]/60 space-y-2">
                <p className="font-serif italic text-base sm:text-lg text-charcoal/90 leading-relaxed">
                  {lang === "DE"
                    ? "„Ich arbeite besonders gerne mit Gründerinnen, Gründern und Geschäftsleitungen zusammen, weil ihre Fragestellungen selten sauber in juristische Kategorien passen. Genau dort entstehen oft die spannendsten Lösungen.“"
                    : "“I enjoy working with founders and management teams because their questions rarely fit neatly into legal categories. Those conversations are often where the most interesting solutions emerge.”"}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block">
                  — Dr. Konstantin Filbinger
                </span>
              </div>

              <div className="w-full h-[1px] bg-charcoal/10" />

              {/* Restrained Credentials */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40 font-bold block">
                  [ {lang === "DE" ? "QUALIFIKATION & STATUSTITEL" : "CREDENTIALS"} ]
                </span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-charcoal/75 uppercase tracking-wider">
                  <span>Rechtsanwalt (Germany)</span>
                  <span className="text-charcoal/30">•</span>
                  <span>Founder, Varda Legal</span>
                  <span className="text-charcoal/30">•</span>
                  <span>Corporate · Commercial · M&A · Technology</span>
                  <span className="text-charcoal/30">•</span>
                  <span>Based in Munich</span>
                </div>
              </div>

              {/* Calm Invitation / CTA */}
              <div className="pt-6 border-t border-charcoal/15 space-y-4">
                <p className="font-serif text-lg sm:text-xl text-charcoal">
                  {lang === "DE"
                    ? "Wenn Sie vor einer wichtigen unternehmerischen Entscheidung stehen, lassen Sie uns darüber sprechen."
                    : "If you are facing an important business decision, let's discuss it."}
                </p>
                <div>
                  <button
                    onClick={() => handleNavigateToConsult(lang === "DE" ? "Erstgespräch vereinbaren" : "Book a conversation")}
                    className="px-6 py-3.5 bg-[#1C1B19] text-[#FAF8F4] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#C0823E] transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>{lang === "DE" ? "Erstgespräch vereinbaren" : "Book a conversation"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: "DECISION NOTES" (EDITORIAL PERSPECTIVES ON BUSINESS DECISIONS) */}
        <section id="denkwerk" className="py-20 md:py-32 border-b border-charcoal/10 bg-[#FAF8F5]/30 relative">
          <div id="decision-notes" className="scroll-mt-24" />
          <div id="insights" className="scroll-mt-24" />
          <div id="einblicke" className="scroll-mt-24" />

          {/* Section Header & Editorial Positioning */}
          <div className="space-y-6 mb-16 max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
              <a href="#home" className="hover:text-charcoal transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C0823E] font-semibold">DECISION NOTES</span>
            </div>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C0823E] font-bold block">
                06 / DECISION NOTES
              </span>
              <p className="font-mono text-xs text-charcoal/60">
                {lang === "DE"
                  ? "Gedanken, Beobachtungen und praktische Perspektiven aus Gesellschaftsrecht, Vertragsrecht und Technologierecht."
                  : "Ideas, observations and practical perspectives from corporate, commercial and technology law."}
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {lang === "DE"
                ? "Unternehmerische Entscheidungen verdienen bessere rechtliche Denkanstöße."
                : "Business decisions deserve better legal thinking."}
            </h2>

            {/* Introductory Manifesto */}
            <div className="pt-2 font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-3xl space-y-2">
              <p>
                {lang === "DE"
                  ? "Manche rechtliche Fragen lassen sich nicht mit einer einzelnen Vorschrift beantworten. Sie erfordern Urteilsvermögen."
                  : "Some legal questions cannot be answered with a single rule. They require judgement."}
              </p>
              <p>
                {lang === "DE"
                  ? "Decision Notes zeigen anhand praktischer Situationen und Beobachtungen, wie wirtschaftliches Denken und juristische Präzision zusammenwirken."
                  : "Decision Notes explore the commercial thinking behind legal advice through practical examples, observations and real-world situations."}
              </p>
            </div>
          </div>

          {/* Curated Editorial Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-charcoal/15">
            {d.denkwerk.articles.filter((article) => article.id === "vertraege-risiko").map((article) => {
              return (
                <article
                  key={article.id}
                  className="flex flex-col justify-between space-y-6 bg-white border border-charcoal/10 p-6 sm:p-8 hover:border-[#C0823E]/50 transition-colors duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Category Label */}
                    <div className="font-mono text-[10px] tracking-widest text-[#C0823E] uppercase font-bold border-b border-charcoal/10 pb-2 flex items-center justify-between">
                      <span>{article.category}</span>
                      <span className="text-charcoal/40 font-normal">{article.date}</span>
                    </div>

                    {/* Editorial Article Title */}
                    <h3
                      onClick={() => setSelectedArticle(article)}
                      className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-charcoal leading-snug group-hover:text-[#C0823E] transition-colors duration-200 cursor-pointer"
                    >
                      {article.title}
                    </h3>

                    {/* Teaser Paragraph */}
                    <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                    <span className="text-charcoal/50">{article.readingTime}</span>
                    
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center space-x-1.5 text-[#C0823E] group-hover:text-charcoal font-bold transition-colors cursor-pointer"
                    >
                      <span>{d.denkwerk.readMore}</span>
                      <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Editorial Quote Block */}
          <div className="my-20 py-12 px-6 sm:px-12 border-y border-charcoal/15 bg-white text-center max-w-4xl mx-auto space-y-3">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal leading-snug font-medium">
              {lang === "DE"
                ? "Gute Rechtsberatung sollte schwierige Entscheidungen einfacher machen – nicht nur erklären, warum sie schwierig sind."
                : "Good legal advice should make complex decisions easier—not merely explain why they are difficult."}
            </p>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold block pt-2">
              — DECISION NOTES • VARDA LEGAL
            </span>
          </div>

          {/* Call to Action: Explore All Decision Notes */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#1C1B19] text-[#FAF8F4] p-8 md:p-10">
            <div className="space-y-2 max-w-2xl text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C0823E] font-bold">
                [ {lang === "DE" ? "KANZLEI-ARCHIV" : "EDITORIAL ARCHIVE"} ]
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#FAF8F4]">
                {lang === "DE" ? "Vertiefende Beiträge & Kompendium" : "In-depth Analyses & Compendium"}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#FAF8F4]/75 leading-relaxed">
                {lang === "DE"
                  ? "Greifen Sie auf das vollständige Varda-Archiv mit juristischen Analysen und Leitfäden zu."
                  : "Access our full publication library with in-depth legal analyses and strategic decision briefs."}
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setIsKompendiumOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#C0823E] text-white hover:bg-[#a66d30] font-mono text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>{d.denkwerk.all}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DETAILED ARTICLE EXPANSION DRAWER/MODAL (Unmistakably Premium European Publication Style) */}
          <AnimatePresence>
            {selectedArticle && (
              <div 
                className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/40 backdrop-blur-sm flex items-start md:items-center justify-center pt-24 pb-6 px-4 sm:pt-28 sm:pb-8 sm:px-6 md:p-10"
                onClick={() => setSelectedArticle(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-4xl bg-[#FAF8F5] border border-charcoal/15 p-6 sm:p-10 md:p-16 shadow-2xl flex flex-col justify-between rounded-[2px] max-h-[78vh] sm:max-h-[82vh] md:max-h-[92vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-10">
                    {/* Editorial Top bar */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-charcoal/10 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedArticle(null)}
                          className="group inline-flex items-center space-x-1.5 text-charcoal/60 hover:text-charcoal transition-colors focus:outline-none cursor-pointer"
                        >
                          <span className="text-sm font-light tracking-normal transition-transform group-hover:-translate-x-1">←</span>
                          <span className="font-mono font-medium">{d.denkwerk.back}</span>
                        </button>
                        <span>/</span>
                        <a href="#denkwerk" onClick={() => setSelectedArticle(null)} className="hover:text-charcoal transition-colors">
                          {lang === "DE" ? "Einblicke" : "Insights"}
                        </a>
                        <span>/</span>
                        <span className="text-charcoal font-semibold truncate max-w-[180px] sm:max-w-[280px]">
                          {selectedArticle.title}
                        </span>
                      </div>
                      <div className="border border-charcoal/20 px-3 py-1 font-mono font-semibold text-charcoal/70 bg-transparent rounded-sm uppercase tracking-wider">
                        [ {selectedArticle.category} ]
                      </div>
                    </div>

                    {/* Article Body Columns Style Layout */}
                    <div className="space-y-8">
                      {/* Publication Date and Title */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 font-mono text-xs text-charcoal/50">
                          <span>{selectedArticle.date}</span>
                          <span>•</span>
                          <span>{selectedArticle.readingTime}</span>
                          <span>•</span>
                          <span className="italic">{lang === "DE" ? "Schriftenreihe Varda" : "Varda Publications"}</span>
                        </div>
                        
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.1] max-w-3xl">
                          {selectedArticle.title}
                        </h1>
                      </div>

                      <div className="h-[1px] w-28 bg-charcoal/30" />

                      {/* Asymmetric layout: Side Index Table + Content Pillar */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4">
                        
                        {/* Side Archival Meta-Index Column */}
                        <div className="lg:col-span-4 h-full flex flex-col justify-between shrink-0 space-y-6 lg:border-r lg:border-charcoal/10 lg:pr-8 font-mono text-[10px] uppercase tracking-widest text-[#947444]/80">
                          <div className="space-y-4">
                            <div className="border-b border-charcoal/5 pb-2">
                              <span className="text-charcoal/30 block mb-1">[ GRÜNDER / AUTOR ]</span>
                              <span className="text-charcoal/80 font-semibold">Dr. Konstantin Filbinger</span>
                            </div>
                            <div className="border-b border-charcoal/5 pb-2">
                              <span className="text-charcoal/30 block mb-1">[ RECHTSGEBIET ]</span>
                              <span className="text-charcoal/80 font-semibold">{selectedArticle.category}</span>
                            </div>
                            <div className="border-b border-charcoal/5 pb-2">
                              <span className="text-charcoal/30 block mb-1">[ HERAUSGEBER ]</span>
                              <span className="text-charcoal/80 font-semibold">Varda Legal • München</span>
                            </div>
                            <div className="pb-2">
                              <span className="text-charcoal/30 block mb-1">[ STATUS ]</span>
                              <span className="text-charcoal/80 font-semibold">Veröffentlicht • Volltext</span>
                            </div>
                          </div>
                          
                          <div className="hidden lg:block pt-8 text-[9px] text-[#947444]/65 italic leading-relaxed prose prose-sm font-serif lowercase">
                            "veritate et fide — dem recht gedient, dem fortschritt verpflichtet."
                          </div>
                        </div>

                        {/* Core Content Reading Pillar */}
                        <div className="lg:col-span-8 space-y-8">
                          {/* Excerpt */}
                          <div className="font-serif text-lg sm:text-xl text-charcoal/85 leading-relaxed font-light italic py-2 bg-transparent select-text">
                            {selectedArticle.excerpt}
                          </div>

                          {/* Render Rich Body Sections */}
                          <div className="prose prose-stone max-w-none text-charcoal/85 leading-relaxed font-sans text-sm sm:text-base space-y-6 select-text">
                            {selectedArticle.content.split("\n\n").map((para, pIdx) => {
                              const cleanPara = para.replace(/[„“"']/g, "").trim();

                              const isTokenPullQuote = cleanPara.includes("Token-Recovery-Fälle sind keine Technologie-Probleme") || 
                                                       cleanPara.includes("Token recovery cases are not technology problems");

                              const isUnternehmensPullQuote = cleanPara.includes("Ein Unternehmenskauf beginnt mit Dokumenten") || 
                                                              cleanPara.includes("A company sale begins with documents");

                              const isVertraegePullQuote = cleanPara.includes("Gute Verträge entstehen nicht am Verhandlungstisch") ||
                                                           cleanPara.includes("Good contracts are not created at the negotiating table");

                              if (isTokenPullQuote || isUnternehmensPullQuote || isVertraegePullQuote) {
                                return (
                                  <div key={pIdx} className="py-20 sm:py-28 my-14 sm:my-20 text-center select-all bg-transparent w-full">
                                    <div className="max-w-4xl mx-auto px-6">
                                      <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal/90 leading-[1.6] font-light tracking-tight italic">
                                        {cleanPara}
                                      </p>
                                    </div>
                                  </div>
                                );
                              }

                              if (para.startsWith("### ")) {
                                const isTokenFirstHeading = para.startsWith("### Wer beherrscht das Problem?") || 
                                                            para.startsWith("### Who Controls the Problem?");
                                                            
                                const isMnaFirstHeading = para.startsWith("### Ein guter Datenraum entsteht Jahre vor dem Verkauf") ||
                                                          para.startsWith("### A Good Data Room is Built Years Before the Sale");
                                                          
                                const isVertraegeFirstHeading = para.startsWith("### Zwei Funktionen eines Vertrags") ||
                                                                para.startsWith("### Two Functions of a Contract");
                                                                
                                const isMnaInteractiveHeading = para.startsWith("### Gesunde Dynamik ist ein Asset") || 
                                                                para.startsWith("### Healthy Momentum is an Asset");
                                return (
                                  <React.Fragment key={pIdx}>
                                    {isTokenFirstHeading && (
                                      <div className="py-12 sm:py-20 my-8 flex flex-col items-center w-full select-all bg-transparent">
                                        <img 
                                          src={lang === "DE" ? tokenRecoveryImage : tokenRecoveryImageEng}                                          alt="Varda Decision Architecture No. 01: Token Recovery" 
                                          className="w-full max-w-4xl h-auto object-contain"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    )}
                                    {isMnaFirstHeading && (
                                      <div className="py-12 sm:py-20 my-8 flex flex-col items-center w-full select-all bg-transparent">
                                        <img 
                                          src={lang === "DE" ? unternehmensverkaufImage : unternehmensverkaufImageEng}                                          alt="Varda Decision Architecture No. 02: Der Unternehmensverkauf" 
                                          className="w-full max-w-4xl h-auto object-contain"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    )}
                                    {isVertraegeFirstHeading && (
                                      <div className="py-12 sm:py-20 my-8 flex flex-col items-center w-full select-all bg-transparent">
                                        <img 
                                          src={lang === "DE" ? vertraegeImage : vertraegeImageEng}                                          alt="Varda Decision Architecture No. 03: Verträge" 
                                          className="w-full max-w-4xl h-auto object-contain"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    )}
                                    {isMnaInteractiveHeading && (
                                      <div className="py-12 sm:py-24 my-10 flex flex-col items-center w-full select-all bg-transparent">
                                        <div className="w-full max-w-4xl mx-auto">
                                          <MnaDecisionArchitecture lang={lang} />
                                        </div>
                                      </div>
                                    )}
                                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-charcoal pt-8 border-b border-charcoal/10 pb-2 mb-4 leading-normal">
                                      {para.replace("### ", "")}
                                    </h3>
                                  </React.Fragment>
                                );
                              }
                              if (para.startsWith("#### ")) {
                                return (
                                  <h4 key={pIdx} className="font-serif text-base font-semibold text-charcoal pt-6 italic">
                                    {para.replace("#### ", "")}
                                  </h4>
                                );
                              }
                              if (para.includes("\n- ") || para.includes("\n* ") || para.startsWith("- ") || para.startsWith("* ")) {
                                const lines = para.split("\n");
                                return (
                                  <div key={pIdx} className="space-y-3 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light my-4">
                                    {lines.map((line, lIdx) => {
                                      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
                                        return (
                                          <div key={lIdx} className="flex items-start space-x-3 pl-4 sm:pl-6 leading-relaxed">
                                            <span className="text-[#947444] text-[10px] mt-2 select-none">•</span>
                                            <span className="flex-1 text-charcoal/80">{line.trim().replace(/^[\-\*]\s+/, "")}</span>
                                          </div>
                                        );
                                      }
                                      return (
                                        <p key={lIdx} className="mb-2 text-charcoal/85 font-light">
                                          {line}
                                        </p>
                                      );
                                    })}
                                  </div>
                                );
                              }
                              if (para.match(/^\d+\.\s+/) || para.includes("\n1. ") || para.includes("\n2. ")) {
                                const lines = para.split("\n");
                                return (
                                  <div key={pIdx} className="space-y-3 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed font-light my-4">
                                    {lines.map((line, lIdx) => {
                                      const match = line.trim().match(/^(\d+)\.\s+(.*)$/);
                                      if (match) {
                                        return (
                                          <div key={lIdx} className="flex items-start space-x-3 pl-4 sm:pl-6 leading-relaxed">
                                            <span className="font-mono text-xs text-[#947444] mt-0.5 select-none font-semibold">
                                              {match[1].padStart(2, "0")} /
                                            </span>
                                            <span className="flex-1 text-charcoal/80">{match[2]}</span>
                                          </div>
                                        );
                                      }
                                      return (
                                        <p key={lIdx} className="mb-2 text-charcoal/85 font-light">
                                          {line}
                                        </p>
                                      );
                                    })}
                                  </div>
                                );
                              }
                              return (
                                <p key={pIdx} className="text-charcoal/80 leading-relaxed text-sm sm:text-base font-sans font-light">
                                  {para}
                                </p>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* APPENDIX / FAQ MODULE (Beautiful, architectural separate editorial section) */}
                      {selectedArticle.faq && selectedArticle.faq.length > 0 && (
                        <div className="mt-16 pt-12 border-t border-charcoal/15 space-y-8 select-text">
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#947444] font-semibold">
                              {lang === "DE" ? "ANHANG / FAQ" : "APPENDIX / FAQ"}
                            </span>
                            <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-charcoal">
                              {lang === "DE" ? "Häufige Fragen & Erläuterungen" : "Frequent Queries & Annotations"}
                            </h3>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {selectedArticle.faq.map((item, idx) => (
                              <div key={idx} className="space-y-3 border-l-2 border-[#947444]/10 pl-4">
                                <h4 className="font-serif text-sm sm:text-base font-bold text-charcoal leading-snug">
                                  {item.question}
                                </h4>
                                <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                                  {item.answer}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Closure & Legal Stamp footer */}
                  <div className="mt-12 pt-8 border-t border-charcoal/10 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono gap-4">
                      <span className="text-charcoal/50">© 2026 VARDA LEGAL • VARDA LEGAL</span>
                      <a 
                        href="#letsgo" 
                        onClick={() => setSelectedArticle(null)}
                        className="inline-flex items-center space-x-1 text-[#947444] font-bold hover:text-charcoal uppercase tracking-widest transition-colors font-mono"
                      >
                        <span>{lang === "DE" ? "Kanzlei buchen" : "Consult with us"}</span>
                        <span className="text-sm">→</span>
                      </a>
                    </div>
                    <p className="text-[10px] text-charcoal/40 leading-relaxed font-mono">
                      {lang === "DE" 
                        ? "HINWEIS: Dieser Fachbeitrag dient lediglich der allgemeinen Information und wissenschaftlichen Orientierung. Er stellt zu keinem Zeitpunkt eine steuerliche oder rechtsverbindliche Beratung dar und begründet kein Mandatsverhältnis." 
                        : "DISCLAIMER: This thought piece serves for general instructional and scientific orientation only. It constitutes no structural tax or legal binding advice and does not initiate a client-attorney relationship."}
                    </p>
                  </div>
                </motion.div>
              </div>
            )}

            {isKompendiumOpen && (
              <div 
                className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10"
                onClick={() => setIsKompendiumOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-4xl bg-[#FAF8F5] border border-charcoal/15 p-6 sm:p-10 md:p-16 shadow-2xl flex flex-col justify-between rounded-[2px] max-h-[92vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="space-y-10">
                    {/* Editorial Top bar */}
                    <div className="flex justify-between items-center pb-6 border-b border-charcoal/10 font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                      <button
                        onClick={() => setIsKompendiumOpen(false)}
                        className="group inline-flex items-center space-x-2 text-charcoal/60 hover:text-charcoal transition-colors focus:outline-none cursor-pointer"
                      >
                        <span className="text-sm font-light tracking-normal transition-transform group-hover:-translate-x-1">←</span>
                        <span className="font-mono font-medium">{lang === "DE" ? "ZURÜCK ZUM PORTAL" : "BACK TO PORTAL"}</span>
                      </button>
                      <div className="border border-[#947444]/30 px-3 py-1 font-mono font-semibold text-[#947444] bg-transparent rounded-sm uppercase tracking-wider">
                        [ {lang === "DE" ? "WISSENSCHAFTLICHE BIBLIOTHEK" : "ACADEMIC PAPERS"} ]
                      </div>
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal leading-[1.1] max-w-2xl">
                        {lang === "DE" ? "Kanzlei-Kompendium" : "Firm Compendium"}
                      </h1>
                      <p className="font-serif text-base italic text-charcoal/60 font-light max-w-2xl leading-relaxed">
                        {lang === "DE" 
                          ? "Leitfäden, rechtssichere Ablaufmodelle und praxisnahe Abhandlungen für Gesellschafter und Geschäftsführer."
                          : "Academic-level governance guidelines, secure structural templates, and research-focused legal briefs for board members and enterprise directors."}
                      </p>
                    </div>

                    <div className="h-[1px] w-28 bg-[#947444]/30" />

                    {/* Evergreens Grid of Academic Guidelines */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      
                      {/* Document 1 */}
                      <div className="border border-charcoal/10 p-6 bg-white space-y-4">
                        <span className="font-mono text-[10px] text-[#947444] tracking-widest uppercase font-semibold block">01 / CORPORATE LAW</span>
                        <h3 className="font-serif text-lg font-medium text-charcoal">
                          {lang === "DE" 
                            ? "Der Gesellschafterbeschluss: Mustersicherer Ablauf" 
                            : "The Shareholder Resolution: Risk-Free Protocols"}
                        </h3>
                        <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                          {lang === "DE"
                            ? "Fehlersichere Beschlussfassungen unter Berücksichtigung von Anfechtungsfristen, Gesellschafterstimmverboten und BGH-Vorgaben."
                            : "Meticulous documentation standards avoiding voided voting procedures, conflict of interest exclusions, and Supreme Court protocols."}
                        </p>
                        <div className="pt-2 font-mono text-[9px] text-[#947444] uppercase tracking-wider">
                          [ {lang === "DE" ? "Im Kanzlei-Intranet verfügbar" : "Available in Intranet DB"} ]
                        </div>
                      </div>

                      {/* Document 2 */}
                      <div className="border border-charcoal/10 p-6 bg-white space-y-4">
                        <span className="font-mono text-[10px] text-[#947444] tracking-widest uppercase font-semibold block">02 / CAPITAL METRICS</span>
                        <h3 className="font-serif text-lg font-medium text-charcoal">
                          {lang === "DE" 
                            ? "Founder Vesting im deutschen Steuerrecht" 
                            : "Founder Vesting in German Fiscal Law"}
                        </h3>
                        <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                          {lang === "DE"
                            ? "Eine steuerrechtliche Untersuchung von Dynamic Vesting Modellen, Schenkungsteuer-Abmilderungen und Haltefristen."
                            : "A fiscal analysis of exit-linked forfeiture provisions, dry-income tax risks, and capitalization timing structures."}
                        </p>
                        <div className="pt-2 font-mono text-[9px] text-[#947444] uppercase tracking-wider">
                          [ {lang === "DE" ? "Im Kanzlei-Intranet verfügbar" : "Available in Intranet DB"} ]
                        </div>
                      </div>

                      {/* Document 3 */}
                      <div className="border border-charcoal/10 p-6 bg-white space-y-4">
                        <span className="font-mono text-[10px] text-[#947444] tracking-widest uppercase font-semibold block">03 / IP RESTRUCTURING</span>
                        <h3 className="font-serif text-lg font-medium text-charcoal">
                          {lang === "DE" 
                            ? "IP-Migrationen & Code-Transfers im SaaS-Sektor" 
                            : "IP Migrations & Code Transfer Protocols"}
                        </h3>
                        <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                          {lang === "DE"
                            ? "Strukturierungsregelungen zur sauberen Ausgliederung und Übertragung von proprietärem Programmcode bei Umstrukturierungen."
                            : "Structural guidelines ensuring seamless intellectual property assignments and software copyright transfers during spin-offs."}
                        </p>
                        <div className="pt-2 font-mono text-[9px] text-[#947444] uppercase tracking-wider">
                          [ {lang === "DE" ? "Im Kanzlei-Intranet verfügbar" : "Available in Intranet DB"} ]
                        </div>
                      </div>

                      {/* Document 4 */}
                      <div className="border border-charcoal/10 p-6 bg-white space-y-4">
                        <span className="font-mono text-[10px] text-[#947444] tracking-widest uppercase font-semibold block">04 / GOVERNANCE COMPLIANCE</span>
                        <h3 className="font-serif text-lg font-medium text-charcoal">
                          {lang === "DE" 
                            ? "Geschäftsführer-Enthaftung in Sondersituationen" 
                            : "Director Liability Mitigation on Special Exits"}
                        </h3>
                        <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                          {lang === "DE"
                            ? "Proaktive Haftungsausschlüsse und Business Judgment Rule Nachweise während risikoreicher Restrukturierungen."
                            : "Officer protection policies and business judgment records to defend personal assets during emergency turnarounds."}
                        </p>
                        <div className="pt-2 font-mono text-[9px] text-[#947444] uppercase tracking-wider">
                          [ {lang === "DE" ? "Im Kanzlei-Intranet verfügbar" : "Available in Intranet DB"} ]
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Closure & Legal Stamp footer */}
                  <div className="mt-12 pt-8 border-t border-charcoal/10 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono gap-4">
                      <span className="text-charcoal/50">© 2026 VARDA LEGAL • ARCHIVAL SERVICES ONLY</span>
                      <a 
                        href="#letsgo" 
                        onClick={() => setIsKompendiumOpen(false)}
                        className="inline-flex items-center space-x-1 text-[#947444] font-bold hover:text-charcoal uppercase tracking-widest transition-colors font-mono"
                      >
                        <span>{lang === "DE" ? "Bibliothek-Zugang anfordern" : "Request Archival Vault Access"}</span>
                        <span className="text-sm">→</span>
                      </a>
                    </div>
                    <p className="text-[10px] text-charcoal/40 leading-relaxed font-mono">
                      {lang === "DE" 
                        ? "HINWEIS: Das Kompendium dient der wissenschaftlichen Einordnung und Information für Bestandsmandanten. Eine Vervielfältigung oder Weitergabe erfordert die schriftliche Freigabe durch Dr. Konstantin Filbinger." 
                        : "NOTICE: The library is optimized for scientific purposes and existing enterprise clients. Any duplication or redistribution requires prior written consent from Dr. Konstantin Filbinger."}
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>

        {/* SECTION 5: "VERGÜTUNG" (TRANSPARENT VALUE-BASED FLAT RATES & COST ESTIMATOR) */}
        <section id="verguetung" className="py-16 md:py-24 border-b border-charcoal/10">
          <div className="space-y-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red">04 / {d.verguetung.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.verguetung.subtitle}</h2>
          </div>

          <div className="max-w-3xl space-y-8">
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
              {d.verguetung.intro}
            </p>

            <div>
              <a
                href={`mailto:${CONTACT_FORM_RECIPIENT}?subject=${
                  encodeURIComponent(lang === "DE" ? "Moderne Rechtsberatung / Anfrage" : "Modern Legal Advisory / Inquiry")
                }&body=${
                  encodeURIComponent(
                    lang === "DE" 
                      ? "Sehr geehrter Herr Dr. Filbinger,\n\nich habe Ihre Webseite besucht und würde mich gerne zu einem gesellschaftsrechtlichen bzw. vertraglichen Projekt austauschen.\n\nMit freundlichen Grüßen" 
                      : "Dear Dr. Filbinger,\n\nI visited your website and would like to discuss a corporate or contract law matter.\n\nBest regards"
                  )
                }`}
                className="inline-flex justify-center items-center py-3.5 px-10 font-mono text-xs uppercase tracking-widest text-paper-light bg-charcoal hover:bg-charcoal/85 transition-all duration-300"
              >
                <span>{lang === "DE" ? "Klingt gut" : "Sounds good"}</span>
              </a>
            </div>
          </div>

          <p className="text-[11px] text-charcoal/50 text-right mt-16 font-mono">
            * {d.verguetung.note}
          </p>
        </section>

        {/* SECTION 6: "LET'S GO" (CONTACT & INTERACTIVE EMBEDDED CALENDAR SCHEDULER) */}
        <section id="letsgo" className="py-16 md:py-24">
          <div className="space-y-4 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-red">05 / {d.letsgo.title}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">{d.letsgo.subtitle}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Hand Side: Redesigned Consultative Intake & Optional Booking Journey */}
            <div className="lg:col-span-12 xl:col-span-7 bg-white border border-charcoal/15 p-6 md:p-8 shadow-sm">
              
              {bookingStep === "intake" ? (
                /* STEP 1 & 2 & 3: Refined Intake Experience */
                <form onSubmit={handleIntakeSubmit} className="space-y-6">
                  <div className="space-y-3 pb-6 border-b border-charcoal/10">
                    <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal">
                      {lang === "DE" ? "Lassen Sie uns Ihr Anliegen verstehen." : "Let us understand your challenge."}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                      {lang === "DE" 
                        ? "Unser Anspruch ist strategische Klarheit und präzise Risikobewertung ab dem ersten Kontakt. Beschreiben Sie kurz Ihr transaktionales Vorhaben – wir melden uns innerhalb von 24 Stunden."
                        : "Our standard is strategic clarity and meticulous risk assessment from the very first contact. Briefly outline your project – we typically respond within 24 hours."}
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-4">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.name} *</label>
                        <input
                          type="text"
                          required
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                          placeholder="z.B. Dr. Alexander Weber"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.company}</label>
                        <input
                          type="text"
                          value={bookingForm.company}
                          onChange={(e) => setBookingForm({...bookingForm, company: e.target.value})}
                          className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                          placeholder="z.B. CoreTech GmbH"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.email} *</label>
                        <input
                          type="email"
                          required
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                          className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                          placeholder="weber[at]coretech.io"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.phone}</label>
                        <input
                          type="tel"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                          className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                          placeholder="z.B. +49 89 1234567"
                        />
                      </div>
                    </div>

                    {/* Highlighted Core Challenge Intake field */}
                    <div className="space-y-1.5 p-4 border border-charcoal/15 bg-paper-light/40 rounded-none shadow-xs">
                      <label className="block text-[10px] uppercase font-mono tracking-widest text-[#1B2A4A] font-bold">
                        {d.letsgo.inputs.challenge} *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingForm.challenge}
                        onChange={(e) => setBookingForm({...bookingForm, challenge: e.target.value})}
                        className="w-full bg-white border border-charcoal/20 px-3 py-2 text-xs font-serif italic text-[#1B2A4A] focus:border-[#C0823E] focus:outline-none transition-all"
                        placeholder={d.letsgo.inputs.challengePlaceholder}
                      />
                    </div>

                    {/* Preferred Contact Method Selection Step 3 */}
                    <div className="space-y-2 pt-2">
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">
                        {d.letsgo.inputs.preferredContact}
                      </span>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => setBookingForm({...bookingForm, preferredContact: "call"})}
                          className={`flex flex-col items-center justify-center p-3 border transition-all text-center gap-1 cursor-pointer ${
                            bookingForm.preferredContact === "call"
                              ? "border-[#C0823E] bg-charcoal text-white font-bold"
                              : "border-charcoal/10 hover:border-charcoal/50 bg-paper-light/35 text-charcoal/70 font-medium"
                          }`}
                        >
                          <Phone className="h-4 w-4" />
                          <span className="font-mono text-[10px] tracking-wide uppercase">
                            {d.letsgo.inputs.contactCallback}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setBookingForm({...bookingForm, preferredContact: "videocall"})}
                          className={`flex flex-col items-center justify-center p-3 border transition-all text-center gap-1 cursor-pointer ${
                            bookingForm.preferredContact === "videocall"
                              ? "border-[#C0823E] bg-charcoal text-white font-bold"
                              : "border-charcoal/10 hover:border-charcoal/50 bg-paper-light/35 text-charcoal/70 font-medium"
                          }`}
                        >
                          <Camera className="h-4 w-4" />
                          <span className="font-mono text-[10px] tracking-wide uppercase">
                            {d.letsgo.inputs.contactVideo}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setBookingForm({...bookingForm, preferredContact: "email"})}
                          className={`flex flex-col items-center justify-center p-3 border transition-all text-center gap-1 cursor-pointer ${
                            bookingForm.preferredContact === "email"
                              ? "border-[#C0823E] bg-charcoal text-white font-bold"
                              : "border-charcoal/10 hover:border-charcoal/50 bg-paper-light/35 text-charcoal/70 font-medium"
                          }`}
                        >
                          <Mail className="h-4 w-4" />
                          <span className="font-mono text-[10px] tracking-wide uppercase">
                            {d.letsgo.inputs.contactEmail}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Additional Message Details */}
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-charcoal/60">{d.letsgo.inputs.message}</label>
                      <textarea
                        rows={3}
                        value={bookingForm.message}
                        onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                        className="w-full bg-paper-light border border-charcoal/20 px-3 py-2 text-xs focus:border-[#C0823E] focus:outline-none transition-all placeholder-charcoal/35"
                        placeholder={lang === "DE" ? "z.B. Beteiligungsvertrag der Serie A liegt vor, Prüfung bis Ende nächster Woche gewünscht." : "e.g., Series A investment agreement drafted, review required by end of next week."}
                      />
                    </div>
                  </div>

                  {/* Submission and Reassurance */}
                  <div className="pt-4 border-t border-charcoal/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-[11px] font-mono text-charcoal/55 italic">
                        {lang === "DE" 
                          ? "• Wir melden uns in der Regel innerhalb von 24 Stunden mit einem passenden nächsten Schritt."
                          : "• We typically reply within 24 hours with a custom next step."}
                      </div>
                      <button
                        type="submit"
                        className="bg-charcoal text-white hover:bg-[#C0823E] transition-all px-8 py-3 font-mono text-xs uppercase tracking-widest font-bold self-end md:self-auto cursor-pointer shadow-sm border border-charcoal/10 shadow-stone-100"
                      >
                        {d.letsgo.inputs.submit}
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                /* STEP 4: Success State with UNLOCKED optional calendar routing */
                <div className="space-y-8">
                  
                  {/* Success Notification Banner */}
                  <div className="bg-[#FAF8F4] border border-[#C0823E]/30 p-6 md:p-8 space-y-4 shadow-sm relative overflow-hidden">
                    {/* Corner architectural style tag */}
                    <div className="absolute top-0 right-0 bg-[#C0823E] text-white font-mono text-[8.5px] uppercase tracking-widest px-3 py-1 font-bold">
                      {lang === "DE" ? "ANFRAGE ERFASST" : "INQUIRY REGISTERED"}
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-amber-50 border border-[#C0823E]/20 flex items-center justify-center text-[#C0823E] flex-shrink-0">
                        <Check className="h-5 w-5" />
                      </div>
                      <div className="space-y-2 text-left">
                        <h4 className="font-serif text-lg md:text-xl font-bold text-charcoal leading-tight">
                          {lang === "DE" ? "Herzlichen Dank." : "Thank you very much."}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                          {d.letsgo.successMessage}
                        </p>
                        <p className="font-mono text-[11px] text-[#C0823E] font-semibold italic">
                          {lang === "DE" 
                            ? "Wir analysieren Ihre Daten und kontaktieren Sie innerhalb von 24 Stunden bezüglich des nächsten Schrittes."
                            : "We serve strategic diagnostics on your inquiry and will connect with you within 24 hours."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Redirection / Copy ticket */}
                  <div className="border border-charcoal/12 bg-white p-4 font-mono text-[11px] text-charcoal/85 max-w-xl space-y-2">
                    <div className="flex justify-between border-b border-charcoal/10 pb-2 font-bold uppercase tracking-wider text-[10px]">
                      <span>VARDA LEGAL DOCKET REF</span>
                      <span className="text-[#C0823E]">#VL-{Math.floor(Math.random() * 90000) + 10000}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                      <p><strong>{lang === "DE" ? "Kompagnon" : "Correspondent"}:</strong> {bookingForm.name}</p>
                      <p><strong>{lang === "DE" ? "Kanzlei / Firma" : "Entity"}:</strong> {bookingForm.company || "Private Advisory"}</p>
                      <p><strong>E-Mail:</strong> {bookingForm.email}</p>
                      <p><strong>{lang === "DE" ? "Telefon" : "Direct Dial"}:</strong> {bookingForm.phone || "N/A"}</p>
                      <p className="col-span-1 sm:col-span-2"><strong>{lang === "DE" ? "Büromodus" : "Preferred Method"}:</strong> {
                        bookingForm.preferredContact === "call" ? (lang === "DE" ? "Rückruf" : "Phone Callback") : 
                        bookingForm.preferredContact === "videocall" ? (lang === "DE" ? "Videocall (Teams)" : "Video Conference") : 
                        "E-Mail"
                      }</p>
                      <p className="col-span-1 sm:col-span-2 border-t border-charcoal/5 pt-2"><strong>{lang === "DE" ? "Zentrales Anliegen" : "Matter Core"}:</strong> <br/><span className="text-charcoal italic">"{bookingForm.challenge}"</span></p>
                    </div>
                  </div>

                  {/* UNLOCKED OPTIONAL CALENDAR BLOCK */}
                  <div className="border-t border-charcoal/15 pt-8 space-y-6">
                    <div className="space-y-2 text-left">
                      <h3 className="font-serif text-lg md:text-xl font-medium text-charcoal flex items-center gap-2">
                        <Calendar className="h-5 text-[#C0823E]" />
                        {d.letsgo.calendarTitle}
                      </h3>
                      <p className="font-sans text-xs text-charcoal/65 leading-relaxed">
                        {d.letsgo.calendarDesc}
                      </p>
                    </div>

                    {!optionalScheduled ? (
                      <div className="space-y-6 bg-paper-light/35 p-5 border border-charcoal/10 text-left">
                        {/* Selector of duration for optional call */}
                        <div className="space-y-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/55">Select Meeting Scope:</span>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              onClick={() => setSelectedMeetingType("15min")}
                              className={`py-2 text-center text-xs font-mono uppercase transition-all border cursor-pointer ${
                                selectedMeetingType === "15min" 
                                  ? "bg-charcoal text-white border-charcoal font-bold" 
                                  : "bg-white text-charcoal/50 border-charcoal/15 hover:text-charcoal hover:border-charcoal/30"
                              }`}
                            >
                              15 Min • Initial Quick Check
                            </button>
                            <button
                              onClick={() => setSelectedMeetingType("45min")}
                              className={`py-2 text-center text-xs font-mono uppercase transition-all border cursor-pointer ${
                                selectedMeetingType === "45min" 
                                  ? "bg-charcoal text-white border-charcoal font-bold" 
                                  : "bg-white text-charcoal/50 border-charcoal/15 hover:text-charcoal hover:border-charcoal/30"
                              }`}
                            >
                              45 Min • Detailed Diagnostic
                            </button>
                          </div>
                        </div>

                        {/* Booking calendar details */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/55">
                              {lang === "DE" ? "Datum wählen (Mai 2026)" : "Select Date (May 2026)"}
                            </span>
                            <div className="grid grid-cols-5 gap-2">
                              {mockDays.map((dayObj, i) => (
                                <button
                                  key={i}
                                  onClick={() => {
                                    setSelectedDay(dayObj.day);
                                    setSelectedTimeSlot(null);
                                  }}
                                  className={`p-3 border flex flex-col items-center justify-center transition-all cursor-pointer ${
                                    selectedDay === dayObj.day 
                                      ? "border-[#C0823E] bg-charcoal text-white font-bold" 
                                      : "border-charcoal/10 hover:border-charcoal/60 bg-white text-charcoal/70"
                                  }`}
                                >
                                  <span className="text-[10px] font-mono opacity-50 uppercase">{dayObj.label}</span>
                                  <span className="font-mono font-bold text-sm mt-0.5">{dayObj.day}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Time selection */}
                          {selectedDay ? (
                            <div className="space-y-3 animate-fade-in">
                              <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/55">
                                {lang === "DE" ? `Verfügbare Uhrzeiten am ${selectedDay}. Mai` : `Available slots on May ${selectedDay}th`}
                              </span>
                              <div className="grid grid-cols-3 gap-2">
                                {mockDays.find(d => d.day === selectedDay)?.slots.map((slot) => (
                                  <button
                                    key={slot}
                                    onClick={() => setSelectedTimeSlot(slot)}
                                    className={`py-2 text-center text-xs font-mono border transition-all cursor-pointer ${
                                      selectedTimeSlot === slot 
                                        ? "bg-[#C0823E] border-[#C0823E] text-white font-bold" 
                                        : "bg-white border-charcoal/10 hover:border-charcoal text-charcoal/80"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                ))}
                              </div>

                              {/* Trigger Booking confirmation */}
                              {selectedTimeSlot && (
                                <div className="pt-4 text-right">
                                  <button
                                    onClick={() => handleScheduleSubmit()}
                                    className="bg-charcoal text-white hover:bg-[#C0823E] py-2.5 px-6 font-mono text-xs uppercase tracking-widest font-bold transition-all cursor-pointer shadow-sm border border-charcoal/10"
                                  >
                                    <span>{lang === "DE" ? "Terminerfassung abschließen" : "Reserve Time Slot"}</span>
                                  </button>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="border border-dashed border-charcoal/15 bg-white p-6 text-center">
                              <span className="text-xs font-mono text-charcoal/40 italic">
                                {lang === "DE" ? "Bitte wählen Sie erst ein Datum oben." : "Please select an available booking date first."}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Scheduled Success Ticket */
                      <div className="bg-[#FAF8F4] border border-[#C0823E]/40 p-5 space-y-3 text-left shadow-sm">
                        <span className="bg-[#C0823E] text-white px-2 py-0.5 text-[9px] font-bold tracking-widest font-mono uppercase">
                          {lang === "DE" ? "ZEITFENSTER RESERVIERT" : "TIME SLOT CAPTURED"}
                        </span>
                        <h4 className="font-serif text-base font-bold text-charcoal">
                          {lang === "DE" ? "Terminslot im Kalender vorgemerkt!" : "Advisory slot captured!"}
                        </h4>
                        <div className="font-sans text-xs text-charcoal/85 space-y-1.5 pt-2 border-t border-charcoal/10">
                          <p><strong>{lang === "DE" ? "Typ" : "Meeting Scope"}:</strong> {selectedMeetingType === "15min" ? "15-Min Fast Check" : "45-Min Strategy Diagnostic"}</p>
                          <p><strong>{lang === "DE" ? "Uhrzeit" : "Schedule"}:</strong> 2026-05-{selectedDay} um {selectedTimeSlot} Uhr (Europe/Berlin)</p>
                          <p className="text-charcoal/60 pt-2 italic text-[11px]">
                            {lang === "DE" 
                              ? "* Dieser Termin wurde in unseren Systemen blockiert. Nach erfolgreicher diagnostischer Prüfung des intake-Anliegens erhalten Sie eine offizielle digitale Kalendereinladung."
                              : "* This spot has been locked in our docket. Upon diagnostic alignment on your project core, you will receive a secure calendar invite."}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Reset form view trigger */}
                  <div className="pt-4 border-t border-charcoal/5 text-right">
                    <button
                      onClick={() => {
                        setBookingStep("intake");
                        setSelectedDay(null);
                        setSelectedTimeSlot(null);
                        setOptionalScheduled(false);
                        setBookingForm({ name: "", email: "", company: "", phone: "", challenge: "", message: "", preferredContact: "call" });
                      }}
                      className="text-xs font-mono text-[#C0823E] hover:text-charcoal border border-[#C0823E]/35 hover:border-charcoal px-3 py-1.5 transition-all cursor-pointer font-semibold uppercase tracking-wider"
                    >
                      {lang === "DE" ? "Zurück zum Hauptformular" : "New Request"}
                    </button>
                  </div>
                </div>
              )}

              {/* Status footer for scheduler */}
              <div className="mt-6 pt-4 border-t border-charcoal/10 flex justify-between items-center font-mono text-[10px] text-charcoal/40">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-blockAnimation" />
                  {d.letsgo.calendarStatus}
                </span>
                <span>Active timezone: GMT+2 (Munich)</span>
              </div>
            </div>

            {/* Right Hand Side: Address / Legal Contact coordinates */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Approachable Founder Contact Card */}
              <div className="border border-charcoal/15 bg-white p-5 md:p-6 space-y-4 group">
                <div className="relative w-full aspect-square bg-[#FAF8F4] overflow-hidden border border-charcoal/10">
                  <img
                    src={konstiImage}
                    alt="Dr. Konstantin Filbinger - Direct Contact"
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C0823E] font-bold">
                    {lang === "DE" ? "DIREKTER KONTAKT" : "DIRECT DIAL"}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Dr. Konstantin Filbinger
                  </h4>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    {lang === "DE" 
                      ? "Mandatsanfragen prüfe ich immer persönlich. Lassen Sie uns unkompliziert über Ihr Vorhaben sprechen."
                      : "I review all inbound inquiries personally. Let's arrange a straightforward call to map out the next steps for your project."}
                  </p>
                </div>
              </div>
              
              {/* Munich HQ Station */}
              <div className="border border-charcoal/15 bg-white p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-brand-red text-xs font-mono">
                  <MapPin className="h-4" />
                  <span className="uppercase tracking-widest">{d.letsgo.addressTitle}</span>
                </div>
                
                <h4 className="font-serif text-2xl font-bold text-charcoal leading-tight">
                  Auenstraße 21<br />
                  80469 München<br />
                  Deutschland
                </h4>
              </div>

              {/* Direct coordinates */}
              <div className="border border-charcoal/15 bg-white p-6 md:p-8 space-y-4 font-mono text-xs">
                {/* Mail */}
                <div className="flex items-start space-x-3 py-1.5 border-b border-charcoal/5">
                  <Mail className="h-4 text-brand-red mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-charcoal/40 text-[10px]">{d.letsgo.emailTitle}</span>
                    <p className="font-semibold text-charcoal">info[at]vardalegal.com</p>
                  </div>
                </div>

                {/* Clock info */}
                <div className="flex items-start space-x-3 py-1.5">
                  <Clock className="h-4 text-brand-red mt-0.5" />
                  <div className="space-y-0.5 text-[10px] text-charcoal/60 leading-normal">
                    <span className="text-charcoal uppercase tracking-wider font-bold">DEUTSCHLAND • EST</span>
                    <p>Mon – Fr: 09:00 – 18:00 (CET)</p>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </section>
        
        {/* Relocated Noble Navigation Visual Showcase to the bottom of main */}
        <div className="mt-16 sm:mt-24 mb-16 border border-charcoal/15 bg-[#faf8f4] p-4 md:p-6 shadow-sm">
          {/* The Static Navigation Image in full size, uncropped, clean display */}
          <img 
            src={lang === "DE" ? vardalegalEndframe : vardalegalEndframeEng}
            alt="Strategic Navigation and Precision - Varda Legal"
            referrerPolicy="no-referrer"
            className="w-full h-auto block rounded shadow border border-charcoal/10"
          />

          {/* Sovereign, reduced professional slide footer */}
          <div className="mt-6 pt-3 border-t border-charcoal/10 text-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal/40 block leading-relaxed">
              Varda Legal | Dr. Konstantin Filbinger | Rechtsanwalt für Gesellschaftsrecht, Vertragsrecht, M&A und Tech | München
            </span>
          </div>
        </div>
        
        </>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-charcoal/15 bg-white py-12 text-charcoal/80">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Branding col */}
            <div className="space-y-3">
              <div className="font-display font-bold text-sm tracking-wider uppercase text-charcoal">VARDA LEGAL</div>
              <p className="text-xs text-charcoal/65 leading-relaxed font-sans">
                {lang === "DE" 
                  ? "Rechtsanwalt Dr. Konstantin Filbinger • Corporate, Commercial, M&A und Tech." 
                  : "Dr. Konstantin Filbinger • Corporate, Commercial, M&A and Tech counsel."}
              </p>
              {/* Languages switch */}
              <div className="pt-2 flex items-center space-x-3 font-mono text-xs">
                <span className="text-charcoal/40 text-[10px] uppercase font-bold">{lang === "DE" ? "Sprache:" : "Language:"}</span>
                <button 
                  onClick={() => setLang("DE")}
                  className={`px-1.5 py-0.5 font-bold transition-colors cursor-pointer ${lang === "DE" ? "text-brand-red border-b border-brand-red" : "text-charcoal/50 hover:text-charcoal"}`}
                >
                  DE
                </button>
                <span className="text-charcoal/20">•</span>
                <button 
                  onClick={() => setLang("EN")}
                  className={`px-1.5 py-0.5 font-bold transition-colors cursor-pointer ${lang === "EN" ? "text-brand-red border-b border-brand-red" : "text-charcoal/50 hover:text-charcoal"}`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold tracking-widest">
                {lang === "DE" ? "Navigation" : "Navigation"}
              </div>
              <ul className="space-y-2 font-sans text-xs">
                <li><a href="#situations" className="hover:text-brand-red transition-all">{lang === "DE" ? "Wann Varda hilft" : "When Varda is useful"}</a></li>
                <li><a href="#fokus" className="hover:text-brand-red transition-all">{lang === "DE" ? "Beratungsfelder" : "Areas of Expertise"}</a></li>
                <li><a href="#beispiel-output" className="hover:text-brand-red transition-all">{lang === "DE" ? "Beispiel-Arbeitsergebnis" : "Example Work Product"}</a></li>
                <li><a href="#produkte" className="hover:text-brand-red transition-all">{lang === "DE" ? "Produkte" : "Products"}</a></li>
                <li><a href="#methodik" className="hover:text-brand-red transition-all">{lang === "DE" ? "Arbeitsweise" : "Methodology"}</a></li>
                <li><a href="#wir" className="hover:text-brand-red transition-all">{lang === "DE" ? "Über Varda" : "About Varda"}</a></li>
                <li><a href="#denkwerk" className="hover:text-brand-red transition-all">{lang === "DE" ? "Einblicke" : "Insights"}</a></li>
                <li><a href="#verguetung" className="hover:text-brand-red transition-all">{lang === "DE" ? "Honorare" : "Fees"}</a></li>
                <li><a href="#letsgo" className="hover:text-brand-red transition-all">{lang === "DE" ? "Kontakt" : "Contact"}</a></li>
                <li><a href={lang === "DE" ? "#navigator" : "#en/navigator"} onClick={() => setCurrentView("navigator")} className="hover:text-brand-red transition-all font-semibold text-[#C0823E]">Navigator</a></li>
              </ul>
            </div>

            {/* Direct Contact & Social */}
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold tracking-widest">
                {lang === "DE" ? "Kontakt & Netzwerk" : "Contact & Social"}
              </div>
              <ul className="space-y-2 font-mono text-xs">
                <li className="font-semibold text-charcoal">info[at]vardalegal.com</li>
                <li className="text-charcoal/70">Auenstraße 21, 80469 München</li>
                <li className="pt-2">
                  <a 
                    href="https://www.linkedin.com/in/dr-konstantin-filbinger-b6a3b2a2/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-red hover:text-charcoal font-bold transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal pages & Disclaimer */}
            <div className="space-y-3 text-xs text-charcoal/60 leading-relaxed font-mono">
              <div className="font-mono text-[10px] uppercase text-charcoal/40 font-bold tracking-widest">
                {lang === "DE" ? "Rechtliches" : "Legal"}
              </div>
              <p className="text-[10px] text-charcoal/60">
                {lang === "DE" 
                  ? "Dr. Konstantin Filbinger ist als Rechtsanwalt in der Bundesrepublik Deutschland zugelassen und Mitglied der Rechtsanwaltskammer für den Oberlandesgerichtsbezirk München." 
                  : "Dr. Konstantin Filbinger is admitted to the German bar (Rechtsanwalt, Germany) and is a member of the Munich Bar Association."}
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-charcoal/50">
            <div>
              © 2026 Dr. Konstantin Filbinger. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => setActiveLegalModal("impressum")} className="hover:text-brand-red cursor-pointer bg-transparent border-none p-0 text-xs font-mono text-charcoal/60">
                Impressum
              </button>
              <span>•</span>
              <button onClick={() => setActiveLegalModal("datenschutz")} className="hover:text-brand-red cursor-pointer bg-transparent border-none p-0 text-xs font-mono text-charcoal/60">
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Executive Clarity Image */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/90 backdrop-blur-md cursor-pointer"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-white border border-charcoal/15 shadow-2xl flex flex-col p-2 sm:p-4 rounded-none cursor-default"
            >
              {/* Image Frame with Close Button */}
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={() => setIsImageModalOpen(false)}
                  className="p-1.5 bg-charcoal text-white hover:bg-brand-red rounded-full transition-colors flex items-center justify-center cursor-pointer shadow-md border-none"
                  aria-label="Close lightbox"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto flex items-center justify-center bg-stone-50 border border-charcoal/5">
                <img 
                  src={execFigmaImage}
                  alt={lang === "DE" 
                    ? "Zweiseitiges fiktives Executive-Clarity-Beispiel mit strukturierter rechtlicher Analyse und Empfehlung zur Gestaltung einer deutschen GmbH und einer Gesellschaftervereinbarung."
                    : "Two-page fictional Executive Clarity example showing Varda’s structured legal analysis and recommendation for a German GmbH and shareholders’ agreement."}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[82vh] object-contain block mx-auto"
                />
              </div>

              {/* Caption or label at the bottom of the lightbox */}
              <div className="pt-3 px-2 flex justify-between items-center text-xs font-sans text-charcoal/60">
                <span className="font-serif italic font-medium">
                  {lang === "DE" 
                    ? "Varda Legal — Executive Clarity Beispiel" 
                    : "Varda Legal — Executive Clarity Example"}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider">
                  {lang === "DE" ? "Klicken Sie außerhalb zum Schließen" : "Click outside to close"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elegant, high-fashion legal notices modal */}
      <AnimatePresence>
        {activeLegalModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/85 backdrop-blur-md"
            onClick={() => setActiveLegalModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden bg-[#FAF8F4] border border-charcoal/15 shadow-2xl rounded text-charcoal flex flex-col font-sans"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-charcoal/10 bg-white">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                  {lang === "DE" ? "Rechtliche Hinweise" : "Legal Declarations"}
                </span>
                <button 
                  onClick={() => setActiveLegalModal(null)}
                  className="p-1 text-charcoal/50 hover:text-charcoal hover:bg-charcoal/5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Core Content Scroll Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 select-text">
                {activeLegalModal === "impressum" ? (
                  lang === "DE" ? (
                    // IMPRESSUM DEUTSCH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Impressum</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Angaben gemäß § 5 TMG / § 18 MStV</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Diensteanbieter</h3>
                          <p className="mt-1 font-serif text-base text-charcoal">
                            Varda Legal<br />
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21<br />
                            80469 München
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Kontakt</h3>
                          <table className="mt-1 w-full text-sm font-mono text-charcoal/85 max-w-sm">
                            <tbody>
                              <tr>
                                <td className="py-1 w-24">E-Mail:</td>
                                <td className="py-1 font-semibold text-brand-red">info[at]vardalegal.com</td>
                              </tr>
                              <tr>
                                <td className="py-1">Web:</td>
                                <td className="py-1">www.vardalegal.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Berufsbezeichnung und zuständige Kammer</h3>
                          <p className="mt-1">
                            Dr. Konstantin Filbinger ist in der Bundesrepublik Deutschland als Rechtsanwalt zugelassen und Mitglied der zuständigen Aufsichtsbehörde:
                          </p>
                          <p className="mt-2 bg-charcoal/5 p-3 rounded font-serif text-sm">
                            <strong>Rechtsanwaltskammer für den Oberlandesgerichtsbezirk München</strong><br />
                            Körperschaft des öffentlichen Rechts<br />
                            Tal 33, 80331 München<br />
                            Tel: +49 (0) 89 / 53 29 44-0<br />
                            Web: <a href="https://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer" className="underline text-[#002f6c] hover:text-brand-red">www.rak-muenchen.de</a>
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Berufsrechtliche Regelungen</h3>
                          <p className="mt-1">
                            Für in Deutschland zugelassene Rechtsanwälte gelten die folgenden maßgeblichen berufsrechtlichen Vorschriften:
                          </p>
                          <ul className="mt-2 list-disc pl-5 space-y-1 font-mono text-xs text-charcoal/70">
                            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                            <li>Fachanwaltsordnung (FAO)</li>
                            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                            <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Diese Regelungen können auf der Website der Bundesrechtsanwaltskammer unter <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">www.brak.de</a> im Bereich „Berufsrecht“ eingesehen werden.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Berufshaftpflichtversicherung</h3>
                          <p className="mt-1">
                            Dialog Versicherung AG, Adenauerring 7, 81373 München.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">6. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21, 80469 München
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // IMPRESSUM ENGLISH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Legal Information</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Required disclosures according to § 5 TMG / § 18 MStV</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Service Provider</h3>
                          <p className="mt-1 font-serif text-base text-charcoal">
                            Varda Legal<br />
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21<br />
                            80469 Munich, Germany
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Contact</h3>
                          <table className="mt-1 w-full text-sm font-mono text-charcoal/85 max-w-sm">
                            <tbody>
                              <tr>
                                <td className="py-1 w-24">Email:</td>
                                <td className="py-1 font-semibold text-brand-red">info[at]vardalegal.com</td>
                              </tr>
                              <tr>
                                <td className="py-1">Web:</td>
                                <td className="py-1">www.vardalegal.com</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Admission & Competent Bar Association</h3>
                          <p className="mt-1">
                            Dr. Konstantin Filbinger is admitted as a German Attorney-at-Law (Rechtsanwalt) under the laws of the Federal Republic of Germany and is a member of the competent regulatory bar association:
                          </p>
                          <p className="mt-2 bg-charcoal/5 p-3 rounded font-serif text-sm">
                            <strong>Munich Bar Association (Rechtsanwaltskammer München)</strong><br />
                            Körperschaft des öffentlichen Rechts<br />
                            Tal 33, 80331 Munich, Germany<br />
                            Phone: +49 (0) 89 / 53 29 44-0<br />
                            Web: <a href="https://www.rak-muenchen.de" target="_blank" rel="noopener noreferrer" className="underline text-[#002f6c] hover:text-brand-red">www.rak-muenchen.de</a>
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Professional Regulations</h3>
                          <p className="mt-1">
                            German Attorneys-at-Law are governed by the following relevant regulations:
                          </p>
                          <ul className="mt-2 list-disc pl-5 space-y-1 font-mono text-xs text-charcoal/70">
                            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                            <li>Fachanwaltsordnung (FAO)</li>
                            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                            <li>CCBE Code of Conduct (for lawyers in the EU)</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Access to these legislative acts is available on the website of the German Federal Bar (Bundesrechtsanwaltskammer) at <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-red">www.brak.de</a> under the category "Berufsrecht".
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Professional Liability Insurance</h3>
                          <p className="mt-1">
                            Dialog Versicherung AG, Adenauerring 7, 81373 München.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">6. Person Responsible for Content pursuant to § 18 (2) MStV</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger<br />
                            Auenstraße 21, 80469 Munich, Germany
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  lang === "DE" ? (
                    // DATENSCHUTZENERKLÄRUNG DEUTSCH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Datenschutzerklärung</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Datenschutz & Verarbeitung personenbezogener Daten nach DSGVO</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Verantwortliche Stelle</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger, Varda Legal, Auenstraße 21, 80469 München, E-Mail: <span className="text-brand-red font-mono font-semibold">info[at]vardalegal.com</span>.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Erfassung and Speicherung personenbezogener Daten beim Besuch der Website</h3>
                          <p className="mt-1">
                            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät genutzten Webbrowser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Daten werden dabei erfasst und bis zur automatisierten Löschung gespeichert:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li>IP-Adresse des anfragenden Rechners,</li>
                            <li>Datum und Uhrzeit des Zugriffs,</li>
                            <li>Name und URL der abgerufenen Datei,</li>
                            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners.</li>
                          </ul>
                          <p className="mt-2">
                            Die Verarbeitung dieser Daten erfolgt auf Basis von Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den Zwecken der Gewährleistung eines reibungslosen Verbindungsaufbaus, der Systemsicherheit und der technischen Stabilität der Website.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Nutzung unseres Online-Schedulers & Kontaktformulars</h3>
                          <p className="mt-1">
                            Bei Anfragen über das Online-Terminbuchungssystem (Scheduler) oder das Kontaktformular erheben wir Ihren Namen, Ihre E-Mail-Adresse, den Namen Ihres Unternehmens sowie Ihre optionale Nachricht. Die Erfassung dient dazu, die Anfrage dem anfragenden Akteur zuzuordnen, Termine festzulegen und die Anbahnung einer professionellen Beratung ordnungsgemäß zu steuern.
                          </p>
                          <p className="mt-1 text-xs font-mono text-charcoal/60">
                            Rechtsgrundlage der Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. b DSGVO (vertragliche oder vorvertragliche Maßnahmen auf Anfrage der betroffenen Person).
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Weitergabe von Daten an Dritte</h3>
                          <p className="mt-1">
                            Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt ausschließlich zur Erbringung unserer kanzleieigenen IT-Dienstleistungen (z.B. Hosting-Anbieter) im Rahmen einer Auftragsverarbeitungsvereinbarung (Art. 28 DSGVO) oder bei Vorliegen einer gesetzlichen Verpflichtung. Ein Verkauf oder eine unbefugte Weitergabe Ihrer Daten findet zu keinem Zeitpunkt statt.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Ihre Rechte als betroffene Person</h3>
                          <p className="mt-1 border-l-2 border-brand-red pl-3 italic">
                            Gemäß der Datenschutz-Grundverordnung stehen Ihnen umfangreiche Rechte zu:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                            <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer Daten verlangen.</li>
                            <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen, sofern dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                            <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung verlangen.</li>
                            <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können Ihre bereitgestellten Daten in einem strukturierten, gängigen Format erhalten.</li>
                            <li><strong>Recht auf Widerspruch (Art. 21 DSGVO):</strong> Sie können der Datenverarbeitung aus Gründen einer besonderen Situation widersprechen.</li>
                          </ul>
                          <p className="mt-2">
                            Zur Ausübung dieser Rechte genügt eine einfache E-Mail an <span className="text-brand-red font-mono font-bold">info[at]vardalegal.com</span>. Sie haben zudem das Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO).
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // DATENSCHUTZENERKLÄRUNG ENGLISH
                    <div className="space-y-6">
                      <div>
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal mb-4">Privacy Policy</h2>
                        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-widest">Data Protection & Privacy compliance under GDPR / DSGVO</p>
                      </div>

                      <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed border-t border-charcoal/10 pt-4">
                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">1. Responsible Entity</h3>
                          <p className="mt-1 font-serif">
                            Dr. Konstantin Filbinger, Varda Legal, Auenstraße 21, 80469 Munich, Germany, Email: <span className="text-brand-red font-mono font-semibold">info[at]vardalegal.com</span>.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">2. Collection and Storage of Personal Data when visiting this website</h3>
                          <p className="mt-1">
                            When calling up our website, the web browser used on your system transmits technical connection properties to our servers. These are temporarily logged in server log files, and include:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li>IP address of the requesting terminal,</li>
                            <li>Date and time of retrieval,</li>
                            <li>Filename and URL of the requested web file,</li>
                            <li>Browser type and your computer's operating system.</li>
                          </ul>
                          <p className="mt-2 text-xs">
                            Legal base of this processing is Art. 6 (1) (f) GDPR. Our legitimate interest results from the goal to guarantee safe connection stability, technical system security, and correct operation.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">3. Usage of our Contact and Meeting Scheduler System</h3>
                          <p className="mt-1">
                            If you schedule an appointment or submit an inquiry using our scheduling modules, we collect your name, email, company, and optional description. We do this to allocate the consultation slots correctly, coordinate transactions or projects, and steer professional communication.
                          </p>
                          <p className="mt-1 text-xs font-mono text-charcoal/60">
                            Legal base for this data processing is Art. 6 (1) (b) GDPR (steps prior to entering into a contract).
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">4. Information Sharing and Third Parties</h3>
                          <p className="mt-1">
                            Your personal data is solely shared with standard external hosting partners that operate under a signed Data Processing Agreement (DPA) to host this web service (Art. 28 GDPR). Your personal information is never sold, licensed, or shared with third parties for promotional purposes.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] font-mono">5. Your Data Protection Rights under GDPR</h3>
                          <p className="mt-1 border-l-2 border-brand-red pl-3 italic">
                            In accordance with GDPR, you hold the following rights:
                          </p>
                          <ul className="mt-2 list-disc pl-5 font-mono text-xs text-charcoal/70 space-y-1">
                            <li><strong>Right of Access (Art. 15 GDPR):</strong> Request clear summaries of your stored personal details.</li>
                            <li><strong>Right to Rectification (Art. 16 GDPR):</strong> Request prompt correction of inaccuracies.</li>
                            <li><strong>Right to Erasure (Art. 17 GDPR):</strong> Request permanent deletion of details if no retention obligations exist.</li>
                            <li><strong>Right to Restriction (Art. 18 GDPR):</strong> Request suspension of active computational processing.</li>
                            <li><strong>Right to Data Portability (Art. 20 GDPR):</strong> Request export of data in portable structures.</li>
                            <li><strong>Right to Object (Art. 21 GDPR):</strong> Object to processing based on legitimate interest under specific conditions.</li>
                          </ul>
                          <p className="mt-2">
                            To execute any of these rights, simply email us at <span className="text-brand-red font-mono font-bold">info[at]vardalegal.com</span>. You also have the right to lodge a complaint with a competent regulatory supervisory authority (Art. 77 GDPR).
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-charcoal/10 bg-white flex justify-end font-mono text-[9px] uppercase tracking-widest text-[#002f6c]/60">
                <span>Varda Legal Office • Munich</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

