import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import HowItWorks from '@/components/home/HowItWorks'
import PopularFreelancers from '@/components/home/PopularFreelancers'
import FeaturedJobs from '@/components/home/FeaturedJobs'
import AIFeaturesSection from '@/components/home/AIFeaturesSection'
import StudentSection from '@/components/home/StudentSection'
import PaymentSection from '@/components/home/PaymentSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <PopularFreelancers />
        <FeaturedJobs />
        <AIFeaturesSection />
        <StudentSection />
        <PaymentSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
