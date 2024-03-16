import { create } from "zustand";

export const useUserStore = create((set) => ({
  userType: "",
  setUserType: (type: string) => set({ userType: type }),
}));
