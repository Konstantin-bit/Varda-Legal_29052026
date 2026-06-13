import React, { useState } from "react";
import { 
  ArrowRight, 
  Check, 
  RotateCcw, 
  Printer, 
  ChevronRight, 
  Plus, 
  X, 
  AlertTriangle,
  Info
} from "lucide-react";
import { Language } from "../types";

interface VardaNavigatorProps {
  lang: Language;
  onNavigateToConsult: (msg: string) => void;
  onGoBack?: () => void;
}

interface Question {
  id: string;
  questionText: { DE: string; EN: string };
  options: {
    key: string;
    text: { DE: string; EN: string };
  }[];
}

interface CheckConfig {
  id: string;
  title: { DE: string; EN: string };
  description: { DE: string; EN: string };
  questions: Question[];
  evaluateLogic: (answers: Record<string, string>) => "GREEN" | "YELLOW" | "RED";
}

export default function VardaNavigator({ lang, onNavigateToConsult, onGoBack }: VardaNavigatorProps) {
  // Navigation internal state
  const [activeCheckId, setActiveCheckId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showingResult, setShowingResult] = useState<boolean>(false);
  
  // Handover form state
  const [handoverSubmitted, setHandoverSubmitted] = useState<boolean>(false);
  const [handoverForm, setHandoverForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    note: "",
    agreed: false
  });

  // All 5 Check Configurations as explicitly outlined
  const checks: CheckConfig[] = [
    {
      id: "gmbh-measure",
      title: {
        DE: "GmbH-Maßnahme absichern",
        EN: "Safeguarding GmbH measures"
      },
      description: {
        DE: "Muss ein Gesellschafterbeschluss her? Dieser Check hilft Ihnen einzuordnen, ob eine geplante Maßnahme typischerweise in die laufende Geschäftsführung fällt oder ob ein Gesellschafterbeschluss naheliegt.",
        EN: "Is shareholder approval required? This check helps corporate leaders identify whether a measure fits standard management or requires a backing resolution."
      },
      questions: [
        {
          id: "q1",
          questionText: {
            DE: "Worum geht es bei der Maßnahme hauptsächlich?",
            EN: "What is the measure mainly about?"
          },
          options: [
            { key: "A", text: { DE: "Laufendes Tagesgeschäft / gewöhnlicher operativer Vorgang", EN: "Ordinary day-to-day business / routine operational matter" } },
            { key: "B", text: { DE: "Abschluss, Änderung oder Kündigung eines wirtschaftlich wichtigen Vertrags", EN: "Entering into, amending or terminating an economically important contract" } },
            { key: "C", text: { DE: "Bestellung, Abberufung oder Vergütung eines Geschäftsführers", EN: "Appointment, removal or remuneration of a managing director" } },
            { key: "D", text: { DE: "Änderung von Beteiligungen, Kapitalmaßnahmen, Einziehung/Übertragung von Geschäftsanteilen", EN: "Changes to shareholdings, capital measures, redemption or transfer of shares" } },
            { key: "E", text: { DE: "Erwerb oder Verkauf wesentlicher Vermögensgegenstände / Unternehmensteile", EN: "Acquisition or sale of significant assets or business units" } },
            { key: "F", text: { DE: "Geschäft mit Gesellschafter, Geschäftsführer oder nahestehender Person", EN: "Transaction with a shareholder, managing director or related person" } },
            { key: "G", text: { DE: "Unsicher / mehrere Punkte treffen zu", EN: "Unsure / several points apply" } }
          ]
        },
        {
          id: "q2",
          questionText: {
            DE: "Gibt es im Gesellschaftsvertrag, in einer Geschäftsordnung, einem Gesellschafterbeschluss oder einer internen Policy Zustimmungsvorbehalte für solche Maßnahmen?",
            EN: "Are there approval requirements in the articles of association, rules of procedure, shareholder resolutions or internal policies?"
          },
          options: [
            { key: "A", text: { DE: "Ja", EN: "Yes" } },
            { key: "B", text: { DE: "Nein", EN: "No" } },
            { key: "C", text: { DE: "Weiß ich nicht / Dokumente liegen mir gerade nicht vor", EN: "I do not know / documents are not available right now" } }
          ]
        },
        {
          id: "q3",
          questionText: {
            DE: "Wie wesentlich ist die Maßnahme wirtschaftlich oder strategisch?",
            EN: "How material is the measure economically or strategically?"
          },
          options: [
            { key: "A", text: { DE: "Geringe wirtschaftliche Bedeutung und leicht rückgängig zu machen", EN: "Low economic relevance and easy to reverse" } },
            { key: "B", text: { DE: "Mittlere Bedeutung oder nicht ohne Weiteres rückgängig zu machen", EN: "Medium relevance or not easily reversible" } },
            { key: "C", text: { DE: "Hohe Bedeutung, langfristige Bindung, erheblicher Betrag oder Reputationsrisiko", EN: "High relevance, long-term commitment, significant amount or reputational risk" } },
            { key: "D", text: { DE: "Es gibt Streit, Zeitdruck oder unterschiedliche Auffassungen unter Gesellschaftern/Geschäftsführern", EN: "There is a dispute, time pressure or differing views among shareholders/managing directors" } }
          ]
        }
      ],
      evaluateLogic: (ans) => {
        const q1 = ans.q1;
        const q2 = ans.q2;
        const q3 = ans.q3;

        if (q1 === "C" || q1 === "D") return "RED";
        if (q1 === "F") return "RED";
        if (q2 === "A" && (q3 === "C" || q3 === "D")) return "RED";
        if (q2 === "A" && (q3 === "A" || q3 === "B")) return "YELLOW";
        if (q2 === "C" && (q3 === "C" || q3 === "D")) return "RED";
        if (q2 === "C") return "YELLOW";
        if (q1 === "A" && q2 === "B" && q3 === "A") return "GREEN";
        if ((q1 === "B" || q1 === "E") && q3 === "A") return "YELLOW";
        if ((q1 === "B" || q1 === "E") && q3 === "B") return "YELLOW";
        if ((q1 === "B" || q1 === "E") && (q3 === "C" || q3 === "D")) return "RED";
        if (q1 === "G") {
          return (q3 === "C" || q3 === "D") ? "RED" : "YELLOW";
        }
        return "YELLOW"; // safe default
      }
    },
    {
      id: "revoke-proxy",
      title: {
        DE: "Prokura widerrufen",
        EN: "Revoking commercial power of attorney"
      },
      description: {
        DE: "Was sind typische nächste Schritte? Erkennt rechtliche Risiken und administrative Fristen beim Widerrufen einer Prokura.",
        EN: "What are the typical next steps? Assesses corporate roles and emergency contexts before revoking a commercial power of attorney."
      },
      questions: [
        {
          id: "q1",
          questionText: {
            DE: "Welche Rolle hat die betroffene Person neben der Prokura?",
            EN: "What role does the person hold besides being a proxy holder?"
          },
          options: [
            { key: "A", text: { DE: "Nur Prokurist/in", EN: "Only proxy holder / Prokurist" } },
            { key: "B", text: { DE: "Prokurist/in und Arbeitnehmer/in", EN: "Proxy holder and employee" } },
            { key: "C", text: { DE: "Prokurist/in und Geschäftsführer/in oder Organperson", EN: "Proxy holder and managing director or corporate body member" } },
            { key: "D", text: { DE: "Prokurist/in und Gesellschafter/in", EN: "Proxy holder and shareholder" } },
            { key: "E", text: { DE: "Unklar / mehrere Rollen möglich", EN: "Unclear / several roles possible" } }
          ]
        },
        {
          id: "q2",
          questionText: {
            DE: "Warum soll die Prokura widerrufen werden?",
            EN: "Why is the proxy being revoked?"
          },
          options: [
            { key: "A", text: { DE: "Organisatorische Änderung / neue Zuständigkeiten", EN: "Organizational change / new responsibilities" } },
            { key: "B", text: { DE: "Ausscheiden aus dem Unternehmen", EN: "Leaving the company" } },
            { key: "C", text: { DE: "Vertrauensverlust oder Konflikt", EN: "Loss of trust or conflict" } },
            { key: "D", text: { DE: "Verdacht auf Pflichtverletzung, Missbrauch oder drohender Schaden", EN: "Suspicion of duty violation, abuse or imminent damage" } },
            { key: "E", text: { DE: "Unklar / sonstiger Grund", EN: "Unclear / other reason" } }
          ]
        },
        {
          id: "q3",
          questionText: {
            DE: "Besteht ein Risiko, dass die Person kurzfristig noch im Außenverhältnis handelt?",
            EN: "Is there a risk of the person acting externally in the short term?"
          },
          options: [
            { key: "A", text: { DE: "Nein, kein akutes Risiko bekannt", EN: "No, no acute risk known" } },
            { key: "B", text: { DE: "Möglich, aber kein konkreter Anlass", EN: "Possible, but no specific reason" } },
            { key: "C", text: { DE: "Ja, es besteht akuter Handlungsbedarf", EN: "Yes, there is immediate need for action" } },
            { key: "D", text: { DE: "Unklar", EN: "Unclear" } }
          ]
        }
      ],
      evaluateLogic: (ans) => {
        const q1 = ans.q1;
        const q2 = ans.q2;
        const q3 = ans.q3;

        if (q1 === "A" && (q2 === "A" || q2 === "B") && q3 === "A") return "GREEN";
        if (q1 === "B") {
          return (q2 === "C" || q2 === "D") ? "RED" : "YELLOW";
        }
        if (q1 === "C" || q1 === "D") return "RED";
        if (q1 === "E") {
          return (q2 === "C" || q2 === "D" || q3 === "C") ? "RED" : "YELLOW";
        }
        if (q2 === "C" && (q3 === "B" || q3 === "C" || q3 === "D")) return "RED";
        if (q2 === "D") return "RED";
        if (q3 === "C") return "RED";
        if (q3 === "B" || q3 === "D") return "YELLOW";
        return "YELLOW";
      }
    },
    {
      id: "register-change",
      title: {
        DE: "Handelsregisteränderung",
        EN: "Commercial register change"
      },
      description: {
        DE: "Muss eine Änderung angemeldet werden? Identifiziert die Meldepflichten von Satzungs- oder Personaländerungen.",
        EN: "Does a change need to be filed? Analyzes whether changes in management, address or capital must be filed with the register."
      },
      questions: [
        {
          id: "q1",
          questionText: {
            DE: "Worum geht es bei der Änderung hauptsächlich?",
            EN: "What is the change mainly about?"
          },
          options: [
            { key: "A", text: { DE: "Änderung der Geschäftsanschrift", EN: "Change of business address" } },
            { key: "B", text: { DE: "Bestellung, Abberufung oder Änderung bei Geschäftsführern", EN: "Appointment, removal, or change of managing directors" } },
            { key: "C", text: { DE: "Erteilung oder Widerruf einer Prokura", EN: "Granting or revoking commercial power of attorney" } },
            { key: "D", text: { DE: "Änderung von Firma, Sitz, Unternehmensgegenstand oder Stammkapital", EN: "Change of company name, registered office, business purpose, or share capital" } },
            { key: "E", text: { DE: "Änderung bei Gesellschaftern / Geschäftsanteilen", EN: "Change in shareholders / shareholdings" } },
            { key: "F", text: { DE: "Interne Änderung ohne Außenwirkung, z. B. Zuständigkeiten, Reporting, interne Freigaben", EN: "Internal change without external impact, e.g., responsibilities, reporting, internal approvals" } },
            { key: "G", text: { DE: "Unklar / mehrere Themen betroffen", EN: "Unsure / multiple topics affected" } }
          ]
        },
        {
          id: "q2",
          questionText: {
            DE: "Wie ist der aktuelle Stand?",
            EN: "What is the current status?"
          },
          options: [
            { key: "A", text: { DE: "Noch geplant", EN: "Still in planning" } },
            { key: "B", text: { DE: "Intern beschlossen, aber noch nicht extern umgesetzt", EN: "Decided internally, but not yet implemented externally" } },
            { key: "C", text: { DE: "Bereits umgesetzt / kommuniziert", EN: "Already implemented / communicated" } },
            { key: "D", text: { DE: "Bereits im Vertrag, auf Website, Briefpapier oder gegenüber Kunden/Banken sichtbar", EN: "Already visible in contracts, on website, letterhead or to clients/banks" } },
            { key: "E", text: { DE: "Unklar", EN: "Unclear" } }
          ]
        },
        {
          id: "q3",
          questionText: {
            DE: "Gibt es bereits Beschlüsse, Notarunterlagen oder interne Dokumentation?",
            EN: "Do resolutions, notary documents or internal documentation already exist?"
          },
          options: [
            { key: "A", text: { DE: "Ja, Beschluss oder Dokumentation liegt vor", EN: "Yes, resolution or documentation is available" } },
            { key: "B", text: { DE: "Teilweise / Entwurf liegt vor", EN: "Partially / draft available" } },
            { key: "C", text: { DE: "Nein", EN: "No" } },
            { key: "D", text: { DE: "Weiß ich nicht", EN: "I don't know" } }
          ]
        }
      ],
      evaluateLogic: (ans) => {
        const q1 = ans.q1;
        const q2 = ans.q2;
        const q3 = ans.q3;

        if (q1 === "D" || q1 === "E") return "RED";
        if (q1 === "B" || q1 === "C") {
          return (q2 === "C" || q2 === "D") ? "RED" : "YELLOW";
        }
        if (q1 === "A") {
          return (q2 === "D" || q3 === "C" || q3 === "D") ? "RED" : "YELLOW";
        }
        if (q1 === "F" && (q2 === "A" || q2 === "B")) return "GREEN";
        if (q1 === "F" && q2 === "D") return "YELLOW";
        if (q1 === "G") {
          return (q2 === "C" || q2 === "D" || q3 === "C" || q3 === "D") ? "RED" : "YELLOW";
        }
        if (q2 === "E" || q3 === "D") {
          return (q2 === "C" || q2 === "D" || q1 === "D" || q1 === "E") ? "RED" : "YELLOW";
        }
        return "YELLOW";
      }
    },
    {
      id: "md-removal",
      title: {
        DE: "Geschäftsführer abberufen",
        EN: "Removing a managing director"
      },
      description: {
        DE: "Standardfall oder prüfungsbedürftiger Sonderfall? (Dieser Check hat kein grünes Ergebnis.)",
        EN: "Standard scenario or review-required special case? (Note: this check has no green outcome signal.)"
      },
      questions: [
        {
          id: "q1",
          questionText: {
            DE: "Welche zusätzliche Rolle hat der Geschäftsführer?",
            EN: "What additional role does the managing director have?"
          },
          options: [
            { key: "A", text: { DE: "Fremdgeschäftsführer ohne Beteiligung", EN: "Non-shareholder managing director with no shares" } },
            { key: "B", text: { DE: "Minderheitsgesellschafter", EN: "Minority shareholder" } },
            { key: "C", text: { DE: "Mehrheitsgesellschafter oder paritätisch beteiligter Gesellschafter", EN: "Majority shareholder or equally represented (50/50) shareholder" } },
            { key: "D", text: { DE: "Gründer, Investor-Vertreter oder Geschäftsführer mit Sonderrechten", EN: "Founder, investor representative or managing director with special rights" } },
            { key: "E", text: { DE: "Unklar", EN: "Unclear" } }
          ]
        },
        {
          id: "q2",
          questionText: {
            DE: "Warum wird die Abberufung erwogen?",
            EN: "Why is the removal being considered?"
          },
          options: [
            { key: "A", text: { DE: "Organisatorische Änderung / geplanter Wechsel", EN: "Organizational changes / planned rotation" } },
            { key: "B", text: { DE: "Performance, Vertrauensverlust oder strategische Differenzen", EN: "Performance issues, loss of trust or strategic differences" } },
            { key: "C", text: { DE: "Pflichtverletzung, Compliance-Thema, Missbrauchsverdacht", EN: "Violation of duties, compliance issues, suspicion of abuse" } },
            { key: "D", text: { DE: "Gesellschafterstreit / Deadlock / Eskalation", EN: "Shareholder dispute / deadlock / escalation" } },
            { key: "E", text: { DE: "Unklar", EN: "Unclear" } }
          ]
        },
        {
          id: "q3",
          questionText: {
            DE: "Gibt es Satzungsregelungen, Geschäftsordnung, Stimmbindung, Sonderrechte oder einen Geschäftsführer-Dienstvertrag?",
            EN: "Are there any provisions in the articles of association, rules of procedure, voting agreements, special rights or a managing director service contract?"
          },
          options: [
            { key: "A", text: { DE: "Nein, soweit bekannt keine Sonderregelungen", EN: "No, as far as known no special rules" } },
            { key: "B", text: { DE: "Ja, es gibt einen Geschäftsführer-Dienstvertrag", EN: "Yes, there is a managing director service contract" } },
            { key: "C", text: { DE: "Ja, Satzung/Sonderrechte/Stimmbindung könnten relevant sein", EN: "Yes, articles of association / special rights / voting agreement might be relevant" } },
            { key: "D", text: { DE: "Ich weiß es nicht / Unterlagen liegen nicht vor", EN: "I do not know / documents are not available" } }
          ]
        }
      ],
      evaluateLogic: (ans) => {
        const q1 = ans.q1;
        const q2 = ans.q2;
        const q3 = ans.q3;

        // No green result exists for this check!
        if (q1 === "A" && q2 === "A" && q3 === "A") return "YELLOW";
        if (q3 === "B") {
          return (q2 === "B" || q2 === "C" || q2 === "D") ? "RED" : "YELLOW";
        }
        if (q1 === "B") {
          return (q2 === "B" || q2 === "C" || q2 === "D" || q3 === "C" || q3 === "D") ? "RED" : "YELLOW";
        }
        if (q1 === "C" || q1 === "D") return "RED";
        if (q2 === "C" || q2 === "D") return "RED";
        if (q3 === "C") return "RED";
        if (q1 === "E" || q2 === "E" || q3 === "D") {
          let unclearCount = 0;
          if (q1 === "E") unclearCount++;
          if (q2 === "E") unclearCount++;
          if (q3 === "D") unclearCount++;
          return (unclearCount >= 2) ? "RED" : "YELLOW";
        }
        return "YELLOW";
      }
    },
    {
      id: "conflict-interest",
      title: {
        DE: "Interessenkonflikt erkennen",
        EN: "Identifying conflicts of interest"
      },
      description: {
        DE: "Related-Party- oder Governance-Risiko? Bewertet ob Geschäfte mit Geschäftsführern oder Nahestehenden rechtlich risikofrei sind.",
        EN: "Related-party or governance risk? Evaluates whether transaction parameters with stakeholders represent a critical conflict."
      },
      questions: [
        {
          id: "q1",
          questionText: {
            DE: "Mit wem soll das Geschäft abgeschlossen werden?",
            EN: "With whom is the transaction to be concluded?"
          },
          options: [
            { key: "A", text: { DE: "Geschäftsführer persönlich", EN: "Managing director personally" } },
            { key: "B", text: { DE: "Gesellschafter persönlich", EN: "Shareholder personally" } },
            { key: "C", text: { DE: "Unternehmen, das einem Geschäftsführer/Gesellschafter gehört oder nahesteht", EN: "Company owned by or related to a managing director/shareholder" } },
            { key: "D", text: { DE: "Angehörige oder nahestehende Person eines Geschäftsführers/Gesellschafters", EN: "Relative or related person of a managing director/shareholder" } },
            { key: "E", text: { DE: "Keine Nähe erkennbar", EN: "No relation recognizable" } },
            { key: "F", text: { DE: "Unklar", EN: "Unclear" } }
          ]
        },
        {
          id: "q2",
          questionText: {
            DE: "Wie ist das Geschäft einzuordnen?",
            EN: "How is the transaction classified?"
          },
          options: [
            { key: "A", text: { DE: "Geringwertige Standardleistung zu üblichen Konditionen", EN: "Low-value standard service on arm's-length terms" } },
            { key: "B", text: { DE: "Regelmäßige Leistung oder längerfristiger Vertrag", EN: "Regular service or long-term contract" } },
            { key: "C", text: { DE: "Wesentlicher Vertrag, Darlehen, IP-Rechte, Asset-Deal, Beratungshonorar oder Vergütung", EN: "Significant contract, loan, IP rights, asset deal, advisory fee, or remuneration" } },
            { key: "D", text: { DE: "Transaktion außerhalb des gewöhnlichen Geschäfts", EN: "Transaction outside ordinary business" } },
            { key: "E", text: { DE: "Unklar", EN: "Unclear" } }
          ]
        },
        {
          id: "q3",
          questionText: {
            DE: "Wurde das Geschäft intern offengelegt und dokumentiert?",
            EN: "Has the transaction been internally disclosed and documented?"
          },
          options: [
            { key: "A", text: { DE: "Ja, vollständig offengelegt und dokumentiert", EN: "Yes, fully disclosed and documented" } },
            { key: "B", text: { DE: "Teilweise, aber noch keine formelle Zustimmung", EN: "Partially, but no formal approval/resolution yet" } },
            { key: "C", text: { DE: "Nein", EN: "No" } },
            { key: "D", text: { DE: "Weiß ich nicht / vertraulich behandelt", EN: "I do not know / treated confidentially" } }
          ]
        }
      ],
      evaluateLogic: (ans) => {
        const q1 = ans.q1;
        const q2 = ans.q2;
        const q3 = ans.q3;

        if (q1 === "E" && (q2 === "A" || q2 === "B") && q3 === "A") return "GREEN";
        if (q1 === "E" && (q2 === "C" || q2 === "D" || q2 === "E")) return "YELLOW";
        if (q1 === "A" || q1 === "B" || q1 === "C" || q1 === "D") {
          if (q2 === "A" && q3 === "A") return "YELLOW";
          if (q2 === "B") {
            return (q3 === "B" || q3 === "C" || q3 === "D") ? "RED" : "YELLOW";
          }
        }
        if (q2 === "C" || q2 === "D") return "RED";
        if (q3 === "C" || q3 === "D") return "RED";
        if (q1 === "F" || q2 === "E") {
          return (q3 === "C" || q3 === "D") ? "RED" : "YELLOW";
        }
        return "YELLOW";
      }
    }
  ];

  const handleSelectCheck = (id: string) => {
    setActiveCheckId(id);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowingResult(false);
    setHandoverSubmitted(false);
  };

  const handleAnswer = (questionId: string, value: string) => {
    const updated = { ...answers, [questionId]: value };
    setAnswers(updated);

    const activeCheck = checks.find(c => c.id === activeCheckId);
    if (!activeCheck) return;

    if (currentQuestionIndex < activeCheck.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowingResult(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const activeCheck = checks.find(c => c.id === activeCheckId);
  const currentQuestion = activeCheck?.questions[currentQuestionIndex];
  
  // Evaluate result signal
  const resultSignal = activeCheck && showingResult ? activeCheck.evaluateLogic(answers) : null;

  // Specific result texts mapped exactly to specifications
  const getResultContent = () => {
    if (!activeCheckId || !resultSignal) return null;

    if (activeCheckId === "gmbh-measure") {
      if (resultSignal === "GREEN") {
        return {
          title: { DE: "Wahrscheinlich operative Maßnahme", EN: "Probably operational measure" },
          summary: {
            DE: "Der gewählte Antwortpfad spricht dafür, dass die Maßnahme eher dem laufenden operativen Geschäft zuzuordnen ist. Ein Gesellschafterbeschluss ist in dieser Standardkonstellation nicht offensichtlich naheliegend. Sinnvoll bleibt eine kurze interne Dokumentation der Entscheidung.",
            EN: "The selected answer path indicates that the measure is rather attributable to ordinary day-to-day operations. A shareholder resolution is not obviously required in this standard scenario. A short internal documentation of the decision remains advisable."
          },
          standard: { DE: "Hoch", EN: "High" },
          escalation: { DE: "Niedrig", EN: "Low" },
          steps: [
            { DE: "Maßnahme intern kurz dokumentieren.", EN: "Briefly document the measure internally." },
            { DE: "Prüfen, ob es dennoch interne Wertgrenzen oder Policies gibt.", EN: "Verify whether internal financial limits or policies apply." },
            { DE: "Bei Unsicherheit Gesellschaftsvertrag oder Geschäftsordnung gegenlesen.", EN: "In case of uncertainty, double check the articles of association or rules of procedure." }
          ],
          exclude: {
            DE: "Gesellschaftsvertrag, Geschäftsordnung, frühere Gesellschafterbeschlüsse, Sonderrechte, steuerliche Auswirkungen, Interessenkonflikte.",
            EN: "Articles of association, rules of procedure, prior shareholder resolutions, special rights, tax implications, conflicts of interest."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist sinnvoll, wenn die Maßnahme wirtschaftlich erheblich ist oder interne Zustimmungsvorbehalte bestehen könnten.",
            EN: "A binding review is appropriate if the measure is of high economic relevance or internal approval constraints could apply."
          }
        };
      } else if (resultSignal === "YELLOW") {
        return {
          title: { DE: "Beschlussabsicherung wahrscheinlich sinnvoll", EN: "Resolution backing likely advisory" },
          summary: {
            DE: "Die Maßnahme weist Merkmale auf, bei denen eine Gesellschafterzustimmung oder zumindest eine interne Absicherung naheliegt. Das gilt insbesondere, wenn interne Zustimmungsvorbehalte bestehen oder die Maßnahme wirtschaftlich nicht unerheblich ist.",
            EN: "The measure exhibits characteristics for which shareholder consent or at least internal reassurance is appropriate. This applies in particular if internal approval constraints exist or if the measure is economically non-negligible."
          },
          standard: { DE: "Mittel", EN: "Medium" },
          escalation: { DE: "Optional bis empfohlen", EN: "Optional to recommended" },
          steps: [
            { DE: "Gesellschaftsvertrag und Geschäftsordnung auf Zustimmungsvorbehalte prüfen.", EN: "Review the articles of association and rules of procedure for approval requirements." },
            { DE: "Wirtschaftliche Bedeutung und Reversibilität dokumentieren.", EN: "Document the economic relevance and feasibility of reversal." },
            { DE: "Falls Zustimmung erforderlich sein könnte: Beschluss vorbereiten.", EN: "If approval might be necessary: prepare the backing resolution." },
            { DE: "Bei unklarer Rechtslage Varda-Handover nutzen.", EN: "Use the Varda Handover in case of a complex legal context." }
          ],
          exclude: {
            DE: "Konkrete Beschlussmehrheit, Ladungsfristen, Formanforderungen, Stimmverbote, Interessenkonflikte, Anfechtungsrisiken.",
            EN: "Specific voting majorities, notice periods, formal requirements, voting prohibitions, conflicts of interest, contestability risks."
          },
          whenVarda: {
            DE: "Wenn die Maßnahme kurzfristig umgesetzt werden soll oder Streitpotenzial besteht, sollte eine verbindliche Prüfung erfolgen.",
            EN: "If the measure is to be implemented on short notice or there is potential for dispute, a binding review should be conducted."
          }
        };
      } else {
        return {
          title: { DE: "Verbindliche Prüfung oder Beschlussfassung empfohlen", EN: "Binding review or resolution recommended" },
          summary: {
            DE: "Der gewählte Antwortpfad enthält Red Flags. Die Maßnahme betrifft entweder eine typische Gesellschafterzuständigkeit, einen möglichen Zustimmungsvorbehalt, einen Interessenkonflikt oder ein erhebliches wirtschaftliches Risiko. Eine Umsetzung ohne formelle Absicherung kann rechtliche und haftungsbezogene Folgefragen auslösen.",
            EN: "The selected answer path contains red flags. The measure concerns typical shareholder jurisdiction, a possible approval requirement, a conflict of interest, or substantial economic risk. An implementation without formal safeguards may trigger immediate legal and liability issues."
          },
          standard: { DE: "Niedrig", EN: "Low" },
          escalation: { DE: "Hoch", EN: "High" },
          steps: [
            { DE: "Maßnahme nicht ohne weitere Prüfung umsetzen.", EN: "Do not implement the measure without further checking." },
            { DE: "Gesellschaftsvertrag, Geschäftsordnung und relevante Beschlüsse bereithalten.", EN: "Keep the articles of association, rules of procedure, and relevant resolutions at hand." },
            { DE: "Betroffene Gesellschafter- und Geschäftsführerrollen klären.", EN: "Clarify the affected shareholder and managing director roles." },
            { DE: "Varda-Handover auslösen.", EN: "Initiate Varda Handover." }
          ],
          exclude: {
            DE: "Wirksamkeit eines konkreten Beschlusses, Einberufung, Mehrheitserfordernisse, Stimmverbote, Treuepflichten, Schadensersatz- und Haftungsfragen.",
            EN: "Validity of a specific resolution, convening, majority requisites, voting bans, fiduciary duties, damage and liability issues."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist empfohlen, bevor die Maßnahme umgesetzt oder extern kommuniziert wird.",
            EN: "A binding review is strongly recommended before the measure is implemented or externally shared."
          }
        };
      }
    }

    if (activeCheckId === "revoke-proxy") {
      if (resultSignal === "GREEN") {
        return {
          title: { DE: "Prokura-Widerruf wirkt als Standardfall gut strukturierbar", EN: "Proxy revocation appears highly structured and standard" },
          summary: {
            DE: "Der gewählte Antwortpfad entspricht einer typischen Standardkonstellation: Die betroffene Person ist nur als Prokurist/in relevant, es gibt keinen akuten Konflikt und kein erkennbares Außenrisiko. In dieser Fallgruppe ist der Widerruf der Prokura typischerweise gut planbar.",
            EN: "The selected answer path matches a typical standard scenario: the person is only relevant as a proxy holder, there is no acute conflict and no recognizable external risk. In this constellation, the proxy revocation is typically well-planned."
          },
          standard: { DE: "Hoch", EN: "High" },
          escalation: { DE: "Niedrig", EN: "Low" },
          steps: [
            { DE: "Widerruf intern beschließen oder durch zuständige Person veranlassen.", EN: "Determine the revocation internally or initiate it through the competent corporate body." },
            { DE: "Widerruf gegenüber dem/der Prokurist/in eindeutig erklären.", EN: "Unequivocally declare the revocation to the proxy holder." },
            { DE: "Handelsregisteranmeldung des Erlöschens vorbereiten.", EN: "Prepare the commercial register filing of the termination." },
            { DE: "Banken, wichtige Vertragspartner und interne Stellen informieren.", EN: "Inform banks, key contract partners, and internal units." },
            { DE: "Vollmachten, Signaturrechte und Systemzugänge aktualisieren.", EN: "Update proxy forms, signing rights, and digital credentials." }
          ],
          exclude: {
            DE: "Arbeitsvertragliche Folgen, Organstellung, Gesellschafterrechte, konkrete Registerunterlagen, Vollmachtsmissbrauch, Bankvollmachten, Kündigung oder Freistellung.",
            EN: "Employment contract implications, corporate office consequences, shareholder rights, concrete register filings, abuse of power of attorney, bank signing rights, termination or release."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist sinnvoll, wenn die Person weitere Rollen hat, ein Konflikt besteht oder kurzfristig externe Handlungen drohen.",
            EN: "A binding review is appropriate if the person holds other roles, a conflict is active, or external transactions are imminent."
          }
        };
      } else if (resultSignal === "YELLOW") {
        return {
          title: { DE: "Prokura-Widerruf möglich, aber Begleitthemen prüfen", EN: "Proxy revocation is possible, but subsidiary matters apply" },
          summary: {
            DE: "Der Widerruf einer Prokura ist in der Grundstruktur regelmäßig möglich. Der gewählte Antwortpfad zeigt jedoch Begleitthemen, etwa ein Arbeits- oder Dienstverhältnis, unklare Außenwirkung oder mögliche operative Risiken. Diese Punkte sollten vor Umsetzung strukturiert geprüft und dokumentiert werden.",
            EN: "The revocation of a commercial power of attorney is generally straightforward in its basic structure. However, the selected path exhibits collateral topics, such as an employment contract, unclear external actions or operative risks. These aspects should be checked and recorded."
          },
          standard: { DE: "Mittel", EN: "Medium" },
          escalation: { DE: "Optional bis empfohlen", EN: "Optional to recommended" },
          steps: [
            { DE: "Zuständigkeit für den Widerruf klären.", EN: "Clarify the corporate authority required for the revocation." },
            { DE: "Widerruf schriftlich dokumentieren.", EN: "Formally document the revocation in writing." },
            { DE: "Handelsregisteranmeldung vorbereiten.", EN: "Prepare the commercial register filing." },
            { DE: "Arbeits- oder Dienstvertragsbezug separat prüfen.", EN: "Check the employment or service contract ties separately." },
            { DE: "Externe Kommunikationsliste erstellen: Banken, Kunden, Lieferanten, Notare, Plattformen.", EN: "Create an external communication distribution list: banks, clients, suppliers, notaries, systems." },
            { DE: "Bei Unsicherheit Varda-Handover nutzen.", EN: "Utilize the Varda Handover in case of any uncertainty." }
          ],
          exclude: {
            DE: "Kündigung, Freistellung, Vergütungsansprüche, Schadensersatz, Organstellung, Gesellschafterrechte, einstweiliger Rechtsschutz, strafrechtliche Fragen.",
            EN: "Termination notice, suspension, remuneration claims, damages, corporate office, shareholder rights, preliminary injunction, criminal law concerns."
          },
          whenVarda: {
            DE: "Wenn der Widerruf Teil eines Konflikts oder Ausscheidens ist, sollte vor Kommunikation nach außen eine verbindliche Prüfung erfolgen.",
            EN: "If the revocation is tied to a corporate conflict or strategic departure, a binding review should take place before any external communication."
          }
        };
      } else {
        return {
          title: { DE: "Prokura-Widerruf nicht isoliert behandeln", EN: "Do not handle proxy revocation in isolation" },
          summary: {
            DE: "Der gewählte Antwortpfad enthält Red Flags. Der Widerruf der Prokura ist dann nur ein Teil einer größeren Risikosituation. Besonders relevant sind Organ- oder Gesellschafterrollen, Missbrauchsverdacht, akutes Außenhandlungsrisiko oder parallele arbeits- oder dienstvertragliche Maßnahmen.",
            EN: "The selected answer path contains red flags. The proxy revocation represents only one part of an extended risk landscape. Corporate office or shareholder roles, suspicion of abuse, acute risk of unauthorized actions, or parallel labor measures are highly present."
          },
          standard: { DE: "Niedrig", EN: "Low" },
          escalation: { DE: "Hoch", EN: "High" },
          steps: [
            { DE: "Nicht nur den Prokura-Widerruf isoliert betrachten.", EN: "Do not analyze the proxy revocation as an isolated action." },
            { DE: "Sofort prüfen, welche externen Vertretungs- und Zugriffsrechte bestehen.", EN: "Immediately verify what external signing authority and access controls exist." },
            { DE: "Bank- und Systemzugriffe sichern.", EN: "Secure bank and software accounts." },
            { DE: "Kommunikationsplan erstellen.", EN: "Formulate a clear communication plan." },
            { DE: "Registeranmeldung vorbereiten.", EN: "Draft the commercial register filing." },
            { DE: "Vor Umsetzung verbindliche Prüfung anfragen.", EN: "Initiate a binding review before proceeding with implementation." }
          ],
          exclude: {
            DE: "Sicherungsmaßnahmen, Haftungsansprüche, Kündigung, Freistellung, Gesellschafterstreit, Geschäftsführerpflichten, Eilmaßnahmen, Strafanzeige, Datenschutz- und IT-Zugriffe.",
            EN: "Preservation measures, liability actions, termination, suspension, shareholder disputes, managing director duties, emergency remedies, police filing, data protection and IT logs."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist empfohlen, wenn Konflikt, Missbrauchsverdacht, Zusatzrollen oder akutes Außenrisiko bestehen.",
            EN: "A binding review is highly recommended if a conflict, suspicion of abuse, auxiliary roles or acute external risk is present."
          }
        };
      }
    }

    if (activeCheckId === "register-change") {
      if (resultSignal === "GREEN") {
        return {
          title: { DE: "Wahrscheinlich keine Handelsregisteranmeldung erforderlich", EN: "Probably no commercial register filing required" },
          summary: {
            DE: "Der gewählte Antwortpfad spricht dafür, dass es sich um eine interne Änderung ohne erkennbare Außenwirkung handelt. Eine Handelsregisteranmeldung ist in dieser Standardkonstellation nicht offensichtlich naheliegend. Wichtig bleibt, dass Außenkommunikation, Website, Briefpapier und Vertragsdokumente nicht abweichend wirken.",
            EN: "The selected answer path indicates an internal change without external representations. A commercial register filing is not obviously necessary in this standard configuration. Ensure that external communications, the website, and letterhead remain aligned."
          },
          standard: { DE: "Hoch", EN: "High" },
          escalation: { DE: "Niedrig", EN: "Low" },
          steps: [
            { DE: "Interne Änderung dokumentieren.", EN: "Record the internal corporate adjustment." },
            { DE: "Prüfen, ob Außenauftritt betroffen ist.", EN: "Verify whether public profiles or corporate identifiers are affected." },
            { DE: "Bei späterer Außenwirkung erneut prüfen.", EN: "Re-evaluate if external actions occur at a later stage." },
            { DE: "Bestehende Beschlüsse oder Policies ablegen.", EN: "File any existing decisions or internal guidelines appropriately." }
          ],
          exclude: {
            DE: "Satzung, konkrete Registerlage, frühere Beschlüsse, notarielle Anforderungen, Gesellschafterliste, Vertretungsregelung.",
            EN: "Articles of association, precise register records, previous resolutions, notary requirements, shareholder lists, representation clauses."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist sinnvoll, wenn die Änderung nach außen sichtbar wird oder Organ-, Prokura- oder Gesellschafterthemen berührt.",
            EN: "A binding review is appropriate if the change becomes visible to third parties, or concerns corporate officers, proxy rights or shareholder records."
          }
        };
      } else if (resultSignal === "YELLOW") {
        return {
          title: { DE: "Handelsregisterrelevanz wahrscheinlich oder prüfungsbedürftig", EN: "Commercial register relevance likely or requires review" },
          summary: {
            DE: "Der Antwortpfad zeigt eine Änderung, die typischerweise handelsregisterrelevant sein kann oder bei der Außenauftritt und Registerstand synchronisiert werden sollten. Vor Umsetzung oder Kommunikation sollte geprüft werden, welche Dokumente, Beschlüsse und Anmeldungen erforderlich sind.",
            EN: "The selected path highlights a change that is typically relevant to the commercial register, or one where public records and internal status must match. Verify which documentation, decisions and filings are required."
          },
          standard: { DE: "Mittel", EN: "Medium" },
          escalation: { DE: "Optional bis empfohlen", EN: "Optional to recommended" },
          steps: [
            { DE: "Betroffene Registerdaten identifizieren.", EN: "Locate and identify the relevant corporate register entries." },
            { DE: "Handelsregisterauszug und Satzung bereithalten.", EN: "Keep the current register excerpt and articles of association at hand." },
            { DE: "Beschluss- oder Dokumentationslage prüfen.", EN: "Check the status of corporate resolutions and administrative filings." },
            { DE: "Notarielle Anmeldung einplanen, falls erforderlich.", EN: "Schedule a notary meeting for the filing if necessary." },
            { DE: "Außenkommunikation erst nach abgestimmtem Vorgehen aktualisieren.", EN: "Update public profiles and notices only after a coordinated action plan." }
          ],
          exclude: {
            DE: "Konkrete Anmeldepflicht, Form der Anmeldung, Beschlussmehrheiten, notarielle Unterlagen, Registergerichtspraxis, Vollmachten.",
            EN: "Specific filing duty, filing form requirements, resolution majorities, notarized instruments, court administration rules, proxy forms."
          },
          whenVarda: {
            DE: "Wenn die Änderung bereits extern sichtbar ist oder mehrere Themen gleichzeitig betroffen sind, sollte der Vorgang verbindlich geprüft werden.",
            EN: "If the modification is already visible externally or affects multiple corporate areas jointly, the matter should be formally reviewed."
          }
        };
      } else {
        return {
          title: { DE: "Nicht ohne register- und gesellschaftsrechtliche Prüfung umsetzen", EN: "Do not execute without register and corporate law review" },
          summary: {
            DE: "Der gewählte Antwortpfad enthält Red Flags. Die Änderung betrifft wahrscheinlich nicht nur eine administrative Aktualisierung, sondern formelle Register-, Beschluss- oder Satzungsthemen. Eine unkoordinierte Umsetzung kann zu Widersprüchen zwischen interner Lage, Registerstand und Außenauftritt führen.",
            EN: "The selected answer path contains red flags. The change likely involves formal register, voting or structural charter amendments, rather than simple administration. Uncoordinated measures may cause critical discrepancies between actual records, filings and third-party representations."
          },
          standard: { DE: "Niedrig", EN: "Low" },
          escalation: { DE: "Hoch", EN: "High" },
          steps: [
            { DE: "Änderung nicht weiter extern kommunizieren, bevor Register- und Beschlusslage geklärt ist.", EN: "Do not communicate the change externally before register filings and corporate records are aligned." },
            { DE: "Handelsregisterauszug, Satzung und relevante Beschlüsse sammeln.", EN: "Gather the register output, company bylaws, and central corporate files." },
            { DE: "Prüfen, ob Notar oder Gesellschafterbeschluss erforderlich ist.", EN: "Determine whether shareholder consent or a notary public is required." },
            { DE: "Außenauftritt, Bankunterlagen und Vertragsdokumente abgleichen.", EN: "Reconcile public listings, bank records, and commercial contract terms." },
            { DE: "Varda-Handover auslösen.", EN: "Initiate Varda Handover." }
          ],
          exclude: {
            DE: "Wirksamkeit konkreter Beschlüsse, notarielle Form, Registervollzug, Satzungsänderung, Gesellschafterliste, Haftungsfragen.",
            EN: "Validity of specific resolutions, notary requirements, court execution, corporate reorganization charters, shareholder registries, liability issues."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist empfohlen, bevor die Änderung umgesetzt oder weiter extern kommuniziert wird.",
            EN: "A binding review is highly recommended before the adjustment is implemented or communicated broadly."
          }
        };
      }
    }

    if (activeCheckId === "md-removal") {
      // Q4 has no green outcome!
      if (resultSignal === "YELLOW") {
        return {
          title: { DE: "Geschäftsführerabberufung vorbereiten, aber formell absichern", EN: "Prepare managing director removal, secure formally" },
          summary: {
            DE: "Der Antwortpfad spricht für eine grundsätzlich strukturierbare Abberufungssituation. Auch in standardnahen Konstellationen sollte die Abberufung jedoch formell abgesichert werden. Besonders wichtig ist die Trennung zwischen Organstellung und Geschäftsführer-Dienstvertrag.",
            EN: "The answer path supports a structured dismissal context. However, even in seemingly straightforward constellations, the removal must be legally bulletproofed. It is particularly vital to separate the corporate office from the underlying service agreement."
          },
          standard: { DE: "Mittel", EN: "Medium" },
          escalation: { DE: "Empfohlen bei Unsicherheit", EN: "Recommended in case of doubt" },
          steps: [
            { DE: "Satzung und Gesellschafterstruktur prüfen.", EN: "Inspect the articles of association and current cap table." },
            { DE: "Zuständigkeit und Mehrheit für Beschluss klären.", EN: "Verify corporate competence and the majority thresholds for the resolution." },
            { DE: "Dienstvertrag separat prüfen.", EN: "Review the service contract parameters independently." },
            { DE: "Registeranmeldung und Außenkommunikation vorbereiten.", EN: "Draft register filing documents and plan external communications." },
            { DE: "Beschlussdokumentation sauber erstellen.", EN: "Ensure thorough and precise drafting of the resolution minutes." }
          ],
          exclude: {
            DE: "Konkrete Beschlussmehrheiten, Stimmverbote, Sonderrechte, Kündigung des Dienstvertrags, Abfindung, einstweiliger Rechtsschutz, Geschäftsführerhaftung.",
            EN: "Exact resolution majorities, voting limits, special privileges, termination of service agreement, severance pay, preliminary injunctions, director liability."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist sinnvoll, wenn der Geschäftsführer Gesellschafter ist, Sonderrechte bestehen oder parallel Dienstvertragsfragen zu klären sind.",
            EN: "A formal review is appropriate if the director is a shareholder, holds special vetoes, or auxiliary service contract issues must be resolved."
          }
        };
      } else {
        return {
          title: { DE: "Geschäftsführerabberufung nicht als Standardmaßnahme behandeln", EN: "Do not treat managing director removal as a routine action" },
          summary: {
            DE: "Der gewählte Antwortpfad enthält Red Flags. Die Abberufung berührt wahrscheinlich gesellschaftsrechtliche, dienstvertragliche oder konfliktbezogene Risiken. Eine unvorbereitete Beschlussfassung oder Kommunikation kann Folgekonflikte auslösen.",
            EN: "The selected answer path presents red flags. The proposed removal likely involves delicate corporate law, service contract, or escalating dispute risks. Launching a resolution or sharing news without preparation may trigger severe legal fallout."
          },
          standard: { DE: "Niedrig", EN: "Low" },
          escalation: { DE: "Hoch", EN: "High" },
          steps: [
            { DE: "Keine vorschnelle Kommunikation an Geschäftsführer, Mitarbeiter, Banken oder Kunden.", EN: "Refrain from premature communications to the director, staff, banks, or clients." },
            { DE: "Satzung, Gesellschafterliste, Dienstvertrag und Geschäftsordnung sammeln.", EN: "Collect the current bylaws, shareholder records, service contract, and internal policies." },
            { DE: "Beschlusslage, Stimmrechte und Sonderrechte prüfen.", EN: "Check resolution capacity, voting weight, and individual veto privileges." },
            { DE: "Parallelthemen identifizieren: Dienstvertrag, Freistellung, Zugriff, Kommunikation.", EN: "Identify associated challenges: service agreement, immediate suspension, physical access, communications." },
            { DE: "Varda-Handover auslösen.", EN: "Activate Varda Handover." }
          ],
          exclude: {
            DE: "Wirksamkeit eines konkreten Beschlusses, Stimmverbote, Treuepflichten, Kündigung, Freistellung, Vergütung, Schadensersatz, einstweiliger Rechtsschutz.",
            EN: "Core validity of a specific resolution, voting bans, fiduciary obligations, dismissal notice, separation pay, damages, temporary remedies."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist empfohlen, bevor Beschlussfassung, Kommunikation oder Registerthemen angestoßen werden.",
            EN: "A binding review is highly recommended before invoking a resolution, notifying the director, or contacting the registry."
          }
        };
      }
    }

    if (activeCheckId === "conflict-interest") {
      if (resultSignal === "GREEN") {
        return {
          title: { DE: "Kein offensichtlicher Interessenkonflikt erkennbar", EN: "No obvious conflict of interest recognizable" },
          summary: {
            DE: "Der gewählte Antwortpfad zeigt keinen erkennbaren Nähebezug zu Geschäftsführern, Gesellschaftern oder nahestehenden Personen. Das Geschäft wirkt daher nicht primär als Interessenkonfliktfall. Übliche Vertrags-, Wertgrenzen- und Freigabeprozesse bleiben zu beachten.",
            EN: "The selected path shows no apparent proximity to managing directors, shareholders, or related persons. The transaction does not present primary conflict of interest characteristics. Standard contractual limits and corporate sign-off procedures apply."
          },
          standard: { DE: "Hoch", EN: "High" },
          escalation: { DE: "Niedrig", EN: "Low" },
          steps: [
            { DE: "Übliche interne Freigaben prüfen.", EN: "Verify normal internal corporate approvals." },
            { DE: "Wirtschaftliche Konditionen dokumentieren.", EN: "Record the underlying economic terms." },
            { DE: "Vertrag nach Standardprozess prüfen.", EN: "Review the contract following standard corporate practices." },
            { DE: "Bei später erkennbarem Nähebezug erneut bewerten.", EN: "Re-evaluate if a close personal or economic link emerges later." }
          ],
          exclude: {
            DE: "Allgemeine Vertragsrisiken, steuerliche Folgen, Konzernvorgaben, Vergaberegeln, Compliance-Policies.",
            EN: "General transaction risks, tax effects, group regulations, procurement policies, compliance routines."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist sinnvoll, wenn ein Nähebezug doch besteht oder das Geschäft wirtschaftlich wesentlich ist.",
            EN: "A binding review is appropriate if a close connection does exist or if the transaction represents high value."
          }
        };
      } else if (resultSignal === "YELLOW") {
        return {
          title: { DE: "Möglicher Interessenkonflikt — Transparenz und Freigabe prüfen", EN: "Possible conflict of interest — check transparency and sign-off" },
          summary: {
            DE: "Der gewählte Antwortpfad zeigt einen Nähebezug oder eine Unklarheit, die governance-relevant sein kann. Auch wenn das Geschäft wirtschaftlich überschaubar wirkt, sollten Transparenz, Marktüblichkeit und interne Zustimmung dokumentiert werden.",
            EN: "The selected path displays a close relation or ambiguity that can be highly relevant to governance. Even if the transaction value is modest, transparency, arm's-length terms, and formal approval should be documented."
          },
          standard: { DE: "Mittel", EN: "Medium" },
          escalation: { DE: "Optional bis empfohlen", EN: "Optional to recommended" },
          steps: [
            { DE: "Nähebezug vollständig offenlegen.", EN: "Disclose the corporate relation fully." },
            { DE: "Konditionen mit Drittvergleich dokumentieren.", EN: "Document transaction terms in comparison with arm's-length third-party terms." },
            { DE: "Zuständige Freigabestelle klären.", EN: "Determine the competent authorizing instance." },
            { DE: "Beteiligte Personen nicht allein entscheiden lassen.", EN: "Ensure conflicted individuals do not decide unilaterally." },
            { DE: "Zustimmung oder Beschluss dokumentieren.", EN: "Formally record consent or board/shareholder resolutions." }
          ],
          exclude: {
            DE: "Stimmverbote, Vertretungsverbote, § 181 BGB, Satzungsregelungen, Treuepflichten, steuerliche verdeckte Gewinnausschüttung, Anfechtungsrisiken.",
            EN: "Voting bans, representation limits, self-dealing rules under Sec. 181 German Civil Code, bylaws constraints, fiduciary duties, constructive dividend tax risks, contestability."
          },
          whenVarda: {
            DE: "Wenn ein Geschäftsführer oder Gesellschafter wirtschaftlich profitiert, sollte vor Abschluss eine verbindliche Prüfung erwogen werden.",
            EN: "If a managing director or shareholder benefits financially, a formal advisory check should be initiated before execution."
          }
        };
      } else {
        return {
          title: { DE: "Related-Party-Risiko — nicht ohne formelle Absicherung abschließen", EN: "Related-party risk — do not execute without formal safeguards" },
          summary: {
            DE: "Der gewählte Antwortpfad enthält Red Flags. Das geplante Geschäft betrifft möglicherweise einen relevanten Interessenkonflikt, Sondervorteil oder eine Related-Party-Konstellation. Eine unzureichende Offenlegung oder fehlende Zustimmung kann rechtliche, steuerliche und governance-bezogene Folgefragen auslösen.",
            EN: "The selected path exhibits red flags. The proposed transaction likely concerns an active conflict of interest, personal advantage, or related-party environment. Opaque disclosure or lacking consent may trigger significant legal, tax, and governance issues."
          },
          standard: { DE: "Niedrig", EN: "Low" },
          escalation: { DE: "Hoch", EN: "High" },
          steps: [
            { DE: "Geschäft nicht ohne formelle Absicherung abschließen.", EN: "Do not conclude the transaction without formal corporate protection." },
            { DE: "Nähebezug und wirtschaftlichen Vorteil vollständig dokumentieren.", EN: "Formally document the proximity and complete financial advantages." },
            { DE: "Marktüblichkeit prüfen.", EN: "Perform and verify an arm's-length pricing examination." },
            { DE: "Zuständigkeit, Zustimmung und mögliche Stimm- oder Vertretungsfragen klären.", EN: "Review competence, approval requirements, and corporate voting or agency bans." },
            { DE: "Varda-Handover auslösen.", EN: "Initiate Varda Handover." }
          ],
          exclude: {
            DE: "Konkrete Wirksamkeit des Geschäfts, § 181 BGB, Satzung, Stimmverbote, Treuepflichten, Schadensersatz, steuerliche verdeckte Gewinnausschüttung, Minderheitenschutz.",
            EN: "Enforceability of the contract, self-dealing bans, bylaws limits, board loyalty obligations, damage actions, covert profit distribution taxes, minority shareholder protection."
          },
          whenVarda: {
            DE: "Eine verbindliche Prüfung ist empfohlen, bevor das Geschäft abgeschlossen oder intern freigegeben wird.",
            EN: "A binding review is strongly recommended before parameters are signed off or internally approved."
          }
        };
      }
    }

    return null;
  };

  const rc = getResultContent();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHandoverForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHandoverForm(prev => ({ ...prev, agreed: e.target.checked }));
  };

  const handleSendHandover = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rc) return;
    
    // Compose prefabricated summary info back to Varda
    const topic = activeCheck?.title[lang] || "";
    const signal = resultSignal || "";
    const mailText = `--- Varda Legal Navigator Handover Briefing ---\nCheck: ${topic}\nSignal: ${signal}\nUser Name: ${handoverForm.name}\nCompany: ${handoverForm.company}\nEmail: ${handoverForm.email}\nPhone: ${handoverForm.phone || "N/A"}\nNote: ${handoverForm.note}\n`;
    
    // Pass to parent function representing E-Mail/API integrations
    onNavigateToConsult(mailText);
    setHandoverSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full relative py-8 space-y-12">
      
      {/* HEADER HERO AREA */}
      {!activeCheckId && (
        <div className="space-y-6 max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.25em] text-[#C0823E] uppercase font-bold">
            <span className="w-1.5 h-1.5 bg-[#C0823E]" />
            <span>Varda Legal Navigator</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-charcoal">
            {lang === "DE" ? "Varda Legal Navigator" : "Varda Legal Navigator"}
            <span className="block font-sans text-sm sm:text-base font-normal text-charcoal/60 mt-2">
              {lang === "DE" ? "Executive Checks für unternehmerische Rechtsfragen." : "Executive checks for business legal questions."}
            </span>
          </h2>
          
          <p className="font-sans text-charcoal/85 leading-relaxed text-sm sm:text-base max-w-3xl">
            {lang === "DE"
              ? "Der Navigator liefert strukturierte Orientierung für typische Corporate- und Handelsrechtsthemen. Sie erhalten ein kompaktes Executive Briefing mit Signal, Entscheidungslogik, nächsten Schritten und Eskalationshinweisen."
              : "The Navigator provides structured orientation for typical corporate and commercial law topics. You receive a concise executive briefing with a decision signal, reasoning logic, next steps and escalation guidance."}
          </p>

          <div className="p-4 bg-[#FAF8F4] border border-charcoal/10 font-sans text-xs text-charcoal/65 leading-relaxed max-w-3xl flex gap-3 items-start">
            <Info className="h-4 w-4 text-[#C0823E] shrink-0 mt-0.5" />
            <p>
              {lang === "DE"
                ? "Keine verbindliche Einzelfallprüfung. Für eine verbindliche Prüfung und Beratung können Sie den Vorgang am Ende direkt an Varda Legal übergeben."
                : "No binding case-specific legal advice. For a binding review and advice, you can hand over the matter to Varda Legal at the end of the check."}
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#checks-list"
              className="inline-flex items-center justify-center bg-charcoal text-white hover:bg-brand-red text-xs font-mono uppercase tracking-widest px-6 py-3.5 transition-colors font-bold cursor-pointer"
            >
              <span>{lang === "DE" ? "Check auswählen" : "Select check"}</span>
              <ArrowRight className="h-4 w-4 ml-2 animate-pulse" />
            </a>
          </div>
        </div>
      )}

      {/* CORE NAVIGATION BACK BUTTON */}
      {activeCheckId && (
        <div className="flex justify-between items-center pb-4 border-b border-charcoal/10 print:hidden select-none">
          <button
            onClick={() => {
              setActiveCheckId(null);
              setShowingResult(false);
              setCurrentQuestionIndex(0);
              setAnswers({});
            }}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#C0823E] bg-transparent border-none p-0 cursor-pointer hover:text-charcoal transition-colors font-semibold"
          >
            <ChevronRight className="h-3 w-3 rotate-180" />
            <span>{lang === "DE" ? "Zurück zur Übersicht" : "Back to overview"}</span>
          </button>

          <div className="font-mono text-[9px] text-[#C0823E] uppercase tracking-widest font-bold">
            {lang === "DE" ? "Aktiv:" : "Active:"} {activeCheck?.title[lang]}
          </div>
        </div>
      )}

      {/* SECTION B: WHAT YOU RECEIVE */}
      {!activeCheckId && (
        <div className="border-t border-b border-charcoal/10 py-10 select-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-widest text-[#C0823E] uppercase font-bold">01 / Decision Signal</div>
              <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                {lang === "DE"
                  ? "Grün, Gelb oder Rot — damit Sie sofort sehen, ob ein Thema standardnah, absicherungsbedürftig oder prüfungsbedürftig ist."
                  : "Green, yellow or red — so you can see whether a topic appears standard, requires safeguards or should be reviewed."}
              </p>
            </div>
            
            <div className="space-y-3 md:border-l md:border-charcoal/10 md:pl-8">
              <div className="font-mono text-[10px] tracking-widest text-[#C0823E] uppercase font-bold">02 / Executive Briefing</div>
              <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                {lang === "DE"
                  ? "Kurzfazit, Entscheidungslogik, nächste Schritte, Grenzen und Red Flags in einem klaren Format."
                  : "Short conclusion, decision logic, next steps, limitations and red flags in a clear format."}
              </p>
            </div>

            <div className="space-y-3 md:border-l md:border-charcoal/10 md:pl-8">
              <div className="font-mono text-[10px] tracking-widest text-[#C0823E] uppercase font-bold">03 / Varda Handover</div>
              <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                {lang === "DE"
                  ? "Wenn eine verbindliche Prüfung sinnvoll ist, können Sie den Vorgang strukturiert an Varda Legal übergeben."
                  : "If a binding review is appropriate, you can hand over the matter to Varda Legal in a structured way."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION C: THE CHECKS SELECTION LIST */}
      {!activeCheckId && (
        <div id="checks-list" className="space-y-8">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal tracking-tight">
            {lang === "DE" ? "Verfügbare Executive Checks" : "Available Executive Checks"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checks.map((c) => (
              <div 
                key={c.id} 
                className="bg-white border border-charcoal/10 hover:border-brand-red p-6 flex flex-col justify-between transition-all group duration-300 shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-mono">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#C0823E] font-bold">
                      {lang === "DE" ? "Dauer: ca. 3 Min." : "Duration: approx. 3 Min."}
                    </span>
                    <span className="bg-[#FAF8F4] px-2 py-0.5 rounded border border-charcoal/5 font-mono text-[9px] uppercase tracking-wider text-charcoal/60">
                      Executive Check
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal group-hover:text-brand-red transition-colors">
                    {c.title[lang]}
                  </h4>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-normal">
                    {c.description[lang]}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleSelectCheck(c.id)}
                    className="w-full py-2.5 bg-[#FAF8F4] hover:bg-brand-red hover:text-white border border-charcoal/10 transition-all font-mono text-[10px] uppercase tracking-widest font-bold text-charcoal flex justify-between items-center px-4 cursor-pointer"
                  >
                    <span>{lang === "DE" ? "Check starten" : "Start check"}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE QUESTION FLOW */}
      {activeCheckId && !showingResult && (
        <div className="max-w-3xl mx-auto py-6 animate-fade-in select-none">
          {/* Progress Indicator */}
          <div className="relative w-full h-[2px] bg-charcoal/5 mb-8">
            <div 
              className="absolute left-0 top-0 h-full bg-[#C0823E] transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / activeCheck.questions.length) * 100}%` }}
            />
            <div className="absolute right-0 -top-6 font-mono text-[9px] text-[#C0823E] tracking-widest uppercase font-bold">
              {lang === "DE" ? "Frage" : "Question"} {currentQuestionIndex + 1} / {activeCheck.questions.length}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-charcoal tracking-tight leading-relaxed">
              {currentQuestion?.questionText[lang]}
            </h3>

            <div className="space-y-3 pt-2">
              {currentQuestion?.options.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleAnswer(currentQuestion.id, opt.key)}
                  className="w-full text-left p-4 bg-white hover:bg-[#FAF8F4] border border-charcoal/10 hover:border-[#C0823E] rounded-none transition-all duration-200 flex items-start gap-4 group cursor-pointer focus:outline-none"
                >
                  <span className="w-6 h-6 rounded-full bg-stone-50 group-hover:bg-charcoal group-hover:text-white border border-charcoal/10 text-xs font-mono font-bold flex items-center justify-center transition-all shrink-0">
                    {opt.key}
                  </span>
                  <span className="text-sm font-sans text-charcoal/80 font-normal leading-relaxed group-hover:text-charcoal transition-colors">
                    {opt.text[lang]}
                  </span>
                </button>
              ))}
            </div>

            {currentQuestionIndex > 0 && (
              <div className="pt-4 flex justify-start">
                <button
                  onClick={handlePreviousQuestion}
                  className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-charcoal/40 bg-transparent border-none p-0 cursor-pointer hover:text-charcoal transition-colors"
                >
                  <ChevronRight className="h-3 w-3 rotate-180" />
                  <span>{lang === "DE" ? "Vorherige Frage" : "Previous question"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* THE COMPACT EXECUTIVE BRIEFING RESULT SCREEN */}
      {activeCheckId && showingResult && rc && (
        <div id="briefing-print-area" className="max-w-4xl mx-auto space-y-8 animate-fade-in bg-white border border-charcoal/15 p-6 sm:p-8 md:p-10 shadow-sm print:shadow-none print:border-none">
          
          {/* Header area */}
          <div className="border-b border-charcoal/10 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[9px] tracking-widest text-charcoal/40 uppercase font-bold">[ VARDA LEGAL NAVIGATOR BRIEFING ]</span>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-charcoal leading-none">
                Executive Briefing
              </h2>
              <div className="font-mono text-[10px] text-[#C0823E] font-bold">
                {activeCheck?.title[lang]}
              </div>
            </div>

            <div className="flex gap-2 print:hidden select-none">
              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center bg-white border border-charcoal/15 hover:border-charcoal text-charcoal text-[10px] font-mono uppercase tracking-widest px-3.5 py-2 transition-all font-bold cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5 mr-1.5" />
                <span>{lang === "DE" ? "Als PDF drucken" : "Print as PDF"}</span>
              </button>
              <button
                onClick={() => {
                  setShowingResult(false);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                  setHandoverSubmitted(false);
                }}
                className="inline-flex items-center justify-center bg-white border border-charcoal/15 hover:border-charcoal text-charcoal text-[10px] font-mono uppercase tracking-widest px-3.5 py-2 transition-all font-bold cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
                <span>{lang === "DE" ? "Neu starten" : "Re-evaluate"}</span>
              </button>
            </div>
          </div>

          {/* Signal card */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-[#FAF8F4] border border-charcoal/10 p-5 rounded-none font-sans select-none print:bg-stone-50">
            <div className="space-y-1 sm:col-span-1 border-b sm:border-b-0 sm:border-r border-charcoal/10 pb-3 sm:pb-0 sm:pr-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40 font-bold block">Decision Signal</span>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-3 h-3 rounded-full border ${
                  resultSignal === "GREEN" 
                    ? "bg-green-600 border-green-800" 
                    : resultSignal === "YELLOW" 
                      ? "bg-amber-500 border-amber-700" 
                      : "bg-red-600 border-red-800"
                }`} />
                <span className="font-mono text-sm uppercase tracking-wider font-bold">
                  {resultSignal === "GREEN" ? (lang === "DE" ? "Standard" : "Standard") : 
                   resultSignal === "YELLOW" ? (lang === "DE" ? "Absicherung" : "Safeguard") : 
                   (lang === "DE" ? "Prüfungsbedarf" : "Review Required")}
                </span>
              </div>
            </div>

            <div className="space-y-1 sm:col-span-1 border-b sm:border-b-0 sm:border-r border-charcoal/10 pb-3 sm:pb-0 sm:pl-4 sm:pr-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40 font-bold block">
                {lang === "DE" ? "Standardnähe" : "Standard Context"}
              </span>
              <span className="font-sans text-sm font-semibold text-charcoal">
                {rc.standard[lang]}
              </span>
            </div>

            <div className="space-y-1 sm:col-span-1 border-b sm:border-b-0 sm:border-r border-charcoal/10 pb-3 sm:pb-0 sm:pl-4 sm:pr-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40 font-bold block">
                {lang === "DE" ? "Eskalationsbedarf" : "Escalation Level"}
              </span>
              <span className="font-sans text-sm font-semibold text-charcoal">
                {rc.escalation[lang]}
              </span>
            </div>

            <div className="space-y-1 sm:col-span-1 sm:pl-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal/40 font-bold block">Status</span>
              <span className="font-mono text-[10px] text-charcoal/60 leading-relaxed font-semibold">
                {lang === "DE" ? "Orientierung, kein Rechtsrat" : "Orientation, not advice"}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-charcoal border-b border-charcoal/10 pb-1">
              {lang === "DE" ? "Zusammenfassung" : "Executive Summary"}
            </h4>
            <div className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed bg-[#FAF8F4]/50 p-4 border border-charcoal/5 font-normal">
              {rc.title[lang]} — {rc.summary[lang]}
            </div>
          </div>

          {/* User inputs summary */}
          <div className="space-y-3 select-none">
            <h4 className="font-serif text-lg font-semibold text-charcoal border-b border-charcoal/10 pb-1">
              {lang === "DE" ? "Ihre Angaben" : "Your inputs"}
            </h4>
            <div className="space-y-2 font-sans text-xs">
              {activeCheck?.questions.map((q, idx) => {
                const userKey = answers[q.id];
                const matchedOption = q.options.find(o => o.key === userKey);
                return (
                  <div key={q.id} className="flex justify-between items-baseline gap-4 py-1.5 border-b border-stone-100 last:border-none">
                    <span className="text-charcoal/50 pr-4">
                      {idx + 1}. {q.questionText[lang]}
                    </span>
                    <span className="font-semibold text-charcoal text-right">
                      {matchedOption?.text[lang]} ({userKey})
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-charcoal border-b border-charcoal/10 pb-1">
              {lang === "DE" ? "Typische nächste Schritte" : "Typical next steps"}
            </h4>
            <ol className="list-decimal list-inside space-y-2 font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
              {rc.steps.map((st, i) => (
                <li key={i} className="pl-2">
                  <span className="font-sans text-charcoal/75">{st[lang]}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Not reviewed section */}
          <div className="space-y-3 select-none">
            <h4 className="font-serif text-lg font-semibold text-charcoal border-b border-charcoal/10 pb-1">
              {lang === "DE" ? "Nicht geprüft" : "Not reviewed"}
            </h4>
            <p className="font-sans text-xs text-charcoal/65 leading-relaxed">
              {rc.exclude[lang]}
            </p>
          </div>

          {/* When Varda should review */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-charcoal border-b border-charcoal/10 pb-1">
              {lang === "DE" ? "Wann Varda prüfen sollte" : "When Varda should review"}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed font-normal">
              {rc.whenVarda[lang]}
            </p>
          </div>

          {/* Public Preview Disclaimer inside briefing */}
          <div className="p-3 bg-[#FAF8F4] border border-charcoal/10 font-sans text-[10px] sm:text-xs text-charcoal/50 leading-relaxed">
            {lang === "DE" 
              ? "Public Preview: Der Varda Legal Navigator liefert strukturierte Orientierung anhand typischer Fallgruppen. Er ersetzt keine verbindliche anwaltliche Prüfung des Einzelfalls."
              : "Public preview: The Varda Legal Navigator provides structured orientation based on typical scenarios. It does not replace binding case-specific legal advice."}
          </div>

          {/* THE HANDOVER FORM */}
          <div className="pt-10 border-t border-charcoal/15 print:hidden">
            {!handoverSubmitted ? (
              <form onSubmit={handleSendHandover} className="space-y-4 max-w-2xl bg-[#FAF8F4]/50 border border-charcoal/10 p-6 sm:p-8 rounded-none">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-charcoal">
                    {lang === "DE" ? "Verbindliche Prüfung anfragen" : "Request binding review"}
                  </h4>
                  <p className="font-sans text-xs text-charcoal/65 leading-relaxed">
                    {lang === "DE"
                      ? "Nutzen Sie das strukturierte Varda-Handover, um dieses konkrete Briefing direkt an die Kanzlei zu übertragen."
                      : "Use the structured Varda Handover to send this specific briefing directly to the firm."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 font-sans">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-1 font-bold">Name *</label>
                    <input 
                      type="text" 
                      required 
                      name="name" 
                      value={handoverForm.name} 
                      onChange={handleFormChange}
                      className="w-full text-xs p-2.5 bg-white border border-charcoal/10 hover:border-[#C0823E] focus:outline-none focus:border-[#C0823E] rounded-none shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-1 font-bold">
                      {lang === "DE" ? "Unternehmen *" : "Company *"}
                    </label>
                    <input 
                      type="text" 
                      required 
                      name="company" 
                      value={handoverForm.company} 
                      onChange={handleFormChange}
                      className="w-full text-xs p-2.5 bg-white border border-charcoal/10 hover:border-[#C0823E] focus:outline-none focus:border-[#C0823E] rounded-none shadow-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-1 font-bold">Email *</label>
                    <input 
                      type="email" 
                      required 
                      name="email" 
                      value={handoverForm.email} 
                      onChange={handleFormChange}
                      className="w-full text-xs p-2.5 bg-white border border-charcoal/10 hover:border-[#C0823E] focus:outline-none focus:border-[#C0823E] rounded-none shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-1 font-bold">
                      {lang === "DE" ? "Telefonnummer" : "Phone number"} ({lang === "DE" ? "optional" : "optional"})
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={handoverForm.phone} 
                      onChange={handleFormChange}
                      className="w-full text-xs p-2.5 bg-white border border-charcoal/10 hover:border-[#C0823E] focus:outline-none focus:border-[#C0823E] rounded-none shadow-sm" 
                    />
                  </div>
                </div>

                <div className="font-sans">
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal/60 mb-1 font-bold">
                    {lang === "DE" ? "Kurzbeschreibung / Ihre Anmerkung" : "Short note / details"}
                  </label>
                  <textarea 
                    name="note" 
                    rows={3} 
                    value={handoverForm.note} 
                    onChange={handleFormChange}
                    placeholder={lang === "DE" ? "Zusätzliche Angaben zur Maßnahme..." : "Additional comments or facts regarding this measure..."}
                    className="w-full text-xs p-2.5 bg-white border border-charcoal/10 hover:border-[#C0823E] focus:outline-none focus:border-[#C0823E] rounded-none shadow-sm resize-none" 
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-2 select-none font-sans">
                  <input 
                    type="checkbox" 
                    id="consent-agreed" 
                    required 
                    checked={handoverForm.agreed} 
                    onChange={handleCheckboxChange}
                    className="mt-1 h-3.5 w-3.5 border-charcoal/20 focus:ring-0 text-brand-red rounded-none shadow" 
                  />
                  <label htmlFor="consent-agreed" className="text-xs text-charcoal/70 leading-relaxed cursor-pointer font-normal">
                    {lang === "DE" 
                      ? "Ich möchte, dass Varda Legal diesen Vorgang für eine mögliche verbindliche Prüfung kontaktiert."
                      : "I would like Varda Legal to contact me regarding a possible binding review."}
                  </label>
                </div>

                <div className="p-3 bg-stone-50 border border-charcoal/5 font-sans text-[10px] text-charcoal/60 leading-normal">
                  {lang === "DE"
                    ? "Durch Absenden entsteht noch kein Mandat. Varda Legal prüft zunächst, ob eine Beratung übernommen werden kann."
                    : "Submitting this form does not create an attorney-client relationship. Varda Legal will first assess whether it can take on the matter."}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-brand-red text-white hover:bg-brand-red/95 font-mono text-[10px] uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer rounded-none border-none"
                  >
                    {lang === "DE" ? "Verbindliche Prüfung anfragen" : "Request binding review"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="max-w-xl bg-green-50 border border-green-200 p-6 sm:p-8 font-sans text-sm text-green-900 animate-fade-in rounded-none shadow-sm">
                <div className="flex gap-3">
                  <Check className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h5 className="font-semibold">{lang === "DE" ? "Vielen Dank" : "Thank you"}</h5>
                    <p className="text-xs sm:text-sm text-green-800 leading-relaxed font-normal">
                      {lang === "DE"
                        ? "Vielen Dank. Wir haben Ihre Anfrage erhalten. Varda Legal meldet sich bei Ihnen, um zu klären, ob und in welchem Umfang eine verbindliche Prüfung übernommen werden kann."
                        : "Thank you. We have received your request. Varda Legal will contact you to clarify whether and to what extent a binding review can be provided."}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
