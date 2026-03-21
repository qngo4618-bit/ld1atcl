interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 text-xs font-medium rounded border transition-all active:scale-95 ${
          selected === null
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
        }`}
      >
        Tất cả
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat === selected ? null : cat)}
          className={`px-3 py-1.5 text-xs font-medium rounded border transition-all active:scale-95 ${
            selected === cat
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
