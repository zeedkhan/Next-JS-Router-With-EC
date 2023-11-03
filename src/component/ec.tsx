import { useEffect, useState } from "react";
import Script from "next/script";

const EC = () => {

    const [email, setEmail] = useState<string>("");

    useEffect(() => {

        setTimeout(() => {
            setEmail("zeedkhan.tp@gmail.com")
        }, 5000)
    }, [])

    return (
        <div>
            <p>Testing EC will be working in 5 seconds</p>
            {!!email && (
                <Script>
                    {`

                        gtag('set', { ' allow_enhanced_conversions': true } ) ;

                        gtag('set', 'user_data', {
                            "email": "${email}"
                        });
                        
                        gtag('event', 'conversion', {
                            'send_to': "AW-741939442/eU-ACJKg68MBEPKx5OEC",
                            'value': 1.0,
                            'currency': 'USD',
                        });

                        `
                    }
                </Script>
            )}

            {!!email && (
                <div>
                    <p>EC - sent: {email}</p>
                    <p>Please check the Network and filter tv.1</p>
                    <p>And search for "em" param</p>
                </div>
            )}
        </div>
    );
}

export default EC;