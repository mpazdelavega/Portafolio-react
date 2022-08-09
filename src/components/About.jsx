import React from 'react'

const About = () => {
  return (
    <div name='sobre mi' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur delectus tempora officiis saepe porro, atque et sed! Officia, modi cum est expedita perferendis placeat, tempore suscipit, quasi cupiditate quam incidunt at quo. Ab et, tempore consequuntur amet consequatur voluptatibus esse officiis deserunt blanditiis commodi ducimus odio quidem dolorem dicta odit.
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vitae esse laudantium praesentium nam atque nihil fuga nesciunt officia perspiciatis, blanditiis fugiat eius provident nisi totam accusantium veniam mollitia quaerat labore incidunt distinctio. Iure obcaecati nam dicta reiciendis ullam eum nobis error, dolor, ipsam doloribus, eligendi voluptates culpa minima tenetur?
        </p>
      </div>
    </div>
  )
};

export default About;