"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import AsideHeader from "./components/AsideHeader";
import Header from "./components/Header";
import { IsMobileContext } from "../contexts/isMobileContext";

import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<any>(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 769) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (

        <html lang="en">
            <body className={inter.className}>
              <AsideHeader
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />

                <section className="main-section">
                    <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>
                        <Header
                            mobileMenuOpen={mobileMenuOpen}
                            setMobileMenuOpen={setMobileMenuOpen}
                        />
                        {children}
                    </IsMobileContext.Provider>
                </section>
            </body>
        </html>
    );
}
