import Header from "@/components/common/Header";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import {metadata} from "@/app/[lang]/layout";
import Footer from "@/components/common/Footer";
import MainContent from "@/components/common/MainContent";
export default async function Home({
    params: { lang },
}: Readonly<{
    params: { lang: string };
}>) {

    let langName = lang ? lang : defaultLocale;
    const dict = await getDictionary(langName);

    // SEO
    metadata.title = dict.seo.home_title
    metadata.description = dict.seo.home_description
    if (metadata.alternates) {
        metadata.alternates.canonical = dict.seo.home_canonical
    }
    if (metadata.openGraph) {
        metadata.openGraph.title = dict.seo.home_title
        metadata.openGraph.description = dict.seo.home_description
        metadata.openGraph.url = process.env.NEXTAUTH_URL + dict.seo.home_canonical
    }
    if (metadata.twitter) {
        metadata.twitter.title = dict.seo.home_title
        metadata.twitter.description = dict.seo.home_description
        metadata.twitter.site = process.env.NEXTAUTH_URL + dict.seo.home_canonical
    }
    metadata.robots = "index"

    return (
        <>
            {/* <Header lang={lang} locale={dict}/> */}
            <MainContent lang={lang} locale={dict}/>
            <Footer lang={lang} locale={dict}/>
        </>
    );

}
