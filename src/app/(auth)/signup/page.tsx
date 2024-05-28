"use client";
import Footer from '@/components/Footer/Footer'
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import { CiShare1 } from 'react-icons/ci';
import { FaBitbucket, FaGithub, FaGitlab } from 'react-icons/fa';
import Header from '../components/AuthHeader/Header';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '@/app/firebase';
import { useRouter } from 'next/navigation';
import { IoClose } from 'react-icons/io5';
import { addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';

type Props = {}

export default function Signup({ }: Props) {
    const Buttons = [
        { icon: FaGithub, name: 'GitHub', color: '#555555' },
        { icon: FaGitlab, name: 'GitLab', color: '#6B4FBB' },
        { icon: FaBitbucket, name: 'Bitbucket', color: '#0052CC' }
    ]
    const router = useRouter();

    const [alert, setAlert] = useState(false);
    const [selected, setSelected] = useState('');
    const [name, setName] = useState('');
    const [next, setNext] = useState(false);
    const [signup, setSignup] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkName = () => {
        if (name.length > 4 && !name.includes(' ') && !name.match(/^[^a-zA-Z0-9]+$/)) {
            setAlert(false);
            setNext(true)
        }
        else
            setAlert(true);
    }

    const submit = async (e: any) => {
        e.preventDefault();
        toast.loading('Creating an account...!');

        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name
                    }).then(async () => {
                        await addDoc(collection(db, 'users'), {
                            userName: user.displayName,
                            email: user.email
                        });
                    });
                }).then(() => {
                    toast.dismiss();
                    toast.success('Account Created')
                    router.push("/login")
                })
        } catch (error: any) {
            setTimeout(() => {
                toast.dismiss();
                toast.error(error.message);
            }, 1000);
        }
    }

    return (
        <div className='h-screen flex flex-col w-screen dark:bg-black'>
            <Header />
            <section className='flex-1 flex flex-col items-center justify-center'>
                {alert &&
                    <div className={`bg-yellow-50 border group border-yellow-200 text-sm text-yellow-800 rounded-[8px] p-2 md:p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500 mb-6 w-full md:w-[450px] ${alert ? 'opacity-100' : 'opacity-0'}`} role="alert">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                    <path d="M12 9v4"></path>
                                    <path d="M12 17h.01"></path>
                                </svg>
                            </div>
                            <div className="ms-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold">
                                        Cannot continue anymore
                                    </h3>
                                    <IoClose size={20} className='group-hover:block hidden hover:scale-110 cursor-pointer transition-all ease-in duration-150' onClick={() => setAlert(false)} />
                                </div>
                                <div className="mt-1 text-sm text-yellow-700">
                                    Name cannot contain spaces{`(" ")`} or any special characters (@.#,&)
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {signup ?
                    <section className='flex-1 flex items-center justify-center w-screen dark:bg-[#0A0A0A]'>
                        <div className="flex flex-col items-center justify-center gap-3 w-[370px]">
                            <h2 className="text-3xl font-semibold text-center">SignUp to Vercel</h2>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <label htmlFor="email" className='font-[500]'>Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your Email" className='rounded-[7px] border py-2 px-2 border-zinc-300 dark:border-zinc-700 focus:outline focus:outline-blue-500' />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <label htmlFor="password" className='font-[500]'>Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your Password" className='rounded-[7px] border py-2 px-2 border-zinc-300 dark:border-zinc-700 focus:outline focus:outline-blue-500' />
                            </div>
                            <button onClick={submit} className='flex items-center justify-center gap-4 mt-8 hover:opacity-80 dark:bg-zinc-100 bg-[#0A0A0A] border-zinc-200 dark:border-zinc-800 text-white dark:text-black transition-all ease-in duration-150 border-2 text-[14px] rounded-[7px] py-3 w-full font-[500]'>
                                Register
                            </button>
                        </div>
                    </section>
                    :
                    <>
                        {next ?
                            <div className='flex flex-col items-center gap-16'>
                                <div className="md:w-[350px] w-full px-2 md:px-0 gap-8 flex flex-col">
                                    <h2 className="text-3xl font-semibold text-center">{`Let's`} connect Git provider</h2>
                                    <div className="flex flex-col gap-2 items-start">
                                        {Buttons.map((btn, id) => (
                                            <button key={id} style={{ backgroundColor: `${btn.color}` }} className="text-white outline-none font-semibold hover:opacity-80 cursor-pointer rounded-[7px] transition-all ease-in duration-100 disabled:bg-zinc-300 disabled:dark:bg-zinc-800 disabled:hover:opacity-100 disabled:cursor-not-allowed disabled:text-zinc-500 dark:disabled:text-zinc-500 w-full justify-center py-4 md:py-3 flex items-center gap-1" onClick={() => setSignup(true)}>
                                                <btn.icon size={23} /> Continue with {btn.name}
                                            </button>
                                        ))}
                                        <button onClick={() => setSignup(true)} className="flex items-center justify-center w-full mt-5 gap-1 text-blue-500 hover:underline outline-none">Continue with Email <ArrowRight size={18} /></button>
                                    </div>
                                </div>
                                <p className="text-zinc-500 px-2 md:px-0 text-sm font-[500] flex flex-wrap gap-1 w-fit">
                                    By joining, you agree to our <span className='text-black dark:text-white flex items-center gap-1'>Terms of Service <CiShare1 /></span> and <span className='text-black dark:text-white flex items-center gap-1'>Privacy Policy <CiShare1 /></span>
                                </p>
                            </div>
                            :
                            <div className="md:w-[450px] w-full px-2 md:px-0 gap-8 flex flex-col">
                                <h2 className="text-3xl font-semibold text-center">Create your account</h2>
                                <div className="flex flex-col gap-2 items-start">
                                    <p className="text-zinc-500 text-sm">Plan Type</p>
                                    <div className={`flex items-center justify-between rounded-[7px] border ${selected === 'Hobby' ? 'border-blue-500' : 'border-zinc-200 dark:border-zinc-800'} p-3 w-full cursor-pointer hover:bg-zinc-200 hover:dark:bg-zinc-800 transition-all ease-in duration-100`} onClick={() => setSelected('Hobby')}>
                                        <div className="flex flex-col">
                                            <h2 className="">Hobby</h2>
                                            <p className="text-zinc-500 text-sm">{`I'm`} working on personal projects</p>
                                        </div>
                                        <input checked={selected === 'Hobby'} type="radio" className="shrink-0 w-4 h-4 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-neutral-800 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                    </div>
                                    <div className={`flex items-center justify-between rounded-[7px] border ${selected === 'Pro' ? 'border-blue-500' : 'border-zinc-200 dark:border-zinc-800'} p-3 w-full cursor-pointer hover:bg-zinc-200 hover:dark:bg-zinc-800 transition-all ease-in duration-100`} onClick={() => setSelected('Pro')}>
                                        <div className="flex flex-col">
                                            <h2 className="">Pro</h2>
                                            <p className="text-zinc-500 text-sm">{`I'm`} working on Commercial projects</p>
                                        </div>
                                        <input checked={selected === 'Pro'} type="radio" className="shrink-0 w-4 h-4 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-neutral-800 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className={`flex flex-col gap-2 items-start ${selected ? 'opacity-100' : 'opacity-0 h-0'}`}>
                                        <p className="text-zinc-500 text-sm">
                                            {selected === 'Hobby' ? 'Your' : 'Team'} Name
                                        </p>
                                        <input
                                            type="text"
                                            className={`md:w-[450px] w-full rounded-[7px] py-2 px-3 border border-zinc-200 dark:border-zinc-800 focus:ring-1 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all ease-in duration-100`}
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <button onClick={checkName} className="border border-zinc-200 dark:border-zinc-800 bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-80 cursor-pointer rounded-[7px] transition-all ease-in duration-100 disabled:bg-zinc-300 disabled:dark:bg-zinc-800 disabled:hover:opacity-100 disabled:cursor-not-allowed disabled:text-zinc-500 dark:disabled:text-zinc-500 py-3" disabled={name === ''}>Continue</button>
                                </div>
                            </div>
                        }
                    </>
                }
            </section>
            <Footer loading={true} />
        </div>
    )
}