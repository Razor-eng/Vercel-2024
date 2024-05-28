import React from 'react'

type Props = {
    title: string,
    className?: string,
}

export default function GhostButton({ title, className }: Props) {
    return (
        <button className={`text-zinc-500 dark:text-zinc-400 border-none hover:text-black dark:hover:text-white transition-all ease-in duration-100 border-2 font-[500] text-[14px] rounded-[7px] px-3 py-1 ${className}`}>
            {title}
        </button>
    )
}