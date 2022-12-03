import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from '../config/routes/paths';
import { useAuthContent } from '../context/authContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContent()

  if (!isAuthenticated) return <Navigate to={LOGIN} />

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PrivateRoute