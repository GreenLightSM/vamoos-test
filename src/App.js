import './css/global.css'
import Home from './pages/Home/index'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import BriefSingle from './pages/BriefSingle'
import EmptyBrief from './pages/EmptyBrief/index'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/brief' />} />
      <Route path='/brief' element={<Home />}>
        <Route path='' element={<EmptyBrief />} />
        <Route path=':id' element={<BriefSingle />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
