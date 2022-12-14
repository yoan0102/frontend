import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { CIRCULOS, ESTADISTICAS, GENERAL_LIST, NEW_SUBMISISON, ORGANISMOS, PRIVATE, USERS } from './core/config/routes/paths'

import { AuthContextProvider } from './core/context/authContext'

import PrivateRoute from './core/guard/PrivateROute'
import PublicRoute from './core/guard/PublicRoute'

import { CirculosScreen } from './views/dashboard/Circulos'
import { Estadisticas } from './views/dashboard/Estadisticas'
import { GeneralList } from './views/dashboard/GeneralList'
import { NewSubmision } from './views/dashboard/NewSubmision'
import { Organismos } from './views/dashboard/Organismos'
import { Users } from './views/dashboard/Users'
import { HomeScreen } from './views/home'

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute />}>
            <Route index element={<HomeScreen />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Navigate to={GENERAL_LIST} />} />
            <Route path={GENERAL_LIST} element={<GeneralList />} />
            <Route path={NEW_SUBMISISON} element={<NewSubmision />} />
            <Route path={CIRCULOS} element={<CirculosScreen />} />
            <Route path={ESTADISTICAS} element={<Estadisticas />} />
            <Route path={ORGANISMOS} element={<Organismos />} />
            <Route path={USERS} element={<Users />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND 404</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>

  )
}

export default App
