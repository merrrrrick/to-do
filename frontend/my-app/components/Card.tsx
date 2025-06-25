import React from 'react'

const Card = ({title, desc}: {title: string, desc: string}) => {
  return (
    <div className='max-w-[300px] w-full text-black p-6 rounded-2xl flex flex-col gap-2 bg-white'>
        <p className="">{title}</p>
        <p className="">{desc}</p>
        
    </div>
  )
}

export default Card