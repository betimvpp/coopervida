/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import Image from 'next/image'
import React from 'react'
import Hospital from "@/components/assets/hospital.jpg"

export const AboutUs = () => {
    return (
        <div className="grid grid-cols-2 gap-8 mt-24">
            <div className="h-96 w-full flex items-center justify-center">
                <div className="p-8 rounded-full border-2 border-solid border-blue-400">
                    <Image
                        src={Hospital}
                        width={384}
                        height={384}
                        alt=""
                        className="rounded-full h-96 w-96"
                    />
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-semibold text-slate-600 mb-8">
                    Nulla lobortis nunc vitae nisi <br /> semper semper velit
                </h1>
                <span className="flex gap-4">
                    <span>
                        <p className="text-3xl font-semibold text-slate-600">+200</p>
                        <h2 className="bg-emerald-500 text-white text-xl py-1 px-4 rounded-full">
                            Clinics
                        </h2>
                    </span>
                    <div className="w-0.5 bg-slate-600 flex"></div>
                    <span>
                        <p className="text-3xl font-semibold text-slate-600">+450</p>
                        <h2 className="bg-emerald-500 text-white text-xl py-1 px-4 rounded-full">
                            Doctors
                        </h2>
                    </span>
                    <div className="w-0.5 bg-slate-600 flex"></div>
                    <span>
                        <p className="text-3xl font-semibold text-slate-600">24</p>
                        <h2 className="text-slate-900 font-semibold text-xl py-1">Hours Open</h2>
                    </span>
                </span>
                <span className='flex mt-6 gap-4'>
                    <div className="w-0.5 bg-slate-500 flex"></div>
                    <h1 className='text-xl text-slate-500'>
                        Aliquam lobortis magna neque, gravida consequat <br /> velit venenatis at.
                        Pellentesque ac bibendum tortor, vel <br /> blandit nulla.
                    </h1>
                </span>
            </div>
        </div>
    );
};
