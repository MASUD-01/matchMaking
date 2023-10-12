import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "700",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  inter,
  roboto,
};
