import React from 'react'
import NotFound from '../SubPages/NotFound'

type Props = {
    loading: boolean,
    topicId: number,
    Topics: any,
    userName: string,
    email: string
}

export default function Main({ loading, topicId, Topics, userName, email }: Props) {
    return (
        <div className='flex-1 flex flex-col'>
            {Topics.map((topic: any, id: number) => id === topicId && (
                topic.page ?
                    <topic.page key={id} loading={loading} userName={userName} email={email} />
                    :
                    <NotFound />
            ))}
        </div>
    )
}