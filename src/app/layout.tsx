import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/components/organisms/Provider";
import Toast from "@/components/atoms/toast";
import { CookiesProvider } from "next-client-cookies/server";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Proban SPK",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <CookiesProvider>
                    <Provider>
                        <AppRouterCacheProvider>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Toast />
                                {children}
                            </ThemeProvider>
                        </AppRouterCacheProvider>
                    </Provider>
                </CookiesProvider>
            </body>
        </html>
    );
}
