'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { VERSION } from '../lib/version'

export default function RootPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Immediate redirect
    router.replace('/en')
    
    // Fallback redirect after delay
    const timeout = setTimeout(() => {
      window.location.href = '/en'
    }, 1000)

    return () => clearTimeout(timeout)
  }, [router])

  // Also provide server-side redirect fallback
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">DPIA.ai</h1>
        <p className="text-gray-600 mb-6">Redirecting to main site...</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-xs text-gray-400 mt-8">v{VERSION}</p>
      </div>
    </div>
  )
}
