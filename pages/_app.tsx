import "../styles/root.scss";

import { Noto_Color_Emoji } from "@next/font/google";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Provider } from "react-redux";
import store from "redux/store";

import ThemeProvider from "@/components/ThemeProvider";

const notoColorEmoji = Noto_Color_Emoji({ weight: "400", subsets: ["emoji"] });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <style jsx global>
      {`
        html {
          font-family: ${notoColorEmoji.style.fontFamily};
        }
      `}
    </style>
    {/* Google Analytics */}
    <Script
      strategy="lazyOnload"
      src="https://www.googletagmanager.com/gtag/js?id=G-1JHZSH8YH4"
    />
    <Script strategy="lazyOnload" id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-1JHZSH8YH4');
          `}
    </Script>

    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

export default MyApp;
