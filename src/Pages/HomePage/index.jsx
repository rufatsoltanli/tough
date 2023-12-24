import React from 'react'
import HomePageHero from '../../components/HomePageComponents/HeroSection'
import Statistics from '../../components/HomePageComponents/StatisticsSection'
import ServicesSection from '../../components/HomePageComponents/ServicesSection'
import PortfolioSection from '../../components/HomePageComponents/PortfolioSection'
import CliensSay from '../../components/HomePageComponents/ClientsSection'
import SubscriptionSection from '../../components/HomePageComponents/SubscriptionsSection'

function HomePage() {
  return (
    <div id="homePage">
      <section id='heroSection' >
        <HomePageHero />
      </section>
      <section id='statisticsSection'>
        <Statistics />
      </section>
      <section id='servicesSection'>
        <ServicesSection />
      </section>
      <section id='portfolioSection'>
        <PortfolioSection />
      </section>
      <section id='clientsSays'>
        <CliensSay />
      </section>
      <section id='subscriptionsSection'>
        <SubscriptionSection />
      </section>
    </div>
  )
}

export default HomePage