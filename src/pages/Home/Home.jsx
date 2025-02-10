import React from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Banner from '../../components/Banner/Banner.jsx'
import RowList from '../../components/Rows/RowList/RowList.jsx'
const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </>
  )
}

export default Home
