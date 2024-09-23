import { Facebook, Instagram, PhoneCall } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    return (
        <div className='mt-24 mb-4 border-t-2 pt-4 grid grid-cols-3'>
            <div className='flex flex-col gap-4'>
                <span className='flex'>
                    <h1 className='text-slate-600 font-semibold text-4xl'>Cooper</h1>
                    <h1 className='text-green-500 font-semibold text-4xl'>Vida</h1>
                </span>
                <p className='text-lg text-slate-700'>Seu bem-estar em primeiro lugar.</p>
                <h2 className='text-base text-slate-700'>Powered by CodeHere@2024</h2>
            </div>
            <div>
                <h1 className='mb-3 font-semibold text-lg text-slate-700'>Menu</h1>
                <div className='flex flex-col'>
                    <a href="" className=' text-slate-700 text-base hover:border-l-emerald-500 hover:border-solid hover:border-l-2 hover:text-emerald-500 '>Sobre Nós</a>
                    <a href="" className='text-slate-700 text-base hover:border-l-emerald-500 hover:border-solid hover:border-l-2 hover:text-emerald-500 '>Nossos Produtos</a>
                    <a href="" className=' text-slate-700 text-base hover:border-l-emerald-500 hover:border-solid hover:border-l-2 hover:text-emerald-500 '>Nossas Especialidades</a>
                    <a href="" className=' text-slate-700 text-base hover:border-l-emerald-500 hover:border-solid hover:border-l-2 hover:text-emerald-500 '>Localização</a>
                    <a href="" className=' text-slate-700 text-base hover:border-l-emerald-500 hover:border-solid hover:border-l-2 hover:text-emerald-500  '>Contato</a>
                </div>
            </div>
            <div>
                <h1 className='mb-3 font-semibold text-lg text-slate-700'>Nossas Redes Sociais</h1>
                <div className='flex flex-col gap-2'>
                    <a className='flex items-center gap-1 text-slate-700 text-base hover:border-l-emerald-500 hover:border-solid hover:border-l-2 hover:text-emerald-500 ' href=''>
                        <Instagram />
                        <p>Instagram</p>
                    </a>
                    <a className='flex items-center gap-1 text-slate-700 text-base hover:border-l-emerald-500 hover:border-solid hover:border-l-2 hover:text-emerald-500 ' href=''>
                        <Facebook />
                        <p>Facebook</p>
                    </a>
                    <a className='flex items-center gap-1 text-slate-700 text-base hover:border-l-emerald-500 hover:border-solid hover:border-l-2 hover:text-emerald-500 ' href=''>
                        <PhoneCall />
                        <p>Whatsapp</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
