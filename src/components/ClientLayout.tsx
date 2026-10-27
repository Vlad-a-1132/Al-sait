'use client'

import { AccessibilityProvider } from '../contexts/AccessibilityContext'
import Header from './Header'
import Footer from './Footer'
import MobileBottomNav from './MobileBottomNav'
import CallbackModal from './CallbackModal'
import ViewportMetrics from './ViewportMetrics'
import { usePathname } from 'next/navigation'
import { isPrivatePath } from '@/lib/analytics/shared'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/prices/analytics' || pathname?.startsWith('/prices/analytics/') || pathname === '/imaging' || pathname?.startsWith('/imaging/')) {
    return <main className="min-h-screen ym-hide-content">{children}</main>
  }
  return (
    <AccessibilityProvider>
      <ViewportMetrics />
      <Header />
      <main className={`flex-grow${pathname && isPrivatePath(pathname) ? ' ym-hide-content' : ''}`}>{children}</main>
      {/* Spacer for mobile bottom nav */}
      <div className="h-[calc(5rem_+_env(safe-area-inset-bottom))] md:hidden"></div>
      <Footer />
      <MobileBottomNav />
      <CallbackModal />
    </AccessibilityProvider>
  )
}

