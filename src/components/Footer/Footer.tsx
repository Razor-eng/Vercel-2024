import React from 'react'
import DarkModeBtn from './DarkModeBtn'
import { IoLogoVercel } from 'react-icons/io5'
import { GoDotFill } from "react-icons/go";
import { FaGithub } from 'react-icons/fa';
import { RiArrowDownSLine, RiTwitterXFill } from 'react-icons/ri';
import GhostButton from '../Buttons/GhostButton';

type Props = {
    loading: boolean
}

export default function Footer({ loading }: Props) {
    const FooterTexts = [
        'Home', 'Documentation', 'Guides', 'Help', 'Contact Sales', 'Blog', 'Changelog', 'Pricing', 'Enterprise'
    ]

    return (
        <div className='md:p-[28px] h-16 p-2 md:min-h-[138px] border-t dark:border-zinc-800 dark:bg-[#0A0A0A]'>
            <div className="md:px-8 px-2 flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 font-[500]">
                    <IoLogoVercel size={24} className='text-black dark:text-white' />
                    <p className='ml-1'>@ {new Date().getFullYear()}</p>
                    <button className={`${!loading ? 'text-blue-500 dark:text-blue-400' : 'text-zinc-500 dark:text-zinc-400'} hover:bg-zinc-200 hover:dark:bg-zinc-800 border-none hover:text-black dark:hover:text-white transition-all ease-in duration-100 border-2 font-[500] text-[14px] rounded-[7px] px-3 py-3 hidden md:flex`}>
                        <GoDotFill size={20} /> {!loading ? 'All systems normal.' : 'No status available.'}
                    </button>
                </div>
                <DarkModeBtn />
            </div>
            <div className="md:px-9 px-2 pt-4 hidden sm:flex flex-col-reverse md:flex-row justify-between items-start md:items-center text-sm text-zinc-600 dark:text-zinc-400 font-[500] gap-10 md:gap-0">
                <div className="flex items-center gap-5">
                    <FaGithub size={18} />
                    <RiTwitterXFill size={18} />
                </div>
                <div className="grid grid-cols-3 md:flex items-center gap-3 md:gap-10">
                    {FooterTexts.map((text, id) => (
                        <GhostButton title={text} key={id} />
                    ))}
                    <button className='text-zinc-500 dark:text-zinc-400 border-none hover:text-black dark:hover:text-white transition-all ease-in duration-100 border-2 font-[500] text-[14px] rounded-[7px] px-3 py-1 flex items-center gap-1'>
                        Legal <RiArrowDownSLine size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}