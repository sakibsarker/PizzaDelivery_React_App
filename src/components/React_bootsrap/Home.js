import React from 'react'
import About from './About';
import Client from './Client';
import Header from './Header';
import Menu from './Menu';
import Price from './Price';
import Shop from './Shop';
const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Client/>
      <Price/>
    </div>
  )
}
export default Home;