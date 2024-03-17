import { create } from "zustand";

export const useWalletStore = create((set) => ({
  walletAddress: "",
  setWalletAddress: (address: string) => set({ walletAddress: address }),
  circleWalletAddress: "",
  setCircleWalletAddress: (address: string) =>
  set({ circleWalletAddress: address }),
}));
