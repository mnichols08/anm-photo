import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | ANM Photography" desc="Hi, we are A NeverEnding Moment Photography." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hello and welcome to A Neverending Moment Photography!</h1>
        <p>
          You can visit my <a href="https://www.facebook.com/ANeverendingMomentPhotography">Facebook</a> or my <a href="https://www.instagram.com/aneverendingmomentphotography">Instagram</a>
          .
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About

