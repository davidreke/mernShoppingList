import React, {Component} from 'react'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/itemModal'

import { Provider} from  'react-redux';
import store from './store'
import { loadUser} from './actions/authActions'

import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }


  render () {
    return (
      <Provider store={store}>
        <Container>
          <div className="app">
            <AppNavbar />
            <ItemModal />
            <ShoppingList />
          </div>
        </Container>
      </Provider>
    )
  }
}

export default App;
