import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: {
    default: "HIRE - Bangladesh's AI-Powered Freelance Marketplace",
    template: '%s | HIRE',
  },
  description: "Connect with top freelancers and clients in Bangladesh. AI-powered job matching, local payment support (bKash, Nagad, Rocket).",
  keywords: ['freelance marketplace Bangladesh', 'hire freelancers Bangladesh', 'online jobs Bangladesh', 'bKash payment freelance', 'AI freelance platform'],
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: 'https://hire.com.bd',
    siteName: 'HIRE Bangladesh',
    title: "HIRE - Bangladesh's AI-Powered Freelance Marketplace",
    description: "Connect with top freelancers and clients in Bangladesh.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{__html: `(function(){try{var t=localStorage.getItem('hire-theme')||'light';if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`}} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
