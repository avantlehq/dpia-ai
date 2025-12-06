'use client'

export const dynamic = 'force-dynamic'

import { useTranslations } from 'next-intl'
import { Header } from '../../../components/marketing/header'

export default function FAQPage() {
  const t = useTranslations('faq')

  const faqs = [
    {
      question: "What is a DPIA?",
      answer: "A Data Protection Impact Assessment (DPIA) is a process designed to help organizations identify and minimize data protection risks in their projects and operations, as required by GDPR Article 35."
    },
    {
      question: "When is a DPIA required?",
      answer: "A DPIA is required when processing is likely to result in high risk to the rights and freedoms of individuals, particularly for new technologies, large-scale processing, or systematic monitoring."
    },
    {
      question: "How does DPIA.ai help?",
      answer: "DPIA.ai provides an AI-powered platform that guides you through the entire DPIA process, ensuring you meet all regulatory requirements while saving time and reducing complexity."
    },
    {
      question: "Is the output legally compliant?",
      answer: "Yes, our DPIA templates and process are designed to meet GDPR requirements. However, we recommend legal review for complex cases or high-risk processing activities."
    },
    {
      question: "How long does it take?",
      answer: "With DPIA.ai, most assessments can be completed in 30-60 minutes, compared to weeks using traditional methods."
    }
  ]

  return (
    <>
      <Header />
      <main className="container max-w-4xl py-12">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}