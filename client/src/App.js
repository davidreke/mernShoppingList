import React, {Component} from 'react'
import AppNavbar from './components/AppNavbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render () {
    return (
    <div className="app">
      <AppNavbar />
      <h1>Hello</h1>
    </div>
    )
  }
}

export default App;