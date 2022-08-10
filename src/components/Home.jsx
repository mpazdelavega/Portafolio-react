import React from 'react'
import MiImagen from '../img/yo.png';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
          <h2 className='text-4xl sm:text-4xl md:text-7xl font-bold text-white'>
            Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel aliquid beatae consequatur iure deleniti cumque, tenetur quibusdam nobis saepe.
          </p>

          <div className='flex'>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              <Link to='proyectos' smooth duration={500}>Proyectos</Link>
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={30} className='ml-1' />
              </span>
            </button>
            <a href="/CV_ManuelPazDeLaVega.pdf" download={true} >
              <button
                className='ml-4 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Descargar CV
                <span>
                  <AiOutlineCloudDownload size={30} className='ml-1' />
                </span>
              </button>
            </a>

          </div>
        </div>

        <div>
          <img src={MiImagen} alt="mi perfil" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>

      </div>
    </div>
  )
};

export default Home;