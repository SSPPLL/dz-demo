import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./reset.scss";
import "./globals.scss";
import { Header } from '@/components/Header/Header';

const notoSansKr = Open_Sans({
	variable: "--font-family",
	subsets: ["latin", "cyrillic"],
	weight: ['300', '400', '700']
});

export const metadata: Metadata = {
	title: "My blog",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${notoSansKr.variable}`}>
				<div className='container'>
					<Header />
					<main>{children}</main>
					<footer className='footer'></footer>
				</div>
			</body>
		</html>
	);
}
