import daisyui from "daisyui";
import tailwindForms from "@tailwindcss/forms";
import tailwindTypography from "@tailwindcss/typography";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./islands/**/*.{js,ts,jsx,tsx,mdx}",
    "./routes/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    daisyui,
    tailwindForms,
    tailwindTypography,
  ],
};
