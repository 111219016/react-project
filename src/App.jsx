import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from "react-redux";
// import { HelmetProvider } from 'react-helmet-async'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Category from './pages/Category'
import WorkDetail from './pages/WorkDetail'
// import ObjectSorted from './pages/ObjectSorted'
// import store from '@/redux/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery">
          <Route path="category/:id" element={<Category />} />
          <Route path="work/:category/:id" element={<WorkDetail />} />
        </Route>


        {/* <Route path="category/:categoryName" element={<Category />} /> */}
        {/* <Route path="displayed/:workId" element={<WorkDetail />} />
            <Route path="object/:objectName" element={<ObjectSorted />} /> */}

        
        {/* <Route path="/category/:id" element={<Category />} /> */}

        <Route path="shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
    // </Provider>
  )
}

export default App
