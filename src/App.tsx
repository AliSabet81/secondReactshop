import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts'
import { menuRoutes, routes } from './Routes'

function App() {

  return (
    <>
    <Layout>
      <Routes>
        {routes.map((i) => (
          <Route key={i.path} path={i.path} element={i.element} />
        ))}
        {menuRoutes.map((i) => (
          <Route key={i.path} path={i.path} element={i.element} />
        ))}
        {menuRoutes.filter(route => route.children).map(i => <Route key={i.path} path={i.path} element={i.element} />)}
      </Routes>
    </Layout>     
    </>
  )
}

export default App
