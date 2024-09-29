import {create} from "zustand";

export type ButtonStateStore = {
    model1buttonState: boolean;
    setModel1ButtonState: (model1buttonState: boolean) => void;

};


export const UseButtonStateStore = create<ButtonStateStore>((set) => ({
    model1buttonState: false,
    setModel1ButtonState: (model1buttonState: boolean) => set({model1buttonState}),
}));