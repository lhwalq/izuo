import Link from "next/link";
import "@/style/globals.css"
import Image from "next/image";
import { languages } from '@/lib/languages';
import React from "react";

const Footer = ({ lang, locale }: { lang: string; locale: any }) => {
    const generateLanguageLinkList = () => {
        return languages.map(language => (
            <Link key={language.code} href={`/${language.code}`}>
                <p className="text-[#666666] hover:text-[#333333] text-xs tracking-wider transition duration-300">
                    {language.name}
                </p>
            </Link>
        ));
    };

    return (
        <footer className="bg-white border-t border-[#EEEEEE]">
            <div className="max-w-screen-xl mx-auto px-6 py-12"> {/* 减小内边距 */}
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8"> {/* 减小间距 */}
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-4"> {/* 减小间距 */}
                        <Link href={`/${lang}`} className="flex items-center group">
                            <Image 
                                src="/logo.jpg" 
                                alt="" 
                                width={36} 
                                height={36} 
                                className="transition-transform duration-300 group-hover:scale-105" 
                            />
                            <p className="text-base font-serif pl-3 text-[#333333]">
                                {locale.app_name}
                            </p>
                        </Link>
                        <p className="text-xs text-[#666666] font-light leading-relaxed pr-8">
                            {locale.footer.description}
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="md:col-span-3 space-y-4"> {/* 减小间距 */}
                        <h3 className="text-xs font-medium text-[#333333] uppercase tracking-widest">
                            {locale.footer.support}
                        </h3>
                        <div className="flex flex-col space-y-3"> {/* 减小间距 */}
                            <Link 
                                href={`/${lang}/terms_of_service`} 
                                className="text-xs text-[#666666] hover:text-[#333333] transition duration-300"
                            >
                                {locale.footer.terms_of_use}
                            </Link>
                            <Link 
                                href={`/${lang}/privacy_policy`} 
                                className="text-xs text-[#666666] hover:text-[#333333] transition duration-300"
                            >
                                {locale.footer.privacy_policy}
                            </Link>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="md:col-span-4 space-y-4">
                        <h3 className="text-xs font-medium text-[#333333] uppercase tracking-widest">
                            {locale.footer.contact}
                        </h3>
                        <div className="flex flex-col space-y-3">
                            {locale.footer.address && (
                                <p className="text-xs text-[#666666] font-light">
                                    {locale.footer.address}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 pt-8 border-t border-[#EEEEEE]"> {/* 减小间距 */}
                    {/* Language Selector */}
                    <div className="flex flex-wrap justify-center gap-6 mb-6"> {/* 减小间距 */}
                        {generateLanguageLinkList()}
                    </div>
                    
                    {/* Copyright */}
                    <p className="text-center text-xs text-[#999999]">
                        {locale.footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;