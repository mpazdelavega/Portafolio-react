import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/manuel-paz-de-la-vega-l%C3%B3pez-45680b200/',
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/mpazdelavega'
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:m.pazdelavega@duocuc.cl'
    },
    {
      id: 4,
      child: (
        <>
          <BsWhatsapp size={30} />
        </>
      ),
      href: 'https://wa.me/+56978929295',
      download: true,
    },
  ];

  return (
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Manuel Paz de la Vega</a>. Todos los derechos reservados.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">

        {links.map(({ id, child, href, download }) => (
          <li 
            key={id}
            className>
            <a 
              href={href} 
              className='mr-4 flex justify-between items-center w-full text-white'
              target='_blank'
              rel="noreferrer"
            >
                {child}
            </a>
          </li>
        ))}


      </ul>
    </footer>
  )
};

export default Footer;