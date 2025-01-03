const TermsOfService = ({
    lang,
    locale
}:{
    lang: string;
    locale: any;
}) => {
    return (
        <main className="bg-white">
            {/* Header Section */}
            <section className="border-b border-[#EEEEEE]">
                <div className="max-w-screen-xl mx-auto px-6 py-20">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <h1 className="text-2xl md:text-3xl font-serif text-[#333333]">
                            {locale.terms_of_service.one}
                        </h1>
                        <p className="text-xs text-[#666666] tracking-wider font-light">
                            {locale.terms_of_service.two}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-screen-xl mx-auto px-6 py-16">
                <div className="max-w-3xl mx-auto">
                    {/* 概述 */}
                    <div className="mb-12">
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.three}
                        </p>
                    </div>

                    {/* 服务条款 */}
                    <div className="mb-12">
                        <h2 className="text-lg font-serif text-[#333333] mb-4">
                            {locale.terms_of_service.four}
                        </h2>
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.five}
                        </p>
                    </div>

                    {/* 用户责任 */}
                    <div className="mb-12">
                        <h2 className="text-lg font-serif text-[#333333] mb-4">
                            {locale.terms_of_service.six}
                        </h2>
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.seven}
                        </p>
                    </div>

                    {/* 知识产权 */}
                    <div className="mb-12">
                        <h2 className="text-lg font-serif text-[#333333] mb-4">
                            {locale.terms_of_service.eight}
                        </h2>
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.nine}
                        </p>
                    </div>

                    {/* 免责声明 */}
                    <div className="mb-12">
                        <h2 className="text-lg font-serif text-[#333333] mb-4">
                            {locale.terms_of_service.ten}
                        </h2>
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.eleven}
                        </p>
                    </div>

                    {/* 服务变更 */}
                    <div className="mb-12">
                        <h2 className="text-lg font-serif text-[#333333] mb-4">
                            {locale.terms_of_service.twelve}
                        </h2>
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.thirteen}
                        </p>
                    </div>

                    {/* 终止服务 */}
                    <div className="mb-12">
                        <h2 className="text-lg font-serif text-[#333333] mb-4">
                            {locale.terms_of_service.fourteen}
                        </h2>
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.fifteen}
                        </p>
                    </div>

                    {/* 适用法律 */}
                    <div className="mb-12">
                        <h2 className="text-lg font-serif text-[#333333] mb-4">
                            {locale.terms_of_service.sixteen}
                        </h2>
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.seventeen}
                        </p>
                    </div>

                    {/* 条款变更 */}
                    <div className="mb-12">
                        <h2 className="text-lg font-serif text-[#333333] mb-4">
                            {locale.terms_of_service.eighteen}
                        </h2>
                        <p className="text-sm text-[#666666] leading-relaxed font-light">
                            {locale.terms_of_service.nineteen}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TermsOfService;