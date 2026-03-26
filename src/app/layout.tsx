import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Game Mod Showcase",
    description: "Catalog of upscale and graphics mod builds",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
        <body>{children}</body>
        </html>
    );
}