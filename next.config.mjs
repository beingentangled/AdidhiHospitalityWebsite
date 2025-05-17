import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import createJiti from 'jiti';
import withNextIntl from 'next-intl/plugin';

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti('./src/libs/Env');

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer(
    withNextIntlConfig({
      eslint: {
        dirs: ['.'],
      },
      poweredByHeader: false,
      reactStrictMode: true,
      trailingSlash: false,
      experimental: {
        serverComponentsExternalPackages: ['@electric-sql/pglite'],
      },
      async headers() {
        return [
          {
            source: '/apple-app-site-association',
            headers: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
          },
          {
            source: '/.well-known/assetlinks.json',
            headers: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
          },
        ];
      },
      async rewrites() {
        return [
          {
            source: '/apple-app-site-association',
            destination: '/apple-app-site-association',
          },
          {
            source: '/.well-known/assetlinks.json',
            destination: '/.well-known/assetlinks.json',
          },
          {
            source: '/apple-app-site-association/',
            destination: '/apple-app-site-association',
          },
          {
            source: '/.well-known/assetlinks.json/',
            destination: '/.well-known/assetlinks.json',
          },
        ];
      },
    }),
  ),
  {
    org: 'nextjs-boilerplate-org',
    project: 'nextjs-boilerplate',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
    telemetry: false,
  },
);
