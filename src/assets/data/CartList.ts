export interface CartItem {
  id: number;
  storeName: string;
  location: string;
  cakeName: string;
  price: number;
  imageUrl: string;
  pickupDate: string;
  pickupTime: string;
  size: string;
  sizePrice: number;
  flavors: Array<{ name: string; price: number }>;
  isExpanded: boolean;
}
export const mockCartList: CartItem[] = [
  {
    id: 1,
    storeName: 'store name',
    location: 'location',
    cakeName: '케이크 명',
    price: 30000,
    imageUrl: '',
    pickupDate: '9.16(화)',
    pickupTime: '12:30',
    size: '1호(15cm)',
    sizePrice: 27000,
    flavors: [
      { name: '초코 시트', price: 2000 },
      { name: '오레오 필링', price: 2000 },
    ],
    isExpanded: true,
  },
  {
    id: 2,
    storeName: 'store name',
    location: 'location',
    cakeName: '케이크 명',
    price: 30000,
    imageUrl: '',
    pickupDate: '9.16(화)',
    pickupTime: '12:30',
    size: '1호(15cm)',
    sizePrice: 27000,
    flavors: [
      { name: '초코 시트', price: 2000 },
      { name: '오레오 필링', price: 2000 },
    ],
    isExpanded: true,
  },
];
