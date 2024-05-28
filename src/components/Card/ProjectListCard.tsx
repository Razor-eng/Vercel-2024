import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoAdd, IoLogoVercel, IoStarOutline } from 'react-icons/io5'
import { MdMoreHoriz } from 'react-icons/md'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'
import { GoGitBranch } from "react-icons/go";
import { RiShareBoxLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import Link from 'next/link'

type Props = {
    title: string,
    live: string,
    days: number,
    userName: string,
    email: string
}


export default function ProjectListCard({ title, live, days, userName, email }: Props) {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-fit text-sm font-semibold flex items-center gap-2">
                <Link
                    href={{
                        pathname: '/project',
                        query: {
                            title: title,
                            live: live,
                            email: email
                        }
                    }}
                    className='w-full flex items-center gap-2'
                >
                    <FaGithub size={17} />
                    {userName}/{title}
                </Link>
                <Popover>
                    <PopoverTrigger asChild>
                        <button className='rounded-[5px] text-zinc-500 hover:bg-zinc-200 hover:text-black dark:hover:text-white hover:dark:bg-zinc-800 transition-all ease-in duration-100 p-2 font-[500]'>
                            <MdMoreHoriz size={20} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 ml-40 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[8px] px-2">
                        <div className="flex flex-col gap-1 text-[13.8px] font-[500] ">
                            <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px] flex items-center gap-1'><IoAdd size={20} /> Import Directory</p>
                            <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px] flex items-center gap-1'><RiShareBoxLine size={16} /> View Git Repository</p>
                            <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px] flex items-center gap-1'><CiSettings size={20} /> Manage Shared Environment Variables</p>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            <div className='border md:h-[72px] bg-white dark:bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 rounded-[8px] cursor-pointer dark:hover:border-zinc-200 transition-all ease-in duration-150 p-[16px] flex items-start md:items-center justify-between shadow-sm hover:shadow-md'>
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
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-60 flex-1">
                        <div className="flex items-center gap-3">
                            <div className="p-2 border rounded-full w-fit border-zinc-200 dark:border-zinc-800 bg-black text-white">
                                <IoLogoVercel />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-sm font-semibold hover:underline">{title.toLowerCase()}</h2>
                                <p className="text-sm text-zinc-500 hover:underline">{live}</p>
                            </div>
                        </div>
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
                    </div>
                </Link>
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
        </div>
    )
}