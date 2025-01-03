import {Pathnames} from 'next-intl/navigation';

// export const locales = ['en', 'fr', 'es', 'ja', 'ko', 'tw', 'zh', 'pt', 'de', 'vi', 'ph'] as const;
export const locales = ['zh', 'tw', 'en'] as const;

export const languages = [
    {
        code: "en",
        lang: "en",
        language: "English",
    },
    {
        code: "fr",
        lang: "fr",
        language: "Français",
    }
]

export const pathnames = {
    '/': '/',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`，设置为 as-needed可不显示默认路由
export const localePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;

export const getLanguageByLang = (lang: any) => {
    for (let i = 0; i < languages.length; i++) {
        if (lang == languages[i].lang) {
            return  languages[i];
        }
    }
}