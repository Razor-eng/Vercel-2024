import Footer from '@/components/Footer/Footer'
import React from 'react'
import Header from './(auth)/components/AuthHeader/Header'
import { MdOutlineKeyboardArrowRight, MdSecurity } from "react-icons/md";
import Image from 'next/image';
import { Building, GitBranch, Globe } from 'lucide-react';
import Frameworks from '@/components/Frameworks';
import Link from 'next/link';

type Props = {}

export default function VercelHome({ }: Props) {
    return (
        <div className='min-h-screen w-screen flex flex-col'>
            <Header />
            <section className="flex-1 py-10 flex items-center flex-col dark:bg-black">
                <div className="flex gap-6 items-center">
                    <h2 className="text-zinc-500 text-sm">
                        <span className="text-lg dark:text-white text-black font-semibold">Vercel Ship </span> <span className="text-black dark:text-white border border-black dark:border-white text-xs">{new Date().getFullYear().toString().substring(2, 4)}</span> <span className='hidden sm:block'>{`Achieving a web that's secure by default`}</span>
                    </h2>
                    <button className="px-4 rounded-full py-2 dark:bg-white text-white dark:text-black font-semibold text-sm gap-2 hover:opacity-80 transition-all ease-in duration-100 bg-black hidden md:flex items-center">Learn more <MdOutlineKeyboardArrowRight /></button>
                </div>
                <div className="mt-1 w-full px-2 md:px-56">
                    <Frameworks />
                    <div className="border-r border-l border-zinc-200 dark:border-zinc-800 w-full h-10"></div>
                    <Link href={'/signup'}>
                        <Image width={5000} height={5000} className='w-full h-fit border border-zinc-200 dark:border-zinc-800' src={'/img1.png'} alt='image' />
                    </Link>
                    <div className="border border-zinc-200 dark:border-zinc-800 py-20 flex flex-col items-center justify-center">
                        <h2 className="md:text-3xl text-xl font-semibold">Develop with your favorite tools {`>_`}</h2>
                        <div className="md:text-3xl text-xl font-semibold flex flex-col md:flex-row items-center gap-1">
                            <p className='flex gap-1 items-center'>Launch globally, instantly <Globe /> </p>
                            <p className='flex gap-1 items-center'>Keep pushing <GitBranch /></p>
                        </div>
                    </div>
                    <Image width={5000} height={5000} className='w-full h-fit border border-zinc-200 dark:border-zinc-800' src={'/img2.png'} alt='image' />
                    <Image width={5000} height={5000} className='w-full h-fit border border-zinc-200 dark:border-zinc-800' src={'/img3.png'} alt='image' />
                    <Image width={5000} height={5000} className='w-full h-fit border border-zinc-200 dark:border-zinc-800' src={'/img4.png'} alt='image' />
                    <div className="border border-zinc-200 dark:border-zinc-800 py-14 flex flex-col md:flex-row gap-2 items-center justify-center">
                        <h2 className="text-2xl font-semibold">Scale your</h2>
                        <button className="hover:opacity-80 transition-all ease-in duration-100 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-semibold px-4 py-2 flex gap-2 items-center">
                            <Building size={16} /> Enterprise
                        </button>
                        <h2 className="text-2xl font-semibold">without compromising</h2>
                        <button className="hover:opacity-80 transition-all ease-in duration-100 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-full text-sm font-semibold px-4 py-2 flex gap-2 items-center">
                            <MdSecurity size={16} /> Security
                        </button>
                    </div>
                    <Image width={5000} height={5000} className='w-full h-fit border border-zinc-200 dark:border-zinc-800' src={'/img5.png'} alt='image' />
                    <Image width={5000} height={5000} className='w-full h-fit border border-zinc-200 dark:border-zinc-800' src={'/img6.png'} alt='image' />
                </div>
            </section>
            <Footer loading />
        </div>
    )
}