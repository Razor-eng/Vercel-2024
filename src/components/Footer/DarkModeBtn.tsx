"use client";
import React from 'react'
import { useTheme } from 'next-themes'
import { IoMoonOutline } from 'react-icons/io5'
import { FiSun } from 'react-icons/fi'
import { RiComputerLine } from 'react-icons/ri'

type Props = {}

export default function DarkModeBtn({ }: Props) {
    const { theme, setTheme } = useTheme()
    const Icons = [
        { icon: RiComputerLine, theme: 'system' },
        { icon: FiSun, theme: 'light' },
        { icon: IoMoonOutline, theme: 'dark' },
    ];

    return (
        <div className="flex px-2 py-1 border w-fit rounded-[8px] border-zinc-200 dark:border-zinc-800">
            {Icons.map((Icon, id) => (
                <button
                    key={id}
                    className={`p-2 rounded-full transition-all ease-in duration-150 ${Icon.theme === theme ? 'text-black dark:text-white' : 'text-zinc-400 dark:text-zinc-600'} hover:text-black dark:hover:text-white`}
                    onClick={() => setTheme(Icon.theme)}
                >
                    <Icon.icon size={18} />
                </button>
            ))}
        </div>
    )
}