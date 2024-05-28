import React from 'react'
import OutlineButton from '../Buttons/OutlineButton'
import { AiOutlineAppstore } from "react-icons/ai";
import { SiMongodb, SiSanity } from "react-icons/si";
import { TbLetterA } from "react-icons/tb";
import { CiShare1 } from 'react-icons/ci';

type Props = {}

export default function Integrations({ }: Props) {
    return (
        <div className='bg-white dark:bg-black'>
            <div className="md:px-[160px] px-2 h-[120px] flex md:items-center flex-col md:flex-row md:justify-between gap-3 py-2 md:py-0 border-b border-zinc-200 dark:border-zinc-800 w-full">
                <h2 className="text-3xl font-semibold">Integrations</h2>
                <div className="flex items-center gap-3">
                    <button className='hover:opacity-80 dark:bg-zinc-100 bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 text-white dark:text-black transition-all ease-in duration-150 border text-sm rounded-[7px] py-3 px-4 font-[500]'>
                        Browse Marketplace
                    </button>
                    <OutlineButton title={'Integrations Console'} className='px-4 py-3 !text-black dark:!text-white' />
                </div>
            </div>
            <div className="md:mx-[160px] mx-2 dark:bg-[#0A0A0A] my-6 rounded-[8px] flex flex-col gap-5 items-center justify-center mb-14 py-10 md:h-screen border border-zinc-200 dark:border-zinc-800">
                <div className="border border-zinc-200 dark:border-zinc-800 p-3 rounded-[8px] text-zinc-500"><AiOutlineAppstore size={36} /></div>
                <h2 className="font-semibold">No integrations yet</h2>
                <div className="flex flex-col items-center">
                    <p className="text-zinc-500 text-sm">Install one of our recommended options below</p>
                    <p className="text-zinc-500 text-sm">or browse the integrations marketplace.</p>
                </div>
                <div className="p-2 w-80 md:w-[500px] border border-zinc-200 dark:border-zinc-800 rounded-[7px]">
                    <div className="p-3 py-5 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
                        <div className="flex gap-3 items-center">
                            <div className="p-2 bg-[#F03E2F] rounded-full text-white">
                                <SiSanity />
                            </div>
                            <div className="text-sm">
                                <h2 className='font-semibold'>Sanity</h2>
                                <p className="text-zinc-500">CMS</p>
                            </div>
                        </div>
                        <OutlineButton title={'View'} className='!px-4 !py-2' />
                    </div>
                    <div className="p-3 py-5 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
                        <div className="flex gap-3 items-center">
                            <div className="p-2 bg-[#001E2B] rounded-full text-[#00ED64]">
                                <SiMongodb />
                            </div>
                            <div className="text-sm">
                                <h2 className='font-semibold'>MongoDB Atlas</h2>
                                <p className="text-zinc-500">Databases</p>
                            </div>
                        </div>
                        <OutlineButton title={'View'} className='!px-4 !py-2' />
                    </div>
                    <div className="p-3 py-5 flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <div className="p-2 bg-[#000000] rounded-full text-white">
                                <TbLetterA />
                            </div>
                            <div className="text-sm">
                                <h2 className='font-semibold'>Axiom</h2>
                                <p className="text-zinc-500">Logging</p>
                            </div>
                        </div>
                        <OutlineButton title={'View'} className='!px-4 !py-2' />
                    </div>
                </div>
                <div className="p-5 flex items-center justify-between w-80 md:w-[500px] border border-zinc-200 dark:border-zinc-800 rounded-[7px]">
                    <div className="text-sm">
                        <h2 className="font-semibold">Browse all integrations</h2>
                        <p className="text-zinc-500">Optimize your Vercel workflow</p>
                    </div>
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-full p-3">
                        <CiShare1 />
                    </div>
                </div>
                <p className="text-zinc-500 font-[500] mt-3 flex gap-1 items-center text-sm">Learn more <CiShare1 className='text-black dark:text-white' /></p>
            </div>
        </div>
    )
}