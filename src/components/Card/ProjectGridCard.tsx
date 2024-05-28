import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoLogoVercel, IoStarOutline } from 'react-icons/io5'
import { MdMoreHoriz } from 'react-icons/md'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'
import { GoGitBranch } from "react-icons/go";
import Link from 'next/link'

type Props = {
    title: string,
    live: string,
    days: string,
    userName: string,
    email: string
}

export default function ProjectGridCard({ title, live, days, userName, email }: Props) {
    return (
        <div className='border min-h-[176px] bg-white dark:bg-transparent border-zinc-200 dark:border-zinc-800 rounded-[8px] cursor-pointer dark:hover:border-zinc-200 transition-all ease-in duration-150 p-2 md:p-6 flex flex-col gap-3 shadow-sm hover:shadow-md'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        href={{
                            pathname: '/project',
                            query: {
                                title: title,
                                live: live,
                                email: email
                            }
                        }}
                    >
                        <div className="p-2 border rounded-full w-fit border-zinc-200 dark:border-zinc-800 bg-black text-white">
                            <IoLogoVercel />
                        </div>
                    </Link>
                    <div className="flex flex-col gap-1">
                        <Link
                            href={{
                                pathname: '/project',
                                query: {
                                    title: title,
                                    live: live,
                                    email: email
                                }
                            }}
                            className='w-full'
                        >
                            <h2 className="text-sm font-semibold hover:underline">{title.toLowerCase()}</h2>
                        </Link>
                        <Link
                            href={live}
                            target='_blank'
                        >
                            <p className="text-sm text-zinc-500 hover:underline">{live.split('//')[1].split('/')}</p>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="border-[3px] border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-700 rounded-full p-1">
                        <TbActivityHeartbeat size={22} />
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className='rounded-[5px] text-zinc-500 hover:bg-zinc-200 hover:text-black dark:hover:text-white hover:dark:bg-zinc-800 transition-all ease-in duration-100 p-2 font-[500]'>
                                <MdMoreHoriz size={20} />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-fit bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[8px] px-2 mr-8 md:mr-20">
                            <div className="flex flex-col gap-1 text-sm">
                                <p className="transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px] flex items-center justify-between gap-12">Add Favourite <IoStarOutline /></p>
                                <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px]'>View Logs</p>
                                <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px]'>Manage Domains</p>
                                <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px]'>Transfer Project</p>
                                <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px]'>Settings</p>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <Link
                href={{
                    pathname: '/project',
                    query: {
                        title: title,
                        live: live,
                        email: email
                    }
                }}
                className='w-full'
            >
                <div className="dark:bg-zinc-900 bg-zinc-200 w-fit text-xs font-semibold flex items-center gap-2 rounded-full ml-2 md:ml-0 py-2 px-3 pr-4">
                    <FaGithub size={15} />
                    {userName}/{title}
                </div>
            </Link>
            <Link
                href={{
                    pathname: '/project',
                    query: {
                        title: title,
                        live: live,
                        email: email
                    }
                }}
                className='w-full'
            >
                <div className="flex flex-col">
                    <p className="text-sm text-zinc-500 hover:underline w-fit">first commit</p>
                    <div className="flex gap-1">
                        <p className='text-sm text-zinc-500'>{days}d ago on</p>
                        <div className="flex items-center gap-1">
                            <GoGitBranch size={14} />
                            <p className="text-sm font-[500] dark:hover:text-white hover:text-black text-zinc-600 dark:text-zinc-200">main</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}