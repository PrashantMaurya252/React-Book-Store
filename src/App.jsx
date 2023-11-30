import React from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'

import DashBoard from './Pages/DashBoard'
import BookDetails from './Pages/BookDetails'
import About from './Pages/About'
import Login from './Pages/Login'
import Book from './components/Book'

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/book/:id' element={<BookDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App