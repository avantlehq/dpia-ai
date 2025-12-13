'use client'

import { useTranslations } from 'next-intl'
import { Button } from '../ui/button'
import { VERSION, VERSION_NAME } from '../../lib/version'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-200">
            v{VERSION} - {VERSION_NAME}
          </span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          {t('title')}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {t('subtitle')}
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <a href="https://dpia.avantle.ai/signup" target="_blank" rel="noopener noreferrer">
              {t('cta')}
            </a>
          </Button>
          <Button variant="outline" size="lg">
            {t('learnMore')}
          </Button>
        </div>
      </div>
    </section>
  )
}