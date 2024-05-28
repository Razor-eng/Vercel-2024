export default function GridCardSkeleton() {
    return (
        <div className='border min-h-[176px] bg-white dark:bg-transparent border-zinc-200 dark:border-zinc-800 rounded-[8px] cursor-pointer dark:hover:border-zinc-200 transition-all ease-in duration-150 p-6 shadow-sm hover:shadow-md'>
            <div className="animate-pulse duration-700 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 border rounded-full border-zinc-200 dark:border-zinc-800 dark:bg-zinc-500 bg-zinc-400">
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-sm font-semibold hover:underline w-28 h-5 dark:bg-zinc-500 bg-zinc-400 rounded-full">
                            </h2>
                            <p className="text-sm text-zinc-500 hover:underline w-48 md:w-60 h-5 dark:bg-zinc-500 bg-zinc-400 rounded-full">
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="border-[3px] border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-700 rounded-full h-10 w-10 dark:bg-zinc-500 bg-zinc-400">
                        </div>
                        <div className="h-5 w-8 dark:bg-zinc-500 bg-zinc-400 rounded-full"></div>
                    </div>
                </div>
                <div className="dark:bg-zinc-500 bg-zinc-400 w-40 h-5 rounded-full">
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-zinc-500 hover:underline w-20 h-5 dark:bg-zinc-500 bg-zinc-400 rounded-full">
                    </p>
                    <div className="flex gap-1 rounded-full w-32 h-5 dark:bg-zinc-500 bg-zinc-400">
                    </div>
                </div>
            </div>
        </div>
    )
}