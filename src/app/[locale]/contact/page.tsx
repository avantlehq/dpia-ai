'use client'

import { useTranslations } from 'next-intl'
import { Header } from '../../../components/marketing/header'
import { Button } from '../../../components/ui/button'

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <>
      <Header />
      <main className="container max-w-4xl py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">{t('title')}</h1>
            <p className="text-lg text-muted-foreground">{t('description')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">support@dpia.ai</p>
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday, 9:00 AM - 6:00 PM CET</p>
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">European Union</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Quick Start</h2>
              <p className="text-muted-foreground">
                Ready to get started with your first DPIA? Access our AI-powered platform
                and create your assessment in minutes.
              </p>
              <Button size="lg" asChild>
                <a href="https://dpia.avantle.ai/signup" target="_blank" rel="noopener noreferrer">
                  Start Your DPIA
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}