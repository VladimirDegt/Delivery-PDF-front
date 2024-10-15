import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type SupportedLocales = 'en' | 'ua';

export default getRequestConfig(async ({ locale }) => {
    if (!routing.locales.includes(locale as SupportedLocales)) notFound();

    return {
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
