import { ReactNode } from 'react';

import '../../styles/globals.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ReduxProvider } from '@/store/provider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

interface RootLayoutProps {
    children: ReactNode;
    params: { locale: string };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
    const messages = await getMessages();
    return (
        <html lang={locale}>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>DeliveryPDF</title>
                <link rel='icon' type='image/svg+xml' href='/assets/favicon/logo.svg' />
                <link rel='apple-touch-icon' href='/assets/favicon/logo.svg' type='image/svg+xml' />
            </head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ReduxProvider>
                        <Header />
                        {children}
                        <Footer />
                    </ReduxProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
