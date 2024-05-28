import React from 'react'
import { SiVercel } from 'react-icons/si'
import GhostButton from '@/components/Buttons/GhostButton'
import OutlineButton from '@/components/Buttons/OutlineButton'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='md:px-16 px-2 h-[70px] flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800'>
            <Link href={'/'}>
                <h2 className="flex items-center gap-1 font-semibold text-2xl"><SiVercel />Vercel</h2>
            </Link>
            <div className="flex items-center gap-1">
                <Link href={'/login'}>
                    <GhostButton title='Log In' className='py-3 !px-6' />
                </Link>
                <Link href={'/signup'}>
                    <OutlineButton title='Sign Up' className='py-3 !px-6' />
                </Link>
            </div>
        </div>
    )
}