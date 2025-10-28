'use client'

import { useAuth, RedirectToSignIn } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth()
  const pathname = usePathname() // current route

  if (!isLoaded) return null // or spinner

  if (!isSignedIn) {
    // Pass redirectUrl so after login user comes back to this page
    return <RedirectToSignIn redirectUrl={pathname} />
  }

  return <>{children}</>
}