import React from 'react'
import HomePageHero from '../../components/HomePageComponents/HeroSection'
import Statistics from '../../components/HomePageComponents/StatisticsSection'
import ServicesSection from '../../components/HomePageComponents/ServicesSection'

function HomePage() {
  return (
    <div id="homePage">
      <section id='heroSection'>
        <HomePageHero />
      </section>
      <section id='statisticsSection'>
        <Statistics />
      </section>
      <section id='servicesSection'>
        <ServicesSection />
      </section>
    </div>
  )
}

export default HomePage