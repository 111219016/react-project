import { BrowserRouter, Routes, Route } from 'react-router'
// import { Provider } from "react-redux";

import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Category from './pages/Category'
import WorkDetail from './pages/WorkDetail'

// import store from '@/redux/store';

function App() {
  const [count, setCount] = useState(0)
  //  store={store}
  return (
    // <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery">
          <Route path="category/:id" element={<Category />} />
          <Route path="work/:category/:id" element={<WorkDetail />} />
        </Route>
        <Route path="shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
    
    // </Provider>
  )
}

export default App