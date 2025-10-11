import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import QuizTopic from './QuizTopic/QuizTopic'
import Certificates from './Certificates/Certificates'
import Viedo from './ViedoPage/Viedo'
import Timeline from './TimelinePage/Timeline'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuizTopic />
      <Certificates />
      <Viedo />
      <Timeline />
    </div>
  )
}

export default Home
