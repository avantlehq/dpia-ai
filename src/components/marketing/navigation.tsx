'use client'

import { useTranslations } from 'next-intl'
import { Link } from '../../../i18n/routing'

export function Navigation() {
  const t = useTranslations('navigation')

  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
        {t('home')}
      </Link>
      <Link href="/about" className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
        {t('about')}
      </Link>
      <Link href="/faq" className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
        {t('faq')}
      </Link>
      <Link href="/contact" className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
        {t('contact')}
      </Link>
    </nav>
  )
}