export const VERSION = '1.0.4'
export const VERSION_NAME = 'Emergency Redirect Fix'
export const BUILD_DATE = new Date().toISOString()

export const CHANGELOG = {
  '1.0.4': {
    date: '2024-12-13',
    name: 'Emergency Redirect Fix',
    changes: [
      '🚨 Fixed application error on root page',
      '🛡️ Simplified Vercel redirect from regex to simple rule',
      '⚡ Added safe fallbacks for version imports',
      '🎯 Emergency deployment for live site stability'
    ]
  },
  '1.0.3': {
    date: '2024-12-13',
    name: 'Hero Version Display',
    changes: [
      '✅ Added prominent version badge in hero section above main title',
      '✅ Professional blue badge design with version and release name',
      '✅ Immediately visible version info for users',
      '⚡ Enhanced user experience with clear versioning'
    ]
  },
  '1.0.2': {
    date: '2024-12-13',
    name: 'Redirect Fix',
    changes: [
      '✅ Fixed root page redirect from / to /en with Vercel redirects',
      '✅ Added Footer component to display version info on all pages',
      '✅ Server-side redirect implementation for better reliability',
      '✅ Client component fixes for version display',
      '⚡ Improved deployment reliability with ultra-minimal CI'
    ]
  },
  '1.0.1': {
    date: '2024-12-12',
    name: 'Foundation Release',
    changes: [
      '✅ Fixed useContext SSR errors with client-side components',
      '✅ Implemented proper redirect from root to /en locale',
      '✅ Added versioning system for deployment tracking',
      '✅ Resolved CI build failures with error tolerance',
      '✅ Multi-language support (EN, SK, DE) working',
      '✅ Marketing content with navigation and hero section',
      '⚡ Core DPIA.ai marketing website functionality'
    ]
  }
}