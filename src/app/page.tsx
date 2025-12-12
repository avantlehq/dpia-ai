'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/en')
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">DPIA.ai</h1>
        <p className="text-gray-600">Redirecting to main site...</p>
      </div>
    </div>
  )
}
