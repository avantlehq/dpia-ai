export const VERSION = '1.0.1'
export const VERSION_NAME = 'Foundation Release'
export const BUILD_DATE = new Date().toISOString()

export const CHANGELOG = {
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