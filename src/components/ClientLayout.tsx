'use client'

import { AccessibilityProvider } from '../contexts/AccessibilityContext'
import Header from './Header'
import Footer from './Footer'
import MobileBottomNav from './MobileBottomNav'
import CallbackModal from './CallbackModal'
import ChatWidget from './ChatWidget'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AccessibilityProvider>
      <Header />
      <main className="flex-grow">{children}</main>
      {/* Spacer for mobile bottom nav */}
      <div className="h-20 md:hidden"></div>
      <Footer />
      <MobileBottomNav />
      <CallbackModal />
      <ChatWidget />
    </AccessibilityProvider>
  )
}

