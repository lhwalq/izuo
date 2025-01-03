const PrivacyPolicy = ({
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
                            {locale.privacy_policy.one}
                        </h1>
                        <p className="text-xs text-[#666666] tracking-wider font-light">
                            {locale.privacy_policy.two}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-screen-xl mx-auto px-6 py-16">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-sm max-w-none">
                        {/* 概述 */}
                        <div className="mb-12">
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.three}
                            </p>
                        </div>

                        {/* 信息收集与使用 */}
                        <div className="mb-12">
                            <h2 className="text-lg font-serif text-[#333333] mb-4">
                                {locale.privacy_policy.five}
                            </h2>
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.six}
                            </p>
                        </div>

                        {/* 日志数据 */}
                        <div className="mb-12">
                            <h2 className="text-lg font-serif text-[#333333] mb-4">
                                {locale.privacy_policy.seven}
                            </h2>
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.eight}
                            </p>
                        </div>

                        {/* Cookies */}
                        <div className="mb-12">
                            <h2 className="text-lg font-serif text-[#333333] mb-4">
                                {locale.privacy_policy.night}
                            </h2>
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.ten}
                            </p>
                        </div>

                        {/* 服务供应商 */}
                        <div className="mb-12">
                            <h2 className="text-lg font-serif text-[#333333] mb-4">
                                {locale.privacy_policy.eleven}
                            </h2>
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.twelve}
                            </p>
                        </div>

                        {/* 安全性 */}
                        <div className="mb-12">
                            <h2 className="text-lg font-serif text-[#333333] mb-4">
                                {locale.privacy_policy.thirteen}
                            </h2>
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.fourteen}
                            </p>
                        </div>

                        {/* 其他网站链接 */}
                        <div className="mb-12">
                            <h2 className="text-lg font-serif text-[#333333] mb-4">
                                {locale.privacy_policy.fifteen}
                            </h2>
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.sixteen}
                            </p>
                        </div>

                        {/* 儿童隐私 */}
                        <div className="mb-12">
                            <h2 className="text-lg font-serif text-[#333333] mb-4">
                                {locale.privacy_policy.seventeen}
                            </h2>
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.eighteen}
                            </p>
                        </div>

                        {/* 本隐私政策的变更 */}
                        <div className="mb-12">
                            <h2 className="text-lg font-serif text-[#333333] mb-4">
                                {locale.privacy_policy.nineteen}
                            </h2>
                            <p className="text-sm text-[#666666] leading-relaxed font-light">
                                {locale.privacy_policy.twenty}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;