import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts'
import { menuRoutes } from './Routes'

function App() {

  return (
    <>
    <Layout>
      <Routes>
        {menuRoutes.map((i) => (<Route key={i.path} path={i.path} element={i.element} />))}
        {menuRoutes.filter(route => route.children).map(i => <Route key={i.path} path={i.path} element={i.element} />)}
      </Routes>
    </Layout>     
    </>
  )
}

export default App
