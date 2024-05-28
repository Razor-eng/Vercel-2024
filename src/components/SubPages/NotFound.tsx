"use client";
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function NotFound({ }: Props) {
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 2000);
    }, [])

    return (
        <div className='flex-1 flex flex-col gap-2 items-center justify-center'>
            {
                load ?
                    <>
                        <Loader size={62} style={{ animation: 'rotate', animationDuration: '2s', animationIterationCount: 'infinite' }} />
                    </>
                    :
                    <>
                        <h2 className="text-2xl font-semibold">Page is Under Work</h2>
                        <p className="text-zinc-500 text-lg">Try again later</p>
                    </>
            }
        </div>
    )
}