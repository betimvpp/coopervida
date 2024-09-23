import React from 'react'

export const Header = () => {
  return (
    <div className='p-4 flex justify-between'>
      <div >
        <a href="" className="flex">
          <h1 className='text-slate-600 font-semibold text-4xl'>Cooper</h1>
          <h1 className='text-green-500 font-semibold text-4xl'>Vida</h1>
        </a>
      </div>
      <div className=' flex gap-4'>
        <a href="" className='font-semibold text-slate-700 text-xl hover:border-b-emerald-500 hover:border-solid hover:border-b-2 hover:text-emerald-500 '>Sobre Nós</a>
        <a href="" className='font-semibold text-slate-700 text-xl hover:border-b-emerald-500 hover:border-solid hover:border-b-2 hover:text-emerald-500 '>Nossos Produtos</a>
        <a href="" className='font-semibold text-slate-700 text-xl hover:border-b-emerald-500 hover:border-solid hover:border-b-2 hover:text-emerald-500 '>Nossas Especialidades</a>
        <a href="" className='font-semibold text-slate-700 text-xl hover:border-b-emerald-500 hover:border-solid hover:border-b-2 hover:text-emerald-500 '>Localização</a>
        <a href="" className='font-semibold text-slate-700 text-xl hover:border-b-emerald-500 hover:border-solid hover:border-b-2 hover:text-emerald-500 '>Contato</a>
      </div>
    </div>
  )
}
