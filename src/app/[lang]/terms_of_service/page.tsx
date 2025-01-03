
import Header from "@/components/common/Header";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import Footer from "@/components/common/Footer";
import {metadata} from "@/app/[lang]/layout";
import TermsOfService from "@/components/common/TermsOfService";

export default async function Home( {
    params: { lang },
}:{
    params: { lang: string };
}){

    let langName = lang ? lang : defaultLocale;
    const dict = await getDictionary(langName);

    // SEO
    metadata.title = dict.seo.terms_title
    metadata.description = dict.seo.terms_description
    if (metadata.alternates) {
        metadata.alternates.canonical = dict.seo.terms_canonical
    }

    return (
        <>
            {/* <Header lang={lang} locale={dict}/> */}
            <TermsOfService lang={lang} locale={dict}/>
            <Footer lang={lang} locale={dict}/>
        </>
    );
}
