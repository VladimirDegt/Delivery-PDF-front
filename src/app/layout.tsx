import { ReactNode } from 'react';

import '../styles/globals.scss';

interface RootLayoutProps {
    children: ReactNode;
    params: { locale: string };
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
    return (
        <html lang={locale}>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Wait...</title>
                <link rel='icon' type='image/svg+xml' href='/assets/favicon/logo.svg' />
                <link rel='apple-touch-icon' href='/assets/favicon/logo.svg' type='image/svg+xml' />
            </head>
            <body>{children}</body>
        </html>
    );
}
