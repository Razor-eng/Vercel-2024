"use client";
import React, { useState } from 'react'
import { FaAngular, FaPython } from 'react-icons/fa';
import { RiGatsbyFill, RiNextjsFill, RiReactjsLine, RiSvelteFill, RiVuejsFill } from "react-icons/ri";
import { SiAstro, SiNuxtdotjs, SiVite } from "react-icons/si";

type Props = {}

export default function Frameworks({ }: Props) {
    const [hovered, setHovered] = useState(-1);
    const Frameworks = [
        { title: 'Next.js', icon: RiNextjsFill },
        { title: 'React', icon: RiReactjsLine, color: '#139ECA' },
        { title: 'Nuxt', icon: SiNuxtdotjs, color: '#00B382' },
        { title: 'Svelte', icon: RiSvelteFill, color: '#F83C00' },
        { title: 'Vue', icon: RiVuejsFill, color: '#41B883' },
        { title: 'Gatsby', icon: RiGatsbyFill, color: '#603092' },
        { title: 'Astro', icon: SiAstro, color: '#E43A99' },
        { title: 'Python', icon: FaPython, color: '#336FA1' },
        { title: 'Angular', icon: FaAngular, color: '#DD0031' },
        { title: 'Vite', icon: SiVite, color: '#685EC5' },
    ]

    return (
        <div className='w-full mt-2 border border-zinc-200 dark:border-zinc-800'>
            <div className="grid grid-cols-3 md:grid-cols-6">
                <div className="col-span-2 border border-zinc-200 dark:border-zinc-800 text-3xl text-center py-12 font-semibold">
                    <div className='flex items-center justify-center gap-3'>
                        Your {hovered === -1 ? 'framework,' : <p className='transition-all ease-in duration-100' style={{ color: `${Frameworks[hovered]?.color || ''}` }}>{Frameworks[hovered]?.title},</p>}
                    </div>
                    <h2>
                        your way.
                    </h2>
                </div>
                {Frameworks.map((framework, id) => (
                    <div key={id} className="border py-12 border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-7xl transition-all ease-in duration-100" style={{ color: hovered === id ? `${framework.color}` : '' }} onMouseEnter={() => setHovered(id)} onMouseLeave={() => setHovered(-1)}>
                        <framework.icon />
                    </div>
                ))}
            </div>
        </div>
    )
}