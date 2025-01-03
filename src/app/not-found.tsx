
import { Inter } from "next/font/google";
import "@/style/globals.css";
import NotFoundView from "@/components/common/NotFoundView";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
    return (
        <html>
            <body className={inter.className}>
                <NotFoundView />
            </body>
        </html>
    );
}
