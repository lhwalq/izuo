export const defaultLocale = "en";

const dictionaries: any = {
    zh: () => import("@/messages/zh.json").then((module) => module.default),
    tw: () => import("@/messages/tw.json").then((module) => module.default),
    en: () => import("@/messages/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
        locale = "zh";
    }

    if (!Object.keys(dictionaries).includes(locale)) {
        locale = "en";
    }

    return dictionaries[locale]();
};