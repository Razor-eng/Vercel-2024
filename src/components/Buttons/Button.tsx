import React from 'react'

type Props = {
    title: string
    className?: string,
}

export default function Button({ title, className }: Props) {
    return (
        <button className={`w-full bg-white dark:bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all ease-in duration-100 border-2 text-[14px] rounded-[7px] py-3 font-[500] ${className}`}>
            {title}
        </button>
    )
}