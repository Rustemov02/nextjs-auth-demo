import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
    i18n : {
        locales : ['az','en','ru'],
        defaultLocale :"az"
    }
};

module.exports = withNextIntl(nextConfig);
