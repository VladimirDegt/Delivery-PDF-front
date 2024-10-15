import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['tsx', 'ts'],
    sassOptions: {
        prependData: `@import '@/styles/index';`,
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);