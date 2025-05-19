import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import createJiti from 'jiti';

//
// 1. Load your environment early via Jiti
//
const jiti = createJiti(fileURLToPath(import.meta.url));
jiti('./src/libs/Env');

//
// 2. Configure the bundle analyzer plugin
//
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  experimental: {
    serverComponentsExternalPackages: ['@electric-sql/pglite'],
  },

  //
  // 3. Force correct Content-Type for our deep-link JSON files
  //
  async headers() {
    return [
      {
        source: '/apple-app-site-association',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
      {
        source: '/.well-known/assetlinks.json',
        headers: [{ key: 'Content-Type', value: 'application/json' }],
      },
    ];
  },

  //
  // 4. Ensure both files are served at root (with or without trailing slash)
  //
  async rewrites() {
    return [
      {
        source: '/apple-app-site-association/',
        destination: '/apple-app-site-association',
      },
      {
        source: '/apple-app-site-association',
        destination: '/apple-app-site-association',
      },
      {
        source: '/.well-known/assetlinks.json/',
        destination: '/.well-known/assetlinks.json',
      },
      {
        source: '/.well-known/assetlinks.json',
        destination: '/.well-known/assetlinks.json',
      },
    ];
  },
};

//
// 5. Wrap with plugins: first bundle analyzer, then Sentry
//
export default withSentryConfig(
  bundleAnalyzer(nextConfig),
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
