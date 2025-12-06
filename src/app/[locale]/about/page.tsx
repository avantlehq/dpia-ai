'use client'

export const dynamic = 'force-dynamic'

import { useTranslations } from 'next-intl'
import { Header } from '../../../components/marketing/header'

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <>
      <Header />
      <main className="container max-w-4xl py-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <p className="text-lg text-muted-foreground">{t('description')}</p>
          
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p>
              DPIA.ai is designed to simplify the complex process of creating Data Protection Impact Assessments
              required under the General Data Protection Regulation (GDPR). Our AI-powered platform guides
              organizations through the entire DPIA process, ensuring compliance while saving time and resources.
            </p>
            
            <h2>Why DPIA.ai?</h2>
            <ul>
              <li><strong>AI-Powered</strong>: Intelligent automation reduces manual work</li>
              <li><strong>GDPR Compliant</strong>: Built with regulatory requirements in mind</li>
              <li><strong>Time Efficient</strong>: Complete assessments in minutes, not weeks</li>
              <li><strong>Expert Guidance</strong>: Step-by-step process with regulatory insights</li>
            </ul>

            <h2>Our Mission</h2>
            <p>
              To make GDPR compliance accessible and efficient for organizations of all sizes,
              enabling them to focus on their core business while maintaining the highest
              standards of data protection.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}