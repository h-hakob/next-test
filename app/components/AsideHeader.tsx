"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import IMAGES from "../../utils/images";

const AsideHeader = ({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: any }) => {
    const pathname = usePathname();

    return (
        <aside
            className={` ${
                mobileMenuOpen ? "flex" : "hidden"
            } absolute sm:flex sm:static top-0 left-0 min-w-[270px] bg-asideBg h-screen flex flex-col space-y-6 p-4 z-20`}
        >
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center w-10 h-10 text-white border border-yellowBorderColor rounded-lg bg-lightningGradient">
                    <Image
                        className="w-[80%]"
                        src={IMAGES.lightningIcon}
                        alt="Lightning Icon"
                    />
                </div>
                <span className="w-6 text-white">
                    {mobileMenuOpen ? (
                        <Image
                            className="w-full"
                            src={IMAGES.closeIcon}
                            alt="Close Icon"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    ) : (
                        <Image
                            className="w-full"
                            src={IMAGES.notificationIcon}
                            alt="Notification Icon"
                        />
                    )}
                </span>
            </div>

            <div className="bg-btnHover bg-opacity-60 rounded-lg p-4 border border-borderColor">
                <p className="text-textLightGray mb-4">My proxies (0)</p>
                <button className="bg-yellow text-gray-900 rounded-full px-4 py-2 px-8 border border-yellowBorderColor">
                    Purchase proxies
                </button>
            </div>

            <nav className="flex flex-col flex-grow">
                <div className="flex flex-col space-y-2 flex-grow">
                    <Link
                        href="/dashboard"
                        className={`flex items-center p-3 border rounded-lg  hover:bg-btnHover ${
                            pathname === "/dashboard"
                                ? "bg-btnHover text-white border-borderColor"
                                : "text-textLightGray border-transparent"
                        }`}
                    >
                        <span>
                            <Image
                                className="w-4 h-4"
                                src={IMAGES.dashboardIcon}
                                alt="Dashboard Icon"
                            />
                        </span>
                        <span className="ml-3">Dashboard</span>
                    </Link>
                    <Link
                        href="/my-proxies"
                        className={`flex items-center p-3 border rounded-lg hover:bg-btnHover ${
                            pathname === "/my-proxies"
                                ? "bg-btnHover text-white border-borderColor"
                                : "text-textLightGray border-transparent"
                        }`}
                    >
                        <span>
                            <Image
                                className="w-5 h-5"
                                src={IMAGES.lightningWhiteIcon}
                                alt="My proxies Icon"
                            />
                        </span>
                        <span className="ml-3">My Proxies</span>
                    </Link>
                    <Link
                        href="/top-up-balance"
                        className={`flex items-center p-3 border rounded-lg  hover:bg-btnHover ${
                            pathname === "/top-up-balance"
                                ? "bg-btnHover text-white border-borderColor"
                                : "text-textLightGray border-transparent"
                        }`}
                    >
                        <span>
                            <Image
                                className="w-4 h-4"
                                src={IMAGES.topUpBalanceIcon}
                                alt="Top up balance Icon"
                            />
                        </span>
                        <span className="ml-3">Top up balance</span>
                    </Link>
                    <Link
                        href="/transactions"
                        className={`flex items-center p-3 border rounded-lg hover:bg-btnHover ${
                            pathname === "/transactions"
                                ? "bg-btnHover text-white border-borderColor"
                                : "text-textLightGray border-transparent"
                        }`}
                    >
                        <span>
                            <Image
                                className="w-4 h-4"
                                src={IMAGES.transactionsIcon}
                                alt="Transactions Icon"
                            />
                        </span>
                        <span className="ml-3">Transactions</span>
                    </Link>
                </div>
                <div className="felx flex-col space-y-2">
                    <Link
                        href="/support"
                        className={`flex items-center p-3 rounded-lg  hover:bg-btnHover ${
                            pathname === "/support" ? "bg-btnHover text-white" : "text-textLightGray"
                        }`}
                    >
                        <span>
                            <Image
                                src={IMAGES.supportIcon}
                                alt="Support Icon"
                            />
                        </span>
                        <span className="ml-3">Support</span>
                    </Link>
                    <Link
                        href="/profile"
                        className={`flex items-center p-3 rounded-lg  hover:bg-btnHover ${
                            pathname === "/profile" ? "bg-btnHover text-white" : "text-textLightGray"
                        }`}
                    >
                        <span>
                            <Image
                                src={IMAGES.avatarIcon}
                                alt={"Avatar"}
                            />
                        </span>
                        <span className="ml-3">Lukas Fabiansky</span>
                    </Link>
                </div>
            </nav>
        </aside>
    );
};

export default AsideHeader;
