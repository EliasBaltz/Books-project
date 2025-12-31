import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../assets/Logo1.png' 
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:'>
      <Link to={'/'} className='max-md:flex-1'>
        <img src={Logo1} alt="" className='w-36 h-auto'/>
      </Link>


      <div className='relative max-w-5xl mx-auto'>
        <div className='max-md:absolute max-md:top-0 max-md_left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen backdrop-blur bg-black/70 md:bg-white/10 overflow-hidden transition-[width] duration-300 '>
          <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' />

          <Link to='/'>Inicio</Link>
          <Link to='/books'>Libros</Link>
          <Link to='/myreadings'>Lecturas</Link>
          <Link to='/favorites'>Favoritos</Link>
        </div>

        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-[160%] bg-linear-to-r from-transparent via-black/40 to-transparent" />

      </div>

      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer' style={{ color: '#F8F6F1' }}>Login</button>
      </div>

      <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' />
    </div>
  )
}

export default Navbar