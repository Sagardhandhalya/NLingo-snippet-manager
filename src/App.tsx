import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import CreateSnippet from './components/CreateSnippet/CreateSnippet'
import './App.scss'
import Login from './pages/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/create" component={CreateSnippet}></PrivateRoute>
          <PrivateRoute path="/" exact component={Home}></PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

export default App
