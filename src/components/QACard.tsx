import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
  const answerLines = item.answer.split("\n").filter(l => l.trim());
  const isLong = answerLines.length > 3;
  const displayLines = expanded ? answerLines : answerLines.slice(0, 3);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-shadow hover:shadow-md">
      {/* Category + Source */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-1">
        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">
          {item.category}
        </span>
        <span className="text-xs text-muted-foreground">
          {item.source}
        </span>
      </div>

      {/* Question */}
      <div className="px-4 py-2">
        <p className="text-sm font-semibold text-foreground leading-relaxed">
          {highlightText(item.question, query)}
        </p>
      </div>

      {/* Answer */}
      <div className="px-4 pb-3 border-t border-border/50 pt-2">
        <div className="space-y-1">
          {displayLines.map((line, i) => (
            <p key={i} className="text-sm text-foreground/80 leading-relaxed">
              {line.startsWith("-") || line.startsWith("•") ? (
                <span className="flex gap-2">
                  <span className="text-muted-foreground select-none">•</span>
                  <span className="font-medium">{highlightText(line.replace(/^[-•]\s*/, ""), query)}</span>
                </span>
              ) : (
                <span className="font-medium">{highlightText(line, query)}</span>
              )}
            </p>
          ))}
        </div>

        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors active:scale-98"
          >
            {expanded ? (
              <>Thu gọn <ChevronUp className="h-3 w-3" /></>
            ) : (
              <>Xem thêm ({answerLines.length - 3} dòng) <ChevronDown className="h-3 w-3" /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
