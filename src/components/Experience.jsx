import React from 'react'
import html from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javascript.png'
import github from '../img/github.png'
import java from '../img/java.png'
import node from '../img/node.png'
import reactImage from '../img/react.png'
import tailwind from '../img/tailwind.png'
import mysqlw from '../img/mysqlw.png'

const Experience = () => {

  const skills = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-gray-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-gray-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-gray-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'REACT',
      style: 'shadow-gray-500'
    },
    {
      id: 5,
      src: java,
      title: 'JAVA',
      style: 'shadow-gray-700'
    },
    {
      id: 6,
      src: mysqlw,
      title: 'MySQL',
      style: 'shadow-gray-400'
    },
    {
      id: 7,
      src: github,
      title: 'GITHUB',
      style: 'shadow-gray-500'
    },
    {
      id: 8,
      src: node,
      title: 'NODE JS',
      style: 'shadow-gray-500'
    },
    {
      id: 9,
      src: tailwind,
      title: 'TAILWIND',
      style: 'shadow-gray-500'
    },
  ]

  return (
    <div name='experiencia' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-3.5100 '>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-[-10] xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0'>
          <p className='text-4xl font-bold border-b-4 border-cyan-500 p-2 inline'>Skills</p>
        </div>

        <div className='w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            skills.map(({ id, src, title, style }) => (
              <div key={id} className={'z-0 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
                <img src={src} alt="" className='w-12 sm:w-20 mx-auto' />
                <p className='mt-4 text-xs sm:text-base'>{title}</p>
              </div>
            ))
          }


        </div>

      </div>
    </div>
  )
};

export default Experience;