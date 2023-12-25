import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";
import { green } from "tailwindcss/colors.js";

// Import Vercel Analytics script (if available as a module)
// import VercelAnalytics from 'path-to-vercel-analytics';

const App = ({ Component, pageProps }) => {
  // Initialize Vercel Analytics (if needed)
  // VercelAnalytics.init();

  return (
    <>
      <NextNProgress color={green[500]} height={4} />
      <Component {...pageProps} />;
    </>
  );
};

export default appWithTranslation(App);
