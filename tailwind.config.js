/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "Sarabun", "sans-serif"],
      },
      animation: {
        "blink-seleted": "blink-seleted 1.5s infinite",
      },
      keyframes: {
        "blink-seleted": {
          "0%, 100%": { backgroundColor: "rgba(237, 107, 58, 0)" },
          "50%": { backgroundColor: "rgba(237, 107, 58, 0.3)" },
        },
      },
      colors: {
        "prim-1": "#333c45",
        "prim-2": "#4e5a65",
        "prim-3": "#64727d",
        "prim-4": "#dddddd",
        "prim-5": "#eeeeee",
        "prim-6": "#ffffff",
        "text-d": "#07050f",
        "text-l": "#ffffff",
        "acct-1": "#0d5359",
        "acct-2": "#137252",
        "acct-3": "#27c183",
        "acct-4": "#aad86d",
        "acct-5": "#fbbe53",
        "acct-6": "#ed6b3a",
        "acct-7": "#eb0d46",
        "acct-8": "#9f2b5c",
        "acct-9": "#700360",
        "acct-10": "#0a2979",
        "acct-11": "#137c86",
        "acct-12": "#1b9d72",
        "acct-13": "#41d89b",
        "acct-14": "#c2e396",
        "acct-15": "#fccf83",
        "acct-16": "#f18e6a",
        "acct-17": "#f53867",
        "acct-18": "#c83773",
        "acct-19": "#a4048c",
        "acct-20": "#0e3aaa",
      },
    },
  },
  safelist: [
    // Add the dynamic classes here (or use a pattern if you have many)
    "bg-acct-1",
    "bg-acct-2",
    "bg-acct-3",
    "bg-acct-4",
    "bg-acct-5",
    "bg-acct-6",
    "bg-acct-7",
    "bg-acct-8",
    "bg-acct-9",
    "bg-acct-10",
    "bg-acct-11",
    "bg-acct-12",
    "bg-acct-13",
    "bg-acct-14",
    "bg-acct-15",
    "bg-acct-16",
    "bg-acct-17",
    "bg-acct-18",
    "bg-acct-19",
    "bg-acct-20",
    "text-acct-1",
    "text-acct-2",
    "text-acct-3",
    "text-acct-4",
    "text-acct-5",
    "text-acct-6",
    "text-acct-7",
    "text-acct-8",
    "text-acct-9",
    "text-acct-10",
    "text-acct-11",
    "text-acct-12",
    "text-acct-13",
    "text-acct-14",
    "text-acct-15",
    "text-acct-16",
    "text-acct-17",
    "text-acct-18",
    "text-acct-19",
    "text-acct-20",
    "border-acct-1",
    "border-acct-2",
    "border-acct-3",
    "border-acct-4",
    "border-acct-5",
    "border-acct-6",
    "border-acct-7",
    "border-acct-8",
    "border-acct-9",
    "border-acct-10",
    "border-acct-11",
    "border-acct-12",
    "border-acct-13",
    "border-acct-14",
    "border-acct-15",
    "border-acct-16",
    "border-acct-17",
    "border-acct-18",
    "border-acct-19",
    "border-acct-20",
  ],
  plugins: [],
};
