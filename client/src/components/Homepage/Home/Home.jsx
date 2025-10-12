import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import QuizTopic from './QuizTopic/QuizTopic'
import Certificates from './Certificates/Certificates'
import Viedo from './ViedoPage/Viedo'
import Timeline from './TimelinePage/Timeline'
import PrivacyRating from './PrivacyRating/PrivacyRating'
import Testimonials from './Testimonials/Testimonials'
import Faq from './FAQpage/Faq'
import ContactUs from './ContactUs/ContactUs'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuizTopic />
      <Certificates />
      <Viedo />
      <Timeline />
      <PrivacyRating />
      <Testimonials />
      <Faq />
      <ContactUs />
    </div>
  )
}

export default Home
