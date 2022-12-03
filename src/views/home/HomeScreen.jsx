import { Link } from 'react-router-dom'
import { LOGIN } from '../../core/config/routes/paths'
const HomeScreen = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={LOGIN}>SigIn</Link>
    </>
  )
}

export default HomeScreen