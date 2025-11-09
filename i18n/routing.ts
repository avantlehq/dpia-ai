import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'sk', 'de'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      sk: '/o-nas',
      de: '/ueber-uns'
    },
    '/faq': {
      en: '/faq',
      sk: '/caste-otazky',
      de: '/faq'
    },
    '/contact': {
      en: '/contact',
      sk: '/kontakt',
      de: '/kontakt'
    }
  }
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)