"use client";

import Image from "next/image";
import React, { useContext } from "react";
import IMAGES from "../../utils/images";
import { IsMobileContext } from "../../contexts/isMobileContext";

const Header = ({ setMobileMenuOpen }: any) => {
    const { isMobile }: any = useContext(IsMobileContext);

    return (
        <header className="bg-black h-14 p-3 flex justify-between items-center text-white border-b border-white/30">
            <div className="flex">
                <div
                    className="flex sm:hidden w-10 h-10 flex items-center justify-center mr-4 border border-borderColor p-2 rounded cursor-pointer"
                    onClick={() => setMobileMenuOpen((prev: boolean) => !prev)}
                >
                    <Image
                        src={IMAGES.hamburgerMenuIcon}
                        alt="Menu icon"
                    />
                </div>
                <div className="h-10 flex items-center space-x-2 bg-btnHover border border-borderColor p-2 rounded">
                    <span className="text-textDarkGray">Balance</span>
                    <span className="text-white">$122.00</span>
                    <span className="text-yellow cursor-pointer">
                        <Image
                            src={IMAGES.yellowPlusIcon}
                            alt="Plus icon"
                        />
                    </span>
                </div>
            </div>

            <select className="h-10 bg-btnHover text-textDarkGray border border-borderColor rounded p-2">
                <option>{isMobile ? "EN" : "English"}</option>
                <option>{isMobile ? "SP" : "Spanish"}</option>
                <option>{isMobile ? "FR" : "French"}</option>
            </select>
        </header>
    );
};

export default Header;
