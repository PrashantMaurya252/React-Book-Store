import React from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App