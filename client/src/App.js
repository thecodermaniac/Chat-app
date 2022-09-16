import './App.css';
import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage'

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/home">
            <HomePage/>
          </Route>
          <Route exact path="/chat">
            <ChatPage />
          </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App