import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Usability Assistant</title>
        <meta property="og:title" content="District Usability Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
