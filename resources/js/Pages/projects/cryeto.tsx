import { Head } from "@inertiajs/react";
import Navigation from "../components/cryeto/Navigation";
import { useEffect, useRef, useState } from "react";
import CryptoGraph from "../components/cryeto/CryptoGraph";

export default function Cryeto(): JSX.Element
{
    const [showBg, setShowBg] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
    })


    const handleScroll = () => {
        if (containerRef.current) {
            const scrollTop = containerRef.current.scrollTop;
            const value = isMobile ? 10 : 100;
            setShowBg(scrollTop > value);
        }
    };

    return (
        <div
            ref={containerRef}
            className="font-kanit max-h-screen bg-grid text-neutral-400 bg-neutral-950 overflow-y-scroll overflow-x-hidden hide-scroll"
            onScroll={handleScroll}
        >
            <Head title="Cryeto" />
            <div className="min-h-screen">
                <header className="w-full bg-cryeto-gradient">
                    <Navigation showBg={showBg} />

                    <section className="max-w-6xl mx-auto p-4 pt-32 md:pt-40 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="font-semibold text-neutral-500 uppercase">keep your money safe !</p>
                            <div className="font-bold text-5xl">
                                <p className="text-gradient">Best crypto</p>
                                <p className="text-lime-400">investing platform</p>
                                <p className="text-gradient-rev">for your future.</p>
                            </div>
                            <div className="flex items-center max-w-80 mt-10">
                                <div className="h-12 w-full ps-5 flex">
                                    {[1,2,3,4,5,6].map((i) => (
                                        <img src={`/images/avatars/${i}.png`} key={i} alt={`avatar-${i}`} 
                                            className="size-12 rounded-full -ml-5 border-neutral-400 border-2"
                                            />
                                    ))}
                                </div>
                                <div>
                                    <p className="text-2xl font-semibold shrink-0">168K+</p>
                                    <p className="text-neutral-500 text-xs whitespace-nowrap">Realtime Users</p>
                                </div>
                            </div>
                            <div className="mt-10 flex gap-10 ">
                                <div className="flex items-center">
                                    <div className="rounded-full size-12 border border-lime-400" />
                                    <div className="rounded-full size-12 center bg-lime-400 text-black -ml-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7L7 17M8 7h9v9"/></svg>
                                    </div>
                                </div>
                                <div className="text-neutral-500 text-xs leading-5">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error minima nostrum pariatur! Asperiores amet inventore nesciunt dolorum delectus veritatis hic adipisci eligendi.
                                </div>
                            </div>
                        </div>

                        <div className="center relative pb-10 h-full">
                            <div className="rounded-3xl relative z-10 bg-neutral-950 bg-cryeto-gradient-full">
                                <img src="/images/phone.png" alt="phone" />
                            </div>
                            <div className="absolute h-28 -bottom-5 md:-bottom-2 w-full rounded-[0%] blur-md bg-cryeto-gradient-full"></div>
                        </div>
                    </section>
                </header>
                <main className="py-16 relative">
                    <section className="max-w-6xl mx-auto p-4 z-10 relative" id="service">
                        <div className="p-4 z-10">
                            <div className="absolute size-72 mt-20 blur-2xl bg-cryeto-gradient-full opacity-25 rounded-full z-10 bg-white" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="text-4xl font-semibold">
                                <span>Your </span> <span className="text-lime-400">trusted </span><span className="text-gradient">partner of crytocurrency.</span>
                            </div>
                            <div className="text-neutral-500 text-sm md:max-w-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde nemo nostrum placeat possimus, est facere debitis at nesciunt delectus inventore, iste rem error magni dignissimos soluta, sapiente dolor sit!
                            </div>
                        </div>
                        <div className="mt-16 grid sm:grid-cols-3 items-end">
                            <div className="w-full h-64 border rounded-t-xl sm:rounded-tr-none sm:rounded-l-2xl p-4 bg-neutral-800/40 backdrop-blur-2xl border-neutral-800 shadow-md">
                                <p className="text-lime-400 font-semibold text-xl">01.</p>
                                <p className="text-neutral-300 leading-5 mt-5 font-semibold text-lg">Services for Any<br />Level of Expertise.</p>
                            </div>

                            <div className="w-full min-h-80 sm:rounded-t-2xl p-4 text-black bg-lime-400">
                                <p className="font-semibold text-xl">02.</p>
                                <p className="leading-5 mt-5 font-semibold text-lg">Industry<br />best practices.</p>
                                <div className="mt-7 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore ad consequatur explicabo commodi veritatis hic perferendis</div>
                                <a href="" className="inline-flex items-center gap-1 mt-7 hover:text-neutral-900 transition-colors group">
                                    Learn more 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z"/></g></svg>
                                </a>
                            </div>

                            <div className="w-full h-64 border rounded-b-xl sm:rounded-bl-none sm:rounded-r-2xl bg-neutral-800/40 p-4 backdrop-blur-2xl border-neutral-800 shadow-md">
                                <p className="text-lime-400 font-semibold text-xl">03.</p>
                                <p className="text-neutral-300 leading-5 mt-5 font-semibold text-lg">Protected<br />by insurance.</p>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-6xl mx-auto p-4 mt-10 relative">
                        <div className="p-4 z-10 w-full">
                            <div className="absolute size-72 mt-20 blur-2xl bg-cryeto-gradient-full opacity-25 rounded-full z-10 bg-white" />
                            <div className="absolute -right-32 -top-40 size-72 mt-20 blur-2xl bg-cryeto-gradient-full opacity-25 rounded-full z-10 bg-white" />
                        </div>
                        <div className="relative z-10 grid md:grid-cols-2" >
                            {/* <CryptoGraph /> */}
                            <div id="stats" />
                            <div id="ask-question">
                               <div className="text-4xl font-semibold max-w-sm">
                                    <span className="text-gradient">Trusted </span>
                                    <span className="text-lime-400">platform </span>
                                    <span className="text-gradient">anytime & anywhere.</span>
                               </div>
                                <div className="text-xs tracking-[0.5em] mr-1 mt-4">★ ★ ★ ★</div>
                                <div className="text-sm text-neutral-500 mt-4">
                                    This is a unites and secures a <span className="text-neutral-200">growing ecosystem</span> of specialized blockchains called parachains. Apps and services om Polkadot can ecosystem of specialized called.
                                </div>
                                <div className="text-sm text-neutral-500 mt-4">
                                    Polkadot <span className="text-neutral-200">unites and secures a growing ecosvstem</span> of specialized blockchains called parachains. Apps and services
                                </div>
                                <div className="flex items-center gap-5 mt-10">
                                    <a href="" className="inline-flex items-center gap-1 rounded-lg px-6 p-2 text-sm text-black font-semibold bg-lime-400">
                                        Learn more 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z"/></g></svg>
                                    </a>
                                    <p className="text-neutral-500">Ask question ?</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="border-t text-center p-4 text-xs border-neutral-700 mt-10">
                    &copy 2024
                </footer>
            </div>
        </div>
    );
}
