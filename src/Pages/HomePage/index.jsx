import React from 'react'
import HomePageHero from '../../components/HomePageComponents/HeroSection'
import Statistics from '../../components/HomePageComponents/StatisticsSection'

function HomePage() {
  return (
    <div id="homePage">
      <section id='heroSection'>
        <HomePageHero />
      </section>
      <section id='statisticsSection'>
        <Statistics/>
      </section>
    </div>
  )
}

export default HomePage