import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MyProBuddy',
    description:
        'Know the best Grants & Government Schemes for your business idea / startup',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
             <head>
                {/* Google Tag Manager */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-YTZFESTCL6"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-YTZFESTCL6');
                        `,
                    }}
                ></script>
                {/* End Google Tag Manager */}
            </head>
            <body className={inter.className}>
                {children}
                
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                          var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?36669';
                          var options = {
                            "enabled": true,
                            "chatButtonSetting": {
                              "backgroundColor": "#00e785",
                              "ctaText": "Chat with us",
                              "borderRadius": "25",
                              "marginLeft": "0",
                              "marginRight": "20",
                              "marginBottom": "20",
                              "ctaIconWATI": false,
                              "position": "right"
                            },
                            "brandSetting": {
                              "brandName": "MyProBuddy",
                              "brandSubTitle": "undefined",
                              "brandImg": "https://i.ibb.co/Tm1NRFQ/15.png",
                              "welcomeText": "Hi there!\\nHow can we help you?",
                              "messageText": "Hello, %0A I have a question about Grants & Schemes",
                              "backgroundColor": "#00e785",
                              "ctaText": "Chat with us",
                              "borderRadius": "25",
                              "autoShow": false,
                              "phoneNumber": "919952237700"
                            }
                          };

                          function loadWidget() {
                            var script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.async = true;
                            script.src = url;
                            script.onload = function() {
                              if (window.CreateWhatsappChatWidget) {
                                CreateWhatsappChatWidget(options);
                              }
                            };
                            document.body.appendChild(script);
                          }

                          loadWidget();
                        `,
                    }}
                />
            </body>
        </html>
    )
}
