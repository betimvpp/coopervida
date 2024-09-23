import React from 'react'

export const Localization = () => {
  return (
    <div className='mt-20 flex justify-center flex-col'>
      <h1 className='text-center text-6xl font-semibold text-slate-800'> Nossa Localização</h1>
      <div className='border border-solid border-slate-300 p-4 rounded-3xl mt-8'>
        <div className='border border-solid border-slate-300 p-4 rounded-3xl'>
          <div className='border border-solid border-slate-300 p-4 rounded-3xl'>
            <iframe className='w-full rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5440910062757!2d-38.425892499999996!3d-12.143315099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716bc4b6b5b5747%3A0x3d65b1dbd6576603!2sAv.%20Severino%20Vi%C3%AAira%2C%20330%20-%20Jardim%20Petrolar%2C%20Alagoinhas%20-%20BA%2C%2048030-705!5e0!3m2!1spt-BR!2sbr!4v1727053479414!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
