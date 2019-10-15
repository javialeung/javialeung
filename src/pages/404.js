import React from 'react';
import Link from 'gatsby-link';

export default function NotFoundPage() {
  return (
    <div className="content">
      <div className="wrapper">
        <div style={{ fontSize: '60px', padding: '10px 0', width: '100%' }}>Oops!</div>
        <div style={{ fontSize: '20px', padding: '10px 0' }}>We couldn't find the page you are looking for. Return to <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>home page</Link> and try again.</div>
      </div>
    </div>
  )
}
