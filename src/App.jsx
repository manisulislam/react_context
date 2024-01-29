
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>context api start</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
