import React from 'react'
import Login from './component/Login'
import Navbar from './component/Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Favourite from './component/Favourite'
import Register from './component/Register'
import './App.css'
import Error from './component/Error'
import Popular from './component/Popular'
import Latest from './component/Latest'
import {useEffect} from 'react'

function App() {

  return (
    <>
        <Navbar />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/latest">
          <Latest/>
        </Route>
        <Route path="/popular">
          <Popular/>
        </Route>
        <Route path="/favourite">
          <Favourite />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route>
          <Error />
        </Route>
        </Switch>
    </>
  )
}

export default App

