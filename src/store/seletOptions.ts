import { create } from 'zustand';

interface OrderState {
  date: Date | undefined;
  selectedTime: string;
  selectedSize: string;
  selectedSheet: string;
  selectedFilling: string;
  selectedDesignCandle: string[];
  selectedPackaging: string;
  selectedIcePack: string;
}

interface OrderActions {
  setCalendarDate: (date: Date | undefined) => void;
  setPickupTime: (time: string) => void;
  setSize: (size: string) => void;
  setSheet: (sheet: string) => void;
  setFilling: (filling: string) => void;
  toggleDesignCandle: (design: string) => void;
  setPackaging: (packaging: string) => void;
  setIcePack: (icePack: string) => void;
  calculateTotalPrice: () => number;
}

type OrderStore = OrderState & OrderActions;

export const useOrderStore = create<OrderStore>((set, get) => ({
  // Initial state
  date: new Date(),
  selectedTime: '12:00',
  selectedSize: '0호 10cm',
  selectedSheet: '바닐라',
  selectedFilling: '딸기잼',
  selectedDesignCandle: ['기본'],
  selectedPackaging: '기본 (펄프용기)',
  selectedIcePack: '추가 X',

  // Actions
  setCalendarDate: (date) => {
    set({ date });
  },

  setPickupTime: (time) => {
    set({ selectedTime: time });
  },

  setSize: (size) => set({ selectedSize: size }),

  setSheet: (sheet) => set({ selectedSheet: sheet }),

  setFilling: (filling) => set({ selectedFilling: filling }),

  toggleDesignCandle: (design) =>
    set((state) => ({
      selectedDesignCandle: state.selectedDesignCandle.includes(design)
        ? state.selectedDesignCandle.filter((d) => d !== design)
        : [...state.selectedDesignCandle, design],
    })),

  setPackaging: (packaging) => set({ selectedPackaging: packaging }),

  setIcePack: (icePack) => set({ selectedIcePack: icePack }),

  calculateTotalPrice: () => {
    const state = get();
    let total = 33000; // 기본 가격

    // 사이즈 추가 금액
    if (state.selectedSize === '1호 15cm') {
      total += 27000;
    }
    if (state.selectedSize === '2호 18cm') total += 40000;

    // 시트 추가 금액
    if (state.selectedSheet === '초코') total += 27000;
    if (state.selectedSheet === '레드벨벳') total += 40000;

    // 필링 추가 금액
    if (state.selectedFilling === '오레오') total += 2000;
    if (state.selectedFilling === '초코 가나슈') total += 2000;

    // 디자인 추가 금액
    if (state.selectedDesignCandle.includes('하트(레드)')) total += 27000;
    if (state.selectedDesignCandle.includes('하트(핑크)')) total += 40000;
    if (state.selectedDesignCandle.includes('곰돌이(화이트)')) total += 2000;
    if (state.selectedDesignCandle.includes('곰돌이(브라운)')) total += 2000;

    // 포장 추가 금액
    if (state.selectedPackaging === '기본 (펄프용기) + 비닐백') total += 27000;
    if (state.selectedPackaging === '케이크 상자') total += 40000;

    // 아이스팩 추가 금액
    if (state.selectedIcePack === '아이스팩 1개 추가 (여름철 필수)')
      total += 27000;

    return total;
  },
}));
