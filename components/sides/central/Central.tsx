/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const Central = () => {
    return (
        <div className='p-4 grid w-full grid-cols-2 h-720 gap-6'>
            <div className='flex flex-col items-center m-auto gap-3'>
                <h1 className='text-6xl font-semibold text-slate-700'>Seu bem-estar em primeiro lugar.</h1>
                <h2 className='w-full flex justify-center font-semibold text-slate-600'>Há 15 anos transformando vidas!</h2>
            </div>
            <div className='bg-midRightBanner bg-cover rounded-r-full rounded-b-full'></div>
        </div>
    )
}
