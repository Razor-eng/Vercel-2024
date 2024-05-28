type Props = {
    open: Boolean,
    setOpen: () => void
}

export default function AddModal({ open, setOpen }: Props) {
    return (
        <div className={`h-screen w-screen overflow-hidden absolute top-0 left-0 transition-all ease-in duration-150 ${open ? 'flex' : 'hidden'} dark:text-black`}>
            <div className="bg-black bg-opacity-40 flex-1 w-full" onClick={setOpen}></div>
            <div className="h-56 w-full rounded-t-[6px] p-4 bg-white fixed bottom-0">
                <div className="flex font-[500] gap-6 flex-col py-2">
                    <p>Project</p>
                    <p>Domain</p>
                    <p>Store</p>
                    <p>Team Member</p>
                </div>
            </div>
        </div>
    )
}