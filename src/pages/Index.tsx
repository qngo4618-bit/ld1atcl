import { useState, useMemo, useCallback } from "react";
import { SearchBar } from "@/components/SearchBar";
import { QACard } from "@/components/QACard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { qaData, categories } from "@/data/qaData";
import { searchQA } from "@/lib/searchEngine";
import { useDebounce } from "@/hooks/useDebounce";

export default function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const debouncedQuery = useDebounce(query, 150);

  const results = useMemo(
    () => searchQA(debouncedQuery, qaData, category),
    [debouncedQuery, category]
  );

  const handleCategoryChange = useCallback((cat: string | null) => {
    setCategory(cat);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 text-center">
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Tra Cứu ATCL
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Tài liệu nội bộ LĐTV1
          </p>
        </div>
      </header>

      {/* Search + Filter */}
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-2 space-y-3">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          resultCount={results.length}
          isSearching={query !== debouncedQuery}
        />
        <CategoryFilter
          categories={categories}
          selected={category}
          onSelect={handleCategoryChange}
        />
      </div>

      {/* Results */}
      <main className="max-w-3xl mx-auto px-4 pb-12 pt-2">
        {!debouncedQuery.trim() && !category ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-sm">
              Nhập từ khoá để bắt đầu tìm kiếm
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              {qaData.length} câu hỏi từ tài liệu nội bộ
            </p>
          </div>
        ) : !debouncedQuery.trim() && category ? (
          // Show all items in selected category
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center mb-3">
              <span className="font-semibold text-foreground">
                {qaData.filter((q) => q.category === category).length}
              </span>{" "}
              câu hỏi trong "{category}"
            </p>
            {qaData
              .filter((q) => q.category === category)
              .map((item) => (
                <QACard key={item.id} item={item} query="" />
              ))}
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-sm">
              Không tìm thấy kết quả cho "{debouncedQuery}"
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              Thử từ khoá khác hoặc bỏ bộ lọc
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center mb-3">
              Tìm thấy{" "}
              <span className="font-semibold text-foreground">
                {results.length}
              </span>{" "}
              kết quả
            </p>
            {results.map((item) => (
              <QACard key={item.id} item={item} query={debouncedQuery} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
