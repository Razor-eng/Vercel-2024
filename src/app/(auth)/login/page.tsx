"use client";
import Footer from '@/components/Footer/Footer';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import { GoPasskeyFill } from 'react-icons/go';
import { FaBitbucket, FaGithub, FaGitlab, FaLock } from 'react-icons/fa';
import Header from '../components/AuthHeader/Header';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type Props = {}

export default function Login({ }: Props) {
    const Buttons = [
        { icon: FaGithub, name: 'GitHub', color: '#555555' },
        { icon: FaGitlab, name: 'GitLab', color: '#6B4FBB' },
        { icon: FaBitbucket, name: 'Bitbucket', color: '#0052CC' }
    ]

    const router = useRouter();

    const [next, setNext] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goNext = () => {
        setNext(true);
    }

    const submit = (e: any) => {
        e.preventDefault();
        toast.loading('Signing in...!');

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setTimeout(() => {
                    toast.dismiss();
                    router.push("/")
                    toast.success('Signed in...')
                }, 1000);
            }).catch((error: any) => {
                setTimeout(() => {
                    toast.dismiss();
                    toast.error(error.message);
                }, 1000);
            })
    }

    return (
        <div className='h-fit flex flex-col w-screen dark:bg-black'>
            <div className="min-h-screen flex flex-col">
                <Header />
                {next ?
                    <section className='flex-1 flex items-center justify-center dark:bg-[#0A0A0A]'>
                        <div className="flex flex-col items-center justify-center gap-3  w-[370px]">
                            <h2 className="text-3xl font-semibold text-center">Login to Vercel</h2>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <label htmlFor="email" className='font-[500]'>Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your Email" className='rounded-[7px] border py-2 px-2 border-zinc-300 dark:border-zinc-700 focus:outline focus:outline-blue-500' />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <label htmlFor="password" className='font-[500]'>Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your Password" className='rounded-[7px] border py-2 px-2 border-zinc-300 dark:border-zinc-700 focus:outline focus:outline-blue-500' />
                            </div>
                            <button onClick={submit} className='flex items-center justify-center gap-4 mt-8 hover:opacity-80 dark:bg-zinc-100 bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 text-white dark:text-black transition-all ease-in duration-150 border-2 text-[14px] rounded-[7px] py-3 w-full font-[500]'>
                                Login
                            </button>
                        </div>
                    </section>
                    :
                    <section className='flex-1 flex items-center justify-center dark:bg-[#0A0A0A]'>
                        <div className='flex flex-col items-center gap-16'>
                            <div className="w-[350px] gap-8 flex flex-col">
                                <h2 className="text-3xl font-semibold text-center">Login to Vercel</h2>
                                <div className="flex flex-col gap-2 items-start border-b border-zinc-200 dark:border-zinc-800 pb-4">
                                    {Buttons.map((btn, id) => (
                                        <button
                                            key={id}
                                            style={{ backgroundColor: `${btn.color}` }}
                                            className="text-white outline-none font-semibold hover:opacity-80 cursor-pointer rounded-[7px] transition-all ease-in duration-100 disabled:bg-zinc-300 disabled:dark:bg-zinc-800 disabled:hover:opacity-100 disabled:cursor-not-allowed disabled:text-zinc-500 dark:disabled:text-zinc-500 w-full justify-center py-3 flex items-center gap-1"
                                            onClick={goNext}
                                        >
                                            <btn.icon size={23} /> Continue with {btn.name}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button
                                        className="border-zinc-100 dark:border-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 hover:dark:bg-zinc-900 hover:text-black dark:hover:text-white transition-all ease-in duration-100 border-2 text-[16px] rounded-[7px] w-full py-4 font-[500] flex items-center justify-center gap-3"
                                        onClick={goNext}
                                    >
                                        <FaLock size={20} />Continue with SAML SSO
                                    </button>
                                    <button
                                        className="border-zinc-100 dark:border-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 hover:dark:bg-zinc-900 hover:text-black dark:hover:text-white transition-all ease-in duration-100 border-2 text-[16px] rounded-[7px] w-full py-4 font-[500] flex items-center justify-center gap-3"
                                        onClick={goNext}
                                    >
                                        <GoPasskeyFill size={20} />Login with Passkey
                                    </button>
                                </div>
                                <button
                                    className="flex items-center justify-center w-full mt-5 gap-1 text-blue-500 hover:underline outline-none"
                                    onClick={goNext}
                                >
                                    Continue with Email <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </section>
                }
                <section className='w-full h-20 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-center'>
                    <p className="text-blue-500">{`Don't`} have an account? <Link href={'/signup'}><span className='hover:underline hover:opacity-80 cursor-pointer transition-all ease-in duration-100'>Sign Up</span></Link></p>
                </section>
            </div>
            <Footer loading={true} />
        </div>
    )
}