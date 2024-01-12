import { type Config } from "tailwindcss";
import daisyui from "daisyui";
import tailwindForms from "tailwindcss/forms";
import tailwindTypography from "tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [
    daisyui,
    tailwindForms,
    tailwindTypography,
  ],
} satisfies Config;