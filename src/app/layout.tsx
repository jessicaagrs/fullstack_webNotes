import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "Web Notes",
    description: "Gerenciamento de notas de estudo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
