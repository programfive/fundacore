import { create } from "zustand";

interface State {
  urlImage: string;
  updateUrlImage: (setUrlImage: string) => void;
};

export  const useAvatarStore = create<State>((set) => ({
  urlImage: "",
  updateUrlImage:(setUrlImage:string)=>{
    set({
      urlImage:setUrlImage
    })
  }
}));
