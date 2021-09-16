import { Redirect, Route, RouteProps } from 'react-router'
import { useAuth } from '../../context/AuthContext'

export type ProtectedRouteProps = RouteProps

export default function PrivateRoute({ ...routeProps }: ProtectedRouteProps) {
  const { user } = useAuth()
  if (user) {
    return <Route {...routeProps} />
  } else {
    return <Redirect to={{ pathname: '/login' }} />
  }
}
