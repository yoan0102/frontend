import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LOGIN, PRIVATE } from './core/config/routes/paths'
import { AuthContextProvider } from './core/context/authContext'
import PrivateRoute from './core/guard/PrivateROute'
import PublicRoute from './core/guard/PublicRoute'
import LoginScreen from './views/auth/LoginScreen'
import DahsboardLayotu from './views/dashboard/DahsboardLayotu'
import HomeScreen from './views/home/HomeScreen'

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute />}>
            <Route index element={<HomeScreen />} />
            <Route path={LOGIN} element={<LoginScreen />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<DahsboardLayotu />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>

  )
}

export default App
