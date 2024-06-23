import { create } from "zustand";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

/**
 * This is just a react hook created by "create"
 */
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0, // This is the initial state value
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
