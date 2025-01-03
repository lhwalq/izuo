// MobileMenu.tsx
'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Menu, ChevronRight } from 'lucide-react';
import { CommonButton } from "@/components/common/CommonButton";

interface MobileMenuProps {
    lang: string;
    locale: any;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ lang, locale }) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: `/${lang}`, label: locale.header.home },
        // Add more menu items here
    ];

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="text-gray-500 hover:text-gray-700 transition-colors">
                <Menu className="h-6 w-6" />
            </button>

            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />

            <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
                    <span className="font-semibold text-lg">{locale.app_name}</span>
                    <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-gray-500 hover:text-gray-700 transition-colors">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <nav className="py-4">
                    {menuItems.map((item, index) => (
                        <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
                            <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-700">{item.label}</span>
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;