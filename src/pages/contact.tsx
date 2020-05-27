import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Contact = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Contact | ANM Photography" desc="Get in touch with A Neverending Moment Photography." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Contact Us</h1>
        <p>
          <a href="mailto:anmphoto@gmail.com">anmphoto@gmail.com</a>
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default Contact
