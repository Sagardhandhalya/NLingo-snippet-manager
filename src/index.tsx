import ReactDOM from 'react-dom'

import App from './App'
import { AuthProvider } from './context/AuthContext'
import DataContext from './context/DataContext'

ReactDOM.render(
  <AuthProvider>
    <DataContext>
      <App />
    </DataContext>
  </AuthProvider>,
  document.getElementById('root')
)
