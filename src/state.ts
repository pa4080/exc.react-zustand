import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
  incrementByAmountAsync: (amount: number) => Promise<void>;
}

/**
 * This is just a react hook created by "create"
 */
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0, // This is the initial state value
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementByAmount: (amount: number) =>
    set((state) => ({ count: state.count + amount })),
  incrementByAmountAsync: async (amount: number) => {
    // simulate an async action that takes 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + amount }));
  },
}));
