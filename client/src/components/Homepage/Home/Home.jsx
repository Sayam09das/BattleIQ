import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import QuizTopic from './QuizTopic/QuizTopic'
import Certificates from './Certificates/Certificates'
import Viedo from './ViedoPage/Viedo'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <QuizTopic />
      <Certificates />
      <Viedo />
    </div>
  )
}

export default Home
