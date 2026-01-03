import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../assets/Logo1.png' 
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:'>
      <Link to={'/'} className='max-md:flex-1'>
        <img src={Logo1} alt="" className='w-36 h-auto'/>
      </Link>


      <div className='relative max-w-5xl mx-auto'>
        <div className={`max-md:fixed max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen backdrop-blur bg-black/70 md:bg-white/10 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
          <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={()=> setIsOpen(!isOpen)}/>

          <Link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/'>Inicio</Link>
          <Link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/books'>Libros</Link>
          <Link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/myreadings'>Lecturas</Link>
          <Link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/favorites'>Favoritos</Link>
        </div>

        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-[160%] bg-linear-to-r from-transparent via-black/40 to-transparent" />

      </div>

      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer' style={{ color: '#F8F6F1' }}>Login</button>
      </div>

      <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
    </div>
  )
}

export default Navbar