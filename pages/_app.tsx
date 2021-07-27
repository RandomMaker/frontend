import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import "../public/light-theme.css";
import "../public/dark-theme.css";

const themes = {
    dark: `/dark-theme.css`,
    light: `/light-theme.css`,
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeSwitcherProvider themeMap={themes} defaultTheme="dark">
            <Component {...pageProps} />
        </ThemeSwitcherProvider>
    );
}

export default MyApp;
