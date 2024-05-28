"use client";
import React, { useState } from 'react'
import { MdGridView } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import { IoList } from 'react-icons/io5';

type Props = {
    open: Boolean,
    setOpen: () => void
}

export default function ViewModal({ open, setOpen }: Props) {
    const [selectedSort, setSelectedSort] = useState(0);
    const [selectedView, setSelectedView] = useState(0);

    const Sorts = [
        { title: 'Sort by activity' },
        { title: 'Sort by name' },
    ]
    const Views = [
        { icon: MdGridView, title: 'Grid View' },
        { icon: IoList, title: 'List View' },
    ]

    return (
        <div className={`h-screen w-screen overflow-hidden absolute top-0 left-0 transition-all ease-in duration-150 ${open ? 'flex' : 'hidden'} dark:text-black`}>
            <div className="bg-black bg-opacity-40 flex-1 w-full" onClick={setOpen}></div>
            <div className="h-56 w-full rounded-t-[6px] p-4 bg-white fixed bottom-0">
                <div className="flex gap-6 flex-col py-2 pb-4 border-b">
                    {Sorts.map((sort, id) => (
                        <div
                            key={id}
                            className="font-[400] flex items-center justify-between"
                            onClick={() => setSelectedSort(id)}
                        >
                            {sort.title}
                            <FaCheck className={`${selectedSort === id ? 'opacity-100' : 'opacity-0'} transition-all ease-in delay-100`} />
                        </div>
                    ))}
                </div>
                <div className="flex gap-6 flex-col py-2 pt-4">
                    {Views.map((view, id) => (
                        <div
                            key={id}
                            className="font-[400] flex items-center justify-between"
                            onClick={() => setSelectedView(id)}
                        >
                            <div className="flex items-center gap-2">
                                <view.icon />
                                {view.title}
                            </div>
                            <FaCheck className={`${selectedView === id ? 'opacity-100' : 'opacity-0'} transition-all ease-in delay-100`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}