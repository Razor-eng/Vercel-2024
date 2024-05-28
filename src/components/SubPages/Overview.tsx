/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiArrowDownSLine } from 'react-icons/ri'
import React, { useEffect, useState } from 'react'
import GridCardSkeleton from '../Skeleton/GridCardSkeleton'
import ProjectGridCard from '../Card/ProjectGridCard'
import ProjectListCard from '../Card/ProjectListCard'
import Button from '../Buttons/Button'
import { IoAdd, IoList, IoSearch } from "react-icons/io5";
import { MdGridView } from "react-icons/md";
import AddModal from "../Modal/AddModal";
import AddProjectModal from "../Modal/AddProjectModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";

type Props = {
    loading?: boolean,
    userName: string,
    email: string
}

export default function Overview({ loading, userName, email }: Props) {
    const [page, setPage] = useState(6);
    const [selectedView, setSelectedView] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [addNew, setAddNew] = useState(false);
    const [sortby, setSortby] = useState('activity')
    const [Projects, setProjects] = useState<any>([]);

    const fetchData = async () => {
        setProjects([]);
        (await getDocs(collection(db, 'projects'))).docs.sort((a, b) => (sortby === 'activity' ? b.data().addedOn - a.data().addedOn : a.data().projectName.localeCompare(b.data().projectName))).filter((project: any) => {
            return project.data().projectName.toLowerCase().includes(searchTerm.toLowerCase())
        }).map(data => {
            setProjects((prev: any) => [...prev, data.data()])
        })
    }

    useEffect(() => {
        fetchData();
    }, [sortby, searchTerm])

    const setOpen = () => {
        setAddNew(false);
    }
    const TopIcons = [
        { icon: MdGridView }, { icon: IoList }
    ]

    return (
        <div className="bg-[#FAFAFA] flex-1 dark:bg-black md:py-[24px] py-4 md:px-20 px-3">
            <section className='h-[40px] w-full bg-transparent flex gap-3 items-center'>
                <div className="bg-white w-full lg:w-[68%] rounded-[6px] border border-zinc-200 dark:border-zinc-800 h-full items-center flex dark:bg-[#0A0A0A] focus-within:ring-1 ring-black dark:ring-white">
                    <div className="px-[12px]">
                        <IoSearch size={20} className='text-zinc-500' />
                    </div>
                    <input type="text" placeholder='Search Repositories and Projects...' className='w-full text-sm pr-[12px] outline-none placeholder-zinc-500 border-none bg-transparent' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="bg-white dark:bg-[#0A0A0A] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all ease-in duration-100 cursor-pointer rounded-[6px] text-sm px-3 border border-zinc-200 dark:border-zinc-800 h-full w-44 hidden lg:flex items-center justify-between gap-7 font-[500]">
                            Sort by {sortby}
                            <RiArrowDownSLine size={15} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-2 dark:bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 rounded-[7px] w-44">
                        <DropdownMenuCheckboxItem
                            checked={sortby === 'activity'}
                            onClick={() => setSortby('activity')}
                            className="hover:bg-zinc-800 rounded-[7px] cursor-pointer"
                        >
                            Sort by activity
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={sortby === 'name'}
                            onClick={() => setSortby('name')}
                            className="hover:bg-zinc-800 rounded-[7px] cursor-pointer"
                        >
                            Sort by name
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="bg-white dark:bg-[#0A0A0A] transition-all ease-in duration-100 cursor-pointer rounded-[6px] text-sm p-1 border border-zinc-200 dark:border-zinc-800 h-full w-fit hidden lg:flex items-center">
                    {TopIcons.map((Icon, id) => (
                        <div
                            key={id}
                            className={`${selectedView === id ? 'dark:bg-zinc-800 bg-zinc-300 text-black dark:text-white' : 'text-zinc-500'} hover:text-black dark:hover:text-white  bg-transparent transition-all ease-in duration-100 py-2 px-3 rounded-[2px]`}
                            onClick={() => setSelectedView(id)}
                        >
                            <Icon.icon size={18} />
                        </div>
                    ))}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className='flex-1 hidden lg:flex items-center justify-center gap-4 hover:opacity-80 dark:bg-zinc-100 bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 text-white dark:text-black transition-all ease-in duration-150 border-2 text-[14px] rounded-[7px] py-3 font-[500]'>
                            Add New...
                            <RiArrowDownSLine size={15} />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-fit text-sm font-[500] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[8px] py-2 mt-2">
                        <AddProjectModal userName={userName} fetchData={fetchData} />
                        <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px]'>Domain</p>
                        <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px]'>Store</p>
                        <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px]'>Team Member</p>
                    </DropdownMenuContent>
                </DropdownMenu>
                <button
                    className='flex lg:hidden items-center justify-center gap-4 hover:opacity-80 dark:bg-zinc-100 bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 text-white dark:text-black transition-all ease-in duration-150 border-2 text-[14px] rounded-[7px] p-2 font-[500]'
                    onClick={() => setAddNew(true)}
                >
                    <IoAdd size={23} />
                </button>
            </section>
            <section className='flex-1 my-5 md:my-8'>
                {!selectedView ?
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-5">
                        {Projects.map((project: any, id: number) => id < page && (
                            <>
                                {loading ?
                                    <GridCardSkeleton key={id} />
                                    :
                                    <ProjectGridCard key={id} userName={project.addedBy} title={project?.projectName} days={'5d'} live={project?.projectLink} email={email} />
                                }
                            </>
                        ))}
                    </div>
                    :
                    <div className="grid grid-cols-1 gap-6">
                        {Projects.map((project: any, id: number) => (
                            <ProjectListCard userName={project.addedBy} title={project?.projectName} days={'5d'} live={project?.projectLink} email={email} key={id} />
                        ))}
                    </div>
                }
            </section>
            {Projects.length > 6
                && (
                    page > Projects.length ?
                        <div className="w-full"
                            onClick={() => setPage(page - 6)}
                        >
                            <Button title='Load Less' className='mt-5' />
                        </div>
                        :
                        <div className="w-full"
                            onClick={() => setPage(page + 6)}
                        >
                            <Button title='Load More' className='mt-5' />
                        </div>
                )
            }
            {(searchTerm && Projects.length == 0) &&
                <div className="flex flex-col gap-6 text-sm items-center justify-center mt-20">
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="font-semibold">No Results Found</h2>
                        <p className="text-zinc-500">Your search for {`"${searchTerm}"`} did not return any results</p>
                    </div>
                    <p className="text-blue-500 hover:underline cursor-pointer transition-all ease-in duration-100 underline-offset-4" onClick={() => setSearchTerm('')}>New Project</p>
                </div>
            }
            <AddModal open={addNew} setOpen={setOpen} />
        </div>
    )
}