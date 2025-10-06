export type Region =
  | "서울"
  | "경기"
  | "인천"
  | "강원"
  | "충북"
  | "충남"
  | "세종"
  | "대전"
  | "광주"
  | "전북"
  | "경북"
  | "대구"
  | "제주"
  | "전남"
  | "경남/울산"
  | "부산";

export interface PriceRange {
  id: string;
  label: string;
  min: number;
  max: number;
}

export const REGIONS: Region[] = [
  "서울",
  "경기",
  "인천",
  "강원",
  "충북",
  "충남",
  "세종",
  "대전",
  "광주",
  "전북",
  "경북",
  "대구",
  "제주",
  "전남",
  "경남/울산",
  "부산",
];

export const PRICE_RANGES: PriceRange[] = [
  { id: "lt-20000", label: "~2만원", min: 0, max: 20000 },
  { id: "20000-40000", label: "2~4만원", min: 20000, max: 40000 },
  { id: "40000-60000", label: "4~6만원", min: 40000, max: 60000 },
  { id: "60000-80000", label: "6~8만원", min: 60000, max: 80000 },
  { id: "80000-100000", label: "8~10만원", min: 80000, max: 100000 },
  { id: "gt-100000", label: "10만원 ~", min: 100000, max: Infinity },
];

export const THEME_FILTERS = [
  { id: "cute", name: "큐트" },
  { id: "minimal", name: "미니멀/모던" },
  { id: "premium", name: "프리미엄/럭셔리" },
  { id: "3d", name: "3D 입체" },
  { id: "organic", name: "내추럴/오가닉" },
];

export const SORT_FILTERS = [
  { value: "popular", label: "인기순" },
  { value: "recent", label: "최신순" },
  { value: "lower", label: "낮은가격순" },
  { value: "higher", label: "높은가격순" },
];
