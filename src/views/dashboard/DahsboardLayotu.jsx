import { Link } from 'react-router-dom';
import { useAuthContent } from '../../core/context/authContext';
const DahsboardLayotu = () => {

  const { logout } = useAuthContent()
  return (
    <div>
      <h1>DahsboardLayotu</h1>
      <Link onClick={logout}>Cerrar Sesion</Link>
    </div>
  )
}

export default DahsboardLayotu