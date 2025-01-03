import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "@/components/common/LanguageSelect";
import { CommonButton } from "@/components/common/CommonButton";
import MobileMenu from "@/components/common/MobileMenu";
import SignIn from "@/components/user/SignIn";

const Header = ({ lang, locale }: { lang: string; locale: any }) => {
    return (
        <header className="bg-white py-4 shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href={`/${lang}`} className="flex items-center space-x-2">
                        <Image src="/logo.jpg" alt="" width={32} height={32} className="rounded-full"/>
                        <p className="text-lg font-bold hidden sm:block">{locale.app_name}</p>
                    </Link>

                    <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        <Link href={`/${lang}`}>
                            <span className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200">
                                {locale.header.home}
                            </span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;