import '@/styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { AuthProvider } from '@/context/AuthContext'

export const metadata = {
  title: {
    default: "HIRE – Bangladesh's AI-Powered Freelance Marketplace",
    template: '%s | HIRE',
  },
  description:
    "Connect with top freelancers and clients in Bangladesh. Find work, hire talent, and grow your business with AI-powered matching.",
  keywords: [
    'freelance marketplace Bangladesh',
    'hire freelancers Bangladesh',
    'online jobs Bangladesh',
    'Bangladeshi freelancers',
    'bKash payment freelance',
  ],
  authors: [{ name: 'HIRE Platform' }],
  creator: 'HIRE',
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: 'https://hire.com.bd',
    siteName: 'HIRE',
    title: "HIRE – Bangladesh's AI-Powered Freelance Marketplace",
    description: 'Connect with top freelancers and clients in Bangladesh.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HIRE – Bangladesh's AI-Powered Freelance Marketplace",
    description: 'Connect with top freelancers and clients in Bangladesh.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
