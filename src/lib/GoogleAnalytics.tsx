import Script from "next/script";
import * as gtag from "@/lib/gtag";

const Analytics = () => {
    return (
        <>
            {gtag.GA_TRACKING_ID && (
                <>
                    <Script
                        id="gtag-init"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${gtag.GA_TRACKING_ID}');
                                window.addEventListener('load', function(){
                                    var s = document.createElement('script');
                                    s.src = "https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}";
                                    document.body.appendChild(s);

                                    if ('${gtag.UMAMI_ID}') {
                                        var whaleScript = document.createElement('script');
                                        whaleScript.src = "https://whalelives.com/script.js";
                                        whaleScript.defer = true;
                                        whaleScript.setAttribute('data-website-id', '${gtag.UMAMI_ID}');
                                        document.body.appendChild(whaleScript);
                                    }
                                });
                            `,
                        }}
                    />
                </>
            )}
        </>
    );
};

export default Analytics;
