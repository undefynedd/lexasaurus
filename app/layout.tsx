import type { Metadata } from "next";
import { Lexend, Passion_One } from "next/font/google";
import "./globals.css";

import NavBar from "./components/menu";

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
});

const passionOne = Passion_One({
    weight: "700",
    variable: "--font-passion-one",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lexasaurus",
    description: "Word.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
	<html lang="en">
	    <body
	        className={`${lexend.variable} antialiased`}
    	    >
	        <NavBar />
    	        {children}
    	    </body>
    	</html>
    );
}
