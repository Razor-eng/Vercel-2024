"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Integrations from "@/components/SubPages/Integrations";
import Overview from "@/components/SubPages/Overview";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type props = {
    userName: string
    email: string
}

export default function Dashboard({ userName, email }: props) {
    const Topics = [
        { title: 'Overview', page: Overview },
        { title: 'Integrations', page: Integrations },
        { title: 'Activity' },
        { title: 'Domains' },
        { title: 'Usage' },
        { title: 'Monitoring' },
        { title: 'Storage' },
        { title: 'AI' },
        { title: 'Settings' },
    ]

    const [topic, setTopic] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        toast.loading('Fetching to load...')
        function randomInteger(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        setTimeout(() => {
            toast.dismiss();
            setTimeout(() => {
                toast.success('Fetching Successfull...');
                setLoading(false);
            }, 500);
        }, randomInteger(1000, 3000));
    }, [])

    return (
        <div className="min-h-screen w-screen flex flex-col">
            <Header userName={userName.toLowerCase().split('-').join('')} HeaderItems={Topics} setTopic={setTopic} selected={topic} email={email} />
            <Main userName={userName} Topics={Topics} loading={loading} topicId={topic} email={email} />
            <Footer loading={loading} />
        </div>
    );
}
