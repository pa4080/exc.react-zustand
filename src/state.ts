import { create } from "zustand";

/**
 * Don't use one giant store!
 * Use more small separate stores.
 * For example if you have authentication,
 * you can create a separate store for it.
 * Even in a separate file.
 */

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
  incByAmountAsync: (amount: number) => Promise<void>;
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
  incByAmountAsync: async (amount: number) => {
    // simulate an async action that takes 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + amount }));
  },
}));
