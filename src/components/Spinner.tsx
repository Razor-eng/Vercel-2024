import React from 'react'
import { ThreeDots } from "react-loader-spinner";

type Props = {}

export default function Spinner({ }: Props) {
    return (
        <div className="w-screen h-screen z-[1000] overflow-hidden bg-white dark:bg-black flex items-center justify-center">
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#898d89"
                radius="9"
                ariaLabel="three-dots-loading"
            />
        </div>
    )
}