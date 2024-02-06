import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Side from './Componenta/Sunnyside'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Side/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App