import React from 'react'

export const Header = () => {
  return (
    <div className='p-4 flex justify-between'>
        <div className="flex">
            <h1 className='text-slate-500 font-semibold'>Cooper</h1>
            <h1 className='text-green-500 font-semibold'>Vida</h1>
        </div>
        <div className=' flex gap-4'>
            <a href="">Colaboradores</a>
            <a href="">Localização</a>
            <a href="">Sobre Nós</a>
            <a href="">Contato</a>
        </div>
    </div>
  )
}
