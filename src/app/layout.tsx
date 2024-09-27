import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Box, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Head from "next/head";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Pizza Ordering App",
  description: "Pizza Ordering App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Box sx={{ py: 0, bgcolor: "#FFF8F1" }}>
              <Toolbar />
              {children}
            </Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
