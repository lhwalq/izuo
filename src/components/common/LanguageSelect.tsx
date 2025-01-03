'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { languages } from '@/lib/languages';

interface LanguageSelectProps {
    langName: string;
    isDarkMode?: boolean;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ langName, isDarkMode = false }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (option: any) => {
        const segments = pathname.split('/').filter(Boolean);
        let newUrl = '';

        const domain = `${window.location.protocol}//${window.location.host}`;
        const pathWithoutLang = segments.filter(segment => !/^(fr|en|es|ja|ko|tw|zh|pt|de|vi|ph)$/.test(segment)).join('/');

        if (option.value === 'en') {
            newUrl = `${domain}/${pathWithoutLang}`;
        } else {
            newUrl = `${domain}/${option.value}/${pathWithoutLang}`;
        }

        router.push(newUrl);
    };

    const options = languages.map(lang => ({
        value: lang.code,
        label: lang.name
    }));

    const customStyles: StylesConfig = {
        control: (provided) => ({
            ...provided,
            backgroundColor: isDarkMode ? '#1f2937' : 'white',
            borderColor: isDarkMode ? '#4b5563' : '#e2e8f0',
            '&:hover': {
                borderColor: isDarkMode ? '#6b7280' : '#cbd5e0'
            },
            minHeight: '30px',
            height: '30px',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: isDarkMode ? 'white' : 'black',
            fontSize: '0.875rem', // 14px
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? (isDarkMode ? '#3b82f6' : '#3182ce')
                : (isDarkMode ? '#1f2937' : 'white'),
            color: state.isSelected
                ? 'white'
                : (isDarkMode ? '#e5e7eb' : 'black'),
            '&:hover': {
                backgroundColor: state.isSelected
                    ? (isDarkMode ? '#3b82f6' : '#3182ce')
                    : (isDarkMode ? '#374151' : '#e2e8f0')
            },
            fontSize: '0.875rem', // 14px
            padding: '8px 12px',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: isDarkMode ? '#1f2937' : 'white',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: 4,
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '0 6px',
        }),
    };

    return (
        <div className="w-32 sm:w-32"> {/* 控制选择器的宽度 */}
            <Select
                options={options}
                value={options.find(option => option.value === langName)}
                onChange={handleLanguageChange}
                styles={customStyles}
                isSearchable={false}
                components={{
                    IndicatorSeparator: () => null
                }}
            />
        </div>
    );
};

export default LanguageSelect;