import React from 'react'
import './App.sass'
import NavBar from './components/NavBar/NavBar.js'
import User from './components/User/User'
import UserList from './components/UsersList/UserList'
import UsersContainer from './containers/UsersContainer/UsersContainer'

const App = () => {
  return (
    <div className="app__background">
        <NavBar/>
        <UsersContainer>
          <UserList/>
          <User/>
        </UsersContainer>
    </div>
  )
}

export default App

