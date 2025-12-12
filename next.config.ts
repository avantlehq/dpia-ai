import createMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true
  },
  outputFileTracingRoot: __dirname,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

export default withNextIntl(withMDX(nextConfig));
