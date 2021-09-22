import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CreateSnippet from './components/CreateSnippet/CreateSnippet'
import Header from './components/Header/Header'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import SnippetGroup from './components/SnippetGroup/SnippetGroup'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import './App.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/create" component={CreateSnippet}></PrivateRoute>
          <PrivateRoute
            path="/collection/:id"
            component={SnippetGroup}
          ></PrivateRoute>
          <PrivateRoute path="/" exact component={Home}></PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

export default App
