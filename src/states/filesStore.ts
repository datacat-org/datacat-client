import { create } from "zustand";

export const useFilesStore = create((set) => ({
  filesArray: "",
  setFilesArray: (filesArray: any) => set({ filesArray }),
}));
