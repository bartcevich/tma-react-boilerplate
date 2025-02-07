import { Header } from "./header";
import { Footer } from "./footer";
import { create } from "zustand";
import { ReactNode } from "react";
// import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";

export interface LayoutStoreProps {
  bgImage?: ReactNode;
  bgColor?: string;
  isHeaderDisabled?: boolean;
}

export interface LayoutStoreActions {
  changeLayout: (state: LayoutStoreProps) => void;
}

export const useLayoutStore = create<LayoutStoreProps & LayoutStoreActions>(
  (set) => ({
    bgColor: undefined,
    bgImage: undefined,
    isHeaderDisabled: false,

    changeLayout: (state) => {
      set(() => state);
    },
  })
);

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  // const { bgColor, isHeaderDisabled } = useLayoutStore();

  // const isHeightTale = useMediaQuery("(min-height: 680px)");

  return (
    <div
      // style={{ backgroundColor: bgColor }}
      className="h-dvh bg-black flex relative flex-col pt-[var(--tg-viewport-safe-area-inset-top)]"
    >
      {/* {!isHeaderDisabled && } */}
      <Header />
      <div className="relative w-full top-[-8px] flex justify-center ">
        <div className="fixed h-[726px] opacity-50 shadow-[0_0_300px_90px_rgba(103,58,173,1)]"></div>
      </div>
      <div className="container pb-4 flex-1 overflow-auto overflow-x-hidden relative z-10 max-w-lg flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
};
