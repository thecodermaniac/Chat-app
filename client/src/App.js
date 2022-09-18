import './App.css';
import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage'
import ChatState from './context/ChatState';

function App() {
  return (
    <>
      <ChatState>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/chat">
              <ChatPage />
            </Route>
          </Switch>
        </Router>
      </ChatState>
    </>
  )
}

export default App