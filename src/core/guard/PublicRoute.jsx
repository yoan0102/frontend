import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE } from '../config/routes/paths';
import { useAuthContent } from '../context/authContext';

const PublicRoute = () => {
  const { isAuthenticated } = useAuthContent()

  if (isAuthenticated) return <Navigate to={PRIVATE} />

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicRoute