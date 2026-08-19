'use client'

import { AccessibilityProvider } from '../contexts/AccessibilityContext'
import Header from './Header'
import Footer from './Footer'
import MobileBottomNav from './MobileBottomNav'
import CallbackModal from './CallbackModal'
import ChatWidget from './ChatWidget'
import ViewportMetrics from './ViewportMetrics'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AccessibilityProvider>
      <ViewportMetrics />
      <Header />
      <main className="flex-grow">{children}</main>
      {/* Spacer for mobile bottom nav */}
      <div className="h-[calc(5rem_+_env(safe-area-inset-bottom))] md:hidden"></div>
      <Footer />
      <MobileBottomNav />
      <CallbackModal />
      <ChatWidget />
    </AccessibilityProvider>
  )
}

