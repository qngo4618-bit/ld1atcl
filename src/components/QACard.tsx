import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { QAItem } from "@/data/qaData";

interface QACardProps {
  item: QAItem;
  query: string;
}

function highlightText(text: string, query: string) {
  if (!query.trim()) return text;
  
  const keywords = query.toLowerCase().split(/\s+/).filter(k => k.length >= 2);
  if (keywords.length === 0) return text;
  
  const escapedKeywords = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");
  
  const parts = text.split(regex);
  
  return parts.map((part, i) => {
    if (keywords.some(k => part.toLowerCase() === k)) {
      return <mark key={i} className="bg-amber-200 text-foreground font-semibold rounded-sm px-0.5">{part}</mark>;
    }
    return part;
  });
}

export function QACard({ item, query }: QACardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      {/* Question - clickable */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-accent/50 transition-colors active:scale-[0.995]"
      >
        <ChevronRight
          className={`h-4 w-4 mt-0.5 shrink-0 text-muted-foreground transition-transform duration-200 ${
            expanded ? "rotate-90" : ""
          }`}
        />
        <span className="text-sm font-medium text-foreground leading-relaxed">
          {highlightText(item.question, query)}
        </span>
      </button>

      {/* Answer - expandable */}
      {expanded && (
        <div className="px-4 pb-3 pl-11 border-t border-border/50">
          <div className="pt-3 space-y-1.5">
            {item.answer.split("\n").filter(l => l.trim()).map((line, i) => (
              <p key={i} className="text-sm text-foreground/80 leading-relaxed">
                {line.startsWith("-") || line.startsWith("•") || line.startsWith("*") ? (
                  <span className="flex gap-2">
                    <span className="text-muted-foreground select-none shrink-0">•</span>
                    <span>{highlightText(line.replace(/^[-•*]\s*/, ""), query)}</span>
                  </span>
                ) : (
                  <span className="font-medium">{highlightText(line, query)}</span>
                )}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
