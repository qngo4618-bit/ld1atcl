import { useState, useMemo, useCallback } from "react";
import { SearchBar } from "@/components/SearchBar";
import { QACard } from "@/components/QACard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { qaData, categories } from "@/data/qaData";
import { standardizedData, standardizedCategories } from "@/data/standardizedData";
import { searchQA } from "@/lib/searchEngine";
import { useDebounce } from "@/hooks/useDebounce";

type Tab = "internal" | "standardized";

export default function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("internal");
  const debouncedQuery = useDebounce(query, 150);

  const activeData = tab === "internal" ? qaData : standardizedData;
  const activeCategories = tab === "internal" ? categories : standardizedCategories;

  const results = useMemo(
    () => searchQA(debouncedQuery, activeData, category),
    [debouncedQuery, activeData, category]
  );

  const handleCategoryChange = useCallback((cat: string | null) => {
    setCategory(cat);
  }, []);

  const handleTabChange = useCallback((newTab: Tab) => {
    setTab(newTab);
    setCategory(null);
    setQuery("");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 text-center">
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Tra Cứu ATCL
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Tài liệu nội bộ LĐTV1
          </p>
          {/* Tabs */}
          <div className="flex gap-1 mt-3 bg-muted rounded-lg p-1">
            <button
              onClick={() => handleTabChange("internal")}
              className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all ${
                tab === "internal"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📚 Tài liệu nội bộ
            </button>
            <button
              onClick={() => handleTabChange("standardized")}
              className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all ${
                tab === "standardized"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📝 Chuẩn hóa
            </button>
          </div>
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
          categories={activeCategories}
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
              {activeData.length} câu hỏi{" "}
              {tab === "internal" ? "từ tài liệu nội bộ" : "chuẩn hóa"}
            </p>
          </div>
        ) : !debouncedQuery.trim() && category ? (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center mb-3">
              <span className="font-semibold text-foreground">
                {activeData.filter((q) => q.category === category).length}
              </span>{" "}
              câu hỏi trong "{category}"
            </p>
            {activeData
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
