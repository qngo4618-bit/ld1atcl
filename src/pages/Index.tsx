import { useState, useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { QACard } from "@/components/QACard";
import { qaData } from "@/data/qaData";

function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

function searchQA(query: string) {
  if (!query.trim()) return [];

  const keywords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((k) => k.length >= 2);

  if (keywords.length === 0) return [];

  const scored = qaData
    .map((item) => {
      let score = 0;
      const qLower = item.question.toLowerCase();
      const aLower = item.answer.toLowerCase();
      const kwJoined = item.keywords.join(" ").toLowerCase();
      const qNoTone = removeVietnameseTones(qLower);
      const aNoTone = removeVietnameseTones(aLower);
      const kwNoTone = removeVietnameseTones(kwJoined);

      for (const kw of keywords) {
        const kwNT = removeVietnameseTones(kw);
        if (qLower.includes(kw) || qNoTone.includes(kwNT)) score += 3;
        if (kwJoined.includes(kw) || kwNoTone.includes(kwNT)) score += 2;
        if (aLower.includes(kw) || aNoTone.includes(kwNT)) score += 1;
      }

      return { item, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map((s) => s.item);
}

export default function Index() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchQA(query), [query]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Tra Cứu ATCL
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Tài liệu nội bộ LĐTV1
          </p>
        </div>
      </header>

      {/* Search */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          resultCount={results.length}
        />
      </div>

      {/* Results */}
      <main className="max-w-3xl mx-auto px-4 pb-12">
        {!query.trim() ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-sm">
              Nhập từ khoá để bắt đầu tìm kiếm
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              {qaData.length} câu hỏi từ tài liệu nội bộ
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-sm">
              Không tìm thấy kết quả cho "{query}"
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              Thử từ khoá khác
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {results.map((item) => (
              <QACard key={item.id} item={item} query={query} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
