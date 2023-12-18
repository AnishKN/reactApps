import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    //bg-white dark:bg-slate-800 text-slate-900 dark:text-white
    <div className='flex flex-col min-h-screen'> 
      <Header />
      <Outlet />
      <Footer />
    </div> 
  )
}

export default Layout 
