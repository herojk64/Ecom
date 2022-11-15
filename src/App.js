import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserStatus } from './Context/userStatus';
import Nav from './Components/Nav'
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'
import Shop from "./Components/Shop"
import Admin from "./Components/Admin"
import Profile from './Components/Profile'
import Wishlist from './Components/Wishlist'
import Cart from './Components/Cart'
import PageError from './Components/PageError'
import Signup from './Components/Signup'

import './App.css'

const App = () => {

  return (
    <UserStatus>
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/profile' element={<Profile />}/>
          <Route exact path='/dashboard/*' element={<Admin />}/>
          <Route exact path='/wishlist' element={<Wishlist />}/>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/*' element={<PageError />} />
        </Routes>
      </div>
    </Router>
    </UserStatus>
  )
}

export default App