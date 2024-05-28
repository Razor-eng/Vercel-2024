"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { IoLogoVercel } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { PiCaretUpDownLight } from 'react-icons/pi'
import OutlineButton from '../Buttons/OutlineButton'
import GhostButton from '../Buttons/GhostButton'
import { FiBell } from 'react-icons/fi'
import ViewModal from '../Modal/ViewModal';
import Logout from '../Logout';

type Props = {
    HeaderItems: any,
    selected: number,
    setTopic: (value: number) => void,
    userName: string,
    email: string
}

export default function Header({ HeaderItems, setTopic, selected, userName, email }: Props) {
    const [viewMore, setViewMore] = useState(false);

    const setOpen = () => {
        setViewMore(false);
    }

    return (
        <div className='md:px-[18px] px-1 border-b dark:border-zinc-800 dark:bg-[#0A0A0A]'>
            <section className='h-[64px] px-[6px] flex items-center justify-between'>
                <div className="h-fit flex items-center">
                    <div className="hidden md:flex items-center">
                        <IoLogoVercel size={26} />
                        <hr className='ml-2 rotate-[120deg] w-5 border-zinc-300 dark:border-zinc-700' />
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={'/globe.svg'} height={21} width={21} alt='globe' className='ml-2 rounded-full cursor-pointer' />
                        <h2 className="text-[14px] font-[500]">{`${userName}'s`} projects</h2>
                        <p className="hidden md:block bg-zinc-200 dark:bg-zinc-800 rounded-full text-[10px] font-semibold p-1 px-2">Hobby</p>
                        <button className="hover:bg-zinc-200 text-zinc-500 dark:text-zinc-300 hover:text-black dark:hover:text-white dark:hover:bg-zinc-800 py-2 px-1 rounded-lg transition-all ease-in duration-150">
                            <PiCaretUpDownLight />
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="hidden md:flex items-center">
                        <OutlineButton title={'Feedback'} />
                        <GhostButton title={'Changelog'} />
                        <GhostButton title={'Help'} />
                        <GhostButton title={'Docs'} />
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                        <button className='border-zinc-100 relative dark:border-zinc-900 text-zinc-500 hover:bg-zinc-100 hover:dark:bg-zinc-900 hover:text-black dark:hover:text-white transition-all ease-in duration-100 border-2 text-[17px] rounded-full p-2 font-[500]'>
                            <FiBell />
                            <div className="absolute bg-blue-500 w-2 h-2 rounded-full top-[1px] right-0"></div>
                        </button>
                        <Logout email={email} />
                        <button
                            className='border-zinc-100 relative dark:border-zinc-900 text-zinc-500 hover:bg-zinc-100 hover:dark:bg-zinc-900 hover:text-black dark:hover:text-white transition-all ease-in duration-100 border-2 text-[17px] rounded-[8px] p-1 font-[500] block md:hidden'
                            onClick={() => setViewMore(true)}
                        >
                            <GiHamburgerMenu size={20} />
                        </button>
                    </div>
                </div>
            </section>
            <section className='h-[40px] px-1 md:px-0 w-full overflow-scroll flex items-center'>
                {HeaderItems?.map((item: any, id: number) => (
                    <div key={id} className={`h-full w-fit transition-all ease-in duration-75 ${selected === id ? 'border-b-2 border-black dark:border-white text-black dark:text-white' : 'text-zinc-500'}`} onClick={() => setTopic(id)}>
                        <div className="h-fit px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all ease-in duration-100 cursor-pointer rounded-[6px] text-sm font-[500]">
                            {item.title}
                        </div>
                    </div>
                ))}
            </section>
            <ViewModal open={viewMore} setOpen={setOpen} />
        </div>
    )
}