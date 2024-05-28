"use client";
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import Image from 'next/image'
import { CiLogout, CiSettings } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { auth } from '@/app/firebase'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Props = {
    email: string
}

export default function Logout({ email }: Props) {
    const router = useRouter();

    const signout = async () => {
        toast.loading('Signing out...')
        await signOut(auth).then(() => {
            setTimeout(() => {
                toast.dismiss();
                toast.success('Signed Out');
                router.push('/');
            }, 1000);
        }).catch(err => {
            setTimeout(() => {
                toast.dismiss();
                toast.error(err.message);
            }, 1000);
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image src={'/rglobe.svg'} height={30} width={30} alt='globe' className='rounded-full cursor-pointer' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-64 dark:bg-[#0A0A0A] bg-white rounded-[7px] border-zinc-200 dark:border-zinc-800 mr-3 mt-3 px-2">
                <DropdownMenuLabel className='py-2'>{email}</DropdownMenuLabel>
                <DropdownMenuSeparator className='dark:bg-zinc-700' />
                <div className="flex text-sm flex-col gap-2 px-2 py-4">
                    <div className="flex justify-between items-center">
                        <p>Account Settings</p>
                        <CiSettings size={22} />
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Create Team</p>
                        <FaPlus size={18} />
                    </div>
                </div>
                <DropdownMenuSeparator className='dark:bg-zinc-700' />
                <div onClick={signout} className="gap-2 font-semibold py-2 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 hover:opacity-80 transition-all ease-in duration-100 rounded-[7px]">
                    <button className="flex justify-between items-center gap-2">
                        <CiLogout size={18} />
                        <p>Logout</p>
                    </button>
                </div>
                <DropdownMenuSeparator className='dark:bg-zinc-700' />
                <div className="flex text-sm items-center justify-center py-2">
                    <div className="flex justify-between items-center text-white cursor-pointer font-semibold bg-black dark:bg-white dark:text-black px-12 py-1 rounded-[6px]">
                        <p>Upgrade to Pro</p>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}