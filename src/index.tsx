import App from './App'
import ReactDOM from 'react-dom'
import { AuthProvider } from './context/AuthContext'

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
)
