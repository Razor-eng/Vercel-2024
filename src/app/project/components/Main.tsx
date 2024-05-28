"use client";
import React from 'react'
import OutlineButton from '@/components/Buttons/OutlineButton';
import { RiThunderstormsLine } from "react-icons/ri";
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

type Props = {
    title: string,
    live: string
}

export default function Main({ title, live }: Props) {
    return (
        <div className='bg-[#FAFAFA] flex-1 dark:bg-black flex flex-col'>
            <div className="md:px-[160px] px-2 h-[120px] flex flex-col md:flex-row md:items-center justify-start md:justify-between border-b border-zinc-200 dark:border-zinc-800 mt-4 gap-4">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <div className="md:flex grid grid-cols-2 items-center gap-3">
                    <OutlineButton title={'Repository'} className='py-2 px-5' />
                    <OutlineButton title={'Usage'} className='py-2 px-5 hidden md:block' />
                    <OutlineButton title={'Domains'} className='py-2 px-5 hidden md:block' />
                    <Link href={live} target='_blank' className="w-full px-6 dark:bg-zinc-900 bg-zinc-100 dark:hover:text-white text-zinc-600 hover:text-black dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 hover:dark:bg-zinc-900 transition-all ease-in duration-100 border-2 text-[14px] rounded-[7px] py-2 font-[500]">
                        Visit
                    </Link>
                </div>
            </div>
            <div className="md:px-[160px] px-2 py-6 md:py-12 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">Production Deployment</h2>
                        <p className="text-zinc-500 text-sm">The deployment that is available to your visitors.</p>
                    </div>
                    <div className="md:flex hidden items-center gap-3">
                        <OutlineButton title={'Build Logs'} className='py-2 px-5' />
                        <OutlineButton title={'Runtime Logs'} className='py-2 px-5' />
                        <OutlineButton title={'Instant Rollback'} className='py-2 px-5' />
                    </div>
                </div>
                <div className="mt-6 md:h-[430px] h-96 border border-zinc-200 dark:border-zinc-800 rounded-[7px] dark:bg-[#0A0A0A]">
                    <div className="p-[24px] h-full flex items-center justify-center">
                        <div className="border w-full h-full border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center flex-col gap-3">
                            <div className="border p-6 rounded-full border-zinc-200 dark:border-zinc-800">
                                <RiThunderstormsLine size={26} className='text-black dark:text-white' />
                            </div>
                            <div className="flex flex-col items-center gap-1 px-4 md:px-0">
                                <h2 className="text-2xl font-semibold">No Production Domain</h2>
                                <p className="text-sm text-zinc-500">{`Create a production domain in this project's settings.`}</p>
                            </div>
                            <button className='mt-2 w-fit hover:opacity-80 dark:bg-zinc-100 bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 text-white dark:text-black transition-all ease-in duration-150 border-2 text-[14px] rounded-[7px] px-4 py-2 font-[500]'>
                                Add Domain
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:px-[160px] px-2 py-6 md:py-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-4 md:gap-2">
                        <h2 className="text-2xl font-semibold">Active Branches</h2>
                        <p className="text-zinc-500 flex-wrap text-sm flex items-center gap-2 md:gap-1">Open branches on <FaGithub className='text-black dark:text-white' /> <span className="font-semibold text-black dark:text-white">Razor-eng/{title}</span> that have been deployed.</p>
                    </div>
                    <div className="md:flex hidden items-center gap-3">
                        <OutlineButton title={'Build Logs'} className='py-2 px-5' />
                        <OutlineButton title={'Runtime Logs'} className='py-2 px-5' />
                        <OutlineButton title={'Instant Rollback'} className='py-2 px-5' />
                    </div>
                </div>
                <div className="mt-6 md:h-[430px] h-96 border border-zinc-200 dark:border-zinc-800 rounded-[7px] dark:bg-[#0A0A0A]">
                    <div className="p-[24px] h-full flex items-center justify-center">
                        <div className="border w-full h-full border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-6">
                                <h2 className="text-2xl font-semibold">No Preview Deployments</h2>
                                <p className="text-zinc-500">Commit using our Git connections.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}