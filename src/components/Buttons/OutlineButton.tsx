import React from 'react'

type Props = {
    title: String,
    className?: string,
}

export default function OutlineButton({ title, className }: Props) {
    return (
        <button className={`border-zinc-100 dark:border-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 hover:dark:bg-zinc-900 hover:text-black dark:hover:text-white transition-all ease-in duration-100 border-2 text-[14px] rounded-[7px] px-3 py-1 font-[500] ${className}`}>
            {title}
        </button>
    )
}