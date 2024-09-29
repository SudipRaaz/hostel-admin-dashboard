import {create } from "zustand";

type NavBarStore = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void
  toggled: boolean;
  setToggled: (toggled: boolean) => void
};

export const useNavBarStore = create<NavBarStore>((set) => ({
    collapsed: false,
    setCollapsed: (collapsed: boolean) => set({ collapsed}),
    toggled: false,
    setToggled: (toggled: boolean) => set({ toggled}),
    }));