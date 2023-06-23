import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

// in Layout to pass the inside of the component, you get access to that component with the prop {CHILDREN}
const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>Ecommerce Project</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout