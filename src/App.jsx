import { BrowserRouter, Routes, Route } from 'react-router'

import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
// import Category from './pages/Category'
// import WorkDetail from './pages/WorkDetail'
// import ObjectSorted from './pages/ObjectSorted'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="gallery">
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="displayed/:workId" element={<WorkDetail />} />
            <Route path="object/:objectName" element={<ObjectSorted />} />
          </Route> */}
          <Route path="shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
