import { Search, X } from "lucide-react";
import { useRef, useEffect } from "react";

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  resultCount: number;
}

export function SearchBar({ query, onQueryChange, resultCount }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Nhập từ khoá tìm kiếm... (VD: HALON, turbulence, báo ốm)"
          className="w-full h-14 pl-12 pr-12 bg-card border-2 border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base"
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors active:scale-95"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {query && (
        <p className="mt-2 text-sm text-muted-foreground text-center">
          Tìm thấy <span className="font-semibold text-foreground">{resultCount}</span> kết quả
        </p>
      )}
    </div>
  );
}
