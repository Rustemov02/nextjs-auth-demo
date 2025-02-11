/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'az', 'ru'],  // Kullanacağımız diller
    defaultLocale: 'az',          // Varsayılan dil
  },
};

module.exports = nextConfig;