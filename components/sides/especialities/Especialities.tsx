import Image from 'next/image'
import React from 'react'
import EspecialitiesI from "@/components/assets/Especialidades.png"

export const Especialities = () => {
  return (
    <div className='grid grid-cols-2 mt-24'>
      <Image className='w-96 h-full m-auto' src={EspecialitiesI} width={0} height={0} alt={''} />

      <div className='flex flex-col justify-center gap-8'>
        <h1 className='text-4xl text-slate-800 font-semibold'>Nulla lobortis nunc vitae nisi <br /> semper semper velit</h1>
        <h2 className='text-xl text-slate-700'>Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at. Duis sed augue.</h2>
        <div className='grid grid-cols-3 gap-10'>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Dentista</span>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Pedriatra</span>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Cadriologista</span>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Ortopedista</span>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Traumatologista</span>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Anestesista</span>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Reumatologista</span>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Ortodontisca</span>
          <span className='hover:bg-slate-700 hover:text-white cursor-pointer text-center px-4 py-1 border-solid border-slate-700 border rounded-full font-semibold text-slate-700'>Radiologista</span>
        </div>
      </div>
    </div>
  )
}
