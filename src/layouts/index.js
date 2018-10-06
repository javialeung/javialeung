import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Message from '../components/message'
import './index.css'
import favicon from '../../public/static/favicon.ico'

export default function Layout({ location, children, data }) {
  const { siteUrl } = data.site.siteMetadata;
  const fullUrl = `${siteUrl}${location.pathname}`;

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        link={[
          { rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}` },
          { rel: 'icon', type: 'image/x-icon', href: `${favicon}` }
        ]}
      />
      <Header />
      {children()}
      <Message location={fullUrl}></Message>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
