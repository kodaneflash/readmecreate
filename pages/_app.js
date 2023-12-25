import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";
import { green } from "tailwindcss/colors.js";
import { Analytics } from '@vercel/analytics/react'; // Import the Analytics component

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color={green[500]} height={4} />
      <Component {...pageProps} />
      <Analytics /> {/* Add the Analytics component */}
    </>
  );
};

export default appWithTranslation(App);
