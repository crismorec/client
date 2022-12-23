import './App.css'
import IndexPage from './pages/IndexPage/IndexPage'
import CoastersPage from './pages/CoastersPage/CoastersPage'
import CoasterDetails from './pages/CoasterDetails/CoasterDetails'
// todo: import LanguaguesPage from './pages/.../LanguaguesPage'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">

      <Routes>

        <Route path="/" element={<IndexPage />} />
        <Route path="/galeria" element={<CoastersPage />} />
        <Route path="/detalles/:coaster_id" element={<CoasterDetails />} />
        <Route path="/productos" element={<CoasterDetails />} />
        {/* {<Route path="/lenguajes" element={<LanguaguesPage />} /> } */}
        {/* <Route path="/productosjson"/> */}

      </Routes>

    </div>
  )
}

export default App;
