import { create } from 'zustand'

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ReservationData {
  dates: { start: string; end: string; days?: number } | null;
  userDetails: {
    name: string;
    phone: string;
    eventType: string;
    location: string;
  };
  shipping: {
    method: 'pickup' | 'delivery';
    address: string;
  };
}

interface StoreState {
  cart: CartItem[];
  reservationData: ReservationData;
  currentStep: number;
  addToCart: (item: any) => void;
  removeFromCart: (itemId: string | number) => void;
  updateReservationData: (data: Partial<ReservationData>) => void;
  setCurrentStep: (step: number) => void;
  clearCart: () => void;
}

const useStore = create<StoreState>((set) => ({
  cart: [],
  reservationData: {
    dates: null,
    userDetails: {
      name: '',
      phone: '',
      eventType: '',
      location: '',
    },
    shipping: {
      method: 'delivery',
      address: '',
    },
  },
  currentStep: 1,

  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, { ...item, quantity: item.cartQuantity || 1 }],
    })),

  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),

  updateReservationData: (data) =>
    set((state) => ({
      reservationData: { ...state.reservationData, ...data },
    })),

  setCurrentStep: (step) => set({ currentStep: step }),

  clearCart: () => set({ cart: [] }),
}))

export default useStore
