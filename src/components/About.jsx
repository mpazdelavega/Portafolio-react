import React from 'react'

const About = () => {
  return (
    <div name='sobre mi' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-1 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0'>
          <p className='text-4xl font-bold inline border-b-4  border-cyan-500'>About</p>
        </div>
        <p className='text-xl mt-5'>
          Estudiante de cuarto año de la carrera Ingeniería en Informática, proactivo, aprendiendo constantemente y buscando nuevos desafíos para poner aprueba mis conocimientos. Mi
          objetivo es realizar tareas de manera organizada, trabajar en equipo y resolver problemas que puedan surgir a lo largo del desarrollo de algún proyecto.

        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, exercitationem mollitia commodi illum error expedita temporibus quia corrupti distinctio deserunt.
        </p>
      </div>
    </div>
  )
};

export default About;