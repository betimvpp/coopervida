import React from 'react'
import { Card } from './card/Card'
import { HeartPulse } from 'lucide-react'

export default function Facilities() {
  return (
    <div className='grid grid-cols-4 mt-24 gap-4'>
        <Card />
        <Card />
        <Card />
        <div className='flex flex-col items-center justify-center'>
            <HeartPulse width={200} height={200} color='#475569'/>
            <h1 className='text-2xl font-semibold text-slate-700 text-start w-full mt-6'>Nossos <br /> Produtos</h1>
            <h2 className='text-slate-600 text-lg text-start w-full'>Conheça um pouco do que oferecemos <br /> aos nossos 200 clientes</h2>
        </div>
    </div>
  )
}
