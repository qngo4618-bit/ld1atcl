import type { QAItem } from "@/data/qaData";

function removeVietnameseTones(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

interface IndexedItem {
  item: QAItem;
  qLower: string;
  qNoTone: string;
  aLower: string;
  aNoTone: string;
  kwLower: string;
  kwNoTone: string;
}

let indexedData: IndexedItem[] | null = null;

export function buildIndex(data: QAItem[]): IndexedItem[] {
  if (indexedData && indexedData.length === data.length) return indexedData;

  indexedData = data.map((item) => {
    const qLower = item.question.toLowerCase();
    const aLower = item.answer.toLowerCase();
    const kwLower = item.keywords.join(" ").toLowerCase();
    return {
      item,
      qLower,
      qNoTone: removeVietnameseTones(qLower),
      aLower,
      aNoTone: removeVietnameseTones(aLower),
      kwLower,
      kwNoTone: removeVietnameseTones(kwLower),
    };
  });

  return indexedData;
}

export function searchQA(
  query: string,
  data: QAItem[],
  category: string | null
): QAItem[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  // Allow single-char keywords for uppercase/special terms (e.g. "A", "C")
  const keywords = trimmed
    .toLowerCase()
    .split(/\s+/)
    .filter((k) => k.length >= 1);

  if (keywords.length === 0) return [];

  const normalizedKeywords = keywords.map((k) => ({
    original: k,
    noTone: removeVietnameseTones(k),
  }));

  const indexed = buildIndex(data);

  const scored = indexed
    .filter((entry) => !category || entry.item.category === category)
    .map((entry) => {
      let score = 0;

      for (const { original, noTone } of normalizedKeywords) {
        // Exact phrase in question (highest priority)
        if (entry.qLower.includes(original)) score += 5;
        else if (entry.qNoTone.includes(noTone)) score += 4;

        // Keywords/tags match
        if (entry.kwLower.includes(original)) score += 3;
        else if (entry.kwNoTone.includes(noTone)) score += 2;

        // Answer content match
        if (entry.aLower.includes(original)) score += 1;
        else if (entry.aNoTone.includes(noTone)) score += 1;
      }

      // Bonus: exact full query match in question
      const queryLower = trimmed.toLowerCase();
      const queryNoTone = removeVietnameseTones(queryLower);
      if (entry.qLower.includes(queryLower) || entry.qNoTone.includes(queryNoTone)) {
        score += 3;
      }

      return { item: entry.item, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map((s) => s.item);
}
