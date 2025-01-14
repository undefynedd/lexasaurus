import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
    variable: "--font-lexend",
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
    	        {children}
                <script src="path/to/dist/feather.js"></script>
    	    </body>
    	</html>
    );
}
