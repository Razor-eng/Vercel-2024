import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import Button from '../Buttons/Button'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/app/firebase';
import toast from 'react-hot-toast';

type Props = {
    userName: string,
    fetchData: () => void
}

export default function AddProjectModal({ userName, fetchData }: Props) {
    const [projectName, setProjectName] = useState('');
    const [projectLink, setProjectLink] = useState('');

    const submit = async () => {
        toast.loading('Adding a project!')

        await addDoc(collection(db, 'projects'), {
            projectName: projectName,
            projectLink: projectLink,
            addedBy: userName,
            addedOn: Date.now()
        }).then(() => {
            toast.dismiss();
            toast.success('Project Added');
            fetchData();
        }).catch(error => {
            toast.dismiss();
            toast.error(error.message);
        }).finally(() => {
            setProjectName('');
            setProjectLink('');
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <p className='transition-all ease-in duration-150 cursor-pointer hover:bg-zinc-100 hover:dark:bg-zinc-800 py-2 px-2 rounded-[4px]'>Project</p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] h-[50%] bg-white dark:bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800">
                <DialogHeader>
                    <DialogTitle>Add Project</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-10 sm:gap-4 py-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-left">
                            Project Name
                        </label>
                        <input value={projectName} onChange={e => setProjectName(e.target.value)} type='text' className="rounded-[7px] py-2 px-3 border border-zinc-300 dark:border-zinc-700" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-left">
                            Project Link
                        </label>
                        <input value={projectLink} onChange={e => setProjectLink(e.target.value)} type='text' className="rounded-[7px] py-2 px-3 border border-zinc-300 dark:border-zinc-700" />
                    </div>
                </div>
                <DialogFooter>
                    <div className="w-full" onClick={submit}>
                        <Button title='Add Project' className='!bg-black text-white dark:text-black dark:!bg-white' />
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}