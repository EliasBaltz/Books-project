import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import Favorites from './pages/Favorites'
import MyReadings from './pages/MyReadings'
import ReadingPage from './pages/ReadingPage'

const App = () => {
  return (
    <>
      <Navbar /> {/* Nuestro componente */}
      <Routes>
        {/* Agregamos las rutas de las páginas que creamos */} 
        <Route path='/' element={Home} />
        <Route path='/books' element={Books} />
        <Route path='/books/:id' element={BookDetails} />
        <Route path='/favorites' element={Favorites} />
        <Route path='/myreadings' element={MyReadings} />
        <Route path='/readingpage/:id' element={ReadingPage} />
      </Routes>
      <Footer />
    </>
  )
}

export default App