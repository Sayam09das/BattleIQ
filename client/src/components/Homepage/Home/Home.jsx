import React from "react";
import { motion } from "framer-motion";

import HeroSection from "./HeroSection/HeroSection";
import QuizTopic from "./QuizTopic/QuizTopic";
import Certificates from "./Certificates/Certificates";
import Viedo from "./ViedoPage/Viedo";
import Timeline from "./TimelinePage/Timeline";
import PrivacyRating from "./PrivacyRating/PrivacyRating";
import Testimonials from "./Testimonials/Testimonials";
import Faq from "./FAQpage/Faq";
import ContactUs from "./ContactUs/ContactUs";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay,
    },
  }),
};

const Home = () => {
  return (
    <main className="overflow-x-hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          main::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <HeroSection />
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={sectionVariants}>
        <QuizTopic />
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={sectionVariants}>
        <Certificates />
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3} variants={sectionVariants}>
        <Viedo />
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4} variants={sectionVariants}>
        <Timeline />
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5} variants={sectionVariants}>
        <PrivacyRating />
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.6} variants={sectionVariants}>
        <Testimonials />
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.7} variants={sectionVariants}>
        <Faq />
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8} variants={sectionVariants}>
        <ContactUs />
      </motion.section>
    </main>
  );
};

export default Home;
