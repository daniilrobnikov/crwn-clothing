import { Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation'

import Home from './pages/home'
import Shop from './pages/shop'
import SignIn from './pages/sign-in'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
